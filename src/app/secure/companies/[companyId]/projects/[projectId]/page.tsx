"use client"

import { useState, useEffect } from "react"
import { useParams, useRouter } from "next/navigation"
import { getCurrentUser } from "@/lib/auth"
import { generateClient } from "@aws-amplify/api"
import { getCompany, getProject, projectMembershipsByProjectID } from "@/graphql/queries"
import { updateProject, deleteProject } from "@/graphql/mutations"
import type * as APITypes from "@/API"
import Link from "next/link"

import { Amplify } from "aws-amplify"
import awsconfig from "@/aws-exports"

// Define interfaces for our data types
interface Company {
    id: string
    name: string
    website?: string | null
}

interface Project {
    id: string
    name: string
    description?: string | null
    startDate?: string | null
    endDate?: string | null
    companyID: string
}

interface ProjectMember {
    id: string
    personID: string
    projectID: string
    roles: string[]
    isActive: boolean
    person?: {
        id: string
        firstName?: string | null
        lastName?: string | null
        email: string
        displayName?: string | null
    } | null
}

interface ProjectFormData {
    name: string
    description: string
    startDate: string
    endDate: string
}

// Helper function to determine project progress status
function getProjectProgress(project: Project) {
    if (!project.startDate) return "Not Set"
    return new Date(project.startDate) > new Date() ? "Not Started" : "In Progress"
}

// Helper function to get progress badge class
function getProgressBadgeClass(progress: string) {
    switch (progress) {
        case "Not Started":
            return "bg-gray-100 text-gray-800"
        case "In Progress":
            return "bg-green-100 text-green-800"
        case "Not Set":
        default:
            return "bg-gray-100 text-gray-800"
    }
}

export default function ProjectDetailsPage() {
    const params = useParams()
    const router = useRouter()
    const companyId = params.companyId as string
    const projectId = params.projectId as string // Updated to use projectId parameter

    // Main state
    const [company, setCompany] = useState<Company | null>(null)
    const [project, setProject] = useState<Project | null>(null)
    const [projectMembers, setProjectMembers] = useState<ProjectMember[]>([])

    // UI state
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)
    const [actionLoading, setActionLoading] = useState(false)

    // Modal state
    const [isEditModalOpen, setIsEditModalOpen] = useState(false)
    const [formData, setFormData] = useState<ProjectFormData>({
        name: "",
        description: "",
        startDate: "",
        endDate: "",
    })

    // Amplify client
    const [client, setClient] = useState<any>(null)
    const [userData, setUserData] = useState<any>(null)

    // Initialize Amplify
    useEffect(() => {
        Amplify.configure(awsconfig)
        setClient(generateClient())
    }, [])

    // Fetch user data
    useEffect(() => {
        async function fetchUserData() {
            try {
                const user = await getCurrentUser()
                setUserData(user)
            } catch (error) {
                console.error("Error fetching user data", error)
                setError("Failed to authenticate user. Please try logging in again.")
            }
        }

        fetchUserData().catch((error) => {
            console.error("Unhandled error in fetchUserData:", error)
            setError("An unexpected error occurred. Please refresh and try again.")
        })
    }, [])

    // Fetch data when user and client are ready
    useEffect(() => {
        if (userData && client && companyId && projectId) {
            fetchInitialData().catch((error) => {
                console.error("Unhandled error in fetchInitialData:", error)
                setError("Failed to load data. Please try again.")
            })
        }
    }, [userData, client, companyId, projectId])

    // Main data fetching function
    async function fetchInitialData() {
        setLoading(true)
        setError(null)

        try {
            // Fetch company data
            await fetchCompanyData()

            // Fetch project data
            await fetchProjectData()

            // Fetch project members
            await fetchProjectMembers()
        } catch (err) {
            console.error("Error fetching initial data:", err)
            setError("Failed to load data. Please try again.")
        } finally {
            setLoading(false)
        }
    }

    // Fetch company details
    async function fetchCompanyData() {
        if (!client) return

        try {
            const response = (await client.graphql({
                query: getCompany,
                variables: { id: companyId },
            })) as { data: APITypes.GetCompanyQuery }

            const companyData = response.data.getCompany
            if (!companyData) {
                setError("Company not found")
                setCompany(null)
            } else {
                setCompany(companyData as Company)
            }
        } catch (err) {
            console.error("Error fetching company:", err)
            throw new Error("Failed to fetch company details")
        }
    }

    // Fetch project details
    async function fetchProjectData() {
        if (!client) return

        try {
            const response = (await client.graphql({
                query: getProject,
                variables: { id: projectId },
            })) as { data: APITypes.GetProjectQuery }

            const projectData = response.data.getProject
            if (!projectData) {
                setError("Project not found")
                setProject(null)
            } else {
                setProject(projectData as Project)

                // Initialize form data for editing
                setFormData({
                    name: projectData.name || "",
                    description: projectData.description || "",
                    startDate: projectData.startDate || "",
                    endDate: projectData.endDate || "",
                })
            }
        } catch (err) {
            console.error("Error fetching project:", err)
            throw new Error("Failed to fetch project details")
        }
    }

    // Fetch project members
    async function fetchProjectMembers() {
        if (!client) return

        try {
            const response = (await client.graphql({
                query: projectMembershipsByProjectID,
                variables: {
                    projectID: projectId,
                    filter: {
                        isActive: { eq: true },
                    },
                    limit: 1000,
                },
            })) as { data: APITypes.ProjectMembershipsByProjectIDQuery }

            const memberships = response.data.projectMembershipsByProjectID?.items || []

            // Transform the API response without additional fetches
            const memberData = memberships
                .filter((item) => item !== null)
                .map((item) => ({
                    id: item!.id,
                    personID: item!.personID,
                    projectID: item!.projectID,
                    roles: (item!.roles?.filter((r) => r !== null) as string[]) || ["MEMBER"],
                    isActive: item!.isActive || false,
                    // We'll create a placeholder person object with just an ID
                    // and then use the API to fetch display info separately
                    person: {
                        id: item!.personID,
                        email: '',
                        displayName: null,
                        firstName: null,
                        lastName: null
                    }
                }))

            setProjectMembers(memberData as ProjectMember[])

            // After setting initial data, fetch person details for each membership
            // This avoids UMD global variable issues with Promise.all
            for (const member of memberData) {
                try {
                    const personResponse = await client.graphql({
                        query: `query GetPerson($id: ID!) {
                          getPerson(id: $id) {
                            id
                            firstName
                            lastName
                            email
                            displayName
                          }
                        }`,
                        variables: { id: member.personID },
                    });

                    if (personResponse.data.getPerson) {
                        // Update the specific member with person data
                        setProjectMembers(prevMembers =>
                            prevMembers.map(m =>
                                m.id === member.id
                                    ? {...m, person: personResponse.data.getPerson}
                                    : m
                            )
                        );
                    }
                } catch (personErr) {
                    console.error("Error fetching person data:", personErr);
                }
            }
        } catch (err) {
            console.error("Error fetching project members:", err)
            throw new Error("Failed to fetch project members")
        }
    }

    // Handle form input changes
    function handleInputChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const { name, value } = e.target
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }))
    }

    // Submit form to update project
    async function handleUpdateProject(e: React.FormEvent) {
        e.preventDefault()
        if (!client || !project) return

        setActionLoading(true)
        try {
            const response = (await client.graphql({
                query: updateProject,
                variables: {
                    input: {
                        id: project.id,
                        name: formData.name,
                        description: formData.description || null,
                        startDate: formData.startDate || null,
                        endDate: formData.endDate || null,
                    },
                },
            })) as { data: APITypes.UpdateProjectMutation }

            const updatedProject = response.data.updateProject
            if (updatedProject) {
                setProject({
                    id: updatedProject.id,
                    name: updatedProject.name || "",
                    description: updatedProject.description,
                    startDate: updatedProject.startDate,
                    endDate: updatedProject.endDate,
                    companyID: updatedProject.companyID,
                } as Project)
            }

            // Close the modal
            setIsEditModalOpen(false)
            setError(null)
        } catch (err) {
            console.error("Error updating project:", err)
            setError("Failed to update project. Please try again.")
        } finally {
            setActionLoading(false)
        }
    }

    // Delete project
    async function handleDeleteProject() {
        if (!client || !project) return

        if (
            !window.confirm("Are you sure you want to delete this project? This will also remove all project memberships.")
        ) {
            return
        }

        setActionLoading(true)
        try {
            await client.graphql({
                query: deleteProject,
                variables: {
                    input: {
                        id: project.id,
                    },
                },
            })

            // Navigate back to projects list
            router.push(`/secure/companies/${companyId}/projects`)
        } catch (err) {
            console.error("Error deleting project:", err)
            setError("Failed to delete project. Please try again.")
        } finally {
            setActionLoading(false)
        }
    }

    // Navigation
    function handleBack() {
        router.push(`/secure/companies/${companyId}/projects`)
    }

    // Format date for display
    function formatDate(dateString: string | null | undefined) {
        if (!dateString) return "Not set"

        try {
            const date = new Date(dateString)
            return date.toLocaleDateString()
        } catch (e) {
            return dateString
        }
    }

    // Get person display name
    function getPersonDisplayName(person: ProjectMember["person"]) {
        if (!person) return "Unknown"
        return person.displayName || `${person.firstName || ""} ${person.lastName || ""}`.trim() || person.email
    }

    // Get role badge class
    function getRoleBadgeClass(role: string) {
        switch (role) {
            case "ADMIN":
                return "bg-purple-100 text-purple-800"
            case "MANAGER":
                return "bg-blue-100 text-blue-800"
            case "MEMBER":
            default:
                return "bg-green-100 text-green-800"
        }
    }

    // Extract the form fields rendering to reduce duplication
    function renderFormFields() {
        return (
            <>
                <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
                        Project Name *
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="description" className="block text-gray-700 text-sm font-bold mb-2">
                        Description
                    </label>
                    <textarea
                        id="description"
                        name="description"
                        value={formData.description}
                        onChange={handleInputChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        rows={4}
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                        <label htmlFor="startDate" className="block text-gray-700 text-sm font-bold mb-2">
                            Start Date
                        </label>
                        <input
                            type="date"
                            id="startDate"
                            name="startDate"
                            value={formData.startDate}
                            onChange={handleInputChange}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>

                    <div>
                        <label htmlFor="endDate" className="block text-gray-700 text-sm font-bold mb-2">
                            End Date
                        </label>
                        <input
                            type="date"
                            id="endDate"
                            name="endDate"
                            value={formData.endDate}
                            onChange={handleInputChange}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                </div>
            </>
        )
    }

    // Loading state
    if (loading && !project) {
        return (
            <div className="container mx-auto px-4 py-8">
                <div className="text-center py-4">Loading project data...</div>
            </div>
        )
    }

    // Error state
    if (error && !project) {
        return (
            <div className="container mx-auto px-4 py-8">
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 mb-4 rounded" role="alert">
                    <p>{error}</p>
                </div>
                <button onClick={handleBack} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Back to Projects
                </button>
            </div>
        )
    }

    return (
        <div className="container mx-auto px-4 py-8">
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
                <div>
                    <div className="flex items-center space-x-2">
                        <h1 className="text-3xl font-bold">{project?.name}</h1>
                        <span
                            className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                                project ? getProgressBadgeClass(getProjectProgress(project)) : ""
                            }`}
                        >
              {project ? getProjectProgress(project) : ""}
            </span>
                    </div>
                    <p className="text-gray-600 mt-1">
                        {company?.name ? `Project at ${company.name}` : "Project Details"}
                    </p>
                </div>
                <div className="flex space-x-4">
                    <Link
                        href={`/secure/companies/${companyId}/projects/${projectId}/scope-item-groups`}
                        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                    >
                        Manage Scope Items
                    </Link>
                    <button
                        onClick={() => setIsEditModalOpen(true)}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        disabled={actionLoading}
                    >
                        Edit Project
                    </button>
                    <button
                        onClick={handleDeleteProject}
                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                        disabled={actionLoading}
                    >
                        Delete Project
                    </button>
                    <button onClick={handleBack} className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
                        Back to Projects
                    </button>
                </div>
            </div>

            {/* Error message */}
            {error && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 mb-4 rounded" role="alert">
                    <p>{error}</p>
                </div>
            )}

            {/* Project Details */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {/* Left Column - Project Info */}
                <div className="md:col-span-2">
                    <div className="bg-white shadow-md rounded p-6">
                        <h2 className="text-xl font-semibold mb-4">Project Information</h2>

                        <div className="mb-4">
                            <h3 className="text-sm font-medium text-gray-500">Description</h3>
                            <p className="mt-1 text-gray-900">
                                {project?.description || <span className="text-gray-500 italic">No description provided</span>}
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <h3 className="text-sm font-medium text-gray-500">Start Date</h3>
                                <p className="mt-1 text-gray-900">{formatDate(project?.startDate)}</p>
                            </div>

                            <div>
                                <h3 className="text-sm font-medium text-gray-500">End Date</h3>
                                <p className="mt-1 text-gray-900">{formatDate(project?.endDate)}</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Column - Project Stats */}
                <div>
                    <div className="bg-white shadow-md rounded p-6">
                        <h2 className="text-xl font-semibold mb-4">Project Stats</h2>

                        <div className="mb-4">
                            <h3 className="text-sm font-medium text-gray-500">Team Size</h3>
                            <p className="mt-1 text-2xl font-semibold text-gray-900">{projectMembers.length} members</p>
                        </div>

                        <div className="mb-4">
                            <h3 className="text-sm font-medium text-gray-500">Timeline</h3>
                            <div className="mt-1">
                                {project?.startDate && project?.endDate ? (
                                    <div className="relative pt-1">
                                        <div className="flex mb-2 items-center justify-between">
                                            <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-blue-200">
                          Progress
                        </span>
                                            </div>
                                            <div className="text-right">
                        <span className="text-xs font-semibold inline-block text-blue-600">
                          {calculateProgress(project.startDate, project.endDate)}%
                        </span>
                                            </div>
                                        </div>
                                        <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-blue-200">
                                            <div
                                                style={{ width: `${calculateProgress(project.startDate, project.endDate)}%` }}
                                                className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"
                                            ></div>
                                        </div>
                                    </div>
                                ) : (
                                    <p className="text-gray-500 italic">Timeline not set</p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Project Members */}
            <div className="bg-white shadow-md rounded overflow-hidden mb-8">
                <div className="flex justify-between items-center p-6 border-b">
                    <h2 className="text-xl font-semibold">Project Members</h2>
                    <Link
                        href={`/secure/companies/${companyId}/projects/${projectId}/members`}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    >
                        Manage Members
                    </Link>
                </div>

                {projectMembers.length === 0 ? (
                    <div className="p-6 text-center text-gray-600">
                        No members assigned to this project yet.
                    </div>
                ) : (
                    <div className="overflow-x-auto">
                        <table className="min-w-full bg-white">
                            <thead>
                            <tr>
                                <th className="px-6 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    Name
                                </th>
                                <th className="px-6 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    Email
                                </th>
                                <th className="px-6 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    Role
                                </th>
                            </tr>
                            </thead>
                            <tbody>
                            {projectMembers.map((member) => (
                                <tr key={member.id}>
                                    <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                                        <Link
                                            href={`/secure/people/${member.personID}`}
                                            className="text-blue-600 hover:text-blue-900"
                                        >
                                            {getPersonDisplayName(member.person)}
                                        </Link>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                                        {member.person?.email || "N/A"}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                                        <div className="flex flex-wrap gap-1">
                                            {member.roles.map((role, index) => (
                                                <span
                                                    key={index}
                                                    className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getRoleBadgeClass(
                                                        role
                                                    )}`}
                                                >
                            {role}
                          </span>
                                            ))}
                                        </div>
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>

            {/* Edit Project Modal */}
            {isEditModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-2xl">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-xl font-bold">Edit Project</h2>
                            <button onClick={() => setIsEditModalOpen(false)} className="text-gray-500 hover:text-gray-700">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        <form onSubmit={handleUpdateProject}>
                            {renderFormFields()}
                            <div className="flex justify-end space-x-4">
                                <button
                                    type="button"
                                    onClick={() => setIsEditModalOpen(false)}
                                    className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    disabled={actionLoading || !formData.name.trim()}
                                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:opacity-50"
                                >
                                    {actionLoading ? "Updating..." : "Update Project"}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    )
}

// Helper function to calculate project progress percentage
function calculateProgress(startDate: string, endDate: string): number {
    const start = new Date(startDate).getTime()
    const end = new Date(endDate).getTime()
    const now = new Date().getTime()

    // If project hasn't started yet
    if (now < start) return 0

    // If project is completed
    if (now > end) return 100

    // Calculate percentage
    const total = end - start
    const elapsed = now - start
    return Math.round((elapsed / total) * 100)
}
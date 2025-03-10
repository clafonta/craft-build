"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useParams, useRouter } from "next/navigation"
import { getCurrentUser } from "@/lib/auth"
import { generateClient } from "@aws-amplify/api"
import { getCompany, listProjects, projectMembershipsByProjectID } from "@/graphql/queries"
import { createProject, updateProject, deleteProject } from "@/graphql/mutations"
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

// Update the Project interface to match the schema (remove status if it's not in the schema)
interface Project {
    id: string
    name: string
    description?: string | null
    startDate?: string | null
    endDate?: string | null
    companyID: string
    memberCount?: number
}

// Update the ProjectFormData to remove status if it's not in the schema
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

export default function CompanyProjectsPage() {
    const params = useParams()
    const router = useRouter()
    const companyId = params.companyId as string

    // Main state
    const [company, setCompany] = useState<Company | null>(null)
    const [projects, setProjects] = useState<Project[]>([])
    const [projectMemberCounts, setProjectMemberCounts] = useState<{ [projectId: string]: number }>({})

    // UI state
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)
    const [actionLoading, setActionLoading] = useState(false)

    // Modal state
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [modalMode, setModalMode] = useState<"add" | "edit">("add")
    const [selectedProject, setSelectedProject] = useState<Project | null>(null)

    // Form state
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

        // Call the async function and handle any errors
        fetchUserData().catch((error) => {
            console.error("Unhandled error in fetchUserData:", error)
            setError("An unexpected error occurred. Please refresh and try again.")
        })
    }, [])

    // Fetch company data when user and client are ready
    useEffect(() => {
        if (userData && client && companyId) {
            // Call the async function and handle any errors
            fetchInitialData().catch((error) => {
                console.error("Unhandled error in fetchInitialData:", error)
                setError("Failed to load data. Please try again.")
            })
        }
    }, [userData, client, companyId])

    // Main data fetching function
    async function fetchInitialData() {
        setLoading(true)
        setError(null)

        try {
            // Fetch company data
            await fetchCompanyData()

            // Fetch projects data
            await fetchProjectsData()
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

    // Fetch projects data
    async function fetchProjectsData() {
        if (!client) return

        try {
            const projectsResponse = (await client.graphql({
                query: listProjects,
                variables: {
                    filter: { companyID: { eq: companyId } },
                    limit: 1000,
                },
            })) as { data: APITypes.ListProjectsQuery }

            const projectItems = projectsResponse.data.listProjects?.items || []

            // Transform API response to match our Project interface
            const projectsData = projectItems
                .filter((item) => item !== null)
                .map((item) => ({
                    id: item!.id,
                    name: item!.name || "Unnamed Project",
                    description: item!.description,
                    startDate: item!.startDate,
                    endDate: item!.endDate,
                    companyID: item!.companyID,
                }))

            setProjects(projectsData as Project[])

            // Fetch member counts for each project
            await fetchProjectMemberCounts(projectsData as Project[])
        } catch (err) {
            console.error("Error fetching projects:", err)
            throw new Error("Failed to fetch projects data")
        }
    }

    // Fetch member counts for projects
    async function fetchProjectMemberCounts(projectsList: Project[]) {
        if (!client || !projectsList.length) return

        const counts: { [projectId: string]: number } = {}

        try {
            // Process in batches to avoid too many concurrent requests
            const batchSize = 10
            for (let i = 0; i < projectsList.length; i += batchSize) {
                const batch = projectsList.slice(i, i + batchSize)

                // Use Promise.all for parallel processing within the batch
                await Promise.all(
                    batch.map(async (project) => {
                        try {
                            const membershipsResponse = (await client.graphql({
                                query: projectMembershipsByProjectID,
                                variables: {
                                    projectID: project.id,
                                    filter: {
                                        isActive: { eq: true },
                                    },
                                    limit: 1000,
                                },
                            })) as { data: APITypes.ProjectMembershipsByProjectIDQuery }

                            const memberships = membershipsResponse.data.projectMembershipsByProjectID?.items || []
                            counts[project.id] = memberships.length
                        } catch (err) {
                            console.error(`Error fetching member count for project ${project.id}:`, err)
                            counts[project.id] = 0
                        }
                    }),
                )
            }

            setProjectMemberCounts(counts)
        } catch (err) {
            console.error("Error fetching project member counts:", err)
        }
    }

    // Open modal for adding a new project
    // In the handleAddProject function, remove status from the form data initialization
    function handleAddProject() {
        setModalMode("add")
        setSelectedProject(null)
        setFormData({
            name: "",
            description: "",
            startDate: "",
            endDate: "",
        })
        setIsModalOpen(true)
    }

    // Open modal for editing an existing project
    // In the handleEditProject function, remove status from the form data
    function handleEditProject(project: Project) {
        setModalMode("edit")
        setSelectedProject(project)
        setFormData({
            name: project.name,
            description: project.description || "",
            startDate: project.startDate || "",
            endDate: project.endDate || "",
        })
        setIsModalOpen(true)
    }

    // Handle form input changes
    function handleInputChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
        const { name, value } = e.target
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }))
    }

    // Submit form to create or update a project
    // Update the handleSubmitProject function to remove status from the input
    async function handleSubmitProject(e: React.FormEvent) {
        e.preventDefault()
        if (!client) return

        setActionLoading(true)
        try {
            if (modalMode === "add") {
                // Create a new project - only include fields defined in the schema
                const response = (await client.graphql({
                    query: createProject,
                    variables: {
                        input: {
                            name: formData.name,
                            description: formData.description || null,
                            startDate: formData.startDate || null,
                            endDate: formData.endDate || null,
                            companyID: companyId,
                        },
                    },
                })) as { data: APITypes.CreateProjectMutation }

                const newProject = response.data.createProject
                if (newProject) {
                    // Add the new project to the state
                    setProjects((prev) => [
                        ...prev,
                        {
                            id: newProject.id,
                            name: newProject.name || "Unnamed Project",
                            description: newProject.description,
                            startDate: newProject.startDate,
                            endDate: newProject.endDate,
                            companyID: newProject.companyID,
                        } as Project,
                    ])

                    // Initialize member count for the new project
                    setProjectMemberCounts((prev) => ({
                        ...prev,
                        [newProject.id]: 0,
                    }))
                }
            } else if (modalMode === "edit" && selectedProject) {
                // Update an existing project
                const response = (await client.graphql({
                    query: updateProject,
                    variables: {
                        input: {
                            id: selectedProject.id,
                            name: formData.name,
                            description: formData.description || null,
                            startDate: formData.startDate || null,
                            endDate: formData.endDate || null,
                        },
                    },
                })) as { data: APITypes.UpdateProjectMutation }

                const updatedProject = response.data.updateProject
                if (updatedProject) {
                    // Update the project in the state
                    setProjects((prev) =>
                        prev.map((p) =>
                            p.id === updatedProject.id
                                ? ({
                                    id: updatedProject.id,
                                    name: updatedProject.name || "Unnamed Project",
                                    description: updatedProject.description,
                                    startDate: updatedProject.startDate,
                                    endDate: updatedProject.endDate,
                                    companyID: updatedProject.companyID,
                                } as Project)
                                : p,
                        ),
                    )
                }
            }

            // Close the modal
            setIsModalOpen(false)
            setError(null)
        } catch (err) {
            console.error("Error submitting project:", err)
            setError(`Failed to ${modalMode === "add" ? "create" : "update"} project. Please try again.`)
        } finally {
            setActionLoading(false)
        }
    }

    // Delete a project
    async function handleDeleteProject(projectId: string) {
        if (!client) return

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
                        id: projectId,
                    },
                },
            })

            // Remove the project from the state
            setProjects((prev) => prev.filter((p) => p.id !== projectId))

            // Remove the project's member count
            setProjectMemberCounts((prev) => {
                const newCounts = { ...prev }
                delete newCounts[projectId]
                return newCounts
            })

            setError(null)
        } catch (err) {
            console.error("Error deleting project:", err)
            setError("Failed to delete project. Please try again.")
        } finally {
            setActionLoading(false)
        }
    }

    // Navigation
    function handleBack() {
        router.push(`/secure/companies/${companyId}`)
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

    // Get status badge class based on status
    // Remove the getStatusBadgeClass function since we're not using status anymore

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
    if (loading && !company) {
        return (
            <div className="container mx-auto px-4 py-8">
                <div className="text-center py-4">Loading company and projects data...</div>
            </div>
        )
    }

    // Error state
    if (error && !company) {
        return (
            <div className="container mx-auto px-4 py-8">
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 mb-4 rounded" role="alert">
                    <p>{error}</p>
                </div>
                <button onClick={handleBack} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Back to Company
                </button>
            </div>
        )
    }

    return (
        <div className="container mx-auto px-4 py-8">
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
                <div>
                    <h1 className="text-3xl font-bold">Projects at {company?.name}</h1>
                    <p className="text-gray-600 mt-1">Manage projects for this company</p>
                </div>
                <div className="flex space-x-4">
                    <button
                        onClick={handleAddProject}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        disabled={actionLoading}
                    >
                        Add Project
                    </button>
                    <button onClick={handleBack} className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
                        Back to Company
                    </button>
                </div>
            </div>

            {/* Error message */}
            {error && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 mb-4 rounded" role="alert">
                    <p>{error}</p>
                </div>
            )}

            {/* Projects List */}
            <div className="bg-white shadow-md rounded overflow-hidden">
                <h2 className="text-xl font-semibold p-6 border-b">Company Projects</h2>

                {loading ? (
                    <div className="text-center py-4">Loading projects...</div>
                ) : projects.length === 0 ? (
                    <div className="p-6 text-center text-gray-600">
                        No projects found for this company. Click "Add Project" to create one.
                    </div>
                ) : (
                    <table className="min-w-full bg-white">
                        <thead>
                        <tr>
                            <th className="px-6 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                Project Name
                            </th>
                            <th className="px-6 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                Description
                            </th>
                            <th className="px-6 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                Timeline
                            </th>
                            <th className="px-6 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                Progress
                            </th>
                            <th className="px-6 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                Members
                            </th>
                            <th className="px-6 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                Actions
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                        {projects.map((project) => (
                            <tr key={project.id}>
                                <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                                    <Link
                                        href={`/secure/companies/${companyId}/projects/${project.id}`}
                                        className="text-blue-600 hover:text-blue-900 font-medium"
                                    >
                                        {project.name}
                                    </Link>
                                </td>
                                <td className="px-6 py-4 border-b border-gray-200">
                                    <div className="max-w-xs truncate">
                                        {project.description || <span className="text-gray-500 italic">No description</span>}
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                                    <div className="text-sm">
                                        <div>Start: {formatDate(project.startDate)}</div>
                                        <div>End: {formatDate(project.endDate)}</div>
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                    <span
                        className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getProgressBadgeClass(getProjectProgress(project))}`}
                    >
                      {getProjectProgress(project)}
                    </span>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                                    <Link
                                        href={`/secure/companies/${companyId}/projects/${project.id}/members`}
                                        className="text-blue-600 hover:text-blue-900"
                                    >
                                        {projectMemberCounts[project.id] || 0} members
                                    </Link>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200 text-sm">
                                    <div className="flex space-x-4">
                                        <button
                                            onClick={() => handleEditProject(project)}
                                            disabled={actionLoading}
                                            className="text-indigo-600 hover:text-indigo-900 disabled:opacity-50"
                                        >
                                            Edit
                                        </button>
                                        <button
                                            onClick={() => handleDeleteProject(project.id)}
                                            disabled={actionLoading}
                                            className="text-red-600 hover:text-red-900 disabled:opacity-50"
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                )}
            </div>

            {/* Project Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-2xl">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-xl font-bold">{modalMode === "add" ? "Add New Project" : "Edit Project"}</h2>
                            <button onClick={() => setIsModalOpen(false)} className="text-gray-500 hover:text-gray-700">
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

                        <form onSubmit={handleSubmitProject}>
                            {renderFormFields()}
                            <div className="flex justify-end space-x-4">
                                <button
                                    type="button"
                                    onClick={() => setIsModalOpen(false)}
                                    className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    disabled={actionLoading || !formData.name.trim()}
                                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:opacity-50"
                                >
                                    {actionLoading
                                        ? modalMode === "add"
                                            ? "Creating..."
                                            : "Updating..."
                                        : modalMode === "add"
                                            ? "Create Project"
                                            : "Update Project"}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    )
}


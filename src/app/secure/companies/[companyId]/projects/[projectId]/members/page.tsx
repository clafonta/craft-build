"use client"

import { useState, useEffect } from "react"
import { useParams, useRouter } from "next/navigation"
import { getCurrentUser } from "@/lib/auth"
import { generateClient } from "@aws-amplify/api"
import {
    getCompany,
    getProject,
    projectMembershipsByProjectID,
    listPeople,
    listPersonCompanies,
} from "@/graphql/queries"
import { createProjectMembership, deleteProjectMembership } from "@/graphql/mutations"
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

interface Person {
    id: string
    firstName?: string | null
    lastName?: string | null
    email: string
    displayName?: string | null
}

export default function ProjectMembersPage() {
    const params = useParams()
    const router = useRouter()
    const companyId = params.companyId as string
    const projectId = params.projectId as string // This will get the second [id] from the URL

    // Main state
    const [company, setCompany] = useState<Company | null>(null)
    const [project, setProject] = useState<Project | null>(null)
    const [projectMembers, setProjectMembers] = useState<ProjectMember[]>([])
    const [availablePeople, setAvailablePeople] = useState<Person[]>([])

    // UI state
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)
    const [actionLoading, setActionLoading] = useState(false)

    // Form state
    const [selectedPersonId, setSelectedPersonId] = useState<string>("")
    const [selectedRole, setSelectedRole] = useState<string>("MEMBER")

    // Amplify client
    const [client, setClient] = useState<any>(null)
    const [userData, setUserData] = useState<any>(null)

    // Role options
    const roleOptions = [
        { value: "MEMBER", label: "Member" },
        { value: "MANAGER", label: "Manager" },
        { value: "ADMIN", label: "Admin" },
    ]

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

            // Fetch available people
            await fetchAvailablePeople()
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

            // Transform API response to match our ProjectMember interface
            const memberData = memberships
                .filter((item) => item !== null)
                .map((item) => ({
                    id: item!.id,
                    personID: item!.personID,
                    projectID: item!.projectID,
                    roles: (item!.roles?.filter((r) => r !== null) as string[]) || ["MEMBER"],
                    isActive: item!.isActive || false,
                    // Use optional chaining to safely access personID instead of person
                    // or fetch person data separately if needed
                    person: {
                        id: item!.personID,
                        firstName: null,
                        lastName: null,
                        email: "loading@example.com", // Placeholder until we fetch the actual data
                        displayName: null,
                    },
                }))

            setProjectMembers(memberData as ProjectMember[])

            // Optionally fetch person details for each member if needed
            // This depends on your API structure
            for (const member of memberData) {
                try {
                    // You might need to implement this function to fetch person details
                    // const personData = await fetchPersonDetails(member.personID);
                    // Update the member with person data
                } catch (err) {
                    console.error(`Error fetching details for person ${member.personID}:`, err)
                }
            }
        } catch (err) {
            console.error("Error fetching project members:", err)
            throw new Error("Failed to fetch project members")
        }
    }

    // Fetch available people (company members who are not project members)
    async function fetchAvailablePeople() {
        if (!client) return

        try {
            // First, get all people associated with this company
            const personCompaniesResponse = (await client.graphql({
                query: listPersonCompanies,
                variables: {
                    filter: { companyId: { eq: companyId } },
                    limit: 1000,
                },
            })) as { data: APITypes.ListPersonCompaniesQuery }

            const personCompanyItems = personCompaniesResponse.data.listPersonCompanies?.items || []
            const companyPersonIds = personCompanyItems.filter((item) => item !== null).map((item) => item!.personId)

            // Then, get all people
            const peopleResponse = (await client.graphql({
                query: listPeople,
                variables: { limit: 1000 },
            })) as { data: APITypes.ListPeopleQuery }

            const allPeople = peopleResponse.data.listPeople?.items || []

            // Get IDs of people already in the project
            const projectMemberIds = projectMembers.map((member) => member.personID)

            // Filter to get people who are in the company but not in the project
            const availablePeopleData = allPeople
                .filter((person) => person && companyPersonIds.includes(person.id) && !projectMemberIds.includes(person.id))
                .map((person) => ({
                    id: person!.id,
                    firstName: person!.firstName,
                    lastName: person!.lastName,
                    email: person!.email,
                    displayName: person!.displayName,
                }))

            setAvailablePeople(availablePeopleData as Person[])
        } catch (err) {
            console.error("Error fetching available people:", err)
            throw new Error("Failed to fetch available people")
        }
    }

    // Add person to project
    async function handleAddPersonToProject() {
        if (!client || !selectedPersonId) return

        setActionLoading(true)
        try {
            // Create the project membership
            await client.graphql({
                query: createProjectMembership,
                variables: {
                    input: {
                        projectID: projectId,
                        personID: selectedPersonId,
                        roles: [selectedRole],
                        isActive: true,
                    },
                },
            })

            // Refresh data
            await fetchProjectMembers()
            await fetchAvailablePeople()
            setSelectedPersonId("")
            setError(null)
        } catch (err) {
            console.error("Error adding person to project:", err)
            setError("Failed to add person to project. Please try again.")
        } finally {
            setActionLoading(false)
        }
    }

    // Remove person from project
    async function handleRemovePersonFromProject(membershipId: string) {
        if (!client) return

        if (!window.confirm("Are you sure you want to remove this person from the project?")) {
            return
        }

        setActionLoading(true)
        try {
            // Delete the project membership
            await client.graphql({
                query: deleteProjectMembership,
                variables: {
                    input: {
                        id: membershipId,
                    },
                },
            })

            // Refresh data
            await fetchProjectMembers()
            await fetchAvailablePeople()
            setError(null)
        } catch (err) {
            console.error("Error removing person from project:", err)
            setError("Failed to remove person from project. Please try again.")
        } finally {
            setActionLoading(false)
        }
    }

    // Update project role
    async function handleUpdateProjectRole(membershipId: string, personId: string, newRole: string) {
        if (!client) return

        setActionLoading(true)
        try {
            // First, delete the existing membership
            await client.graphql({
                query: deleteProjectMembership,
                variables: {
                    input: {
                        id: membershipId,
                    },
                },
            })

            // Create a new membership with the updated role
            await client.graphql({
                query: createProjectMembership,
                variables: {
                    input: {
                        projectID: projectId,
                        personID: personId,
                        roles: [newRole],
                        isActive: true,
                    },
                },
            })

            // Refresh data
            await fetchProjectMembers()
            setError(null)
        } catch (err) {
            console.error("Error updating project role:", err)
            setError("Failed to update project role. Please try again.")
        } finally {
            setActionLoading(false)
        }
    }

    // Navigation
    function handleBack() {
        router.push(`/secure/companies/${companyId}/projects/${projectId}`)
    }

    // Get person display name
    function getPersonDisplayName(person: ProjectMember["person"] | Person) {
        if (!person) return "Unknown"
        return person.displayName || `${person.firstName || ""} ${person.lastName || ""}`.trim() || person.email
    }

    // Loading state
    if (loading && !project) {
        return (
            <div className="container mx-auto px-4 py-8">
                <div className="text-center py-4">Loading project members...</div>
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
                    Back to Project
                </button>
            </div>
        )
    }

    return (
        <div className="container mx-auto px-4 py-8">
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
                <div>
                    <h1 className="text-3xl font-bold">Project Members</h1>
                    <p className="text-gray-600 mt-1">
                        Manage members for {project?.name} at {company?.name}
                    </p>
                </div>
                <button onClick={handleBack} className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
                    Back to Project
                </button>
            </div>

            {/* Error message */}
            {error && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 mb-4 rounded" role="alert">
                    <p>{error}</p>
                </div>
            )}

            {/* Add Person Form */}
            <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-8">
                <h2 className="text-xl font-semibold mb-4">Add Person to Project</h2>

                <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex-grow">
                        <select
                            value={selectedPersonId}
                            onChange={(e) => setSelectedPersonId(e.target.value)}
                            className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            disabled={availablePeople.length === 0 || actionLoading}
                        >
                            <option value="">Select a person to add...</option>
                            {availablePeople.map((person) => (
                                <option key={person.id} value={person.id}>
                                    {getPersonDisplayName(person)}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="w-64">
                        <select
                            value={selectedRole}
                            onChange={(e) => setSelectedRole(e.target.value)}
                            className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            disabled={actionLoading}
                        >
                            {roleOptions.map((option) => (
                                <option key={option.value} value={option.value}>
                                    {option.label}
                                </option>
                            ))}
                        </select>
                    </div>
                    <button
                        onClick={handleAddPersonToProject}
                        disabled={!selectedPersonId || actionLoading}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:opacity-50"
                    >
                        {actionLoading ? "Adding..." : "Add to Project"}
                    </button>
                </div>

                {availablePeople.length === 0 && !loading && (
                    <p className="text-gray-600 mt-2">
                        No available people to add. All company members are already in this project.
                    </p>
                )}
            </div>

            {/* Members Table */}
            <div className="bg-white shadow-md rounded overflow-hidden">
                <h2 className="text-xl font-semibold p-6 border-b">Current Project Members</h2>

                {loading ? (
                    <div className="text-center py-4">Loading members...</div>
                ) : projectMembers.length === 0 ? (
                    <div className="p-6 text-center text-gray-600">No members assigned to this project yet.</div>
                ) : (
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
                            <th className="px-6 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                Actions
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                        {projectMembers.map((member) => (
                            <tr key={member.id}>
                                <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                                    <Link href={`/secure/people/${member.personID}`} className="text-blue-600 hover:text-blue-900">
                                        {getPersonDisplayName(member.person)}
                                    </Link>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                                    {member.person?.email || "N/A"}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                                    <select
                                        value={member.roles[0] || "MEMBER"}
                                        onChange={(e) => handleUpdateProjectRole(member.id, member.personID, e.target.value)}
                                        className="shadow border rounded py-1 px-2 text-gray-700 text-sm leading-tight focus:outline-none focus:shadow-outline"
                                        disabled={actionLoading}
                                    >
                                        {roleOptions.map((option) => (
                                            <option key={option.value} value={option.value}>
                                                {option.label}
                                            </option>
                                        ))}
                                    </select>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                                    <button
                                        onClick={() => handleRemovePersonFromProject(member.id)}
                                        disabled={actionLoading}
                                        className="text-red-600 hover:text-red-900 disabled:opacity-50"
                                    >
                                        Remove
                                    </button>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    )
}


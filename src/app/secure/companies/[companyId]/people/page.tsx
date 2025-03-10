"use client"

import { useState, useEffect } from "react"
import { useParams, useRouter } from "next/navigation"
import { getCurrentUser } from "@/lib/auth"
import { generateClient } from "@aws-amplify/api"
import {
    getCompany,
    listPeople,
    listPersonCompanies,
    personCompanyRolesByPersonID,
    projectMembershipsByPersonID,
    listProjects,
} from "@/graphql/queries"
import {
    createPersonCompanies,
    deletePersonCompanies,
    createPersonCompanyRole,
    deletePersonCompanyRole,
    createProjectMembership,
    deleteProjectMembership,
} from "@/graphql/mutations"
import type * as APITypes from "@/API"
import { CompanyRoleType } from "@/API"
import Link from "next/link"

import { Amplify } from "aws-amplify"
import awsconfig from "@/aws-exports"

// Define interfaces for our data types
interface Company {
    id: string
    name: string
    website?: string | null
}

interface Person {
    id: string
    firstName?: string | null
    lastName?: string | null
    email: string
    phone?: string | null
    status?: string | null
    displayName?: string | null
    jobSkills?: Array<string | null> | null
}

interface PersonCompany {
    id: string
    personId: string
    companyId: string
}

// Update the ProjectMembership interface to use roles array instead of role
interface ProjectMembership {
    id: string
    projectID: string
    projectName: string
    roles: string[]
    isActive: boolean
}

interface Project {
    id: string
    name: string
}

export default function CompanyPeoplePage() {
    const params = useParams()
    const router = useRouter()
    const companyId = params.companyId as string

    // Main state
    const [company, setCompany] = useState<Company | null>(null)
    const [companyPeople, setCompanyPeople] = useState<Person[]>([])
    const [availablePeople, setAvailablePeople] = useState<Person[]>([])
    const [personCompanies, setPersonCompanies] = useState<PersonCompany[]>([])
    const [personRoles, setPersonRoles] = useState<{ [personId: string]: CompanyRoleType[] }>({})
    const [personProjectMemberships, setPersonProjectMemberships] = useState<{ [personId: string]: ProjectMembership[] }>(
        {},
    )
    const [companyProjects, setCompanyProjects] = useState<Project[]>([])

    // UI state
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)
    const [actionLoading, setActionLoading] = useState(false)

    // Form state
    const [selectedPersonId, setSelectedPersonId] = useState<string>("")
    const [selectedRole, setSelectedRole] = useState<CompanyRoleType>(CompanyRoleType.COMPANY_USER)

    // Project modal state
    const [isProjectModalOpen, setIsProjectModalOpen] = useState(false)
    const [selectedPersonForProjects, setSelectedPersonForProjects] = useState<Person | null>(null)
    const [projectModalLoading, setProjectModalLoading] = useState(false)
    const [selectedProjectId, setSelectedProjectId] = useState("")
    // Update the selectedProjectRole state to be an array
    const [selectedProjectRole, setSelectedProjectRole] = useState<string[]>(["MEMBER"])

    // Amplify client
    const [client, setClient] = useState<any>(null)
    const [userData, setUserData] = useState<any>(null)

    // Role options
    const roleOptions = [
        { value: CompanyRoleType.COMPANY_USER, label: "Company User" },
        { value: CompanyRoleType.COMPANY_ADMIN, label: "Company Admin" },
    ]

    const projectRoleOptions = [
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

            // Fetch company projects
            await fetchCompanyProjects()

            // Fetch people data
            await fetchPeopleData()
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

    // Fetch company projects
    async function fetchCompanyProjects() {
        if (!client) return

        try {
            const projectsResponse = (await client.graphql({
                query: listProjects,
                variables: {
                    filter: { companyID: { eq: companyId } },
                    limit: 1000,
                },
            })) as { data: APITypes.ListProjectsQuery }

            const projects = projectsResponse.data.listProjects?.items || []
            setCompanyProjects(
                projects.map((p) => ({
                    id: p!.id,
                    name: p!.name || "Unnamed Project",
                })),
            )
        } catch (err) {
            console.error("Error fetching company projects:", err)
            throw new Error("Failed to fetch company projects")
        }
    }

    // Fetch people data
    async function fetchPeopleData() {
        if (!client) return

        try {
            // Fetch all people
            const peopleResponse = (await client.graphql({
                query: listPeople,
                variables: { limit: 1000 },
            })) as { data: APITypes.ListPeopleQuery }

            const allPeople = peopleResponse.data.listPeople?.items || []

            // Fetch person-company relationships
            const personCompaniesResponse = (await client.graphql({
                query: listPersonCompanies,
                variables: {
                    filter: { companyId: { eq: companyId } },
                    limit: 1000,
                },
            })) as { data: APITypes.ListPersonCompaniesQuery }

            const personCompanyItems = personCompaniesResponse.data.listPersonCompanies?.items || []

            // Transform API response to match our PersonCompany interface
            const filteredItems = personCompanyItems
                .filter((item) => item !== null)
                .map((item) => ({
                    id: item!.id,
                    personId: item!.personId,
                    companyId: item!.companyId,
                }))

            setPersonCompanies(filteredItems as PersonCompany[])

            // Get IDs of people already associated with this company
            const associatedPersonIds = filteredItems.map((item) => item.personId)

            // Fetch roles for people in this company
            await fetchPersonRoles(associatedPersonIds)

            // Fetch project memberships for people in this company
            await fetchAllProjectMemberships(associatedPersonIds)

            // Filter people into those associated with the company and those not
            const companyPeopleData = allPeople
                .filter((person) => person && associatedPersonIds.includes(person.id))
                .map((person) => person as Person)

            const otherPeopleData = allPeople
                .filter((person) => person && !associatedPersonIds.includes(person.id))
                .map((person) => person as Person)

            setCompanyPeople(companyPeopleData)
            setAvailablePeople(otherPeopleData)
        } catch (err) {
            console.error("Error fetching people:", err)
            throw new Error("Failed to fetch people data")
        }
    }

    // Fetch roles for multiple people
    async function fetchPersonRoles(personIds: string[]) {
        if (!client || !personIds.length) return

        const roles: { [personId: string]: CompanyRoleType[] } = {}

        try {
            // Process in batches to avoid too many concurrent requests
            const batchSize = 10
            for (let i = 0; i < personIds.length; i += batchSize) {
                const batch = personIds.slice(i, i + batchSize)

                // Use Promise.all for parallel processing within the batch
                await Promise.all(
                    batch.map(async (personId) => {
                        try {
                            const rolesResponse = (await client.graphql({
                                query: personCompanyRolesByPersonID,
                                variables: {
                                    personID: personId,
                                    filter: {
                                        companyID: { eq: companyId },
                                        isActive: { eq: true },
                                    },
                                },
                            })) as { data: APITypes.PersonCompanyRolesByPersonIDQuery }

                            const personRoles = rolesResponse.data.personCompanyRolesByPersonID?.items || []
                            if (personRoles.length > 0) {
                                roles[personId] = personRoles
                                    .flatMap((role) => role?.jobRoles || [])
                                    .filter((role) => role !== null) as CompanyRoleType[]
                            } else {
                                roles[personId] = []
                            }
                        } catch (err) {
                            console.error(`Error fetching roles for person ${personId}:`, err)
                            roles[personId] = []
                        }
                    }),
                )
            }

            setPersonRoles(roles)
        } catch (err) {
            console.error("Error fetching person roles:", err)
        }
    }

    // Update the fetchAllProjectMemberships function to handle roles array
    async function fetchAllProjectMemberships(personIds: string[]) {
        if (!client || !personIds.length || !companyProjects.length) return

        const memberships: { [personId: string]: ProjectMembership[] } = {}

        try {
            // Process in batches to avoid too many concurrent requests
            const batchSize = 10
            for (let i = 0; i < personIds.length; i += batchSize) {
                const batch = personIds.slice(i, i + batchSize)

                // Use Promise.all for parallel processing within the batch
                await Promise.all(
                    batch.map(async (personId) => {
                        try {
                            const membershipResponse = (await client.graphql({
                                query: projectMembershipsByPersonID,
                                variables: {
                                    personID: personId,
                                    filter: {
                                        isActive: { eq: true },
                                    },
                                    limit: 100,
                                },
                            })) as { data: APITypes.ProjectMembershipsByPersonIDQuery }

                            const personMemberships = membershipResponse.data.projectMembershipsByPersonID?.items || []

                            // Filter to only include projects from this company
                            const companyProjectIds = companyProjects.map((p) => p.id)
                            const relevantMemberships = personMemberships
                                .filter((m) => m && companyProjectIds.includes(m.projectID))
                                .map((m) => ({
                                    id: m!.id,
                                    projectID: m!.projectID,
                                    projectName: companyProjects.find((p) => p.id === m!.projectID)?.name || "Unknown Project",
                                    roles: (m!.roles?.filter((r) => r !== null) as string[]) || ["MEMBER"],
                                    isActive: m!.isActive || false,
                                }))

                            memberships[personId] = relevantMemberships as ProjectMembership[]
                        } catch (err) {
                            console.error(`Error fetching project memberships for person ${personId}:`, err)
                            memberships[personId] = []
                        }
                    }),
                )
            }

            setPersonProjectMemberships(memberships)
        } catch (err) {
            console.error("Error fetching project memberships:", err)
        }
    }

    // Add person to company
    async function handleAddPersonToCompany() {
        if (!client || !selectedPersonId) return

        setActionLoading(true)
        try {
            // Create the person-company relationship
            await client.graphql({
                query: createPersonCompanies,
                variables: {
                    input: {
                        personId: selectedPersonId,
                        companyId: companyId,
                    },
                },
            })

            // Create a company role for the person
            await client.graphql({
                query: createPersonCompanyRole,
                variables: {
                    input: {
                        personID: selectedPersonId,
                        companyID: companyId,
                        jobRoles: [selectedRole],
                        isActive: true,
                    },
                },
            })

            // Refresh data
            await fetchPeopleData()
            setSelectedPersonId("")
            setError(null)
        } catch (err) {
            console.error("Error adding person to company:", err)
            setError("Failed to add person to company. Please try again.")
        } finally {
            setActionLoading(false)
        }
    }

    // Remove person from company
    async function handleRemovePersonFromCompany(personId: string) {
        if (!client) return

        if (!window.confirm("Are you sure you want to remove this person from the company?")) {
            return
        }

        setActionLoading(true)
        try {
            // Find the PersonCompanies record to delete
            const relationshipToDelete = personCompanies.find((pc) => pc.personId === personId && pc.companyId === companyId)

            if (!relationshipToDelete) {
                setError("Relationship not found")
                return
            }

            // Find and delete any associated company roles
            const personCompanyRolesResponse = (await client.graphql({
                query: personCompanyRolesByPersonID,
                variables: {
                    personID: personId,
                    filter: {
                        companyID: { eq: companyId },
                    },
                },
            })) as { data: APITypes.PersonCompanyRolesByPersonIDQuery }

            const personCompanyRoleItems = personCompanyRolesResponse.data.personCompanyRolesByPersonID?.items || []

            // Delete each company role found
            for (const role of personCompanyRoleItems) {
                if (role && role.id) {
                    await client.graphql({
                        query: deletePersonCompanyRole,
                        variables: {
                            input: {
                                id: role.id,
                            },
                        },
                    })
                }
            }

            // Delete the person-company relationship
            await client.graphql({
                query: deletePersonCompanies,
                variables: {
                    input: {
                        id: relationshipToDelete.id,
                    },
                },
            })

            // Refresh data
            await fetchPeopleData()
            setError(null)
        } catch (err) {
            console.error("Error removing person from company:", err)
            setError("Failed to remove person from company. Please try again.")
        } finally {
            setActionLoading(false)
        }
    }

    // Toggle admin role for a person
    async function handleToggleAdminRole(personId: string, isCurrentlyAdmin: boolean) {
        if (!client) return

        setActionLoading(true)
        try {
            // Find existing roles for this person
            const rolesResponse = (await client.graphql({
                query: personCompanyRolesByPersonID,
                variables: {
                    personID: personId,
                    filter: {
                        companyID: { eq: companyId },
                        isActive: { eq: true },
                    },
                },
            })) as { data: APITypes.PersonCompanyRolesByPersonIDQuery }

            const existingRoles = rolesResponse.data.personCompanyRolesByPersonID?.items || []

            if (existingRoles.length > 0) {
                // Delete the existing role entry
                const roleEntry = existingRoles[0]
                if (roleEntry && roleEntry.id) {
                    await client.graphql({
                        query: deletePersonCompanyRole,
                        variables: {
                            input: {
                                id: roleEntry.id,
                            },
                        },
                    })
                }
            }

            // Create a new role entry with the updated role
            const newRole = isCurrentlyAdmin
                ? CompanyRoleType.COMPANY_USER // If they were admin, make them a regular user
                : CompanyRoleType.COMPANY_ADMIN // If they were a regular user, make them admin

            await client.graphql({
                query: createPersonCompanyRole,
                variables: {
                    input: {
                        personID: personId,
                        companyID: companyId,
                        jobRoles: [newRole],
                        isActive: true,
                    },
                },
            })

            // Update the roles in state
            setPersonRoles((prev) => ({
                ...prev,
                [personId]: [newRole],
            }))

            setError(null)
        } catch (err) {
            console.error("Error toggling admin role:", err)
            setError("Failed to update user role. Please try again.")
        } finally {
            setActionLoading(false)
        }
    }

    // Open project management modal
    function openProjectModal(person: Person) {
        setSelectedPersonForProjects(person)
        setIsProjectModalOpen(true)
        setSelectedProjectId("")
        setSelectedProjectRole(["MEMBER"])
    }

    // Update the handleAddProjectMembership function to use roles array
    async function handleAddProjectMembership() {
        if (!client || !selectedPersonForProjects || !selectedProjectId) return

        setProjectModalLoading(true)
        try {
            // Create the project membership
            await client.graphql({
                query: createProjectMembership,
                variables: {
                    input: {
                        projectID: selectedProjectId,
                        personID: selectedPersonForProjects.id,
                        roles: selectedProjectRole,
                        isActive: true,
                    },
                },
            })

            // Get the project name
            const project = companyProjects.find((p) => p.id === selectedProjectId)

            // Update the state directly
            setPersonProjectMemberships((prev) => {
                const personId = selectedPersonForProjects!.id
                const currentMemberships = [...(prev[personId] || [])]

                // Add the new membership
                currentMemberships.push({
                    id: `temp-${Date.now()}`, // Will be replaced on next fetch
                    projectID: selectedProjectId,
                    projectName: project?.name || "Unknown Project",
                    roles: selectedProjectRole,
                    isActive: true,
                })

                return {
                    ...prev,
                    [personId]: currentMemberships,
                }
            })

            // Reset selection
            setSelectedProjectId("")
            setError(null)
        } catch (err) {
            console.error("Error adding project membership:", err)
            setError("Failed to add project membership. Please try again.")
        } finally {
            setProjectModalLoading(false)
        }
    }

    // Remove project membership
    async function handleRemoveProjectMembership(personId: string, membershipId: string) {
        if (!client) return

        if (!window.confirm("Are you sure you want to remove this person from the project?")) {
            return
        }

        setProjectModalLoading(true)
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

            // Update the state directly
            setPersonProjectMemberships((prev) => {
                const currentMemberships = [...(prev[personId] || [])]
                const updatedMemberships = currentMemberships.filter((m) => m.id !== membershipId)

                return {
                    ...prev,
                    [personId]: updatedMemberships,
                }
            })

            setError(null)
        } catch (err) {
            console.error("Error removing project membership:", err)
            setError("Failed to remove project membership. Please try again.")
        } finally {
            setProjectModalLoading(false)
        }
    }

    // Update the handleUpdateProjectRole function to use roles array
    async function handleUpdateProjectRole(personId: string, membershipId: string, projectId: string, newRole: string) {
        if (!client) return

        setProjectModalLoading(true)
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

            // Update the state directly
            setPersonProjectMemberships((prev) => {
                const currentMemberships = [...(prev[personId] || [])]
                const updatedMemberships = currentMemberships.map((m) =>
                    m.id === membershipId ? { ...m, roles: [newRole] } : m,
                )

                return {
                    ...prev,
                    [personId]: updatedMemberships,
                }
            })

            setError(null)
        } catch (err) {
            console.error("Error updating project role:", err)
            setError("Failed to update project role. Please try again.")
        } finally {
            setProjectModalLoading(false)
        }
    }

    // Navigation
    function handleBack() {
        router.push(`/secure/companies/${companyId}`)
    }

    // Helper function to get person display name
    function getPersonDisplayName(person: Person) {
        return person.displayName || `${person.firstName || ""} ${person.lastName || ""}`.trim() || person.email
    }

    // Helper function to get available projects for a person
    function getAvailableProjects(personId: string) {
        const currentProjectIds = (personProjectMemberships[personId] || []).map((p) => p.projectID)
        return companyProjects.filter((project) => !currentProjectIds.includes(project.id))
    }

    // Loading state
    if (loading && !company) {
        return (
            <div className="container mx-auto px-4 py-8">
                <div className="text-center py-4">Loading company and people data...</div>
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
                    <h1 className="text-3xl font-bold">People at {company?.name}</h1>
                    <p className="text-gray-600 mt-1">Manage people associated with this company</p>
                </div>
                <button onClick={handleBack} className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
                    Back to Company
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
                <h2 className="text-xl font-semibold mb-4">Add Person to Company</h2>

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
                            onChange={(e) => setSelectedRole(e.target.value as CompanyRoleType)}
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
                        onClick={handleAddPersonToCompany}
                        disabled={!selectedPersonId || actionLoading}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:opacity-50"
                    >
                        {actionLoading ? "Adding..." : "Add to Company"}
                    </button>
                </div>

                {availablePeople.length === 0 && !loading && (
                    <p className="text-gray-600 mt-2">No available people to add. Create new people from the People page.</p>
                )}
            </div>

            {/* People Table */}
            <div className="bg-white shadow-md rounded overflow-hidden">
                <h2 className="text-xl font-semibold p-6 border-b">People in this Company</h2>

                {loading ? (
                    <div className="text-center py-4">Loading people...</div>
                ) : companyPeople.length === 0 ? (
                    <div className="p-6 text-center text-gray-600">No people associated with this company yet.</div>
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
                                Phone
                            </th>
                            <th className="px-6 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                Status
                            </th>
                            <th className="px-6 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                Role
                            </th>
                            <th className="px-6 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                Project Memberships
                            </th>
                            <th className="px-6 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                Actions
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                        {companyPeople.map((person) => (
                            <tr key={person.id}>
                                <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                                    <Link href={`/people/${person.id}`} className="text-blue-600 hover:text-blue-900">
                                        {getPersonDisplayName(person)}
                                    </Link>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                                    <a href={`mailto:${person.email}`} className="text-blue-500 hover:text-blue-700">
                                        {person.email}
                                    </a>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                                    {person.phone ? (
                                        <a href={`tel:${person.phone}`} className="text-blue-500 hover:text-blue-700">
                                            {person.phone}
                                        </a>
                                    ) : (
                                        <span className="text-gray-500">-</span>
                                    )}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                                    <div className="flex items-center space-x-2">
                                        {personRoles[person.id]?.includes(CompanyRoleType.COMPANY_ADMIN) ? (
                                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                          Admin
                        </span>
                                        ) : (
                                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-100 text-gray-800">
                          User
                        </span>
                                        )}
                                        <button
                                            onClick={() =>
                                                handleToggleAdminRole(
                                                    person.id,
                                                    personRoles[person.id]?.includes(CompanyRoleType.COMPANY_ADMIN) || false,
                                                )
                                            }
                                            disabled={actionLoading}
                                            className="text-blue-600 hover:text-blue-900 disabled:opacity-50 text-xs"
                                        >
                                            {personRoles[person.id]?.includes(CompanyRoleType.COMPANY_ADMIN) ? "Make User" : "Make Admin"}
                                        </button>
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                                    {personProjectMemberships[person.id]?.length > 0 ? (
                                        <div className="flex flex-col">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800 mb-1">
                          {personProjectMemberships[person.id].length} project(s)
                        </span>
                                            <div className="text-xs text-gray-600">
                                                {personProjectMemberships[person.id].slice(0, 2).map((membership, idx) => (
                                                    <div key={idx}>{membership.projectName}</div>
                                                ))}
                                                {personProjectMemberships[person.id].length > 2 && (
                                                    <div>+{personProjectMemberships[person.id].length - 2} more</div>
                                                )}
                                            </div>
                                        </div>
                                    ) : (
                                        <span className="text-gray-500">No projects</span>
                                    )}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200 text-sm">
                                    <div className="flex flex-col space-y-2">
                                        <button
                                            onClick={() => openProjectModal(person)}
                                            className="text-blue-600 hover:text-blue-900 disabled:opacity-50"
                                        >
                                            Manage Projects
                                        </button>
                                        <button
                                            onClick={() => handleRemovePersonFromCompany(person.id)}
                                            disabled={actionLoading}
                                            className="text-red-600 hover:text-red-900 disabled:opacity-50"
                                        >
                                            Remove
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                )}
            </div>

            {/* Project Management Modal */}
            {isProjectModalOpen && selectedPersonForProjects && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-3xl max-h-[90vh] overflow-y-auto">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-xl font-bold">
                                Manage Projects for {getPersonDisplayName(selectedPersonForProjects)}
                            </h2>
                            <button onClick={() => setIsProjectModalOpen(false)} className="text-gray-500 hover:text-gray-700">
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

                        {/* Add to Project Form */}
                        <div className="mb-6 p-4 border rounded-lg bg-gray-50">
                            <h3 className="text-lg font-semibold mb-3">Add to Project</h3>

                            {error && (
                                <div
                                    className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 mb-4 rounded text-sm"
                                    role="alert"
                                >
                                    <p>{error}</p>
                                </div>
                            )}

                            <div className="flex flex-col md:flex-row gap-4">
                                <div className="flex-grow">
                                    <select
                                        value={selectedProjectId}
                                        onChange={(e) => setSelectedProjectId(e.target.value)}
                                        className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        disabled={projectModalLoading}
                                    >
                                        <option value="">Select a project...</option>
                                        {getAvailableProjects(selectedPersonForProjects.id).map((project) => (
                                            <option key={project.id} value={project.id}>
                                                {project.name}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                {/* Update the role dropdown in the modal to handle the primary role */}
                                {/* In the Add to Project form */}
                                <div className="w-64">
                                    <select
                                        value={selectedProjectRole[0] || "MEMBER"}
                                        onChange={(e) => setSelectedProjectRole([e.target.value])}
                                        className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        disabled={projectModalLoading}
                                    >
                                        {projectRoleOptions.map((option) => (
                                            <option key={option.value} value={option.value}>
                                                {option.label}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <button
                                    onClick={handleAddProjectMembership}
                                    disabled={!selectedProjectId || projectModalLoading}
                                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:opacity-50"
                                >
                                    {projectModalLoading ? "Adding..." : "Add to Project"}
                                </button>
                            </div>

                            {getAvailableProjects(selectedPersonForProjects.id).length === 0 && (
                                <p className="text-gray-600 mt-2">
                                    No available projects to add. This person is already a member of all projects in this company.
                                </p>
                            )}
                        </div>

                        {/* Current Project Memberships */}
                        <div>
                            <h3 className="text-lg font-semibold mb-3">Current Project Memberships</h3>

                            {projectModalLoading && <div className="text-center py-4">Loading project memberships...</div>}

                            {!projectModalLoading && personProjectMemberships[selectedPersonForProjects.id]?.length === 0 ? (
                                <div className="p-4 text-center text-gray-600 border rounded-lg">
                                    This person is not a member of any projects in this company.
                                </div>
                            ) : (
                                <table className="min-w-full bg-white border rounded-lg">
                                    <thead>
                                    <tr>
                                        <th className="px-4 py-2 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                            Project Name
                                        </th>
                                        <th className="px-4 py-2 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                            Role
                                        </th>
                                        <th className="px-4 py-2 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                            Status
                                        </th>
                                        <th className="px-4 py-2 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                            Actions
                                        </th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {personProjectMemberships[selectedPersonForProjects.id]?.map((membership) => (
                                        <tr key={membership.id}>
                                            <td className="px-4 py-2 whitespace-nowrap border-b border-gray-200">
                                                {membership.projectName}
                                            </td>
                                            {/* Update the role display in the Current Project Memberships table */}
                                            <td className="px-4 py-2 whitespace-nowrap border-b border-gray-200">
                                                <select
                                                    value={membership.roles[0] || "MEMBER"}
                                                    onChange={(e) =>
                                                        handleUpdateProjectRole(
                                                            selectedPersonForProjects.id,
                                                            membership.id,
                                                            membership.projectID,
                                                            e.target.value,
                                                        )
                                                    }
                                                    className="shadow border rounded py-1 px-2 text-gray-700 text-sm leading-tight focus:outline-none focus:shadow-outline"
                                                    disabled={projectModalLoading}
                                                >
                                                    {projectRoleOptions.map((option) => (
                                                        <option key={option.value} value={option.value}>
                                                            {option.label}
                                                        </option>
                                                    ))}
                                                </select>
                                            </td>
                                            <td className="px-4 py-2 whitespace-nowrap border-b border-gray-200">
                          <span
                              className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                                  membership.isActive ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                              }`}
                          >
                            {membership.isActive ? "Active" : "Inactive"}
                          </span>
                                            </td>
                                            <td className="px-4 py-2 whitespace-nowrap border-b border-gray-200">
                                                <button
                                                    onClick={() => handleRemoveProjectMembership(selectedPersonForProjects.id, membership.id)}
                                                    disabled={projectModalLoading}
                                                    className="text-red-600 hover:text-red-900 disabled:opacity-50 text-sm"
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

                        <div className="mt-6 flex justify-end">
                            <button
                                onClick={() => setIsProjectModalOpen(false)}
                                className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}


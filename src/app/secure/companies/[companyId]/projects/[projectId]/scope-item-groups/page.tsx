"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useParams, useRouter } from "next/navigation"
import { getCurrentUser } from "@/lib/auth"
import { generateClient } from "@aws-amplify/api"
import { getProject, scopeItemGroupsByProjectID } from "@/graphql/queries"
import { createScopeItemGroup, updateScopeItemGroup, deleteScopeItemGroup } from "@/graphql/mutations"
import type * as APITypes from "@/API"
import Link from "next/link"
import { Amplify } from "aws-amplify"
import awsconfig from "@/aws-exports"
import { PlusCircle, Edit, Trash2, ArrowLeft } from "lucide-react"

// Define interfaces for our data types
interface Project {
    id: string
    name: string
    description?: string | null
    companyID: string
}

interface ScopeItemGroup {
    id: string
    name: string
    description?: string | null
    projectID: string
}

interface ScopeItemGroupFormData {
    name: string
    description: string
}

export default function ScopeItemGroupsPage() {
    const params = useParams()
    const router = useRouter()
    const companyId = params.companyId as string
    const projectId = params.projectId as string

    // Main state
    const [project, setProject] = useState<Project | null>(null)
    const [scopeItemGroups, setScopeItemGroups] = useState<ScopeItemGroup[]>([])
    const [selectedGroup, setSelectedGroup] = useState<ScopeItemGroup | null>(null)

    // UI state
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)
    const [actionLoading, setActionLoading] = useState(false)

    // Modal state
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [formData, setFormData] = useState<ScopeItemGroupFormData>({
        name: "",
        description: "",
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
        if (userData && client && projectId) {
            fetchInitialData().catch((error) => {
                console.error("Unhandled error in fetchInitialData:", error)
                setError("Failed to load data. Please try again.")
            })
        }
    }, [userData, client, projectId])

    // Main data fetching function
    async function fetchInitialData() {
        setLoading(true)
        setError(null)

        try {
            // Fetch project data
            await fetchProjectData()

            // Fetch scope item groups
            await fetchScopeItemGroups()
        } catch (err) {
            console.error("Error fetching initial data:", err)
            setError("Failed to load data. Please try again.")
        } finally {
            setLoading(false)
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
                setProject({
                    id: projectData.id,
                    name: projectData.name,
                    description: projectData.description,
                    companyID: projectData.companyID,
                })
            }
        } catch (err) {
            console.error("Error fetching project:", err)
            throw new Error("Failed to fetch project details")
        }
    }

    // Fetch scope item groups
    async function fetchScopeItemGroups() {
        if (!client) return

        try {
            const response = (await client.graphql({
                query: scopeItemGroupsByProjectID,
                variables: {
                    projectID: projectId,
                    limit: 1000,
                },
            })) as { data: APITypes.ScopeItemGroupsByProjectIDQuery }

            const groups = response.data.scopeItemGroupsByProjectID?.items || []
            const groupData = groups
                .filter((item) => item !== null)
                .map((item) => ({
                    id: item!.id,
                    name: item!.name,
                    description: item!.description || "",
                    projectID: item!.projectID,
                }))

            setScopeItemGroups(groupData as ScopeItemGroup[])
        } catch (err) {
            console.error("Error fetching scope item groups:", err)
            throw new Error("Failed to fetch scope item groups")
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

    // Open modal for creating a new group
    function handleCreateGroup() {
        setSelectedGroup(null)
        setFormData({
            name: "",
            description: "",
        })
        setIsModalOpen(true)
    }

    // Open modal for editing an existing group
    function handleEditGroup(group: ScopeItemGroup) {
        setSelectedGroup(group)
        setFormData({
            name: group.name,
            description: group.description || "",
        })
        setIsModalOpen(true)
    }

    // Submit form to create or update a scope item group
    async function handleSubmitGroup(e: React.FormEvent) {
        e.preventDefault()
        if (!client || !projectId) return

        setActionLoading(true)
        try {
            if (selectedGroup) {
                // Update existing group
                const response = (await client.graphql({
                    query: updateScopeItemGroup,
                    variables: {
                        input: {
                            id: selectedGroup.id,
                            name: formData.name,
                            description: formData.description || null,
                        },
                    },
                })) as { data: APITypes.UpdateScopeItemGroupMutation }

                const updatedGroup = response.data.updateScopeItemGroup
                if (updatedGroup) {
                    setScopeItemGroups((prev) =>
                        prev.map((group) =>
                            group.id === updatedGroup.id
                                ? {
                                    id: updatedGroup.id,
                                    name: updatedGroup.name,
                                    description: updatedGroup.description || "",
                                    projectID: updatedGroup.projectID,
                                }
                                : group,
                        ),
                    )
                }
            } else {
                // Create new group
                const response = (await client.graphql({
                    query: createScopeItemGroup,
                    variables: {
                        input: {
                            name: formData.name,
                            description: formData.description || null,
                            projectID: projectId,
                        },
                    },
                })) as { data: APITypes.CreateScopeItemGroupMutation }

                const newGroup = response.data.createScopeItemGroup
                if (newGroup) {
                    setScopeItemGroups((prev) => [
                        ...prev,
                        {
                            id: newGroup.id,
                            name: newGroup.name,
                            description: newGroup.description || "",
                            projectID: newGroup.projectID,
                        },
                    ])
                }
            }

            // Close the modal
            setIsModalOpen(false)
            setError(null)
        } catch (err) {
            console.error("Error saving scope item group:", err)
            setError(`Failed to ${selectedGroup ? "update" : "create"} scope item group. Please try again.`)
        } finally {
            setActionLoading(false)
        }
    }

    // Delete a scope item group
    async function handleDeleteGroup(groupId: string) {
        if (!client) return

        if (!window.confirm("Are you sure you want to delete this scope item group? This action cannot be undone.")) {
            return
        }

        setActionLoading(true)
        try {
            await client.graphql({
                query: deleteScopeItemGroup,
                variables: {
                    input: {
                        id: groupId,
                    },
                },
            })

            // Remove the deleted group from state
            setScopeItemGroups((prev) => prev.filter((group) => group.id !== groupId))
        } catch (err) {
            console.error("Error deleting scope item group:", err)
            setError("Failed to delete scope item group. Please try again.")
        } finally {
            setActionLoading(false)
        }
    }

    // Navigation
    function handleBack() {
        router.push(`/secure/companies/${companyId}/projects/${projectId}`)
    }

    // Loading state
    if (loading) {
        return (
            <div className="container mx-auto px-4 py-8">
                <div className="text-center py-4">Loading scope item groups...</div>
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
                    <div className="flex items-center space-x-2">
                        <h1 className="text-3xl font-bold">Scope Item Groups</h1>
                    </div>
                    <p className="text-gray-600 mt-1">
                        {project?.name ? `Manage scope item groups for ${project.name}` : "Manage scope item groups"}
                    </p>
                </div>
                <div className="flex space-x-4">
                    <button
                        onClick={handleCreateGroup}
                        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded flex items-center"
                        disabled={actionLoading}
                    >
                        <PlusCircle className="w-5 h-5 mr-2" />
                        Create Group
                    </button>
                    <button
                        onClick={handleBack}
                        className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded flex items-center"
                    >
                        <ArrowLeft className="w-5 h-5 mr-2" />
                        Back to Project
                    </button>
                </div>
            </div>

            {/* Error message */}
            {error && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 mb-4 rounded" role="alert">
                    <p>{error}</p>
                </div>
            )}

            {/* Scope Item Groups List */}
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
                <div className="p-6 border-b">
                    <h2 className="text-xl font-semibold">Project Scope Item Groups</h2>
                    <p className="text-gray-600 mt-1">Create and manage groups to organize your scope items</p>
                </div>

                {scopeItemGroups.length === 0 ? (
                    <div className="p-6 text-center text-gray-600">
                        <p>No scope item groups have been created yet.</p>
                        <p className="mt-2">Click the "Create Group" button to add your first group.</p>
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
                                    Description
                                </th>
                                <th className="px-6 py-3 border-b-2 border-gray-200 bg-gray-100 text-right text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    Actions
                                </th>
                            </tr>
                            </thead>
                            <tbody>
                            {scopeItemGroups.map((group) => (
                                <tr key={group.id} className="hover:bg-gray-50">
                                    <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                                        <Link
                                            href={`/secure/companies/${companyId}/projects/${projectId}/scope-item-groups/${group.id}`}
                                            className="text-blue-600 hover:text-blue-900 font-medium"
                                        >
                                            {group.name}
                                        </Link>
                                    </td>
                                    <td className="px-6 py-4 border-b border-gray-200">
                                        {group.description || <span className="text-gray-500 italic">No description</span>}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200 text-right">
                                        <button
                                            onClick={() => handleEditGroup(group)}
                                            className="text-blue-600 hover:text-blue-900 mr-4"
                                            disabled={actionLoading}
                                        >
                                            <Edit className="w-5 h-5 inline" />
                                            <span className="sr-only">Edit</span>
                                        </button>
                                        <button
                                            onClick={() => handleDeleteGroup(group.id)}
                                            className="text-red-600 hover:text-red-900"
                                            disabled={actionLoading}
                                        >
                                            <Trash2 className="w-5 h-5 inline" />
                                            <span className="sr-only">Delete</span>
                                        </button>
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>

            {/* Create/Edit Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-md">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-xl font-bold">
                                {selectedGroup ? "Edit Scope Item Group" : "Create Scope Item Group"}
                            </h2>
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

                        <form onSubmit={handleSubmitGroup}>
                            <div className="mb-4">
                                <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
                                    Group Name *
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
                                    {actionLoading ? "Saving..." : selectedGroup ? "Update Group" : "Create Group"}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    )
}


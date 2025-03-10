"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useParams, useRouter } from "next/navigation"
import { getCurrentUser } from "@/lib/auth"
import { generateClient } from "@aws-amplify/api"
import { getScopeItemGroup, scopeItemsByGroupID } from "@/graphql/queries"
import { updateScopeItemGroup } from "@/graphql/mutations"
import type * as APITypes from "@/API"
import Link from "next/link"
import { Amplify } from "aws-amplify"
import awsconfig from "@/aws-exports"
import { ArrowLeft, Edit, PlusCircle } from "lucide-react"

// Define interfaces for our data types
interface ScopeItemGroup {
    id: string
    name: string
    description?: string | null
    projectID: string
}

interface ScopeItem {
    id: string
    name: string
    description?: string | null
    category?: string | null
    isCompleted?: boolean | null
    progress?: number | null
    groupID?: string | null
}

interface ScopeItemGroupFormData {
    name: string
    description: string
}

export default function ScopeItemGroupDetailsPage() {
    const params = useParams()
    const router = useRouter()
    const companyId = params.companyId as string
    const projectId = params.projectId as string
    const groupId = params.groupId as string

    // Main state
    const [scopeItemGroup, setScopeItemGroup] = useState<ScopeItemGroup | null>(null)
    const [scopeItems, setScopeItems] = useState<ScopeItem[]>([])

    // UI state
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)
    const [actionLoading, setActionLoading] = useState(false)

    // Modal state
    const [isEditModalOpen, setIsEditModalOpen] = useState(false)
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
        if (userData && client && groupId) {
            fetchInitialData().catch((error) => {
                console.error("Unhandled error in fetchInitialData:", error)
                setError("Failed to load data. Please try again.")
            })
        }
    }, [userData, client, groupId])

    // Main data fetching function
    async function fetchInitialData() {
        setLoading(true)
        setError(null)

        try {
            // Fetch scope item group data
            await fetchScopeItemGroupData()

            // Fetch scope items
            await fetchScopeItems()
        } catch (err) {
            console.error("Error fetching initial data:", err)
            setError("Failed to load data. Please try again.")
        } finally {
            setLoading(false)
        }
    }

    // Fetch scope item group details
    async function fetchScopeItemGroupData() {
        if (!client) return

        try {
            const response = (await client.graphql({
                query: getScopeItemGroup,
                variables: { id: groupId },
            })) as { data: APITypes.GetScopeItemGroupQuery }

            const groupData = response.data.getScopeItemGroup
            if (!groupData) {
                setError("Scope item group not found")
                setScopeItemGroup(null)
            } else {
                setScopeItemGroup({
                    id: groupData.id,
                    name: groupData.name,
                    description: groupData.description,
                    projectID: groupData.projectID,
                })

                // Initialize form data for editing
                setFormData({
                    name: groupData.name,
                    description: groupData.description || "",
                })
            }
        } catch (err) {
            console.error("Error fetching scope item group:", err)
            throw new Error("Failed to fetch scope item group details")
        }
    }

    // Fetch scope items
    async function fetchScopeItems() {
        if (!client) return

        try {
            const response = (await client.graphql({
                query: scopeItemsByGroupID,
                variables: {
                    groupID: groupId,
                    limit: 1000,
                },
            })) as { data: APITypes.ScopeItemsByGroupIDQuery }

            const items = response.data.scopeItemsByGroupID?.items || []
            const itemsData = items
                .filter((item) => item !== null)
                .map((item) => ({
                    id: item!.id,
                    name: item!.name,
                    description: item!.description,
                    category: item!.category,
                    isCompleted: item!.isCompleted,
                    progress: item!.progress,
                    groupID: item!.groupID,
                }))

            setScopeItems(itemsData as ScopeItem[])
        } catch (err) {
            console.error("Error fetching scope items:", err)
            throw new Error("Failed to fetch scope items")
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

    // Submit form to update scope item group
    async function handleUpdateGroup(e: React.FormEvent) {
        e.preventDefault()
        if (!client || !scopeItemGroup) return

        setActionLoading(true)
        try {
            const response = (await client.graphql({
                query: updateScopeItemGroup,
                variables: {
                    input: {
                        id: scopeItemGroup.id,
                        name: formData.name,
                        description: formData.description || null,
                    },
                },
            })) as { data: APITypes.UpdateScopeItemGroupMutation }

            const updatedGroup = response.data.updateScopeItemGroup
            if (updatedGroup) {
                setScopeItemGroup({
                    id: updatedGroup.id,
                    name: updatedGroup.name,
                    description: updatedGroup.description,
                    projectID: updatedGroup.projectID,
                })
            }

            // Close the modal
            setIsEditModalOpen(false)
            setError(null)
        } catch (err) {
            console.error("Error updating scope item group:", err)
            setError("Failed to update scope item group. Please try again.")
        } finally {
            setActionLoading(false)
        }
    }

    // Navigation
    function handleBack() {
        router.push(`/secure/companies/${companyId}/projects/${projectId}/scope-item-groups`)
    }

    // Get progress badge class
    function getProgressBadgeClass(progress: number | null | undefined) {
        if (progress === undefined || progress === null) return "bg-gray-100 text-gray-800"
        if (progress === 100) return "bg-green-100 text-green-800"
        if (progress > 0) return "bg-blue-100 text-blue-800"
        return "bg-gray-100 text-gray-800"
    }

    // Loading state
    if (loading) {
        return (
            <div className="container mx-auto px-4 py-8">
                <div className="text-center py-4">Loading scope item group data...</div>
            </div>
        )
    }

    // Error state
    if (error && !scopeItemGroup) {
        return (
            <div className="container mx-auto px-4 py-8">
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 mb-4 rounded" role="alert">
                    <p>{error}</p>
                </div>
                <button onClick={handleBack} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Back to Scope Item Groups
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
                        <h1 className="text-3xl font-bold">{scopeItemGroup?.name}</h1>
                    </div>
                    <p className="text-gray-600 mt-1">{scopeItemGroup?.description || "No description provided"}</p>
                </div>
                <div className="flex space-x-4">
                    <Link
                        href={`/secure/companies/${companyId}/projects/${projectId}/scope-items/create?groupId=${groupId}`}
                        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded flex items-center"
                    >
                        <PlusCircle className="w-5 h-5 mr-2" />
                        Add Scope Item
                    </Link>
                    <button
                        onClick={() => setIsEditModalOpen(true)}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex items-center"
                        disabled={actionLoading}
                    >
                        <Edit className="w-5 h-5 mr-2" />
                        Edit Group
                    </button>
                    <button
                        onClick={handleBack}
                        className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded flex items-center"
                    >
                        <ArrowLeft className="w-5 h-5 mr-2" />
                        Back to Groups
                    </button>
                </div>
            </div>

            {/* Error message */}
            {error && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 mb-4 rounded" role="alert">
                    <p>{error}</p>
                </div>
            )}

            {/* Scope Items List */}
            <div className="bg-white shadow-md rounded-lg overflow-hidden mb-8">
                <div className="p-6 border-b">
                    <h2 className="text-xl font-semibold">Scope Items in this Group</h2>
                </div>

                {scopeItems.length === 0 ? (
                    <div className="p-6 text-center text-gray-600">
                        <p>No scope items have been added to this group yet.</p>
                        <p className="mt-2">Click the "Add Scope Item" button to add your first item.</p>
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
                                    Category
                                </th>
                                <th className="px-6 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    Progress
                                </th>
                                <th className="px-6 py-3 border-b-2 border-gray-200 bg-gray-100 text-right text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    Actions
                                </th>
                            </tr>
                            </thead>
                            <tbody>
                            {scopeItems.map((item) => (
                                <tr key={item.id} className="hover:bg-gray-50">
                                    <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                                        <Link
                                            href={`/secure/companies/${companyId}/projects/${projectId}/scope-items/${item.id}`}
                                            className="text-blue-600 hover:text-blue-900 font-medium"
                                        >
                                            {item.name}
                                        </Link>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                                        {item.category || <span className="text-gray-500 italic">None</span>}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                      <span
                          className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getProgressBadgeClass(
                              item.progress,
                          )}`}
                      >
                        {item.progress !== null && item.progress !== undefined ? `${item.progress}%` : "Not set"}
                      </span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200 text-right">
                                        <Link
                                            href={`/secure/companies/${companyId}/projects/${projectId}/scope-items/${item.id}/edit`}
                                            className="text-blue-600 hover:text-blue-900 mr-4"
                                        >
                                            <Edit className="w-5 h-5 inline" />
                                            <span className="sr-only">Edit</span>
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>

            {/* Edit Modal */}
            {isEditModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-md">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-xl font-bold">Edit Scope Item Group</h2>
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

                        <form onSubmit={handleUpdateGroup}>
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
                                    {actionLoading ? "Saving..." : "Update Group"}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    )
}


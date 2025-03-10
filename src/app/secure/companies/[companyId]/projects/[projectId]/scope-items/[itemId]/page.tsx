"use client"

import { useState, useEffect } from "react"
import { useParams, useRouter } from "next/navigation"
import { getCurrentUser } from "@/lib/auth"
import { generateClient } from "@aws-amplify/api"
import { getScopeItem, getScopeItemGroup } from "@/graphql/queries"
import { deleteScopeItem } from "@/graphql/mutations"
import type * as APITypes from "@/API"
import Link from "next/link"
import { Amplify } from "aws-amplify"
import awsconfig from "@/aws-exports"
import { ArrowLeft, Edit, Trash2, CheckCircle, XCircle } from "lucide-react"

// Define interfaces for our data types
interface ScopeItem {
    id: string
    name: string
    description?: string | null
    category?: string | null
    isCompleted?: boolean | null
    progress?: number | null
    projectID: string
    groupID?: string | null
}

interface ScopeItemGroup {
    id: string
    name: string
    projectID: string
}

export default function ScopeItemDetailsPage() {
    const params = useParams()
    const router = useRouter()
    const companyId = params.companyId as string
    const projectId = params.projectId as string
    const itemId = params.itemId as string

    // Main state
    const [scopeItem, setScopeItem] = useState<ScopeItem | null>(null)
    const [scopeItemGroup, setScopeItemGroup] = useState<ScopeItemGroup | null>(null)

    // UI state
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)
    const [actionLoading, setActionLoading] = useState(false)

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
        if (userData && client && itemId) {
            fetchInitialData().catch((error) => {
                console.error("Unhandled error in fetchInitialData:", error)
                setError("Failed to load data. Please try again.")
            })
        }
    }, [userData, client, itemId])

    // Main data fetching function
    async function fetchInitialData() {
        setLoading(true)
        setError(null)

        try {
            // Fetch scope item data
            await fetchScopeItemData()

            // Fetch scope item group if available
            if (scopeItem?.groupID) {
                await fetchScopeItemGroupData(scopeItem.groupID)
            }
        } catch (err) {
            console.error("Error fetching initial data:", err)
            setError("Failed to load data. Please try again.")
        } finally {
            setLoading(false)
        }
    }

    // Fetch scope item data
    async function fetchScopeItemData() {
        if (!client) return

        try {
            const response = (await client.graphql({
                query: getScopeItem,
                variables: { id: itemId },
            })) as { data: APITypes.GetScopeItemQuery }

            const itemData = response.data.getScopeItem
            if (!itemData) {
                setError("Scope item not found")
                setScopeItem(null)
            } else {
                setScopeItem({
                    id: itemData.id,
                    name: itemData.name,
                    description: itemData.description,
                    category: itemData.category,
                    isCompleted: itemData.isCompleted,
                    progress: itemData.progress,
                    projectID: itemData.projectID,
                    groupID: itemData.groupID,
                })
            }
        } catch (err) {
            console.error("Error fetching scope item:", err)
            throw new Error("Failed to fetch scope item details")
        }
    }

    // Fetch scope item group data
    async function fetchScopeItemGroupData(groupId: string) {
        if (!client) return

        try {
            const response = (await client.graphql({
                query: getScopeItemGroup,
                variables: { id: groupId },
            })) as { data: APITypes.GetScopeItemGroupQuery }

            const groupData = response.data.getScopeItemGroup
            if (groupData) {
                setScopeItemGroup({
                    id: groupData.id,
                    name: groupData.name,
                    projectID: groupData.projectID,
                })
            }
        } catch (err) {
            console.error("Error fetching scope item group:", err)
            // Don't throw here, as this is optional data
        }
    }

    // Delete scope item
    async function handleDeleteItem() {
        if (!client || !scopeItem) return

        if (!window.confirm("Are you sure you want to delete this scope item? This action cannot be undone.")) {
            return
        }

        setActionLoading(true)
        try {
            await client.graphql({
                query: deleteScopeItem,
                variables: {
                    input: {
                        id: scopeItem.id,
                    },
                },
            })

            // Navigate back to the appropriate page
            if (scopeItem.groupID) {
                router.push(`/secure/companies/${companyId}/projects/${projectId}/scope-item-groups/${scopeItem.groupID}`)
            } else {
                router.push(`/secure/companies/${companyId}/projects/${projectId}`)
            }
        } catch (err) {
            console.error("Error deleting scope item:", err)
            setError("Failed to delete scope item. Please try again.")
        } finally {
            setActionLoading(false)
        }
    }

    // Navigation
    function handleBack() {
        if (scopeItem?.groupID) {
            router.push(`/secure/companies/${companyId}/projects/${projectId}/scope-item-groups/${scopeItem.groupID}`)
        } else {
            router.push(`/secure/companies/${companyId}/projects/${projectId}`)
        }
    }

    // Get progress color class
    function getProgressColorClass(progress: number | null | undefined) {
        if (progress === undefined || progress === null) return "bg-gray-200"
        if (progress === 100) return "bg-green-500"
        if (progress >= 75) return "bg-blue-500"
        if (progress >= 50) return "bg-yellow-500"
        if (progress >= 25) return "bg-orange-500"
        return "bg-red-500"
    }

    // Loading state
    if (loading) {
        return (
            <div className="container mx-auto px-4 py-8">
                <div className="text-center py-4">Loading scope item details...</div>
            </div>
        )
    }

    // Error state
    if (error && !scopeItem) {
        return (
            <div className="container mx-auto px-4 py-8">
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 mb-4 rounded" role="alert">
                    <p>{error}</p>
                </div>
                <button onClick={handleBack} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Back
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
                        <h1 className="text-3xl font-bold">{scopeItem?.name}</h1>
                        {scopeItem?.isCompleted && (
                            <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded flex items-center">
                <CheckCircle className="w-4 h-4 mr-1" />
                Completed
              </span>
                        )}
                    </div>
                    {scopeItemGroup && (
                        <p className="text-gray-600 mt-1">
                            Group:{" "}
                            <Link
                                href={`/secure/companies/${companyId}/projects/${projectId}/scope-item-groups/${scopeItemGroup.id}`}
                                className="text-blue-600 hover:text-blue-800"
                            >
                                {scopeItemGroup.name}
                            </Link>
                        </p>
                    )}
                </div>
                <div className="flex space-x-4">
                    <Link
                        href={`/secure/companies/${companyId}/projects/${projectId}/scope-items/${itemId}/edit`}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex items-center"
                    >
                        <Edit className="w-5 h-5 mr-2" />
                        Edit
                    </Link>
                    <button
                        onClick={handleDeleteItem}
                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded flex items-center"
                        disabled={actionLoading}
                    >
                        <Trash2 className="w-5 h-5 mr-2" />
                        {actionLoading ? "Deleting..." : "Delete"}
                    </button>
                    <button
                        onClick={handleBack}
                        className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded flex items-center"
                    >
                        <ArrowLeft className="w-5 h-5 mr-2" />
                        Back
                    </button>
                </div>
            </div>

            {/* Error message */}
            {error && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 mb-4 rounded" role="alert">
                    <p>{error}</p>
                </div>
            )}

            {/* Scope Item Details */}
            <div className="bg-white shadow-md rounded-lg overflow-hidden mb-8">
                <div className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <h2 className="text-xl font-semibold mb-4">Details</h2>

                            {scopeItem?.description && (
                                <div className="mb-4">
                                    <h3 className="text-sm font-medium text-gray-500 mb-1">Description</h3>
                                    <p className="text-gray-800 whitespace-pre-line">{scopeItem.description}</p>
                                </div>
                            )}

                            {scopeItem?.category && (
                                <div className="mb-4">
                                    <h3 className="text-sm font-medium text-gray-500 mb-1">Category</h3>
                                    <p className="text-gray-800">{scopeItem.category}</p>
                                </div>
                            )}

                            <div className="mb-4">
                                <h3 className="text-sm font-medium text-gray-500 mb-1">Status</h3>
                                <div className="flex items-center">
                                    {scopeItem?.isCompleted ? (
                                        <div className="flex items-center text-green-600">
                                            <CheckCircle className="w-5 h-5 mr-2" />
                                            <span>Completed</span>
                                        </div>
                                    ) : (
                                        <div className="flex items-center text-yellow-600">
                                            <XCircle className="w-5 h-5 mr-2" />
                                            <span>In Progress</span>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-xl font-semibold mb-4">Progress</h2>

                            <div className="mb-2">
                                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium text-gray-700">
                    {scopeItem?.progress !== null && scopeItem?.progress !== undefined
                        ? `${scopeItem.progress}%`
                        : "Not started"}
                  </span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-2.5">
                                    <div
                                        className={`h-2.5 rounded-full ${getProgressColorClass(scopeItem?.progress)}`}
                                        style={{ width: `${scopeItem?.progress || 0}%` }}
                                    ></div>
                                </div>
                            </div>

                            <div className="mt-6">
                                <h3 className="text-sm font-medium text-gray-500 mb-1">Item ID</h3>
                                <p className="text-gray-500 text-sm font-mono">{scopeItem?.id}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


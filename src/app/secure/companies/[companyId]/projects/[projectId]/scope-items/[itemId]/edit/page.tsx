"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useParams, useRouter } from "next/navigation"
import { getCurrentUser } from "@/lib/auth"
import { generateClient } from "@aws-amplify/api"
import { getProject, getScopeItem, listScopeItemGroups } from "@/graphql/queries"
import { updateScopeItem } from "@/graphql/mutations"
import type * as APITypes from "@/API"
import { Amplify } from "aws-amplify"
import awsconfig from "@/aws-exports"
import { ArrowLeft, Save } from "lucide-react"

// Define interfaces for our data types
interface Project {
    id: string
    name: string
    description?: string | null
    companyID: string
}

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

interface ScopeItemFormData {
    name: string
    description: string
    category: string
    isCompleted: boolean
    progress: number
    groupID: string
}

export default function EditScopeItemPage() {
    const params = useParams()
    const router = useRouter()
    const companyId = params.companyId as string
    const projectId = params.projectId as string
    const itemId = params.itemId as string

    // Main state
    const [project, setProject] = useState<Project | null>(null)
    const [scopeItem, setScopeItem] = useState<ScopeItem | null>(null)
    const [scopeItemGroups, setScopeItemGroups] = useState<ScopeItemGroup[]>([])

    // Form state
    const [formData, setFormData] = useState<ScopeItemFormData>({
        name: "",
        description: "",
        category: "",
        isCompleted: false,
        progress: 0,
        groupID: "",
    })

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
        if (userData && client && projectId && itemId) {
            fetchInitialData().catch((error) => {
                console.error("Unhandled error in fetchInitialData:", error)
                setError("Failed to load data. Please try again.")
            })
        }
    }, [userData, client, projectId, itemId])

    // Main data fetching function
    async function fetchInitialData() {
        setLoading(true)
        setError(null)

        try {
            // Fetch project data
            await fetchProjectData()

            // Fetch scope item data
            await fetchScopeItemData()

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

                // Initialize form data
                setFormData({
                    name: itemData.name,
                    description: itemData.description || "",
                    category: itemData.category || "",
                    isCompleted: itemData.isCompleted || false,
                    progress: itemData.progress || 0,
                    groupID: itemData.groupID || "",
                })
            }
        } catch (err) {
            console.error("Error fetching scope item:", err)
            throw new Error("Failed to fetch scope item details")
        }
    }

    // Fetch scope item groups
    async function fetchScopeItemGroups() {
        if (!client) return

        try {
            const response = (await client.graphql({
                query: listScopeItemGroups,
                variables: {
                    filter: {
                        projectID: {
                            eq: projectId,
                        },
                    },
                    limit: 1000,
                },
            })) as { data: APITypes.ListScopeItemGroupsQuery }

            const groups = response.data.listScopeItemGroups?.items || []
            const groupsData = groups
                .filter((item) => item !== null)
                .map((item) => ({
                    id: item!.id,
                    name: item!.name,
                    projectID: item!.projectID,
                }))

            setScopeItemGroups(groupsData as ScopeItemGroup[])
        } catch (err) {
            console.error("Error fetching scope item groups:", err)
            throw new Error("Failed to fetch scope item groups")
        }
    }

    // Handle form input changes
    function handleInputChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
        const { name, value, type } = e.target as HTMLInputElement

        if (type === "checkbox") {
            const checked = (e.target as HTMLInputElement).checked
            setFormData((prev) => ({
                ...prev,
                [name]: checked,
            }))
        } else if (name === "progress") {
            // Ensure progress is a number between 0 and 100
            const progressValue = Math.min(Math.max(Number.parseInt(value) || 0, 0), 100)
            setFormData((prev) => ({
                ...prev,
                [name]: progressValue,
            }))
        } else {
            setFormData((prev) => ({
                ...prev,
                [name]: value,
            }))
        }
    }

    // Submit form to update a scope item
    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault()
        if (!client || !scopeItem) return

        setActionLoading(true)
        try {
            const response = (await client.graphql({
                query: updateScopeItem,
                variables: {
                    input: {
                        id: scopeItem.id,
                        name: formData.name,
                        description: formData.description || null,
                        category: formData.category || null,
                        isCompleted: formData.isCompleted,
                        progress: formData.progress,
                        groupID: formData.groupID || null,
                    },
                },
            })) as { data: APITypes.UpdateScopeItemMutation }

            const updatedItem = response.data.updateScopeItem
            if (updatedItem) {
                // Navigate back to the group details page if groupID is provided
                if (formData.groupID) {
                    router.push(`/secure/companies/${companyId}/projects/${projectId}/scope-item-groups/${formData.groupID}`)
                } else {
                    // Navigate back to the project details page
                    router.push(`/secure/companies/${companyId}/projects/${projectId}`)
                }
            }
        } catch (err) {
            console.error("Error updating scope item:", err)
            setError("Failed to update scope item. Please try again.")
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

    // Loading state
    if (loading) {
        return (
            <div className="container mx-auto px-4 py-8">
                <div className="text-center py-4">Loading...</div>
            </div>
        )
    }

    // Error state
    if (error && (!project || !scopeItem)) {
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
                    <h1 className="text-3xl font-bold">Edit Scope Item</h1>
                    <p className="text-gray-600 mt-1">{scopeItem?.name ? `Edit ${scopeItem.name}` : "Edit scope item"}</p>
                </div>
                <button
                    onClick={handleBack}
                    className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded flex items-center"
                >
                    <ArrowLeft className="w-5 h-5 mr-2" />
                    Cancel
                </button>
            </div>

            {/* Error message */}
            {error && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 mb-4 rounded" role="alert">
                    <p>{error}</p>
                </div>
            )}

            {/* Form */}
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
                <div className="p-6">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
                                Name *
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

                        <div className="mb-4">
                            <label htmlFor="category" className="block text-gray-700 text-sm font-bold mb-2">
                                Category
                            </label>
                            <input
                                type="text"
                                id="category"
                                name="category"
                                value={formData.category}
                                onChange={handleInputChange}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="groupID" className="block text-gray-700 text-sm font-bold mb-2">
                                Scope Item Group
                            </label>
                            <select
                                id="groupID"
                                name="groupID"
                                value={formData.groupID}
                                onChange={handleInputChange}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            >
                                <option value="">None (No Group)</option>
                                {scopeItemGroups.map((group) => (
                                    <option key={group.id} value={group.id}>
                                        {group.name}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className="mb-4">
                            <label htmlFor="progress" className="block text-gray-700 text-sm font-bold mb-2">
                                Progress (%)
                            </label>
                            <input
                                type="number"
                                id="progress"
                                name="progress"
                                value={formData.progress}
                                onChange={handleInputChange}
                                min="0"
                                max="100"
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            />
                        </div>

                        <div className="mb-4">
                            <label className="flex items-center">
                                <input
                                    type="checkbox"
                                    name="isCompleted"
                                    checked={formData.isCompleted}
                                    onChange={handleInputChange}
                                    className="mr-2"
                                />
                                <span className="text-gray-700 text-sm font-bold">Mark as completed</span>
                            </label>
                        </div>

                        <div className="flex justify-end space-x-4 mt-6">
                            <button
                                type="button"
                                onClick={handleBack}
                                className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                            >
                                Cancel
                            </button>
                            <button
                                type="submit"
                                disabled={actionLoading || !formData.name.trim()}
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:opacity-50 flex items-center"
                            >
                                <Save className="w-5 h-5 mr-2" />
                                {actionLoading ? "Saving..." : "Save Changes"}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}


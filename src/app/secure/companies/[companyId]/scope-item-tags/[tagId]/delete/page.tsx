"use client"

import { useEffect, useState } from "react"
import { useParams, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertCircle } from "lucide-react"
import { generateClient } from "aws-amplify/api"
import { getScopeItemTag } from "@/graphql/queries"
import { deleteScopeItemTag } from "@/graphql/mutations"
import type { ScopeItemTag, DeleteScopeItemTagInput } from "@/API"
import { Badge } from "@/components/ui/badge"
import { Amplify } from "aws-amplify"
import awsconfig from "@/aws-exports"
import { getCurrentUser } from "@/lib/auth"

export default function DeleteScopeItemTagPage() {
    const params = useParams()
    const router = useRouter()
    const companyId = params.companyId as string
    const tagId = params.tagId as string

    const [tag, setTag] = useState<ScopeItemTag | null>(null)
    const [isLoading, setIsLoading] = useState(false)
    const [isLoadingTag, setIsLoadingTag] = useState(true)
    const [error, setError] = useState<string | null>(null)
    const [client, setClient] = useState<any>(null)

    // Configure Amplify first
    useEffect(() => {
        Amplify.configure(awsconfig)
        setClient(generateClient())
    }, [])

    // Fetch tag data after client is initialized
    useEffect(() => {
        if (!client || !tagId) return

        const fetchTag = async () => {
            try {
                setIsLoadingTag(true)

                // Ensure user is authenticated
                const currentUser = await getCurrentUser()
                if (!currentUser) {
                    throw new Error("User not authenticated")
                }

                const tagResponse = await client.graphql({
                    query: getScopeItemTag,
                    variables: { id: tagId },
                })

                const fetchedTag = tagResponse.data.getScopeItemTag
                if (!fetchedTag) {
                    throw new Error("Tag not found")
                }

                // Verify the tag belongs to this company
                if (fetchedTag.companyID !== companyId) {
                    throw new Error("Tag does not belong to this company")
                }

                setTag(fetchedTag)
            } catch (err) {
                console.error("Error fetching scope item tag:", err)
                setError("Failed to load tag information. Please try again later.")
            } finally {
                setIsLoadingTag(false)
            }
        }

        fetchTag()
    }, [client, tagId, companyId])

    const handleDelete = async () => {
        if (!client) {
            setError("Client not initialized. Please try again.")
            return
        }

        if (!tag) {
            setError("Tag information is not available. Please try again later.")
            return
        }

        try {
            setIsLoading(true)
            setError(null)

            // Ensure user is authenticated
            const currentUser = await getCurrentUser()
            if (!currentUser) {
                throw new Error("User not authenticated")
            }

            const tagInput: DeleteScopeItemTagInput = {
                id: tagId,
            }

            await client.graphql({
                query: deleteScopeItemTag,
                variables: { input: tagInput },
            })

            // Navigate back to the tags list
            router.push(`/secure/companies/${companyId}/scope-item-tags`)
        } catch (err) {
            console.error("Error deleting scope item tag:", err)
            setError("Failed to delete tag. Please try again later.")
            setIsLoading(false)
        }
    }

    const handleCancel = () => {
        router.push(`/secure/companies/${companyId}/scope-item-tags`)
    }

    if (isLoadingTag) {
        return (
            <div className="p-6">
                <div className="animate-pulse">
                    <div className="h-8 bg-gray-200 rounded w-1/4 mb-4"></div>
                    <div className="h-64 bg-gray-200 rounded"></div>
                </div>
            </div>
        )
    }

    if (!tag) {
        return (
            <div className="p-6">
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
                    <p>Tag not found or you don't have permission to delete it.</p>
                </div>
                <div className="mt-4">
                    <Button onClick={handleCancel}>Back to Tags</Button>
                </div>
            </div>
        )
    }

    return (
        <div className="p-6">
            <div className="mb-6">
                <h1 className="text-2xl font-bold">Delete Scope Item Tag</h1>
            </div>

            <Card className="max-w-2xl">
                <CardHeader>
                    <CardTitle>Confirm Deletion</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    {error && (
                        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mb-4">
                            <p>{error}</p>
                        </div>
                    )}

                    <Alert variant="destructive">
                        <AlertCircle className="h-4 w-4" />
                        <AlertTitle>Warning</AlertTitle>
                        <AlertDescription>
                            You are about to delete the tag. This action cannot be undone.
                            <br />
                            <br />
                            <strong>Note:</strong> If this tag is being used by any scope items, those references will be removed.
                        </AlertDescription>
                    </Alert>

                    <div className="mt-4">
                        <p className="mb-2">Tag details:</p>
                        <div className="pl-4 border-l-2 border-gray-200">
                            <div className="flex items-center">
                                <strong>Name:</strong>
                                <Badge
                                    className="ml-2"
                                    style={{
                                        backgroundColor: tag.color || undefined,
                                        color: tag.color ? getContrastColor(tag.color) : undefined,
                                    }}
                                >
                                    {tag.name}
                                </Badge>
                            </div>
                            {tag.description && (
                                <div className="mt-1">
                                    <strong>Description:</strong> {tag.description}
                                </div>
                            )}
                            {tag.color && (
                                <div className="flex items-center mt-1">
                                    <strong className="mr-2">Color:</strong>
                                    <div className="w-6 h-6 rounded-full" style={{ backgroundColor: tag.color }} />
                                    <span className="ml-2">{tag.color}</span>
                                </div>
                            )}
                        </div>
                    </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                    <Button type="button" variant="outline" onClick={handleCancel}>
                        Cancel
                    </Button>
                    <Button variant="destructive" onClick={handleDelete} disabled={isLoading}>
                        {isLoading ? "Deleting..." : "Delete Tag"}
                    </Button>
                </CardFooter>
            </Card>
        </div>
    )
}

// Helper function to determine text color based on background color
function getContrastColor(hexColor: string): string {
    // Remove the # if it exists
    hexColor = hexColor.replace("#", "")

    // Convert to RGB
    const r = Number.parseInt(hexColor.substr(0, 2), 16)
    const g = Number.parseInt(hexColor.substr(2, 2), 16)
    const b = Number.parseInt(hexColor.substr(4, 2), 16)

    // Calculate luminance
    const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255

    // Return black or white based on luminance
    return luminance > 0.5 ? "#000000" : "#ffffff"
}


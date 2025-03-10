"use client"

import type React from "react"
import { useEffect, useState } from "react"
import { useParams, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { generateClient } from "aws-amplify/api"
import { getScopeItemTag } from "@/graphql/queries"
import { updateScopeItemTag } from "@/graphql/mutations"
import type { ScopeItemTag, UpdateScopeItemTagInput } from "@/API"
import { HexColorPicker } from "react-colorful"
import { Amplify } from "aws-amplify"
import awsconfig from "@/aws-exports"
import { getCurrentUser } from "@/lib/auth"

export default function EditScopeItemTagPage() {
    const params = useParams()
    const router = useRouter()
    const companyId = params.companyId as string
    const tagId = params.tagId as string

    const [tag, setTag] = useState<ScopeItemTag | null>(null)
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [color, setColor] = useState("#3b82f6")
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
                setName(fetchedTag.name)
                setDescription(fetchedTag.description || "")
                setColor(fetchedTag.color || "#3b82f6")
            } catch (err) {
                console.error("Error fetching scope item tag:", err)
                setError("Failed to load tag information. Please try again later.")
            } finally {
                setIsLoadingTag(false)
            }
        }

        fetchTag()
    }, [client, tagId, companyId])

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        if (!client) {
            setError("Client not initialized. Please try again.")
            return
        }

        if (!tag) {
            setError("Tag information is not available. Please try again later.")
            return
        }

        if (!name.trim()) {
            setError("Tag name is required.")
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

            const tagInput: UpdateScopeItemTagInput = {
                id: tagId,
                name,
                description: description.trim() || null,
                color,
            }

            await client.graphql({
                query: updateScopeItemTag,
                variables: { input: tagInput },
            })

            // Navigate back to the tags list
            router.push(`/secure/companies/${companyId}/scope-item-tags`)
        } catch (err) {
            console.error("Error updating scope item tag:", err)
            setError("Failed to update tag. Please try again later.")
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
                    <p>Tag not found or you don't have permission to edit it.</p>
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
                <h1 className="text-2xl font-bold">Edit Scope Item Tag</h1>
            </div>

            <Card className="max-w-2xl">
                <form onSubmit={handleSubmit}>
                    <CardHeader>
                        <CardTitle>Tag Information</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        {error && (
                            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mb-4">
                                <p>{error}</p>
                            </div>
                        )}

                        <div className="space-y-2">
                            <Label htmlFor="name">Name</Label>
                            <Input id="name" value={name} onChange={(e) => setName(e.target.value)} required />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="description">Description</Label>
                            <Textarea
                                id="description"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                rows={3}
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="color">Color</Label>
                            <div className="flex items-center space-x-4">
                                <div className="w-10 h-10 rounded-full border border-gray-200" style={{ backgroundColor: color }} />
                                <Input
                                    id="color"
                                    type="text"
                                    value={color}
                                    onChange={(e) => setColor(e.target.value)}
                                    className="w-32"
                                />
                            </div>
                            <div className="mt-2">
                                <HexColorPicker color={color} onChange={setColor} />
                            </div>
                        </div>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                        <Button type="button" variant="outline" onClick={handleCancel}>
                            Cancel
                        </Button>
                        <Button type="submit" disabled={isLoading}>
                            {isLoading ? "Saving..." : "Save Changes"}
                        </Button>
                    </CardFooter>
                </form>
            </Card>
        </div>
    )
}


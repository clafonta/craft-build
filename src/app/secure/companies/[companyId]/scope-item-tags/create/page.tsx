"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { useParams, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { generateClient } from "aws-amplify/api"
import { createScopeItemTag } from "@/graphql/mutations"
import type { CreateScopeItemTagInput } from "@/API"
import { HexColorPicker } from "react-colorful"
import { Amplify } from "aws-amplify"
import awsconfig from "@/aws-exports"
import { getCurrentUser } from "@/lib/auth"

export default function CreateScopeItemTagPage() {
    const params = useParams()
    const router = useRouter()
    const companyId = params.companyId as string

    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [color, setColor] = useState("#3b82f6") // Default to a blue color
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)
    const [client, setClient] = useState<any>(null)

    // Configure Amplify first
    useEffect(() => {
        Amplify.configure(awsconfig)
        setClient(generateClient())
    }, [])

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        if (!client) {
            setError("Client not initialized. Please try again.")
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

            const tagInput: CreateScopeItemTagInput = {
                name,
                description: description.trim() || null,
                companyID: companyId,
                color,
                companyScopeItemTagsId: companyId,
            }

            await client.graphql({
                query: createScopeItemTag,
                variables: { input: tagInput },
            })

            // Navigate back to the tags list
            router.push(`/secure/companies/${companyId}/scope-item-tags`)
        } catch (err) {
            console.error("Error creating scope item tag:", err)
            setError("Failed to create tag. Please try again later.")
            setIsLoading(false)
        }
    }

    const handleCancel = () => {
        router.push(`/secure/companies/${companyId}/scope-item-tags`)
    }

    return (
        <div className="p-6">
            <div className="mb-6">
                <h1 className="text-2xl font-bold">Create Scope Item Tag</h1>
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
                            {isLoading ? "Creating..." : "Create Tag"}
                        </Button>
                    </CardFooter>
                </form>
            </Card>
        </div>
    )
}


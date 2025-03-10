"use client"

import { useEffect, useState } from "react"
import { useParams, useRouter } from "next/navigation"
import { Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ScopeItemTagList } from "./scope-item-tag-list"
import { generateClient } from "aws-amplify/api"
import { scopeItemTagsByCompanyID } from "@/graphql/queries"
import type { ScopeItemTag } from "@/API"
import { Amplify } from "aws-amplify"
import awsconfig from "@/aws-exports"
import { getCurrentUser } from "@/lib/auth"

export default function ScopeItemTagsPage() {
    const params = useParams()
    const router = useRouter()
    const companyId = params.companyId as string

    const [tags, setTags] = useState<ScopeItemTag[]>([])
    const [searchQuery, setSearchQuery] = useState("")
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)
    const [client, setClient] = useState<any>(null)

    // Step 1: Configure Amplify first
    useEffect(() => {
        // Configure Amplify
        Amplify.configure(awsconfig)
        // Then generate the client
        setClient(generateClient())
    }, [])

    // Step 2: Only fetch data after client is initialized
    useEffect(() => {
        if (!client || !companyId) return

        const fetchData = async () => {
            try {
                setIsLoading(true)

                // Ensure user is authenticated before making API calls
                const currentUser = await getCurrentUser()
                if (!currentUser) {
                    throw new Error("User not authenticated")
                }

                // Fetch tags for this company directly
                const tagsResponse = await client.graphql({
                    query: scopeItemTagsByCompanyID,
                    variables: {
                        companyID: companyId,
                        limit: 100,
                    },
                })

                const fetchedTags = tagsResponse.data.scopeItemTagsByCompanyID.items
                setTags(fetchedTags)
            } catch (err) {
                console.error("Error fetching scope item tags:", err)
                setError("Failed to load tags. Please try again later.")
            } finally {
                setIsLoading(false)
            }
        }

        fetchData()
    }, [client, companyId])

    const filteredTags = tags.filter(
        (tag) =>
            tag.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            (tag.description && tag.description.toLowerCase().includes(searchQuery.toLowerCase())),
    )

    const handleCreateTag = () => {
        router.push(`/secure/companies/${companyId}/scope-item-tags/create`)
    }

    if (error) {
        return (
            <div className="p-6">
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
                    <p>{error}</p>
                </div>
            </div>
        )
    }

    return (
        <div className="p-6 space-y-6">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold">Scope Item Tags</h1>
                <Button onClick={handleCreateTag}>
                    <Plus className="mr-2 h-4 w-4" />
                    Create Tag
                </Button>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Tags</CardTitle>
                    <div className="mt-2">
                        <Input
                            placeholder="Search tags..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="max-w-md"
                        />
                    </div>
                </CardHeader>
                <CardContent>
                    <ScopeItemTagList tags={filteredTags} isLoading={isLoading} companyId={companyId} />
                </CardContent>
            </Card>
        </div>
    )
}


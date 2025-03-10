"use client"

import React from "react"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { generateClient } from "@aws-amplify/api"
import { Amplify } from "aws-amplify"
import awsconfig from "@/aws-exports"
import { getCurrentUser } from "@/lib/auth"
import { getProject, getScopeItemGroup, listScopeItemTags } from "@/graphql/queries"
import { createScopeItem } from "@/graphql/mutations"
import type { CreateScopeItemInput, ScopeItemTag } from "@/API"

import { Button } from "@/components/ui/button"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Loader2, ArrowLeft, Tag } from "lucide-react"

// Form schema
const formSchema = z.object({
    name: z.string().min(2, {
        message: "Name must be at least 2 characters.",
    }),
    description: z.string().optional(),
    category: z.string().optional(),
    costEstimate: z.coerce.number().optional(),
    spendEstimate: z.coerce.number().optional(),
    durationEstimate: z.coerce.number().optional(),
    isCompleted: z.boolean().default(false),
    progress: z.coerce.number().min(0).max(100).optional(),
    tags: z.array(z.string()).optional(),
})

type FormValues = z.infer<typeof formSchema>

export default function CreateScopeItemPage({
                                                params: paramsPromise,
                                                searchParams: searchParamsPromise,
                                            }: {
    params: Promise<{ projectId: string }>
    searchParams: Promise<{ groupId?: string }>
}) {
    const params = React.use(paramsPromise)
    const searchParams = React.use(searchParamsPromise)
    const router = useRouter()
    const [loading, setLoading] = useState(true)
    const [submitting, setSubmitting] = useState(false)
    const [project, setProject] = useState<any>(null)
    const [group, setGroup] = useState<any>(null)
    const [availableTags, setAvailableTags] = useState<ScopeItemTag[]>([])
    const [selectedTags, setSelectedTags] = useState<string[]>([])
    const [client, setClient] = useState<any>(null)
    const [error, setError] = useState<string | null>(null)

    const form = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            description: "",
            category: "",
            costEstimate: undefined,
            spendEstimate: undefined,
            durationEstimate: undefined,
            isCompleted: false,
            progress: 0,
            tags: [],
        },
    })

    // Initialize Amplify and client
    useEffect(() => {
        // Configure Amplify first
        Amplify.configure(awsconfig)
        // Then generate the client
        setClient(generateClient())
    }, [])

    // Fetch data after client is initialized
    useEffect(() => {
        if (!client || !params.projectId) return

        const fetchData = async () => {
            try {
                // Ensure user is authenticated before making API calls
                const currentUser = await getCurrentUser()
                if (!currentUser) {
                    throw new Error("User not authenticated")
                }

                // Fetch project data
                const projectResult = await client.graphql({
                    query: getProject,
                    variables: { id: params.projectId },
                })

                if (projectResult.data?.getProject) {
                    setProject(projectResult.data.getProject)

                    // Fetch available tags for the company
                    const tagsResult = await client.graphql({
                        query: listScopeItemTags,
                        variables: {
                            filter: { companyID: { eq: projectResult.data.getProject.companyID } },
                        },
                    })

                    if (tagsResult.data?.listScopeItemTags?.items) {
                        setAvailableTags(tagsResult.data.listScopeItemTags.items as ScopeItemTag[])
                    }
                }

                // If groupId is provided, fetch group data
                if (searchParams.groupId) {
                    const groupResult = await client.graphql({
                        query: getScopeItemGroup,
                        variables: { id: searchParams.groupId },
                    })

                    if (groupResult.data?.getScopeItemGroup) {
                        setGroup(groupResult.data.getScopeItemGroup)
                    }
                }

                setError(null)
            } catch (err) {
                console.error("Error fetching data:", err)
                setError("Failed to fetch data. Please try again.")
            } finally {
                setLoading(false)
            }
        }

        fetchData()
    }, [client, params.projectId, searchParams.groupId])

    const onSubmit = async (values: FormValues) => {
        if (!client) return

        setSubmitting(true)
        try {
            // Ensure user is authenticated before making API calls
            const currentUser = await getCurrentUser()
            if (!currentUser) {
                throw new Error("User not authenticated")
            }

            // Prepare input for creating scope item
            const input: CreateScopeItemInput = {
                name: values.name,
                description: values.description || null,
                category: values.category || null,
                costEstimate: values.costEstimate || null,
                spendEstimate: values.spendEstimate || null,
                durationEstimate: values.durationEstimate || null,
                isCompleted: values.isCompleted,
                progress: values.progress || 0,
                tags: selectedTags.length > 0 ? selectedTags : null,
                projectID: params.projectId,
                groupID: searchParams.groupId || null,
                projectScopeItemsId: params.projectId,
                scopeItemGroupScopeItemsId: searchParams.groupId || null,
            }

            // Create scope item
            const result = await client.graphql({
                query: createScopeItem,
                variables: { input },
            })

            if (result.data?.createScopeItem) {
                // Get the company ID from the project data
                const companyId = project?.companyID

                if (companyId) {
                    if (searchParams.groupId) {
                        // If we have a group ID, redirect to the group page
                        router.push(
                            `/secure/companies/${companyId}/projects/${params.projectId}/scope-item-groups/${searchParams.groupId}`,
                        )
                    } else {
                        // If no group ID, redirect to the project's scope items page
                        router.push(`/secure/companies/${companyId}/projects/${params.projectId}/scope-items`)
                    }
                } else {
                    // Fallback if company ID is not available
                    router.push(`/secure/projects/${params.projectId}/scope-items`)
                }
            }
        } catch (err) {
            console.error("Error creating scope item:", err)
            setError("Failed to create scope item. Please try again.")
        } finally {
            setSubmitting(false)
        }
    }

    const handleTagToggle = (tagId: string) => {
        setSelectedTags((prev) => {
            if (prev.includes(tagId)) {
                return prev.filter((id) => id !== tagId)
            } else {
                return [...prev, tagId]
            }
        })
    }

    // Update form value when selectedTags changes
    useEffect(() => {
        form.setValue("tags", selectedTags)
    }, [selectedTags, form])

    if (loading) {
        return (
            <div className="flex items-center justify-center h-screen">
                <Loader2 className="h-8 w-8 animate-spin text-primary" />
            </div>
        )
    }

    if (error) {
        return (
            <div className="container mx-auto px-4 py-8">
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 mb-4 rounded" role="alert">
                    <p>{error}</p>
                </div>
                <Button variant="default" onClick={() => router.back()}>
                    Back
                </Button>
            </div>
        )
    }

    return (
        <div className="container mx-auto py-6 max-w-4xl">
            <div className="flex items-center mb-6">
                <Button variant="ghost" size="sm" onClick={() => router.back()} className="mr-2">
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    Back
                </Button>
                <h1 className="text-2xl font-bold">
                    Create Scope Item
                    {group && <span className="text-muted-foreground ml-2">in {group.name}</span>}
                </h1>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Scope Item Details</CardTitle>
                </CardHeader>
                <CardContent>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                            <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Name</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Enter scope item name" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="description"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Description</FormLabel>
                                        <FormControl>
                                            <Textarea placeholder="Enter scope item description" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="category"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Category</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Enter category" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <FormField
                                    control={form.control}
                                    name="costEstimate"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Cost Estimate</FormLabel>
                                            <FormControl>
                                                <Input type="number" placeholder="0.00" {...field} value={field.value || ""} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="spendEstimate"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Spend Estimate</FormLabel>
                                            <FormControl>
                                                <Input type="number" placeholder="0.00" {...field} value={field.value || ""} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="durationEstimate"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Duration Estimate (days)</FormLabel>
                                            <FormControl>
                                                <Input type="number" placeholder="0" {...field} value={field.value || ""} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>

                            <FormField
                                control={form.control}
                                name="progress"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Progress (%)</FormLabel>
                                        <FormControl>
                                            <Input type="number" min="0" max="100" placeholder="0" {...field} value={field.value || ""} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="isCompleted"
                                render={({ field }) => (
                                    <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                                        <FormControl>
                                            <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                                        </FormControl>
                                        <div className="space-y-1 leading-none">
                                            <FormLabel>Mark as completed</FormLabel>
                                            <FormDescription>This will mark the scope item as completed.</FormDescription>
                                        </div>
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="tags"
                                render={() => (
                                    <FormItem>
                                        <FormLabel className="flex items-center">
                                            <Tag className="h-4 w-4 mr-2" />
                                            Tags
                                        </FormLabel>
                                        <div className="mt-2">
                                            {availableTags.length > 0 ? (
                                                <div className="flex flex-wrap gap-2">
                                                    {availableTags.map((tag) => (
                                                        <Badge
                                                            key={tag.id}
                                                            variant={selectedTags.includes(tag.id) ? "default" : "outline"}
                                                            className="cursor-pointer"
                                                            style={{
                                                                backgroundColor: selectedTags.includes(tag.id) ? tag.color || undefined : undefined,
                                                                borderColor: tag.color || undefined,
                                                            }}
                                                            onClick={() => handleTagToggle(tag.id)}
                                                        >
                                                            {tag.name}
                                                        </Badge>
                                                    ))}
                                                </div>
                                            ) : (
                                                <p className="text-sm text-muted-foreground">
                                                    No tags available for this company. Create tags in the company settings.
                                                </p>
                                            )}
                                        </div>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <div className="flex justify-end">
                                <Button type="submit" disabled={submitting || !client}>
                                    {submitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                                    Create Scope Item
                                </Button>
                            </div>
                        </form>
                    </Form>
                </CardContent>
            </Card>
        </div>
    )
}


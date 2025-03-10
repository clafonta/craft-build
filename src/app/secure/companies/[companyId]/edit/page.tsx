"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useParams, useRouter } from "next/navigation"
import { getCurrentUser } from "@/lib/auth"
import { generateClient } from "@aws-amplify/api"
import { getCompany } from "@/graphql/queries"
import { updateCompany } from "@/graphql/mutations"
import type * as APITypes from "@/API"
import { Amplify } from "aws-amplify"
import awsconfig from "@/aws-exports"

interface CompanyInput {
    id: string
    name: string
    website?: string | null
}

export default function EditCompanyPage() {
    const params = useParams()
    const router = useRouter()
    const [formData, setFormData] = useState<CompanyInput>({
        id: "",
        name: "",
        website: "",
    })
    const [loading, setLoading] = useState(true)
    const [saving, setSaving] = useState(false)
    const [error, setError] = useState<string | null>(null)
    const [client, setClient] = useState<any>(null)

    useEffect(() => {
        // Configure Amplify first
        Amplify.configure(awsconfig)
        // Then generate the client
        setClient(generateClient())
    }, [])

    useEffect(() => {
        if (client && params.companyId) {
            fetchCompany(params.companyId as string)
        }
    }, [client, params.companyId])

    async function fetchCompany(companyId: string) {
        if (!client) return

        setLoading(true)
        try {
            // Ensure user is authenticated before making API calls
            const currentUser = await getCurrentUser()
            if (!currentUser) {
                throw new Error("User not authenticated")
            }

            const response = (await client.graphql({
                query: getCompany,
                variables: { id: companyId },
            })) as { data: APITypes.GetCompanyQuery }

            const companyData = response.data.getCompany
            if (!companyData) {
                setError("Company not found")
            } else {
                setFormData({
                    id: companyData.id,
                    name: companyData.name,
                    website: companyData.website || "",
                })
                setError(null)
            }
        } catch (err) {
            console.error("Error fetching company:", err)
            setError("Failed to fetch company details. Please try again.")
        } finally {
            setLoading(false)
        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!client) return

        setSaving(true)
        try {
            // Ensure user is authenticated before making API calls
            const currentUser = await getCurrentUser()
            if (!currentUser) {
                throw new Error("User not authenticated")
            }

            const input = {
                id: formData.id,
                name: formData.name,
                website: formData.website || null,
            }

            await client.graphql({
                query: updateCompany,
                variables: { input },
            })

            // Navigate back to company details page
            router.push(`/secure/companies/${formData.id}`)
        } catch (err) {
            console.error("Error updating company:", err)
            setError("Failed to update company. Please try again.")
            setSaving(false)
        }
    }

    function handleCancel() {
        router.push(`/secure/companies/${params.companyId}`)
    }

    if (loading) {
        return (
            <div className="container mx-auto px-4 py-8">
                <div className="text-center py-4">Loading company details...</div>
            </div>
        )
    }

    if (error) {
        return (
            <div className="container mx-auto px-4 py-8">
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 mb-4 rounded" role="alert">
                    <p>{error}</p>
                </div>
                <button onClick={handleCancel} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Back to Company
                </button>
            </div>
        )
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-bold">Edit Company</h1>
                <button onClick={handleCancel} className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
                    Cancel
                </button>
            </div>

            <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <form onSubmit={handleSubmit}>
                    <div className="mb-6">
                        <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
                            Company Name*
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            required
                        />
                    </div>

                    <div className="mb-6">
                        <label htmlFor="website" className="block text-gray-700 text-sm font-bold mb-2">
                            Website
                        </label>
                        <input
                            type="url"
                            id="website"
                            name="website"
                            value={formData.website || ""}
                            onChange={handleChange}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="https://example.com"
                        />
                        <p className="text-gray-600 text-xs italic mt-1">Optional. Include https:// for external links.</p>
                    </div>

                    <div className="flex items-center justify-end">
                        <button
                            type="button"
                            onClick={handleCancel}
                            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mr-2"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                            disabled={saving}
                        >
                            {saving ? "Saving..." : "Save Changes"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}


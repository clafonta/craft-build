"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { getCurrentUser } from "@/lib/auth"
import { generateClient } from "@aws-amplify/api"
import { createCompany, updateCompany, deleteCompany } from "@/graphql/mutations"
import { listCompanies } from "@/graphql/queries"
import type * as APITypes from "@/API"
import Link from "next/link"

import { Amplify } from "aws-amplify"
import awsconfig from "@/aws-exports"

// Initialize Amplify
// Amplify.configure(awsconfig) // Moved inside useEffect

interface Company {
    id: string
    name: string
    website?: string | null
    createdAt: string
    updatedAt: string
}

export default function CompaniesPage() {
    const [companies, setCompanies] = useState<Company[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    // Form states
    const [showForm, setShowForm] = useState(false)
    const [formMode, setFormMode] = useState<"create" | "update">("create")
    const [currentCompany, setCurrentCompany] = useState<Company | null>(null)
    const [formData, setFormData] = useState({
        id: "",
        name: "",
        website: "",
    })

    const [userData, setUserData] = useState<any>(null)
    const [client, setClient] = useState<any>(null)

    useEffect(() => {
        // Configure Amplify first
        Amplify.configure(awsconfig)
        // Then generate the client
        setClient(generateClient())
    }, [])

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const user = await getCurrentUser()
                setUserData(user)
            } catch (error) {
                console.error("Error fetching user data", error)
            }
        }

        fetchUserData()
    }, [])

    // Initialize API client
    // const client = generateClient() // Moved inside useEffect

    // Fetch companies on component mount
    useEffect(() => {
        if (userData && client) {
            fetchCompanies()
        }
    }, [userData, client])

    async function fetchCompanies() {
        if (!client) return

        setLoading(true)
        try {
            // Ensure user is authenticated before making API calls
            const currentUser = await getCurrentUser()
            if (!currentUser) {
                throw new Error("User not authenticated")
            }

            const response = (await client.graphql({
                query: listCompanies,
                variables: { limit: 100 },
            })) as { data: APITypes.ListCompaniesQuery }

            const companiesData = response.data.listCompanies?.items || []
            setCompanies(companiesData as Company[])
            setError(null)
        } catch (err) {
            console.error("Error fetching companies:", err)
            setError("Failed to fetch companies. Please try again.")
        } finally {
            setLoading(false)
        }
    }

    async function handleCreateCompany(e: React.FormEvent) {
        e.preventDefault()
        if (!client) return

        setLoading(true)

        try {
            const input = {
                name: formData.name,
                website: formData.website || null,
            }

            await client.graphql({
                query: createCompany,
                variables: { input },
            })

            setFormData({ id: "", name: "", website: "" })
            setShowForm(false)
            fetchCompanies()
            setError(null)
        } catch (err) {
            console.error("Error creating company:", err)
            setError("Failed to create company. Please try again.")
        } finally {
            setLoading(false)
        }
    }

    async function handleUpdateCompany(e: React.FormEvent) {
        e.preventDefault()
        if (!client) return

        setLoading(true)

        try {
            const input = {
                id: formData.id,
                name: formData.name,
                website: formData.website || null,
            }

            await client.graphql({
                query: updateCompany,
                variables: { input },
            })

            setFormData({ id: "", name: "", website: "" })
            setShowForm(false)
            fetchCompanies()
            setError(null)
        } catch (err) {
            console.error("Error updating company:", err)
            setError("Failed to update company. Please try again.")
        } finally {
            setLoading(false)
        }
    }

    async function handleDeleteCompany(id: string) {
        if (!client) return

        if (!window.confirm("Are you sure you want to delete this company?")) {
            return
        }

        setLoading(true)
        try {
            await client.graphql({
                query: deleteCompany,
                variables: { input: { id } },
            })

            fetchCompanies()
            setError(null)
        } catch (err) {
            console.error("Error deleting company:", err)
            setError("Failed to delete company. Please try again.")
        } finally {
            setLoading(false)
        }
    }

    function handleEditCompany(company: Company) {
        setFormMode("update")
        setFormData({
            id: company.id,
            name: company.name,
            website: company.website || "",
        })
        setCurrentCompany(company)
        setShowForm(true)
    }

    function handleNewCompanyClick() {
        setFormMode("create")
        setFormData({ id: "", name: "", website: "" })
        setCurrentCompany(null)
        setShowForm(true)
    }

    function handleCancelForm() {
        setShowForm(false)
        setFormData({ id: "", name: "", website: "" })
        setCurrentCompany(null)
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6">Companies</h1>

            {error && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 mb-4 rounded" role="alert">
                    <p>{error}</p>
                </div>
            )}

            <div className="mb-6">
                {!showForm ? (
                    <button
                        onClick={handleNewCompanyClick}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    >
                        Add New Company
                    </button>
                ) : (
                    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                        <h2 className="text-xl font-bold mb-4">{formMode === "create" ? "Add New Company" : "Edit Company"}</h2>

                        <form onSubmit={formMode === "create" ? handleCreateCompany : handleUpdateCompany}>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                                    Company Name
                                </label>
                                <input
                                    id="name"
                                    type="text"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    required
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                />
                            </div>

                            <div className="mb-6">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="website">
                                    Website (optional)
                                </label>
                                <input
                                    id="website"
                                    type="url"
                                    value={formData.website}
                                    onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    placeholder="https://example.com"
                                />
                            </div>

                            <div className="flex items-center justify-between">
                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline disabled:opacity-50"
                                >
                                    {loading ? "Processing..." : formMode === "create" ? "Create Company" : "Update Company"}
                                </button>
                                <button
                                    type="button"
                                    onClick={handleCancelForm}
                                    className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                >
                                    Cancel
                                </button>
                            </div>
                        </form>
                    </div>
                )}
            </div>

            {loading && !showForm ? (
                <div className="text-center py-4">Loading companies...</div>
            ) : (
                <div className="bg-white shadow-md rounded overflow-hidden">
                    <table className="min-w-full bg-white">
                        <thead>
                        <tr>
                            <th className="px-6 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                Company Name
                            </th>
                            <th className="px-6 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                Website
                            </th>
                            <th className="px-6 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                Created At
                            </th>
                            <th className="px-6 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                Actions
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                        {companies.length === 0 ? (
                            <tr>
                                <td colSpan={4} className="px-6 py-4 text-center">
                                    No companies found. Create your first company to get started.
                                </td>
                            </tr>
                        ) : (
                            companies.map((company) => (
                                <tr key={company.id}>
                                    <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                                        <Link href={`/secure/companies/${company.id}`} className="text-blue-600 hover:text-blue-900">
                                            {company.name}
                                        </Link>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                                        {company.website ? (
                                            <a
                                                href={company.website}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-blue-500 hover:text-blue-700"
                                            >
                                                {company.website}
                                            </a>
                                        ) : (
                                            <span className="text-gray-500">-</span>
                                        )}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                                        <div className="text-sm text-gray-500">{new Date(company.createdAt).toLocaleDateString()}</div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200 text-sm">
                                        <button
                                            onClick={() => handleEditCompany(company)}
                                            className="text-indigo-600 hover:text-indigo-900 mr-4"
                                        >
                                            Edit
                                        </button>
                                        <button onClick={() => handleDeleteCompany(company.id)}
                                            className="text-red-600 hover:text-red-900"
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))
                        )}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    )
}


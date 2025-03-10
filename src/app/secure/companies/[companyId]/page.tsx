"use client"

import { useState, useEffect } from "react"
import { useParams, useRouter } from "next/navigation"
import { getCurrentUser } from "@/lib/auth"
import { generateClient } from "@aws-amplify/api"
import { getCompany } from "@/graphql/queries"
import type * as APITypes from "@/API"
import Link from "next/link"

import { Amplify } from "aws-amplify"
import awsconfig from "@/aws-exports"

interface Company {
    id: string
    name: string
    website?: string | null
    createdAt: string
    updatedAt: string
}

export default function CompanyDetailPage() {
    const params = useParams()
    const router = useRouter()
    const [company, setCompany] = useState<Company | null>(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)
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

    useEffect(() => {
        if (userData && client && params.companyId) {
            fetchCompany(params.companyId as string)
        }
    }, [userData, client, params.companyId])

    async function fetchCompany(companyId: string) {
        if (!client) return

        setLoading(true)
        try {
            // Ensure user is authenticated before making API calls
            const currentUser = await getCurrentUser()
            if (!currentUser) {
                throw new Error("User not authenticated")
            }

            // Fix: Change variable name from companyId to id
            const response = (await client.graphql({
                query: getCompany,
                variables: { id: companyId },
            })) as { data: APITypes.GetCompanyQuery }

            const companyData = response.data.getCompany
            if (!companyData) {
                setError("Company not found")
                setCompany(null)
            } else {
                setCompany(companyData as Company)
                setError(null)
            }
        } catch (err) {
            console.error("Error fetching company:", err)
            setError("Failed to fetch company details. Please try again.")
        } finally {
            setLoading(false)
        }
    }

    function handleBack() {
        router.push("/secure/companies")
    }

    if (loading) {
        return (
            <div className="container mx-auto px-4 py-8">
                <div className="text-center py-4">Loading company details...</div>
            </div>
        )
    }

    if (error || !company) {
        return (
            <div className="container mx-auto px-4 py-8">
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 mb-4 rounded" role="alert">
                    <p>{error || "Company not found"}</p>
                </div>
                <button onClick={handleBack} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Back to Companies
                </button>
            </div>
        )
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-bold">{company.name}</h1>
                <button onClick={handleBack} className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
                    Back to Companies
                </button>
            </div>

            <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <h2 className="text-xl font-semibold mb-4">Company Information</h2>
                        <div className="space-y-3">
                            <div>
                                <p className="text-sm text-gray-600">Name</p>
                                <p className="font-medium">{company.name}</p>
                            </div>
                            <div>
                                <p className="text-sm text-gray-600">Website</p>
                                <p className="font-medium">
                                    {company.website ? (
                                        <a
                                            href={company.website.startsWith("http") ? company.website : `https://${company.website}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-blue-600 hover:text-blue-800"
                                        >
                                            {company.website}
                                        </a>
                                    ) : (
                                        "-"
                                    )}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h2 className="text-xl font-semibold mb-4">Additional Information</h2>
                        <div className="space-y-3">
                            <div>
                                <p className="text-sm text-gray-600">Created At</p>
                                <p className="font-medium">{new Date(company.createdAt).toLocaleString()}</p>
                            </div>
                            <div>
                                <p className="text-sm text-gray-600">Last Updated</p>
                                <p className="font-medium">{new Date(company.updatedAt).toLocaleString()}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-6 flex justify-end">
                    <Link
                        href={`/secure/companies/${company.id}/edit`}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
                    >
                        Edit Company
                    </Link>
                    <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Delete Company</button>
                </div>
            </div>

            <div className="mt-8">
                <h2 className="text-2xl font-bold mb-4">Related Information</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white shadow-md rounded p-6">
                        <h3 className="text-xl font-semibold mb-3">People</h3>
                        <p className="text-gray-600 mb-4">People associated with this company</p>
                        <Link
                            href={`/secure/companies/${company.id}/people`}
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-block"
                        >
                            View People
                        </Link>
                    </div>

                    <div className="bg-white shadow-md rounded p-6">
                        <h3 className="text-xl font-semibold mb-3">Projects</h3>
                        <p className="text-gray-600 mb-4">Projects managed by this company</p>
                        <Link
                            href={`/secure/companies/${company.id}/projects`}
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-block"
                        >
                            View Projects
                        </Link>
                    </div>

                    <div className="bg-white shadow-md rounded p-6">
                        <h3 className="text-xl font-semibold mb-3">Scope Item Tags</h3>
                        <p className="text-gray-600 mb-4">Manage scope item tags for this company</p>
                        <Link
                            href={`/secure/companies/${company.id}/scope-item-tags`}
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-block"
                        >
                            Manage Tags
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}


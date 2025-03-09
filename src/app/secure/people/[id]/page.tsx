"use client"

import { useState, useEffect } from "react"
import { useParams, useRouter } from "next/navigation"
import { getCurrentUser } from "@/lib/auth"
import { generateClient } from "@aws-amplify/api"
import { getPerson } from "@/graphql/queries"
import type * as APITypes from "@/API"
import Link from "next/link"

import { Amplify } from "aws-amplify"
import awsconfig from "@/aws-exports"

interface Person {
    id: string
    firstName?: string | null
    lastName?: string | null
    email: string
    phone?: string | null
    status?: string | null
    displayName?: string | null
    jobSkills?: Array<string | null> | null
    notes?: string | null
    timezone?: string | null
    language?: string | null
    lastActive?: string | null
    createdAt: string
    updatedAt: string
}

export default function PersonDetailPage() {
    const params = useParams()
    const router = useRouter()
    const [person, setPerson] = useState<Person | null>(null)
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
        if (userData && client && params.id) {
            fetchPerson(params.id as string)
        }
    }, [userData, client, params.id])

    async function fetchPerson(id: string) {
        if (!client) return

        setLoading(true)
        try {
            // Ensure user is authenticated before making API calls
            const currentUser = await getCurrentUser()
            if (!currentUser) {
                throw new Error("User not authenticated")
            }

            const response = (await client.graphql({
                query: getPerson,
                variables: { id },
            })) as { data: APITypes.GetPersonQuery }

            const personData = response.data.getPerson
            if (!personData) {
                setError("Person not found")
                setPerson(null)
            } else {
                setPerson(personData as Person)
                setError(null)
            }
        } catch (err) {
            console.error("Error fetching person:", err)
            setError("Failed to fetch person details. Please try again.")
        } finally {
            setLoading(false)
        }
    }

    function handleBack() {
        router.push("/people")
    }

    if (loading) {
        return (
            <div className="container mx-auto px-4 py-8">
                <div className="text-center py-4">Loading person details...</div>
            </div>
        )
    }

    if (error || !person) {
        return (
            <div className="container mx-auto px-4 py-8">
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 mb-4 rounded" role="alert">
                    <p>{error || "Person not found"}</p>
                </div>
                <button onClick={handleBack} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Back to People
                </button>
            </div>
        )
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-bold">
                    {person.displayName || `${person.firstName || ""} ${person.lastName || ""}`.trim() || "Unnamed Person"}
                </h1>
                <button onClick={handleBack} className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
                    Back to People
                </button>
            </div>

            <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <h2 className="text-xl font-semibold mb-4">Basic Information</h2>
                        <div className="space-y-3">
                            <div>
                                <p className="text-sm text-gray-600">First Name</p>
                                <p className="font-medium">{person.firstName || "-"}</p>
                            </div>
                            <div>
                                <p className="text-sm text-gray-600">Last Name</p>
                                <p className="font-medium">{person.lastName || "-"}</p>
                            </div>
                            <div>
                                <p className="text-sm text-gray-600">Email</p>
                                <p className="font-medium">
                                    <a href={`mailto:${person.email}`} className="text-blue-600 hover:text-blue-800">
                                        {person.email}
                                    </a>
                                </p>
                            </div>
                            <div>
                                <p className="text-sm text-gray-600">Phone</p>
                                <p className="font-medium">
                                    {person.phone ? (
                                        <a href={`tel:${person.phone}`} className="text-blue-600 hover:text-blue-800">
                                            {person.phone}
                                        </a>
                                    ) : (
                                        "-"
                                    )}
                                </p>
                            </div>
                            <div>
                                <p className="text-sm text-gray-600">Status</p>
                                <p className="font-medium">
                  <span
                      className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          person.status === "ACTIVE"
                              ? "bg-green-100 text-green-800"
                              : person.status === "INACTIVE"
                                  ? "bg-red-100 text-red-800"
                                  : "bg-yellow-100 text-yellow-800"
                      }`}
                  >
                    {person.status || "Unknown"}
                  </span>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h2 className="text-xl font-semibold mb-4">Additional Information</h2>
                        <div className="space-y-3">
                            <div>
                                <p className="text-sm text-gray-600">Job Skills</p>
                                <div className="flex flex-wrap gap-1 mt-1">
                                    {person.jobSkills && person.jobSkills.length > 0 ? (
                                        person.jobSkills.map((skill, index) => (
                                            <span key={index} className="bg-gray-200 px-2 py-1 text-xs rounded">
                        {skill}
                      </span>
                                        ))
                                    ) : (
                                        <span className="text-gray-500">-</span>
                                    )}
                                </div>
                            </div>
                            <div>
                                <p className="text-sm text-gray-600">Timezone</p>
                                <p className="font-medium">{person.timezone || "-"}</p>
                            </div>
                            <div>
                                <p className="text-sm text-gray-600">Language</p>
                                <p className="font-medium">{person.language || "-"}</p>
                            </div>
                            <div>
                                <p className="text-sm text-gray-600">Last Active</p>
                                <p className="font-medium">{person.lastActive ? new Date(person.lastActive).toLocaleString() : "-"}</p>
                            </div>
                            <div>
                                <p className="text-sm text-gray-600">Created At</p>
                                <p className="font-medium">{new Date(person.createdAt).toLocaleString()}</p>
                            </div>
                        </div>
                    </div>
                </div>

                {person.notes && (
                    <div className="mt-6">
                        <h2 className="text-xl font-semibold mb-2">Notes</h2>
                        <div className="bg-gray-50 p-4 rounded">
                            <p className="whitespace-pre-line">{person.notes}</p>
                        </div>
                    </div>
                )}

                <div className="mt-6 flex justify-end">
                    <Link
                        href={`/people/${person.id}/edit`}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
                    >
                        Edit Person
                    </Link>
                </div>
            </div>
        </div>
    )
}


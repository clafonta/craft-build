"use client"

import { useState, useEffect } from "react"
import { useParams, useRouter } from "next/navigation"
import { getCurrentUser } from "@/lib/auth"
import { generateClient } from "@aws-amplify/api"
import {
    getCompany,
    listPeople,
    listPersonCompanies,
    personCompanyRolesByPersonID
} from "@/graphql/queries"
import {
    createPersonCompanies,
    deletePersonCompanies,
    createPersonCompanyRole,
    deletePersonCompanyRole
} from "@/graphql/mutations"
import type * as APITypes from "@/API"
import { CompanyRoleType } from "@/API"
import Link from "next/link"

import { Amplify } from "aws-amplify"
import awsconfig from "@/aws-exports"

interface Company {
    id: string
    name: string
    website?: string | null
}

interface Person {
    id: string
    firstName?: string | null
    lastName?: string | null
    email: string
    phone?: string | null
    status?: string | null
    displayName?: string | null
    jobSkills?: Array<string | null> | null
}

interface PersonCompany {
    id: string
    personId: string
    companyId: string
    person?: Person
    // Make person optional to match API response
}

export default function CompanyPeoplePage() {
    const params = useParams()
    const router = useRouter()
    const companyId = params.id as string

    const [company, setCompany] = useState<Company | null>(null)
    const [companyPeople, setCompanyPeople] = useState<Person[]>([])
    const [availablePeople, setAvailablePeople] = useState<Person[]>([])
    const [personCompanies, setPersonCompanies] = useState<PersonCompany[]>([])
    const [personRoles, setPersonRoles] = useState<{[personId: string]: CompanyRoleType[]}>({})
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)
    const [userData, setUserData] = useState<any>(null)
    const [client, setClient] = useState<any>(null)
    const [selectedPersonId, setSelectedPersonId] = useState<string>("")
    const [actionLoading, setActionLoading] = useState(false)
    const [selectedRole, setSelectedRole] = useState<CompanyRoleType>(CompanyRoleType.COMPANY_USER)

    // Role options for the dropdown
    const roleOptions = [
        { value: CompanyRoleType.COMPANY_USER, label: 'Company User' },
        { value: CompanyRoleType.COMPANY_ADMIN, label: 'Company Admin' }
    ]

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
                setError("Failed to authenticate user. Please try logging in again.")
            }
        }

        // Call the async function and handle any errors
        fetchUserData().catch(error => {
            console.error("Unhandled error in fetchUserData:", error);
            setError("An unexpected error occurred. Please refresh and try again.");
        });
    }, [])

    useEffect(() => {
        if (userData && client && companyId) {
            const fetchData = async () => {
                await fetchCompanyData();
                await fetchPeopleData();
            };

            // Call the async function and handle any errors
            fetchData().catch(error => {
                console.error("Error in data fetching:", error);
                setError("Failed to load data. Please try again.");
            });
        }
    }, [userData, client, companyId])

    async function fetchCompanyData() {
        if (!client) return

        try {
            // Ensure user is authenticated before making API calls
            const currentUser = await getCurrentUser()
            if (!currentUser) {
                setError("User not authenticated")
                return
            }

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
        }
    }

    async function fetchPeopleData() {
        if (!client) return

        setLoading(true)
        try {
            // Ensure user is authenticated before making API calls
            const currentUser = await getCurrentUser()
            if (!currentUser) {
                setError("User not authenticated")
                return
            }

            // Fetch all people
            const peopleResponse = (await client.graphql({
                query: listPeople,
                variables: { limit: 1000 },
            })) as { data: APITypes.ListPeopleQuery }

            const allPeople = peopleResponse.data.listPeople?.items || []

            // Fetch person-company relationships
            const personCompaniesResponse = (await client.graphql({
                query: listPersonCompanies,
                variables: {
                    filter: { companyId: { eq: companyId } },
                    limit: 1000,
                },
            })) as { data: APITypes.ListPersonCompaniesQuery }

            const personCompanyItems = personCompaniesResponse.data.listPersonCompanies?.items || []

            // Safely transform API response to match our PersonCompany interface
            const filteredItems = personCompanyItems
                .filter(item => item && item !== null)
                .map(item => ({
                    id: item!.id,
                    personId: item!.personId,
                    companyId: item!.companyId,
                    // Other properties can be included as needed
                }));

            setPersonCompanies(filteredItems as PersonCompany[])

            // Get IDs of people already associated with this company
            const associatedPersonIds = filteredItems.map((item) => item.personId)

            // Fetch role information for people in this company
            const roles: {[personId: string]: CompanyRoleType[]} = {};

            // Batch requests or use Promise.all for better performance
            for (const personId of associatedPersonIds) {
                try {
                    const rolesResponse = await client.graphql({
                        query: personCompanyRolesByPersonID,
                        variables: {
                            personID: personId,
                            filter: {
                                companyID: { eq: companyId },
                                isActive: { eq: true },
                            },
                        },
                    }) as { data: APITypes.PersonCompanyRolesByPersonIDQuery };

                    const personRoles = rolesResponse.data.personCompanyRolesByPersonID?.items || [];
                    if (personRoles.length > 0) {
                        // Combine all roles from all records (usually there will be just one active record)
                        roles[personId] = personRoles.flatMap(role => role?.jobRoles || [])
                            .filter(role => role !== null) as CompanyRoleType[];
                    }
                } catch (err) {
                    console.error(`Error fetching roles for person ${personId}:`, err);
                    // Continue with other people even if one fails
                }
            }

            setPersonRoles(roles);

            // Filter people into those associated with the company and those not
            const companyPeopleData = allPeople.filter((person) => person && associatedPersonIds.includes(person.id))

            const otherPeopleData = allPeople.filter((person) => person && !associatedPersonIds.includes(person.id))

            setCompanyPeople(companyPeopleData as Person[])
            setAvailablePeople(otherPeopleData as Person[])
            setError(null)
        } catch (err) {
            console.error("Error fetching people:", err)
            setError("Failed to fetch people. Please try again.")
        } finally {
            setLoading(false)
        }
    }

    async function handleAddPersonToCompany() {
        if (!client || !selectedPersonId) return

        setActionLoading(true)
        try {
            // First, create the person-company relationship
            await client.graphql({
                query: createPersonCompanies,
                variables: {
                    input: {
                        personId: selectedPersonId,
                        companyId: companyId,
                    },
                },
            })

            // Then, create a company role for the person with the selected role
            await client.graphql({
                query: createPersonCompanyRole,
                variables: {
                    input: {
                        personID: selectedPersonId,
                        companyID: companyId,
                        jobRoles: [selectedRole],
                        isActive: true,
                        // startDate omitted to fix the "Variable 'startDate' has an invalid value" error
                    },
                },
            })

            // Refresh data
            await fetchPeopleData()
            setSelectedPersonId("")
        } catch (err) {
            console.error("Error adding person to company:", err)
            setError("Failed to add person to company. Please try again.")
        } finally {
            setActionLoading(false)
        }
    }

    async function handleRemovePersonFromCompany(personId: string) {
        if (!client) return

        if (!window.confirm("Are you sure you want to remove this person from the company?")) {
            return
        }

        setActionLoading(true)
        try {
            // Find the PersonCompanies record to delete
            const relationshipToDelete = personCompanies.find((pc) => pc.personId === personId && pc.companyId === companyId)

            if (!relationshipToDelete) {
                setError("Relationship not found")
                return
            }

            // Before deleting the person-company relationship, find and delete any associated company roles
            // Query for all PersonCompanyRole records for this person and company
            const personCompanyRolesResponse = await client.graphql({
                query: personCompanyRolesByPersonID,
                variables: {
                    personID: personId,
                    filter: {
                        companyID: { eq: companyId }
                    }
                }
            }) as { data: APITypes.PersonCompanyRolesByPersonIDQuery }

            const personCompanyRoleItems = personCompanyRolesResponse.data.personCompanyRolesByPersonID?.items || []

            // Delete each company role found
            for (const role of personCompanyRoleItems) {
                if (role && role.id) {
                    await client.graphql({
                        query: deletePersonCompanyRole,
                        variables: {
                            input: {
                                id: role.id
                            }
                        }
                    })
                }
            }

            // Delete the person-company relationship
            await client.graphql({
                query: deletePersonCompanies,
                variables: {
                    input: {
                        id: relationshipToDelete.id,
                    },
                },
            })

            // Refresh data
            await fetchPeopleData()
        } catch (err) {
            console.error("Error removing person from company:", err)
            setError("Failed to remove person from company. Please try again.")
        } finally {
            setActionLoading(false)
        }
    }

    async function handleToggleAdminRole(personId: string, isCurrentlyAdmin: boolean) {
        if (!client) return

        setActionLoading(true)
        try {
            // Find existing roles for this person
            const rolesResponse = await client.graphql({
                query: personCompanyRolesByPersonID,
                variables: {
                    personID: personId,
                    filter: {
                        companyID: { eq: companyId },
                        isActive: { eq: true },
                    },
                },
            }) as { data: APITypes.PersonCompanyRolesByPersonIDQuery };

            const existingRoles = rolesResponse.data.personCompanyRolesByPersonID?.items || [];

            if (existingRoles.length > 0) {
                // If there's an existing role entry, update it
                const roleEntry = existingRoles[0];
                if (roleEntry && roleEntry.id) {
                    // Delete the existing role entry
                    await client.graphql({
                        query: deletePersonCompanyRole,
                        variables: {
                            input: {
                                id: roleEntry.id
                            }
                        }
                    });
                }
            }

            // Create a new role entry with the updated role
            const newRole = isCurrentlyAdmin
                ? CompanyRoleType.COMPANY_USER  // If they were admin, make them a regular user
                : CompanyRoleType.COMPANY_ADMIN; // If they were a regular user, make them admin

            await client.graphql({
                query: createPersonCompanyRole,
                variables: {
                    input: {
                        personID: personId,
                        companyID: companyId,
                        jobRoles: [newRole],
                        isActive: true,
                    },
                },
            });

            // Refresh the people data to show the updated roles
            await fetchPeopleData();

        } catch (err) {
            console.error("Error toggling admin role:", err);
            setError("Failed to update user role. Please try again.");
        } finally {
            setActionLoading(false);
        }
    }

    function handleBack() {
        router.push(`/companies/${companyId}`)
    }

    function getPersonDisplayName(person: Person) {
        return person.displayName || `${person.firstName || ""} ${person.lastName || ""}`.trim() || person.email
    }

    if (loading && !company) {
        return (
            <div className="container mx-auto px-4 py-8">
                <div className="text-center py-4">Loading company and people data...</div>
            </div>
        )
    }

    if (error && !company) {
        return (
            <div className="container mx-auto px-4 py-8">
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 mb-4 rounded" role="alert">
                    <p>{error}</p>
                </div>
                <button onClick={handleBack} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Back to Company
                </button>
            </div>
        )
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="flex justify-between items-center mb-6">
                <div>
                    <h1 className="text-3xl font-bold">People at {company?.name}</h1>
                    <p className="text-gray-600 mt-1">Manage people associated with this company</p>
                </div>
                <button onClick={handleBack} className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
                    Back to Company
                </button>
            </div>

            {error && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 mb-4 rounded" role="alert">
                    <p>{error}</p>
                </div>
            )}

            <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-8">
                <h2 className="text-xl font-semibold mb-4">Add Person to Company</h2>

                <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex-grow">
                        <select
                            value={selectedPersonId}
                            onChange={(e) => setSelectedPersonId(e.target.value)}
                            className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            disabled={availablePeople.length === 0}
                        >
                            <option value="">Select a person to add...</option>
                            {availablePeople.map((person) => (
                                <option key={person.id} value={person.id}>
                                    {getPersonDisplayName(person)}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="w-64">
                        <select
                            value={selectedRole}
                            onChange={(e) => setSelectedRole(e.target.value as CompanyRoleType)}
                            className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        >
                            {roleOptions.map((option) => (
                                <option key={option.value} value={option.value}>
                                    {option.label}
                                </option>
                            ))}
                        </select>
                    </div>
                    <button
                        onClick={handleAddPersonToCompany}
                        disabled={!selectedPersonId || actionLoading}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:opacity-50"
                    >
                        {actionLoading ? "Adding..." : "Add to Company"}
                    </button>
                </div>

                {availablePeople.length === 0 && !loading && (
                    <p className="text-gray-600 mt-2">No available people to add. Create new people from the People page.</p>
                )}
            </div>

            <div className="bg-white shadow-md rounded overflow-hidden">
                <h2 className="text-xl font-semibold p-6 border-b">People in this Company</h2>

                {loading ? (
                    <div className="text-center py-4">Loading people...</div>
                ) : companyPeople.length === 0 ? (
                    <div className="p-6 text-center text-gray-600">No people associated with this company yet.</div>
                ) : (
                    <table className="min-w-full bg-white">
                        <thead>
                        <tr>
                            <th className="px-6 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                Name
                            </th>
                            <th className="px-6 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                Email
                            </th>
                            <th className="px-6 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                Phone
                            </th>
                            <th className="px-6 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                Status
                            </th>
                            <th className="px-6 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                Role
                            </th>
                            <th className="px-6 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                Actions
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                        {companyPeople.map((person) => (
                            <tr key={person.id}>
                                <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                                    <Link href={`/people/${person.id}`} className="text-blue-600 hover:text-blue-900">
                                        {getPersonDisplayName(person)}
                                    </Link>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                                    <a href={`mailto:${person.email}`} className="text-blue-500 hover:text-blue-700">
                                        {person.email}
                                    </a>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                                    {person.phone ? (
                                        <a href={`tel:${person.phone}`} className="text-blue-500 hover:text-blue-700">
                                            {person.phone}
                                        </a>
                                    ) : (
                                        <span className="text-gray-500">-</span>
                                    )}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                    <span
                        className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                            person.status === "ACTIVE"
                                ? "bg-green-100 text-green-800"
                                : person.status === "INACTIVE"
                                    ? "bg-red-100 text-red-800"
                                    : "bg-yellow-100 text-yellow-800"
                        }`}
                    >
                      {person.status || "Unknown"}
                    </span>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                                    <div className="flex items-center space-x-2">
                                        {personRoles[person.id]?.includes(CompanyRoleType.COMPANY_ADMIN) ? (
                                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                                                Admin
                                            </span>
                                        ) : (
                                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-100 text-gray-800">
                                                User
                                            </span>
                                        )}
                                        <button
                                            onClick={() => handleToggleAdminRole(
                                                person.id,
                                                personRoles[person.id]?.includes(CompanyRoleType.COMPANY_ADMIN) || false
                                            )}
                                            disabled={actionLoading}
                                            className="text-blue-600 hover:text-blue-900 disabled:opacity-50 text-xs"
                                        >
                                            {personRoles[person.id]?.includes(CompanyRoleType.COMPANY_ADMIN)
                                                ? "Make User"
                                                : "Make Admin"}
                                        </button>
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200 text-sm">
                                    <button
                                        onClick={() => handleRemovePersonFromCompany(person.id)}
                                        disabled={actionLoading}
                                        className="text-red-600 hover:text-red-900 disabled:opacity-50"
                                    >
                                        Remove
                                    </button>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    )
}
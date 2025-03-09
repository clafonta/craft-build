"use client";

import { useState, useEffect } from "react";
import { getCurrentUser } from "@/lib/auth";
import { generateClient } from "@aws-amplify/api";
import {
    createPerson,
    updatePerson,
    deletePerson
} from "@/graphql/mutations";
import {
    listPeople
} from "@/graphql/queries";
import * as APITypes from "@/API";
import Link from "next/link";

import { Amplify } from "aws-amplify";
import awsconfig from "@/aws-exports";

interface Person {
    id: string;
    firstName?: string | null;
    lastName?: string | null;
    email: string;
    phone?: string | null;
    status?: string | null;
    displayName?: string | null;
    jobSkills?: Array<string | null> | null;
    createdAt: string;
    updatedAt: string;
}

export default function PeoplePage() {
    const [people, setPeople] = useState<Person[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    // Form states
    const [showForm, setShowForm] = useState(false);
    const [formMode, setFormMode] = useState<"create" | "update">("create");
    const [currentPerson, setCurrentPerson] = useState<Person | null>(null);
    const [formData, setFormData] = useState({
        id: "",
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        status: "",
        displayName: "",
        jobSkills: [] as string[]
    });

    const [userData, setUserData] = useState<any>(null);
    const [client, setClient] = useState<any>(null);

    useEffect(() => {
        // Configure Amplify first
        Amplify.configure(awsconfig);
        // Then generate the client
        setClient(generateClient());
    }, []);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const user = await getCurrentUser();
                setUserData(user);
            } catch (error) {
                console.error("Error fetching user data", error);
            }
        };

        fetchUserData();
    }, []);

    // Fetch people on component mount
    useEffect(() => {
        if (userData && client) {
            fetchPeople();
        }
    }, [userData, client]);

    async function fetchPeople() {
        if (!client) return;

        setLoading(true);
        try {
            // Ensure user is authenticated before making API calls
            const currentUser = await getCurrentUser();
            if (!currentUser) {
                throw new Error("User not authenticated");
            }

            const response = (await client.graphql({
                query: listPeople,
                variables: { limit: 100 }
            })) as { data: APITypes.ListPeopleQuery };

            const peopleData = response.data.listPeople?.items || [];
            setPeople(peopleData as Person[]);
            setError(null);
        } catch (err) {
            console.error("Error fetching people:", err);
            setError("Failed to fetch people. Please try again.");
        } finally {
            setLoading(false);
        }
    }

    async function handleCreatePerson(e: React.FormEvent) {
        e.preventDefault();
        if (!client) return;

        setLoading(true);

        try {
            const input = {
                firstName: formData.firstName || null,
                lastName: formData.lastName || null,
                email: formData.email,
                phone: formData.phone || null,
                status: formData.status || null,
                displayName: formData.displayName || null,
                jobSkills: formData.jobSkills.length > 0 ? formData.jobSkills : null
            };

            await client.graphql({
                query: createPerson,
                variables: { input }
            });

            resetForm();
            fetchPeople();
            setError(null);
        } catch (err) {
            console.error("Error creating person:", err);
            setError("Failed to create person. Please try again.");
        } finally {
            setLoading(false);
        }
    }

    async function handleUpdatePerson(e: React.FormEvent) {
        e.preventDefault();
        if (!client) return;

        setLoading(true);

        try {
            const input = {
                id: formData.id,
                firstName: formData.firstName || null,
                lastName: formData.lastName || null,
                email: formData.email,
                phone: formData.phone || null,
                status: formData.status || null,
                displayName: formData.displayName || null,
                jobSkills: formData.jobSkills.length > 0 ? formData.jobSkills : null
            };

            await client.graphql({
                query: updatePerson,
                variables: { input }
            });

            resetForm();
            fetchPeople();
            setError(null);
        } catch (err) {
            console.error("Error updating person:", err);
            setError("Failed to update person. Please try again.");
        } finally {
            setLoading(false);
        }
    }

    async function handleDeletePerson(id: string) {
        if (!client) return;

        if (!window.confirm("Are you sure you want to delete this person?")) {
            return;
        }

        setLoading(true);
        try {
            await client.graphql({
                query: deletePerson,
                variables: { input: { id } }
            });

            fetchPeople();
            setError(null);
        } catch (err) {
            console.error("Error deleting person:", err);
            setError("Failed to delete person. Please try again.");
        } finally {
            setLoading(false);
        }
    }

    function handleEditPerson(person: Person) {
        setFormMode("update");
        setFormData({
            id: person.id,
            firstName: person.firstName || "",
            lastName: person.lastName || "",
            email: person.email,
            phone: person.phone || "",
            status: person.status || "",
            displayName: person.displayName || "",
            jobSkills: person.jobSkills as string[] || []
        });
        setCurrentPerson(person);
        setShowForm(true);
    }

    function handleNewPersonClick() {
        setFormMode("create");
        resetForm();
        setShowForm(true);
    }

    function handleCancelForm() {
        setShowForm(false);
        resetForm();
    }

    function resetForm() {
        setFormData({
            id: "",
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            status: "",
            displayName: "",
            jobSkills: []
        });
        setCurrentPerson(null);
        setShowForm(false);
    }

    function handleJobSkillChange(e: React.ChangeEvent<HTMLInputElement>) {
        const skills = e.target.value.split(",").map(skill => skill.trim());
        setFormData({ ...formData, jobSkills: skills });
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6">People</h1>

            {error && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 mb-4 rounded" role="alert">
                    <p>{error}</p>
                </div>
            )}

            <div className="mb-6">
                {!showForm ? (
                    <button
                        onClick={handleNewPersonClick}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    >
                        Add New Person
                    </button>
                ) : (
                    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                        <h2 className="text-xl font-bold mb-4">
                            {formMode === "create" ? "Add New Person" : "Edit Person"}
                        </h2>

                        <form onSubmit={formMode === "create" ? handleCreatePerson : handleUpdatePerson}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstName">
                                        First Name
                                    </label>
                                    <input
                                        id="firstName"
                                        type="text"
                                        value={formData.firstName}
                                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    />
                                </div>

                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastName">
                                        Last Name
                                    </label>
                                    <input
                                        id="lastName"
                                        type="text"
                                        value={formData.lastName}
                                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    />
                                </div>
                            </div>

                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                    Email
                                </label>
                                <input
                                    id="email"
                                    type="email"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    required
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
                                        Phone
                                    </label>
                                    <input
                                        id="phone"
                                        type="tel"
                                        value={formData.phone}
                                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    />
                                </div>

                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="status">
                                        Status
                                    </label>
                                    <select
                                        id="status"
                                        value={formData.status}
                                        onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    >
                                        <option value="">Select Status</option>
                                        <option value="ACTIVE">Active</option>
                                        <option value="INACTIVE">Inactive</option>
                                        <option value="PENDING">Pending</option>
                                    </select>
                                </div>
                            </div>

                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="displayName">
                                    Display Name
                                </label>
                                <input
                                    id="displayName"
                                    type="text"
                                    value={formData.displayName}
                                    onChange={(e) => setFormData({ ...formData, displayName: e.target.value })}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                />
                            </div>

                            <div className="mb-6">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="jobSkills">
                                    Job Skills (comma separated)
                                </label>
                                <input
                                    id="jobSkills"
                                    type="text"
                                    value={formData.jobSkills.join(", ")}
                                    onChange={handleJobSkillChange}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    placeholder="e.g. JavaScript, React, Node.js"
                                />
                            </div>

                            <div className="flex items-center justify-between">
                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline disabled:opacity-50"
                                >
                                    {loading ? "Processing..." : formMode === "create" ? "Create Person" : "Update Person"}
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
                <div className="text-center py-4">Loading people...</div>
            ) : (
                <div className="bg-white shadow-md rounded overflow-hidden">
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
                                Skills
                            </th>
                            <th className="px-6 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                Actions
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                        {people.length === 0 ? (
                            <tr>
                                <td colSpan={6} className="px-6 py-4 text-center">
                                    No people found. Create your first person to get started.
                                </td>
                            </tr>
                        ) : (
                            people.map((person) => (
                                <tr key={person.id}>
                                    <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                                        <Link href={`/secure/people/${person.id}`} className="text-blue-600 hover:text-blue-900">
                                            {person.displayName || `${person.firstName || ''} ${person.lastName || ''}`.trim() || 'Unnamed'}
                                        </Link>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                                        <a
                                            href={`mailto:${person.email}`}
                                            className="text-blue-500 hover:text-blue-700"
                                        >
                                            {person.email}
                                        </a>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                                        {person.phone ? (
                                            <a
                                                href={`tel:${person.phone}`}
                                                className="text-blue-500 hover:text-blue-700"
                                            >
                                                {person.phone}
                                            </a>
                                        ) : (
                                            <span className="text-gray-500">-</span>
                                        )}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          person.status === 'ACTIVE' ? 'bg-green-100 text-green-800' :
                              person.status === 'INACTIVE' ? 'bg-red-100 text-red-800' :
                                  'bg-yellow-100 text-yellow-800'
                      }`}>
                        {person.status || 'Unknown'}
                      </span>
                                    </td>
                                    <td className="px-6 py-4 border-b border-gray-200">
                                        <div className="flex flex-wrap gap-1">
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
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200 text-sm">
                                        <button
                                            onClick={() => handleEditPerson(person)}
                                            className="text-indigo-600 hover:text-indigo-900 mr-4"
                                        >
                                            Edit
                                        </button>
                                        <button
                                            onClick={() => handleDeletePerson(person.id)}
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
    );
}

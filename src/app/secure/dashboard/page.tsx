"use client"

import { useEffect, useState } from "react"
import { getCurrentUser } from "@/lib/auth"

export default function DashboardPage() {
  const [userData, setUserData] = useState<any>(null)

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

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <p className="mb-4">Welcome to your secure dashboard. This page is only accessible to authenticated users.</p>

      {userData && (
        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
          <h2 className="text-xl font-bold mb-4">Your Profile</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-gray-600">Username</p>
              <p className="font-medium">{userData.username}</p>
            </div>
            <div>
              <p className="text-gray-600">Email</p>
              <p className="font-medium">{userData.attributes?.email || "Not available"}</p>
            </div>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-bold mb-2">Recent Activity</h3>
          <p>View your recent account activity</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-bold mb-2">Settings</h3>
          <p>Manage your account settings</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-bold mb-2">Support</h3>
          <p>Get help with your account</p>
        </div>
      </div>
    </div>
  )
}


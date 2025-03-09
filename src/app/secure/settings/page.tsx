"use client"

import type React from "react"

import { useState } from "react"
import { changePassword } from "@/lib/auth"

export default function SettingsPage() {
  const [formData, setFormData] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  })
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState({ text: "", type: "" })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Validate passwords match
    if (formData.newPassword !== formData.confirmPassword) {
      setMessage({
        text: "New passwords do not match.",
        type: "error",
      })
      return
    }

    setIsLoading(true)
    setMessage({ text: "", type: "" })

    try {
      await changePassword(formData.oldPassword, formData.newPassword)
      setMessage({
        text: "Password changed successfully!",
        type: "success",
      })
      // Reset form
      setFormData({
        oldPassword: "",
        newPassword: "",
        confirmPassword: "",
      })
    } catch (error) {
      console.error("Error changing password", error)
      setMessage({
        text: "Failed to change password. Please check your current password and try again.",
        type: "error",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Settings</h1>

      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-xl font-bold mb-4">Change Password</h2>

        {message.text && (
          <div
            className={`p-4 mb-6 rounded ${message.type === "success" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}
          >
            {message.text}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="oldPassword" className="block mb-2 font-medium">
              Current Password
            </label>
            <input
              type="password"
              id="oldPassword"
              name="oldPassword"
              value={formData.oldPassword}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="newPassword" className="block mb-2 font-medium">
              New Password
            </label>
            <input
              type="password"
              id="newPassword"
              name="newPassword"
              value={formData.newPassword}
              onChange={handleChange}
              required
              minLength={8}
              className="w-full p-2 border rounded"
            />
            <p className="text-sm text-gray-500 mt-1">Password must be at least 8 characters long</p>
          </div>

          <div className="mb-6">
            <label htmlFor="confirmPassword" className="block mb-2 font-medium">
              Confirm New Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              minLength={8}
              className="w-full p-2 border rounded"
            />
          </div>

          <button
            type="submit"
            className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition disabled:bg-green-400"
            disabled={isLoading}
          >
            {isLoading ? "Changing Password..." : "Change Password"}
          </button>
        </form>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-4">Notification Preferences</h2>
        <div className="space-y-4">
          <div className="flex items-center">
            <input type="checkbox" id="emailNotifications" className="mr-2" defaultChecked />
            <label htmlFor="emailNotifications">Email Notifications</label>
          </div>
          <div className="flex items-center">
            <input type="checkbox" id="smsNotifications" className="mr-2" />
            <label htmlFor="smsNotifications">SMS Notifications</label>
          </div>
          <div className="flex items-center">
            <input type="checkbox" id="marketingEmails" className="mr-2" />
            <label htmlFor="marketingEmails">Marketing Emails</label>
          </div>
        </div>
        <button className="mt-6 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition">
          Save Preferences
        </button>
      </div>
    </div>
  )
}


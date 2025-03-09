"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { forgotPassword } from "@/lib/auth"

export default function ForgotPasswordPage() {
  const [username, setUsername] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    try {
      await forgotPassword(username)
      setIsSubmitted(true)
    } catch (error: any) {
      console.error("Error requesting password reset", error)
      setError(error.message || "Failed to request password reset. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
        <div className="max-w-md w-full bg-white rounded-lg shadow-md p-8">
          <h1 className="text-3xl font-bold text-center mb-6">Check Your Email</h1>

          <div className="bg-green-100 text-green-800 p-4 rounded mb-6">
            We've sent a password reset code to your email address.
          </div>

          <p className="mb-6 text-center">
            Please check your email for the code and follow the instructions to reset your password.
          </p>

          <div className="flex justify-center">
            <Link
              href={`/auth/reset-password?username=${encodeURIComponent(username)}`}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
            >
              Reset Password
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-md p-8">
        <h1 className="text-3xl font-bold text-center mb-6">Forgot Password</h1>

        {error && <div className="bg-red-100 text-red-800 p-4 rounded mb-6">{error}</div>}

        <p className="mb-6 text-center">
          Enter your username or email address and we'll send you a code to reset your password.
        </p>

        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label htmlFor="username" className="block mb-2 font-medium">
              Username or Email
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="w-full p-2 border rounded"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition disabled:bg-blue-400"
            disabled={isLoading}
          >
            {isLoading ? "Sending..." : "Send Reset Code"}
          </button>
        </form>

        <div className="mt-6 text-center">
          <Link href="/auth/signin" className="text-blue-600 hover:underline">
            Back to Sign In
          </Link>
        </div>
      </div>
    </div>
  )
}


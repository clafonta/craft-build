"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useRouter, useSearchParams } from "next/navigation"
import { confirmSignUp, resendConfirmationCode } from "@/lib/auth"

export default function ConfirmPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [username, setUsername] = useState("")
  const [code, setCode] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [isResending, setIsResending] = useState(false)
  const [message, setMessage] = useState({ text: "", type: "" })

  useEffect(() => {
    const usernameParam = searchParams.get("username")
    if (usernameParam) {
      setUsername(usernameParam)
    }
  }, [searchParams])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setMessage({ text: "", type: "" })

    try {
      const { isSignUpComplete } = await confirmSignUp(username, code)
      setMessage({
        text: "Account confirmed successfully! You can now sign in.",
        type: "success",
      })
      // Redirect to sign in page after a short delay
      setTimeout(() => {
        router.push("/auth/signin")
      }, 2000)
    } catch (error: any) {
      console.error("Error confirming sign up", error)
      setMessage({
        text: error.message || "Failed to confirm account. Please try again.",
        type: "error",
      })
    } finally {
      setIsLoading(false)
    }
  }

  const handleResendCode = async () => {
    setIsResending(true)
    setMessage({ text: "", type: "" })

    try {
      await resendConfirmationCode(username)
      setMessage({
        text: "Confirmation code resent successfully!",
        type: "success",
      })
    } catch (error: any) {
      console.error("Error resending code", error)
      setMessage({
        text: error.message || "Failed to resend code. Please try again.",
        type: "error",
      })
    } finally {
      setIsResending(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-md p-8">
        <h1 className="text-3xl font-bold text-center mb-6">Confirm Your Account</h1>

        {message.text && (
          <div
            className={`p-4 mb-6 rounded ${message.type === "success" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}
          >
            {message.text}
          </div>
        )}

        <p className="mb-6 text-center">
          We sent a confirmation code to your email. Please enter it below to verify your account.
        </p>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="username" className="block mb-2 font-medium">
              Username
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

          <div className="mb-6">
            <label htmlFor="code" className="block mb-2 font-medium">
              Confirmation Code
            </label>
            <input
              type="text"
              id="code"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              required
              className="w-full p-2 border rounded"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition disabled:bg-blue-400"
            disabled={isLoading}
          >
            {isLoading ? "Confirming..." : "Confirm Account"}
          </button>
        </form>

        <div className="mt-6 text-center">
          <button
            onClick={handleResendCode}
            disabled={isResending}
            className="text-blue-600 hover:underline disabled:text-blue-400"
          >
            {isResending ? "Resending..." : "Resend confirmation code"}
          </button>
        </div>

        <div className="mt-4 text-center">
          <Link href="/auth/signin" className="text-blue-600 hover:underline">
            Back to Sign In
          </Link>
        </div>
      </div>
    </div>
  )
}


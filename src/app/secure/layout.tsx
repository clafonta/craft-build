"use client"

import type React from "react"

import { useEffect, useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { getCurrentUser, signOut } from "@/lib/auth"

export default function SecureLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(true)
  const [user, setUser] = useState<any>(null)

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const currentUser = await getCurrentUser()
        setUser(currentUser)
        setIsLoading(false)
      } catch (error) {
        console.error("Not authenticated", error)
        router.push("/auth/signin")
      }
    }

    checkAuth()
  }, [router])

  const handleSignOut = async () => {
    try {
      await signOut()
      router.push("/")
    } catch (error) {
      console.error("Error signing out", error)
    }
  }

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-500"></div>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-green-600 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold">
            My App
          </Link>
          <div className="flex items-center gap-4">
            <nav className="flex gap-4">
              <Link href="/secure/dashboard" className="hover:underline">
                Dashboard
              </Link>
              <Link href="/secure/companies" className="hover:underline">
                Companies
              </Link>
              <Link href="/secure/profile" className="hover:underline">
                Profile
              </Link>
              <Link href="/secure/settings" className="hover:underline">
                Settings
              </Link>
            </nav>
            <div className="flex items-center gap-2">
              <span>Hello, {user?.username || "User"}</span>
              <button
                onClick={handleSignOut}
                className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </header>
      <main className="flex-grow container mx-auto p-4">{children}</main>
      <footer className="bg-gray-200 p-4">
        <div className="container mx-auto text-center">
          <p>© {new Date().getFullYear()} My App. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}


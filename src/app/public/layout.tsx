import type React from "react"
import Link from "next/link"

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-blue-500 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold">
            My App
          </Link>
          <nav className="flex gap-4">
            <Link href="/public/about" className="hover:underline">
              About
            </Link>
            <Link href="/public/contact" className="hover:underline">
              Contact
            </Link>
            <Link href="/secure/dashboard" className="hover:underline">
              Dashboard
            </Link>
          </nav>
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


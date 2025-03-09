export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">About Us</h1>
      <p className="mb-4">This is a public page that anyone can access without authentication.</p>
      <p>
        The layout for this page is different from the secure pages, but both inherit the global fonts: Inter for body
        text and Paytone One for headings.
      </p>
    </div>
  )
}


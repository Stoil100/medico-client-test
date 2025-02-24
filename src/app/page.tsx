import Image from "next/image"

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="flex items-center space-x-4 rounded-lg bg-white p-6 shadow-lg">
        <Image src="/logo.svg" alt="Medico Logo" width={64} height={64} className="h-16 w-16" />
        <h1 className="text-3xl font-bold text-gray-800">Medico се разработва</h1>
      </div>
    </main>
  )
}


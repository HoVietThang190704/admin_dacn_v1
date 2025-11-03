"use client"

import { useAuth } from "@/contexts/auth-context"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

export default function Home() {
  const { user, isLoading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!isLoading) {
      if (user) {
        router.push('/admin')
      } else {
        router.push('/login')
      }
    }
  }, [user, isLoading, router])

  return <div className="flex items-center justify-center min-h-screen">Loading...</div>
}

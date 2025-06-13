"use client"

import { useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Star, RefreshCcw, Home, AlertTriangle } from "lucide-react"

export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-purple-900 to-slate-900 flex flex-col">


      {/* Main content */}
      <div className="flex-1 flex flex-col items-center justify-center px-4 text-center">
        <div className="relative mb-8">
          <div className="w-24 h-24 rounded-full bg-red-500/20 flex items-center justify-center animate-pulse">
            <AlertTriangle className="h-12 w-12 text-red-500" />
          </div>
          <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center">
            <span className="text-white font-bold">!</span>
          </div>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Houston, We Have a{" "}
          <span className="bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent">Problem</span>
        </h1>

        <p className="text-xl text-gray-300 max-w-md mb-4">Something went wrong while trying to render this page.</p>

        <p className="text-gray-400 max-w-md mb-8">
          Our team of space engineers has been notified and is working on the issue.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Button onClick={() => reset()} className="bg-purple-600 hover:bg-purple-700 min-w-[160px]">
            <RefreshCcw className="mr-2 h-4 w-4" />
            Try Again
          </Button>

          <Link href="/">
            <Button
              variant="outline"
              className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white min-w-[160px]"
            >
              <Home className="mr-2 h-4 w-4" />
              Return Home
            </Button>
          </Link>
        </div>

        {/* Animated stars */}
        <div className="mt-16 relative">
          <div className="absolute top-0 left-1/4 w-2 h-2 bg-white rounded-full animate-ping"></div>
          <div
            className="absolute top-8 right-1/4 w-1 h-1 bg-purple-300 rounded-full animate-ping"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute bottom-0 left-1/3 w-1.5 h-1.5 bg-pink-300 rounded-full animate-ping"
            style={{ animationDelay: "0.5s" }}
          ></div>
          <div
            className="absolute top-4 right-1/3 w-1 h-1 bg-blue-300 rounded-full animate-ping"
            style={{ animationDelay: "1.5s" }}
          ></div>
        </div>
      </div>


    </div>
  )
}

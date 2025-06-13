"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Star, Home, ArrowLeft } from "lucide-react"
import { useState, useEffect } from "react"

export default function NotFound() {
  const [stars, setStars] = useState([])

  // Generate random stars for the background
  useEffect(() => {
    const generateStars = () => {
      const newStars = []
      for (let i = 0; i < 100; i++) {
        newStars.push({
          id: i,
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          size: `${0.5 + Math.random() * 2}px`,
          animationDuration: `${3 + Math.random() * 7}s`,
        })
      }
      setStars(newStars)
    }

    generateStars()
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-purple-900 to-slate-900 flex flex-col">
   

      {/* Stars background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {stars.map((star) => (
          <div
            key={star.id}
            className="absolute bg-white rounded-full animate-pulse"
            style={{
              top: star.top,
              left: star.left,
              width: star.size,
              height: star.size,
              animationDuration: star.animationDuration,
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col items-center justify-center px-4 text-center relative z-10">
        <div className="animate-float">
          <div className="text-9xl font-bold text-white mb-6 opacity-20">404</div>
          <div className="relative">
            <div className="w-24 h-24 rounded-full bg-purple-600 mx-auto mb-8 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-pink-500 opacity-80"></div>
              <div className="absolute inset-2 rounded-full bg-slate-900"></div>
              <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-white rounded-full"></div>
            </div>
          </div>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Lost in{" "}
          <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Space</span>
        </h1>

        <p className="text-xl text-gray-300 max-w-md mb-8">
          The page you're looking for seems to have drifted into a black hole.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/">
            <Button className="bg-purple-600 hover:bg-purple-700 min-w-[160px]">
              <Home className="mr-2 h-4 w-4" />
              Return Home
            </Button>
          </Link>

          <Button
            variant="outline"
            className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white"
            onClick={() => window.history.back()}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Go Back
          </Button>
        </div>
      </div>


    </div>
  )
}

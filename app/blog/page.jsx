"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Star, Calendar, User, ArrowLeft } from "lucide-react"
import { useState, useEffect, useRef } from "react"

function useScrollAnimation(options = {}) {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (options.once !== false) {
            observer.unobserve(entry.target)
          }
        } else if (options.once === false) {
          setIsVisible(false)
        }
      },
      {
        threshold: options.threshold || 0.1,
        rootMargin: options.rootMargin || "0px 0px -50px 0px",
      },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [options.threshold, options.rootMargin, options.once])

  return [ref, isVisible]
}

function BlogPostCard({ post, index }) {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.2 })

  return (
    <Card
      ref={ref}
      className={`bg-slate-800/50 border-purple-500/20 backdrop-blur-sm hover:border-purple-400/40 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 ${
        isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-8 scale-95"
      }`}
      style={{
        transitionDelay: `${index * 100}ms`,
        transitionDuration: "600ms",
      }}
    >
      <CardHeader className="p-0">
        <Image
          src={post.image || "/placeholder.svg"}
          alt={post.title}
          width={500}
          height={300}
          className="rounded-t-lg w-full h-48 object-cover"
        />
      </CardHeader>
      <CardContent className="p-6">
        <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
          <div className="flex items-center gap-1">
            <Calendar className="h-4 w-4" />
            {post.date}
          </div>
          <div className="flex items-center gap-1">
            <User className="h-4 w-4" />
            {post.author}
          </div>
        </div>

        <div className="mb-3">
          <span className="inline-block bg-purple-600/20 text-purple-300 text-xs px-2 py-1 rounded-full">
            {post.category}
          </span>
        </div>

        <CardTitle className="text-white mb-3 text-xl leading-tight">{post.title}</CardTitle>

        <CardDescription className="text-gray-300 mb-4 line-clamp-3">{post.excerpt}</CardDescription>

        <Button
          variant="outline"
          className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white w-full transition-all duration-300 hover:transform hover:scale-105"
        >
          Read Full Article
        </Button>
      </CardContent>
    </Card>
  )
}

export default function BlogPage() {
  const [headerRef, headerVisible] = useScrollAnimation()
  const [newsletterRef, newsletterVisible] = useScrollAnimation()

  const blogPosts = [
    {
      id: 1,
      title: "The Future of Online Learning",
      excerpt: "Discover how technology is revolutionizing education and what it means for students worldwide.",
      author: "Dr. Sarah Johnson",
      date: "March 15, 2024",
      image: "/placeholder.svg?height=300&width=500",
      category: "Education Technology",
    },
    {
      id: 2,
      title: "Study Tips for Success",
      excerpt: "Expert advice on how to maximize your learning potential and achieve your academic goals.",
      author: "Prof. Michael Chen",
      date: "March 12, 2024",
      image: "/placeholder.svg?height=300&width=500",
      category: "Study Tips",
    },
    {
      id: 3,
      title: "Career Opportunities in Tech",
      excerpt: "Explore the exciting career paths available in the technology industry and how to prepare for them.",
      author: "Lisa Rodriguez",
      date: "March 10, 2024",
      image: "/placeholder.svg?height=300&width=500",
      category: "Career Guidance",
    },
    {
      id: 4,
      title: "Building a Strong Learning Community",
      excerpt: "How collaborative learning environments enhance student success and engagement.",
      author: "Dr. James Wilson",
      date: "March 8, 2024",
      image: "/placeholder.svg?height=300&width=500",
      category: "Community",
    },
    {
      id: 5,
      title: "The Science of Memory and Learning",
      excerpt: "Understanding how our brains process and retain information for better study strategies.",
      author: "Dr. Emily Davis",
      date: "March 5, 2024",
      image: "/placeholder.svg?height=300&width=500",
      category: "Learning Science",
    },
    {
      id: 6,
      title: "Digital Skills for the Modern Workplace",
      excerpt: "Essential digital competencies every professional needs in today's technology-driven world.",
      author: "Mark Thompson",
      date: "March 3, 2024",
      image: "/placeholder.svg?height=300&width=500",
      category: "Professional Development",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-purple-900 to-slate-900">
    
      {/* Header */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Link href="/" className="inline-flex items-center text-purple-400 hover:text-purple-300 mb-8">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>

          <div
            ref={headerRef}
            className={`text-center transition-all duration-1000 ${
              headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h1 className="text-5xl font-bold text-white mb-6">
              Galaxy Academy{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Blog</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Stay updated with the latest educational insights, learning tips, and academy news from our expert
              educators and industry professionals.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <BlogPostCard key={post.id} post={post} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section
        ref={newsletterRef}
        className={`py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30 transition-all duration-1000 ${
          newsletterVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Stay Updated</h2>
          <p className="text-gray-300 text-lg mb-8">
            Subscribe to our newsletter and never miss the latest educational insights and academy updates.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg bg-slate-800 border border-purple-500/20 text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 transition-colors"
            />
            <Button className="bg-purple-600 hover:bg-purple-700 px-8 transition-all duration-300 hover:transform hover:scale-105">
              Subscribe
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-purple-500/20 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Star className="h-6 w-6 text-purple-400" />
                <span className="text-xl font-bold text-white">Galaxy Academy</span>
              </div>
              <p className="text-gray-400">Empowering students to reach for the stars through quality education.</p>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-gray-400 hover:text-purple-300 transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-gray-400 hover:text-purple-300 transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-gray-400 hover:text-purple-300 transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-400 hover:text-purple-300 transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Programs</h3>
              <ul className="space-y-2">
                <li>
                  <span className="text-gray-400">Web Development</span>
                </li>
                <li>
                  <span className="text-gray-400">Data Science</span>
                </li>
                <li>
                  <span className="text-gray-400">Digital Marketing</span>
                </li>
                <li>
                  <span className="text-gray-400">Graphic Design</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Contact Info</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Email: info@galaxyacademy.com</li>
                <li>Phone: (555) 123-4567</li>
                <li>Address: 123 Galaxy St, Space City</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-purple-500/20 mt-8 pt-8 text-center">
            <p className="text-gray-400">© 2024 Galaxy Academy. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

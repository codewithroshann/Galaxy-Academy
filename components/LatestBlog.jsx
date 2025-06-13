import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
import Link from 'next/link';
import Image from 'next/image';
import { Button } from './ui/button';

const LatestBlog = () => {
  return (
    <div className="max-w-7xl mx-auto">
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold text-white mb-4">
        Latest from Our Blog
      </h2>
      <p className="text-gray-300 text-lg">
        Stay updated with the latest educational insights and academy
        news.
      </p>
    </div>

    <div className="grid md:grid-cols-3 gap-8">
      <Card className="bg-slate-800/50 border-purple-500/20 backdrop-blur-sm hover:border-purple-400/40 transition-all duration-300 hover:transform hover:scale-105">
        <CardHeader>
          <Image
            src="/placeholder.svg?height=200&width=400"
            alt="Blog post"
            width={400}
            height={200}
            className="rounded-lg mb-4"
          />
          <CardTitle className="text-white">
            The Future of Online Learning
          </CardTitle>
          <CardDescription className="text-gray-300">
            Discover how technology is revolutionizing education and what
            it means for students.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Link
            href="/blog"
            className="text-purple-400 hover:text-purple-300 font-medium"
          >
            Read More →
          </Link>
        </CardContent>
      </Card>

      <Card className="bg-slate-800/50 border-purple-500/20 backdrop-blur-sm hover:border-purple-400/40 transition-all duration-300 hover:transform hover:scale-105">
        <CardHeader>
          <Image
            src="/placeholder.svg?height=200&width=400"
            alt="Blog post"
            width={400}
            height={200}
            className="rounded-lg mb-4"
          />
          <CardTitle className="text-white">
            Study Tips for Success
          </CardTitle>
          <CardDescription className="text-gray-300">
            Expert advice on how to maximize your learning potential and
            achieve academic goals.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Link
            href="/blog"
            className="text-purple-400 hover:text-purple-300 font-medium"
          >
            Read More →
          </Link>
        </CardContent>
      </Card>

      <Card className="bg-slate-800/50 border-purple-500/20 backdrop-blur-sm hover:border-purple-400/40 transition-all duration-300 hover:transform hover:scale-105">
        <CardHeader>
          <Image
            src="/placeholder.svg?height=200&width=400"
            alt="Blog post"
            width={400}
            height={200}
            className="rounded-lg mb-4"
          />
          <CardTitle className="text-white">
            Career Opportunities in Tech
          </CardTitle>
          <CardDescription className="text-gray-300">
            Explore the exciting career paths available in the technology
            industry.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Link
            href="/blog"
            className="text-purple-400 hover:text-purple-300 font-medium"
          >
            Read More →
          </Link>
        </CardContent>
      </Card>
    </div>

    <div className="text-center mt-12">
      <Link href="/blog">
        <Button
          variant="outline"
          className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white transition-all duration-300 hover:transform hover:scale-105"
        >
          View All Posts
        </Button>
      </Link>
    </div>
  </div>
  )
}

export default LatestBlog

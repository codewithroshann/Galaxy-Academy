"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Star,
  Calendar,
  ArrowLeft,
  Clock,
  Tag,
  MessageSquare,
  Bookmark,
  ThumbsUp,
  Facebook,
  Twitter,
  Linkedin,
  LinkIcon,
  ChevronUp,
} from "lucide-react"

// Sample blog posts data (in a real app, this would come from a database or API)
const blogPosts = {
  1: {
    id: 1,
    title: "The Future of Online Learning",
    excerpt: "Discover how technology is revolutionizing education and what it means for students worldwide.",
    content: `
      <p>The landscape of education is undergoing a dramatic transformation. As we move deeper into the digital age, online learning has evolved from a convenient alternative to a powerful, primary mode of education that's reshaping how we think about knowledge acquisition and skill development.</p>

      <h2 id="digital-revolution">The Digital Revolution in Education</h2>
      <p>Traditional classroom settings, while still valuable, are no longer the only pathway to quality education. The rise of sophisticated learning management systems, interactive multimedia content, and AI-powered personalization has created learning experiences that can rival and often exceed traditional methods.</p>

      <p>Virtual reality classrooms allow students to walk through ancient Rome, explore the human circulatory system from the inside, or practice complex surgical procedures without risk. Artificial intelligence tutors provide 24/7 support, adapting to each student's learning pace and style.</p>

      <h2 id="accessibility">Accessibility and Global Reach</h2>
      <p>One of the most significant advantages of online learning is its ability to democratize education. Students in remote areas can access the same quality instruction as those in major metropolitan centers. This global reach has opened doors for millions who previously had limited educational opportunities.</p>

      <p>The flexibility of online learning also accommodates different life circumstances. Working professionals can pursue advanced degrees, parents can learn new skills during their children's nap times, and students with disabilities can access accommodations more easily.</p>

      <h2 id="challenges">Challenges and Solutions</h2>
      <p>Despite its advantages, online learning faces challenges including digital divide issues, the need for self-motivation, and concerns about social interaction. However, innovative solutions are emerging:</p>

      <ul>
        <li>Community learning platforms that foster peer interaction</li>
        <li>Gamification elements that increase engagement</li>
        <li>Micro-learning modules that fit into busy schedules</li>
        <li>AI-powered analytics that identify struggling students early</li>
      </ul>

      <h2 id="future">The Future Landscape</h2>
      <p>Looking ahead, we can expect to see even more integration of emerging technologies. Blockchain credentials will make skill verification more reliable, while augmented reality will blend digital and physical learning environments seamlessly.</p>

      <p>The future of education isn't about choosing between online and offline learning—it's about creating hybrid experiences that leverage the best of both worlds to create more effective, accessible, and engaging educational opportunities for everyone.</p>
    `,
    author: {
      name: "Dr. Sarah Johnson",
      role: "Education Technology Researcher",
      image: "/placeholder.svg?height=100&width=100",
      bio: "Dr. Sarah Johnson has over 15 years of experience in educational technology research and has published numerous papers on the future of learning.",
    },
    date: "March 15, 2024",
    readTime: "8 min read",
    image: "/placeholder.svg?height=400&width=800",
    category: "Education Technology",
    tags: ["Online Learning", "EdTech", "Future of Education", "Digital Transformation"],
    likes: 124,
    comments: 18,
  },
  2: {
    id: 2,
    title: "Study Tips for Success",
    excerpt: "Expert advice on how to maximize your learning potential and achieve your academic goals.",
    content: `
      <p>Success in learning isn't just about intelligence—it's about developing effective study strategies that work with your brain's natural processes. Whether you're a student, professional, or lifelong learner, these evidence-based techniques can dramatically improve your learning outcomes.</p>

      <h2 id="science">The Science of Effective Learning</h2>
      <p>Research in cognitive psychology has revealed that our brains learn best when information is processed actively rather than passively consumed. This means moving beyond simple re-reading and highlighting to engage with material in more meaningful ways.</p>

      <h2 id="recall">Active Recall Techniques</h2>
      <p>One of the most powerful learning strategies is active recall—the practice of retrieving information from memory without looking at your notes. This can be done through:</p>

      <ul>
        <li>Creating flashcards and testing yourself regularly</li>
        <li>Explaining concepts out loud as if teaching someone else</li>
        <li>Writing summary paragraphs from memory</li>
        <li>Taking practice tests and quizzes</li>
      </ul>

      <h2 id="spaced">Spaced Repetition</h2>
      <p>Instead of cramming all your studying into one session, spread it out over time. Review material at increasing intervals: after one day, then three days, then a week, then two weeks. This technique leverages the spacing effect, helping move information from short-term to long-term memory.</p>

      <h2 id="pomodoro">The Pomodoro Technique</h2>
      <p>Break your study sessions into focused 25-minute blocks followed by 5-minute breaks. After four blocks, take a longer 15-30 minute break. This technique helps maintain concentration and prevents mental fatigue.</p>

      <h2 id="environment">Environment and Mindset</h2>
      <p>Create a dedicated study space free from distractions. Your brain will begin to associate this space with focused work. Additionally, maintain a growth mindset—view challenges as opportunities to improve rather than threats to your intelligence.</p>

      <h2 id="sleep">Sleep and Nutrition</h2>
      <p>Don't underestimate the importance of adequate sleep and proper nutrition. Your brain consolidates memories during sleep, and proper nutrition provides the energy needed for optimal cognitive function.</p>
    `,
    author: {
      name: "Prof. Michael Chen",
      role: "Learning Sciences Expert",
      image: "/placeholder.svg?height=100&width=100",
      bio: "Professor Chen specializes in cognitive approaches to learning and has helped thousands of students improve their study techniques.",
    },
    date: "March 12, 2024",
    readTime: "6 min read",
    image: "/placeholder.svg?height=400&width=800",
    category: "Study Tips",
    tags: ["Study Techniques", "Learning", "Productivity", "Academic Success"],
    likes: 187,
    comments: 32,
  },
  3: {
    id: 3,
    title: "Career Opportunities in Tech",
    excerpt: "Explore the exciting career paths available in the technology industry and how to prepare for them.",
    content: `
      <p>The technology industry continues to be one of the fastest-growing and most dynamic sectors in the global economy. With digital transformation accelerating across all industries, tech skills are in higher demand than ever before.</p>

      <h2 id="emerging">Emerging Tech Roles</h2>
      <p>Beyond traditional programming roles, new career paths are emerging that combine technology with other disciplines:</p>

      <ul>
        <li><strong>AI/ML Engineers:</strong> Developing artificial intelligence and machine learning systems</li>
        <li><strong>Data Scientists:</strong> Extracting insights from large datasets to drive business decisions</li>
        <li><strong>Cybersecurity Specialists:</strong> Protecting organizations from digital threats</li>
        <li><strong>Cloud Architects:</strong> Designing scalable cloud infrastructure solutions</li>
        <li><strong>UX/UI Designers:</strong> Creating intuitive and engaging user experiences</li>
        <li><strong>DevOps Engineers:</strong> Bridging development and operations for faster deployment</li>
      </ul>

      <h2 id="skills">Skills in High Demand</h2>
      <p>While specific technical skills vary by role, certain competencies are valuable across the tech industry:</p>

      <ul>
        <li>Programming languages (Python, JavaScript, Java, Go)</li>
        <li>Cloud platforms (AWS, Azure, Google Cloud)</li>
        <li>Data analysis and visualization</li>
        <li>Agile methodologies and project management</li>
        <li>Problem-solving and critical thinking</li>
        <li>Communication and collaboration skills</li>
      </ul>

      <h2 id="getting-started">Getting Started</h2>
      <p>Breaking into tech doesn't always require a computer science degree. Many successful professionals have transitioned from other fields by:</p>

      <ul>
        <li>Taking online courses and earning certifications</li>
        <li>Building a portfolio of personal projects</li>
        <li>Contributing to open-source projects</li>
        <li>Attending tech meetups and networking events</li>
        <li>Participating in hackathons and coding challenges</li>
      </ul>

      <h2 id="outlook">The Future Outlook</h2>
      <p>The Bureau of Labor Statistics projects that employment in computer and information technology occupations will grow 13% from 2020 to 2030, much faster than the average for all occupations. This growth is driven by increasing demand for cloud computing, big data storage and analysis, and information security.</p>

      <p>As technology continues to evolve, new opportunities will emerge. Staying curious, continuously learning, and adapting to change will be key to long-term success in the tech industry.</p>
    `,
    author: {
      name: "Lisa Rodriguez",
      role: "Tech Career Advisor",
      image: "/placeholder.svg?height=100&width=100",
      bio: "Lisa has guided hundreds of professionals through successful career transitions into the tech industry.",
    },
    date: "March 10, 2024",
    readTime: "7 min read",
    image: "/placeholder.svg?height=400&width=800",
    category: "Career Guidance",
    tags: ["Tech Careers", "Programming", "Career Development", "Technology"],
    likes: 156,
    comments: 24,
  },
  4: {
    id: 4,
    title: "Building a Strong Learning Community",
    excerpt: "How collaborative learning environments enhance student success and engagement.",
    author: {
      name: "Dr. James Wilson",
      role: "Community Learning Specialist",
      image: "/placeholder.svg?height=100&width=100",
      bio: "Dr. Wilson focuses on building effective learning communities in both online and offline environments.",
    },
    date: "March 8, 2024",
    readTime: "5 min read",
    image: "/placeholder.svg?height=400&width=800",
    category: "Community",
    tags: ["Learning Community", "Collaboration", "Student Engagement"],
    likes: 98,
    comments: 15,
  },
  5: {
    id: 5,
    title: "The Science of Memory and Learning",
    excerpt: "Understanding how our brains process and retain information for better study strategies.",
    author: {
      name: "Dr. Emily Davis",
      role: "Cognitive Neuroscientist",
      image: "/placeholder.svg?height=100&width=100",
      bio: "Dr. Davis specializes in the neuroscience of learning and memory formation.",
    },
    date: "March 5, 2024",
    readTime: "9 min read",
    image: "/placeholder.svg?height=400&width=800",
    category: "Learning Science",
    tags: ["Memory", "Neuroscience", "Cognitive Psychology"],
    likes: 142,
    comments: 27,
  },
  6: {
    id: 6,
    title: "Digital Skills for the Modern Workplace",
    excerpt: "Essential digital competencies every professional needs in today's technology-driven world.",
    author: {
      name: "Mark Thompson",
      role: "Digital Skills Trainer",
      image: "/placeholder.svg?height=100&width=100",
      bio: "Mark helps professionals adapt to the rapidly changing digital workplace.",
    },
    date: "March 3, 2024",
    readTime: "6 min read",
    image: "/placeholder.svg?height=400&width=800",
    category: "Professional Development",
    tags: ["Digital Skills", "Workplace", "Professional Growth"],
    likes: 113,
    comments: 19,
  },
}

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

export default function BlogArticlePage({ params }) {
  const router = useRouter()
  const [contentRef, contentVisible] = useScrollAnimation()
  const [relatedRef, relatedVisible] = useScrollAnimation()
  const [authorRef, authorVisible] = useScrollAnimation()
  const [commentsRef, commentsVisible] = useScrollAnimation()
  const [scrollProgress, setScrollProgress] = useState(0)
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [liked, setLiked] = useState(false)
  const [bookmarked, setBookmarked] = useState(false)
  const [commentText, setCommentText] = useState("")

  // Get the current post or redirect to blog if not found
  const currentPost = blogPosts[params.id]

  useEffect(() => {
    if (!currentPost) {
      router.push("/blog")
    }
  }, [currentPost, router])

  // Handle scroll events for progress bar and scroll-to-top button
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.body.scrollHeight - window.innerHeight
      const progress = (window.scrollY / totalHeight) * 100
      setScrollProgress(progress)
      setShowScrollTop(window.scrollY > 500)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  // Extract headings for table of contents
  const extractHeadings = (content) => {
    const headingRegex = /<h2 id="([^"]+)">([^<]+)<\/h2>/g
    const headings = []
    let match

    while ((match = headingRegex.exec(content)) !== null) {
      headings.push({
        id: match[1],
        text: match[2],
      })
    }

    return headings
  }

  // Get related posts (excluding current post)
  const relatedPosts = currentPost
    ? Object.values(blogPosts)
        .filter((post) => post.id !== currentPost.id)
        .slice(0, 3)
    : []

  // Sample comments
  const comments = [
    {
      id: 1,
      author: "Alex Johnson",
      avatar: "/placeholder.svg?height=50&width=50",
      date: "March 16, 2024",
      content:
        "This article was incredibly insightful! I've been considering a career change into tech, and this gave me a clear roadmap of where to start.",
      likes: 8,
    },
    {
      id: 2,
      author: "Maya Patel",
      avatar: "/placeholder.svg?height=50&width=50",
      date: "March 15, 2024",
      content:
        "I appreciate how you broke down the different career paths. The section on skills in high demand was particularly helpful for me as I'm currently deciding which areas to focus my learning on.",
      likes: 5,
    },
    {
      id: 3,
      author: "Carlos Rodriguez",
      avatar: "/placeholder.svg?height=50&width=50",
      date: "March 15, 2024",
      content:
        "Great article! I'd also add that networking is crucial in the tech industry. Many opportunities come through connections rather than just applications.",
      likes: 12,
    },
  ]

  if (!currentPost) {
    return null // Will redirect in useEffect
  }

  const headings = extractHeadings(currentPost.content)

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-purple-900 to-slate-900">
      {/* Reading Progress Bar */}
      <div
        className="fixed top-0 left-0 h-1 bg-purple-400 z-50 transition-all duration-300"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Navigation */}
      <nav className="bg-slate-900/80 backdrop-blur-sm border-b border-purple-500/20 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <Star className="h-8 w-8 text-purple-400" />
              <span className="text-2xl font-bold text-white">Galaxy Academy</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <Link href="/" className="text-white hover:text-purple-300 transition-colors">
                Home
              </Link>
              <Link href="/blog" className="text-purple-300 font-medium">
                Blog
              </Link>
              <Link href="/about" className="text-white hover:text-purple-300 transition-colors">
                About Us
              </Link>
              <Link href="/contact" className="text-white hover:text-purple-300 transition-colors">
                Contact
              </Link>
            </div>
            <Button className="bg-purple-600 hover:bg-purple-700">Get Started</Button>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="lg:w-2/3">
            {/* Article Header */}
            <section>
              <Link href="/blog" className="inline-flex items-center text-purple-400 hover:text-purple-300 mb-8">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Blog
              </Link>

              <div className="mb-8">
                <div className="flex items-center gap-4 text-sm text-gray-400 mb-4 flex-wrap">
                  <span className="inline-block bg-purple-600/20 text-purple-300 text-xs px-2 py-1 rounded-full">
                    {currentPost.category}
                  </span>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {currentPost.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {currentPost.readTime}
                  </div>
                </div>

                <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 opacity-0 animate-fade-in-up">
                  {currentPost.title}
                </h1>

                <p className="text-xl text-gray-300 mb-8 opacity-0 animate-fade-in-up animation-delay-300">
                  {currentPost.excerpt}
                </p>

                <div className="flex flex-wrap gap-2 mb-8 opacity-0 animate-fade-in-up animation-delay-600">
                  {currentPost.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center gap-1 bg-slate-800/50 text-gray-300 text-sm px-3 py-1 rounded-full"
                    >
                      <Tag className="h-3 w-3" />
                      {tag}
                    </span>
                  ))}
                </div>

                <Image
                  src={currentPost.image || "/placeholder.svg"}
                  alt={currentPost.title}
                  width={800}
                  height={400}
                  className="rounded-lg w-full h-64 md:h-96 object-cover opacity-0 animate-fade-in-up animation-delay-900"
                />
              </div>
            </section>

            {/* Article Content */}
            <section
              ref={contentRef}
              className={`transition-all duration-1000 ${
                contentVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <div className="bg-slate-800/30 rounded-lg p-8 md:p-12 mb-8">
                <div
                  className="prose prose-lg prose-invert max-w-none"
                  dangerouslySetInnerHTML={{ __html: currentPost.content }}
                  style={{
                    color: "#e2e8f0",
                  }}
                />

                {/* Article Actions */}
                <div className="flex items-center justify-between mt-12 pt-8 border-t border-purple-500/20">
                  <div className="flex items-center gap-4">
                    <Button
                      variant={liked ? "default" : "outline"}
                      size="sm"
                      className={
                        liked
                          ? "bg-purple-600 hover:bg-purple-700"
                          : "border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white"
                      }
                      onClick={() => setLiked(!liked)}
                    >
                      <ThumbsUp className="h-4 w-4 mr-2" />
                      {liked ? "Liked" : "Like"} ({currentPost.likes + (liked ? 1 : 0)})
                    </Button>

                    <Button
                      variant={bookmarked ? "default" : "outline"}
                      size="sm"
                      className={
                        bookmarked
                          ? "bg-purple-600 hover:bg-purple-700"
                          : "border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white"
                      }
                      onClick={() => setBookmarked(!bookmarked)}
                    >
                      <Bookmark className="h-4 w-4 mr-2" />
                      {bookmarked ? "Saved" : "Save"}
                    </Button>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-400 mr-2">Share:</span>
                    <Button variant="ghost" size="icon" className="text-gray-400 hover:text-purple-400">
                      <Facebook className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="text-gray-400 hover:text-purple-400">
                      <Twitter className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="text-gray-400 hover:text-purple-400">
                      <Linkedin className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="text-gray-400 hover:text-purple-400">
                      <LinkIcon className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </section>

            {/* Author Section */}
            <section
              ref={authorRef}
              className={`transition-all duration-1000 ${
                authorVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <div className="bg-slate-800/30 rounded-lg p-8 mb-8">
                <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
                  <Image
                    src={currentPost.author.image || "/placeholder.svg"}
                    alt={currentPost.author.name}
                    width={100}
                    height={100}
                    className="rounded-full w-24 h-24 object-cover"
                  />
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">{currentPost.author.name}</h3>
                    <p className="text-purple-300 mb-3">{currentPost.author.role}</p>
                    <p className="text-gray-300">{currentPost.author.bio}</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Comments Section */}
            <section
              ref={commentsRef}
              className={`transition-all duration-1000 ${
                commentsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <div className="bg-slate-800/30 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Comments ({comments.length})</h3>

                {/* Add Comment */}
                <div className="mb-8">
                  <textarea
                    placeholder="Join the discussion..."
                    className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-purple-500/20 text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 transition-colors mb-4"
                    rows={4}
                    value={commentText}
                    onChange={(e) => setCommentText(e.target.value)}
                  />
                  <Button className="bg-purple-600 hover:bg-purple-700">
                    <MessageSquare className="h-4 w-4 mr-2" />
                    Post Comment
                  </Button>
                </div>

                {/* Comments List */}
                <div className="space-y-6">
                  {comments.map((comment) => (
                    <div key={comment.id} className="border-b border-purple-500/10 pb-6 last:border-0">
                      <div className="flex items-start gap-4">
                        <Image
                          src={comment.avatar || "/placeholder.svg"}
                          alt={comment.author}
                          width={50}
                          height={50}
                          className="rounded-full w-10 h-10 object-cover"
                        />
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <div>
                              <h4 className="text-white font-medium">{comment.author}</h4>
                              <p className="text-sm text-gray-400">{comment.date}</p>
                            </div>
                            <Button variant="ghost" size="sm" className="text-gray-400 hover:text-purple-400">
                              <ThumbsUp className="h-3 w-3 mr-1" />
                              {comment.likes}
                            </Button>
                          </div>
                          <p className="text-gray-300">{comment.content}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/3">
            {/* Table of Contents */}
            <div className="bg-slate-800/30 rounded-lg p-6 mb-8 sticky top-24">
              <h3 className="text-xl font-bold text-white mb-4">Table of Contents</h3>
              <ul className="space-y-3">
                {headings.map((heading) => (
                  <li key={heading.id}>
                    <a
                      href={`#${heading.id}`}
                      className="text-gray-300 hover:text-purple-300 transition-colors flex items-center"
                    >
                      <div className="w-1 h-1 bg-purple-400 rounded-full mr-2"></div>
                      {heading.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Author Card (Mobile Only) */}
            <div className="lg:hidden bg-slate-800/30 rounded-lg p-6 mb-8">
              <div className="flex items-center gap-4 mb-4">
                <Image
                  src={currentPost.author.image || "/placeholder.svg"}
                  alt={currentPost.author.name}
                  width={60}
                  height={60}
                  className="rounded-full w-12 h-12 object-cover"
                />
                <div>
                  <h3 className="text-lg font-bold text-white">{currentPost.author.name}</h3>
                  <p className="text-sm text-purple-300">{currentPost.author.role}</p>
                </div>
              </div>
            </div>

            {/* Related Articles */}
            <div className="bg-slate-800/30 rounded-lg p-6">
              <h3 className="text-xl font-bold text-white mb-4">Related Articles</h3>
              <div className="space-y-6">
                {relatedPosts.map((post) => (
                  <div key={post.id} className="flex gap-4 border-b border-purple-500/10 pb-4 last:border-0">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      width={80}
                      height={80}
                      className="rounded w-20 h-20 object-cover flex-shrink-0"
                    />
                    <div>
                      <h4 className="text-white font-medium mb-1 line-clamp-2">
                        <Link href={`/blog/${post.id}`} className="hover:text-purple-300 transition-colors">
                          {post.title}
                        </Link>
                      </h4>
                      <div className="flex items-center gap-2 text-xs text-gray-400">
                        <Calendar className="h-3 w-3" />
                        {post.date}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Articles (Full Width) */}
      <section
        ref={relatedRef}
        className={`py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30 transition-all duration-1000 ${
          relatedVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">More Articles You Might Like</h2>
            <p className="text-gray-300 text-lg">Continue your learning journey with these related posts</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {relatedPosts.map((post, index) => (
              <Card
                key={post.id}
                className="bg-slate-800/50 border-purple-500/20 backdrop-blur-sm hover:border-purple-400/40 transition-all duration-300 hover:transform hover:scale-105"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <CardHeader className="p-0">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    width={400}
                    height={200}
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
                      <Clock className="h-4 w-4" />
                      {post.readTime}
                    </div>
                  </div>

                  <div className="mb-3">
                    <span className="inline-block bg-purple-600/20 text-purple-300 text-xs px-2 py-1 rounded-full">
                      {post.category}
                    </span>
                  </div>

                  <CardTitle className="text-white mb-3 text-xl leading-tight">{post.title}</CardTitle>

                  <CardDescription className="text-gray-300 mb-4 line-clamp-3">{post.excerpt}</CardDescription>

                  <Link href={`/blog/${post.id}`}>
                    <Button
                      variant="outline"
                      className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white w-full transition-all duration-300 hover:transform hover:scale-105"
                    >
                      Read Article
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
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

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 bg-purple-600 hover:bg-purple-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 ${
          showScrollTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
        }`}
        aria-label="Scroll to top"
      >
        <ChevronUp className="h-6 w-6" />
      </button>
    </div>
  )
}

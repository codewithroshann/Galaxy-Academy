"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Star, Users, Award, Target, Heart, ArrowLeft, CheckCircle } from "lucide-react"
import { useState, useEffect, useRef } from "react"

function useScrollAnimation(options = {}) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)

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

function AnimatedCard({ children, delay = 0, className = "" }) {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.2 })

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-8 scale-95"
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}

function AchievementCounter({ number, label, delay = 0 }) {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.5 })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (isVisible) {
      const target = Number.parseInt(number.replace(/[^0-9]/g, ""))
      const duration = 2000
      const increment = target / (duration / 16)
      let current = 0

      const timer = setInterval(() => {
        current += increment
        if (current >= target) {
          setCount(target)
          clearInterval(timer)
        } else {
          setCount(Math.floor(current))
        }
      }, 16)

      return () => clearInterval(timer)
    }
  }, [isVisible, number])

  const displayValue = number.includes("+")
    ? `${count.toLocaleString()}+`
    : number.includes("%")
      ? `${count}%`
      : number.includes("/")
        ? number
        : count.toLocaleString()

  return (
    <div
      ref={ref}
      className={`text-center transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-8 scale-95"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="text-3xl font-bold text-purple-400 mb-2">{displayValue}</div>
      <div className="text-gray-300">{label}</div>
    </div>
  )
}

export default function AboutPage() {
  const [storyRef, storyVisible] = useScrollAnimation()
  const [missionRef, missionVisible] = useScrollAnimation()
  const [valuesRef, valuesVisible] = useScrollAnimation()
  const [teamRef, teamVisible] = useScrollAnimation()
  const [whyChooseRef, whyChooseVisible] = useScrollAnimation()
  const [ctaRef, ctaVisible] = useScrollAnimation()

  const teamMembers = [
    {
      name: "Dr. Sarah Johnson",
      role: "Founder & CEO",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Former NASA educator with 15+ years in space science education.",
    },
    {
      name: "Prof. Michael Chen",
      role: "Head of Curriculum",
      image: "/placeholder.svg?height=300&width=300",
      bio: "MIT graduate specializing in innovative learning methodologies.",
    },
    {
      name: "Lisa Rodriguez",
      role: "Student Success Director",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Passionate about helping students achieve their full potential.",
    },
    {
      name: "Dr. James Wilson",
      role: "Research Director",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Leading expert in educational technology and learning analytics.",
    },
  ]

  const achievements = [
    { number: "10000", label: "Students Graduated" },
    { number: "95", label: "Job Placement Rate" },
    { number: "50", label: "Industry Partners" },
    { number: "4.9/5", label: "Student Satisfaction" },
  ]

  const values = [
    {
      icon: <Target className="h-8 w-8 text-purple-400" />,
      title: "Excellence",
      description:
        "We strive for the highest standards in everything we do, from curriculum design to student support.",
    },
    {
      icon: <Users className="h-8 w-8 text-purple-400" />,
      title: "Community",
      description: "We believe in the power of collaborative learning and building strong educational communities.",
    },
    {
      icon: <Heart className="h-8 w-8 text-purple-400" />,
      title: "Passion",
      description: "Our love for education and student success drives us to continuously innovate and improve.",
    },
    {
      icon: <Award className="h-8 w-8 text-purple-400" />,
      title: "Innovation",
      description: "We embrace cutting-edge technology and teaching methods to enhance the learning experience.",
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

          <div className="text-center">
            <h1 className="text-5xl font-bold text-white mb-6 opacity-0 animate-fade-in-up">
              About{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Galaxy Academy
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto opacity-0 animate-fade-in-up animation-delay-300">
              We're on a mission to make quality education accessible to everyone, everywhere. Join us as we explore the
              infinite possibilities of learning.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div
              ref={storyRef}
              className={`transition-all duration-1000 ${
                storyVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
              }`}
            >
              <h2 className="text-4xl font-bold text-white mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  Galaxy Academy was founded in 2020 with a simple yet ambitious vision: to create an educational
                  platform that combines the best of traditional learning with cutting-edge technology.
                </p>
                <p>
                  Our founders, a team of educators and technologists, recognized the need for more engaging,
                  accessible, and effective online learning experiences. They set out to build something different – a
                  place where students could truly thrive.
                </p>
                <p>
                  Today, we're proud to serve thousands of students worldwide, helping them achieve their academic and
                  professional goals through our innovative programs and supportive community.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-6">
                <AchievementCounter number="10000+" label="Students Graduated" delay={200} />
                <AchievementCounter number="95%" label="Job Placement Rate" delay={400} />
                <AchievementCounter number="50+" label="Industry Partners" delay={600} />
                <AchievementCounter number="4.9/5" label="Student Satisfaction" delay={800} />
              </div>
            </div>

            <div
              className={`relative transition-all duration-1000 ${
                storyVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
              }`}
              style={{ transitionDelay: "400ms" }}
            >
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Galaxy Academy Story"
                width={600}
                height={500}
                className="rounded-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission & Vision */}
      <section
        ref={missionRef}
        className={`py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30 transition-all duration-1000 ${
          missionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <AnimatedCard delay={200}>
              <Card className="bg-slate-800/50 border-purple-500/20 backdrop-blur-sm h-full">
                <CardHeader>
                  <CardTitle className="text-white text-2xl flex items-center gap-3">
                    <Target className="h-8 w-8 text-purple-400" />
                    Our Mission
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 text-lg">
                    To democratize quality education by providing accessible, engaging, and effective learning
                    experiences that empower students to achieve their full potential and make a positive impact in the
                    world.
                  </p>
                </CardContent>
              </Card>
            </AnimatedCard>

            <AnimatedCard delay={400}>
              <Card className="bg-slate-800/50 border-purple-500/20 backdrop-blur-sm h-full">
                <CardHeader>
                  <CardTitle className="text-white text-2xl flex items-center gap-3">
                    <Star className="h-8 w-8 text-purple-400" />
                    Our Vision
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 text-lg">
                    To be the leading global platform for transformative education, where every learner can explore
                    their passions, develop essential skills, and build a brighter future for themselves and their
                    communities.
                  </p>
                </CardContent>
              </Card>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div
            ref={valuesRef}
            className={`text-center mb-16 transition-all duration-1000 ${
              valuesVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h2 className="text-4xl font-bold text-white mb-4">Our Core Values</h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              These principles guide everything we do and shape the culture of our academy.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <AnimatedCard key={index} delay={index * 150}>
                <Card className="bg-slate-800/50 border-purple-500/20 backdrop-blur-sm text-center h-full transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20">
                  <CardHeader>
                    <div className="mx-auto mb-4">{value.icon}</div>
                    <CardTitle className="text-white">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300">{value.description}</p>
                  </CardContent>
                </Card>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section
        ref={teamRef}
        className={`py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30 transition-all duration-1000 ${
          teamVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Meet Our Team</h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Our passionate team of educators, technologists, and innovators are dedicated to your success.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <AnimatedCard key={index} delay={index * 100}>
                <Card className="bg-slate-800/50 border-purple-500/20 backdrop-blur-sm text-center h-full transition-all duration-300 hover:transform hover:scale-105">
                  <CardHeader>
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      width={300}
                      height={300}
                      className="rounded-full mx-auto mb-4 w-32 h-32 object-cover"
                    />
                    <CardTitle className="text-white">{member.name}</CardTitle>
                    <CardDescription className="text-purple-300">{member.role}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 text-sm">{member.bio}</p>
                  </CardContent>
                </Card>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section
        ref={whyChooseRef}
        className={`py-20 px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${
          whyChooseVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Why Choose Galaxy Academy?</h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              We offer more than just courses – we provide a complete learning ecosystem designed for your success.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              {[
                {
                  title: "Expert-Led Curriculum",
                  description:
                    "Learn from industry professionals and academic experts who bring real-world experience to every lesson.",
                },
                {
                  title: "Personalized Learning Paths",
                  description:
                    "Tailored educational journeys that adapt to your learning style, pace, and career goals.",
                },
                {
                  title: "24/7 Student Support",
                  description: "Get help whenever you need it with our dedicated support team and peer community.",
                },
              ].map((item, index) => (
                <AnimatedCard key={index} delay={index * 200}>
                  <div className="flex items-start gap-4">
                    <CheckCircle className="h-6 w-6 text-purple-400 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                      <p className="text-gray-300">{item.description}</p>
                    </div>
                  </div>
                </AnimatedCard>
              ))}
            </div>

            <div className="space-y-6">
              {[
                {
                  title: "Industry Certifications",
                  description:
                    "Earn recognized credentials that boost your resume and open doors to new opportunities.",
                },
                {
                  title: "Hands-On Projects",
                  description:
                    "Build a portfolio of real projects that demonstrate your skills to potential employers.",
                },
                {
                  title: "Career Services",
                  description:
                    "Access job placement assistance, resume reviews, and interview preparation to launch your career.",
                },
              ].map((item, index) => (
                <AnimatedCard key={index} delay={(index + 3) * 200}>
                  <div className="flex items-start gap-4">
                    <CheckCircle className="h-6 w-6 text-purple-400 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                      <p className="text-gray-300">{item.description}</p>
                    </div>
                  </div>
                </AnimatedCard>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        ref={ctaRef}
        className={`py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30 transition-all duration-1000 ${
          ctaVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Join Our Galaxy?</h2>
          <p className="text-gray-300 text-lg mb-8">
            Take the first step towards your educational journey and discover what makes Galaxy Academy special.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-purple-600 hover:bg-purple-700 transition-all duration-300 hover:transform hover:scale-105"
            >
              Start Learning Today
            </Button>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white transition-all duration-300 hover:transform hover:scale-105"
              >
                Get in Touch
              </Button>
            </Link>
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

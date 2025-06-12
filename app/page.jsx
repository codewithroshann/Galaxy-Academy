"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Star, BookOpen, Users, Award, ArrowRight } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import HeroSection from "@/components/HeroSection"
import RocketModel from "@/components/SplineModel/RocketModel"

function useScrollAnimation(options = {}) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (options.once !== false) {
            observer.unobserve(entry.target);
          }
        } else if (options.once === false) {
          setIsVisible(false);
        }
      },
      {
        threshold: options.threshold || 0.1,
        rootMargin: options.rootMargin || "0px 0px -50px 0px",
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [options.threshold, options.rootMargin, options.once]);

  return [ref, isVisible];
}

function FeatureCard({ feature, index }) {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.2 });

  return (
    <Card
      ref={ref}
      className={`bg-slate-800/50 border-purple-500/20 backdrop-blur-sm transition-all duration-100 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 ${
        isVisible
          ? "opacity-100 translate-y-0 scale-100"
          : "opacity-0 translate-y-8 scale-95"
      }`}
      style={{
        transitionDelay: `${index * 200}ms`,
        transitionDuration: "600ms",
      }}
    >
      <CardHeader>
        {feature.icon}
        <CardTitle className="text-white">{feature.title}</CardTitle>
        <CardDescription className="text-gray-300">
          {feature.description}
        </CardDescription>
      </CardHeader>
    </Card>
  );
}

export default function HomePage() {
  const [featuresRef, featuresVisible] = useScrollAnimation();
  const [blogRef, blogVisible] = useScrollAnimation();
  const [ctaRef, ctaVisible] = useScrollAnimation();

  const features = [
    {
      icon: <BookOpen className="h-12 w-12 text-purple-400 mb-4" />,
      title: "Expert Curriculum",
      description:
        "Comprehensive courses designed by industry experts and academic professionals.",
    },
    {
      icon: <Users className="h-12 w-12 text-purple-400 mb-4" />,
      title: "Community Learning",
      description:
        "Join a vibrant community of learners and collaborate on exciting projects.",
    },
    {
      icon: <Award className="h-12 w-12 text-purple-400 mb-4" />,
      title: "Certified Programs",
      description:
        "Earn recognized certifications that boost your career prospects.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-purple-900 to-slate-900">
    
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
     
      <HeroSection/>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div
            ref={featuresRef}
            className={`text-center mb-16 transition-all duration-1000 ${
              featuresVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Why Choose Galaxy Academy?
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              We provide world-class education with innovative teaching methods
              and personalized learning experiences.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard key={index} feature={feature} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Latest Blog Posts */}
      <section
        ref={blogRef}
        className={`py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30 transition-all duration-1000 ${
          blogVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
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
      </section>

      {/* CTA Section */}
      <section
        ref={ctaRef}
        className={`py-20 px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${
          ctaVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-gray-300 text-lg mb-8">
            Join Galaxy Academy today and unlock your potential with our
            comprehensive learning platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-purple-600 hover:bg-purple-700 transition-all duration-300 hover:transform hover:scale-105"
            >
              Enroll Now
            </Button>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white transition-all duration-300 hover:transform hover:scale-105"
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>


    </div>
  );
}

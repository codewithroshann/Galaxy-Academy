"use client";
import React, { useEffect, useRef, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BookOpen, Users, Award } from "lucide-react";

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
        transitionDelay: `${index * 100}ms`,
        transitionDuration: "300ms",
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
const Featutes = () => {
  const [featuresRef, featuresVisible] = useScrollAnimation();

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
    <>
      <div className="max-w-7xl mx-auto">
        <div
          ref={featuresRef}
          className={`text-center mb-16 transition-all duration-200 ${
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
    </>
  );
};

export default Featutes;

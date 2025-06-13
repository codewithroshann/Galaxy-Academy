"use client";
import { useState, useEffect, useRef } from "react";
import HeroSection from "@/components/HeroSection";
import Features from "@/components/Featutes";
import CtaSection from "@/components/CtaSection";
import LatestBlog from "@/components/LatestBlog";
import RocketModel from "@/components/SplineModel/RocketModel";
import SwiperSlider from "@/components/Slider/SwiperSlider";
import Courses from "@/components/Courses";

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

export default function HomePage() {
  const [blogRef, blogVisible] = useScrollAnimation();
  const [ctaRef, ctaVisible] = useScrollAnimation();
  const [courseRef, courseVisible] = useScrollAnimation();
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
    <div className=" relative min-h-screen bg-gradient-to-b from-slate-900 via-purple-900 to-slate-900">
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
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <HeroSection />
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <Features />
      </section>
      {/* Courses Section */}
      <section ref={courseRef} className={`py-20 px-4 sm:px-6 lg:px-8  transition-all duration-300 ${
          courseVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        } `}>
        <Courses/>
      </section>

      {/* Latest Blog Posts */}
      <section
        ref={blogRef}
        className={`py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30 transition-all duration-300 ${
          blogVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <LatestBlog />
      </section>

      {/* CTA Section */}
      <section
        ref={ctaRef}
        className={`py-20 px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${
          ctaVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <CtaSection />
      </section>

    </div>
  );
}

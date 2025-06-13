"use client"
import React, { useEffect, useState } from 'react'
import { Star, BookOpen, Users, Award, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import RocketModel from "./SplineModel/RocketModel";
const HeroSection = () => {
  

  return (
   <>
   
   <div className="max-w-7xl mx-auto text-center relative">
   <Star className="h-8 w-8 text-purple-400 rotate-45 absolute" />
   <Star className="h-3 w-3 text-purple-400 rotate-45 absolute right-3 top-5 " />
   <Star className="h-6 w-6 text-purple-400 -rotate-12 absolute right-20 top-20 " />
   <Star className="h-5 w-5  text-purple-400 rotate-140 absolute bottom-0 left-[150px]" />

  
          <div className="mb-8">
                 <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 opacity-0 animate-fade-in-up">
              Welcome to{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Galaxy Academy
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8 opacity-0 animate-fade-in-up">
              Explore the universe of knowledge with our cutting-edge
              educational platform. Join thousands of students on their journey
              to academic excellence.
            </p>
            <div className="flex flex-wrap sm:flex-row gap-4 justify-center opacity-0 animate-fade-in-up animation-delay-600">
              <Button
                size="lg"
                className="bg-purple-600 hover:bg-purple-700 transition-all duration-300 hover:transform hover:scale-105"
              >
                Start Learning
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white transition-all duration-300 hover:transform hover:scale-105"
              >
                Watch Demo
              </Button>
            </div>
          </div>
        </div>

        {/* Enhanced Floating Stars Animation */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white rounded-full animate-pulse"></div>
          <div
            className="absolute top-1/3 right-1/3 w-1 h-1 bg-purple-300 rounded-full animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-pink-300 rounded-full animate-pulse"
            style={{ animationDelay: "0.5s" }}
          ></div>
          <div
            className="absolute top-1/2 right-1/4 w-1 h-1 bg-blue-300 rounded-full animate-pulse"
            style={{ animationDelay: "1.5s" }}
          ></div>
          <div
            className="absolute bottom-1/3 right-1/2 w-2 h-2 bg-yellow-300 rounded-full animate-pulse"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>
   </>
  )
}

export default HeroSection

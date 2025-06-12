"use client";
import React from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import { Star, BookOpen, Users, Award, ArrowRight } from "lucide-react";

const Header = () => {
  return (
    <>
    
        <nav className=" sticky top-0 z-50 pt-2 px-2">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-slate-900/50 backdrop-blur-sm border-b border-purple-500/20 rounded-full">
            <div className="flex justify-between items-center py-2">
              <div className="flex items-center space-x-2">
                <Star className="h-8 w-8 text-purple-400" />
                <Link href="/" className="  text-lg sm:text-2xl font-bold text-white">
                  Galaxy Academy
                </Link>
              </div>
              <div className="hidden md:flex space-x-8">
                <Link
                  href="/"
                  className="text-white hover:text-purple-300 transition-colors"
                >
                  Home
                </Link>
                <Link
                  href="/blog"
                  className="text-white hover:text-purple-300 transition-colors"
                >
                  Blog
                </Link>
                <Link
                  href="/about"
                  className="text-white hover:text-purple-300 transition-colors"
                >
                  About Us
                </Link>
                <Link
                  href="/contact"
                  className="text-white hover:text-purple-300 transition-colors"
                >
                  Contact
                </Link>
              </div>
              <Button className="bg-purple-600 hover:bg-purple-700">
                Get Started
              </Button>
            </div>
          </div>
        </nav>

    </>
  );
};

export default Header;

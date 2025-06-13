"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import { Menu,X } from "lucide-react";

const Header = () => {
const [isOpen ,setIsOpen ] = useState(false)

  return (
    <>
      <nav className=" sticky top-0 z-50 pt-2 px-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-slate-900/50 backdrop-blur-sm border-b border-purple-500/20 rounded-xl">
          <div className="flex justify-between items-center py-2">
            <div className="flex items-center space-x-2">
              <Link
                href="/"
                className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent  text-lg sm:text-2xl font-bold"
              >
                Galaxy Academy
              </Link>
            </div>
            <div className="hidden md:flex  space-x-8">
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
            <Button className="hidden md:flex bg-purple-600 hover:bg-purple-700">
              Get Started
            </Button>
            {/* DROPDOWN ICON */}
            <div className="flex md:hidden hover:bg-slate-800/50 p-2 rounded-md items-center">
            {isOpen ? (
              <X
                className="w-6 h-6 text-purple-500"
                onClick={() => setIsOpen(!isOpen)}
              />
            ) : (
              <Menu
                className="w-6 h-6 text-purple-500"
                onClick={() => setIsOpen(!isOpen)}
              />
            )}
         
            </div>
            {/* DROPDOWN  */}

            {isOpen?(
            
            <div className=" block md:hidden p-2 w-60 absolute right-8 top-16 animate-fade-in-up backdrop-blur-sm bg-slate-900/50 border border-purple-500/20 rounded-md">
              <ul className="text-white" onClick={()=>setIsOpen(!isOpen)}>
       
                <li className="my-2 w-">
                  <Link className="w-full block" href="/">
                    {" "}
                    Home
                  </Link>
                </li>
                <li className="my-2 w-">
                  <Link className="w-full block" href="/blog">
                    {" "}
                    Blog
                  </Link>
                </li>
                <li className="my-2 w-">
                  <Link className="w-full block" href="/gallery">
                    {" "}
                    Gallery
                  </Link>
                </li>
                <li className="my-2 w-">
                  <Link className="w-full block" href="/about">
                    About Us{" "}
                  </Link>
                </li>
                <li className="my-2 w-">
                  <Link className="w-full block" href="/contact">
                    Contact Us
                  </Link>
                </li>
              </ul>
              <Button
                size={"sm"}
                className=" bg-purple-600 hover:bg-purple-700 w-full"
              >
                Get Started
              </Button>
            </div>
            ):null}   
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;

import { Star } from 'lucide-react'
import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <>
        {/* Footer */}
        <footer className="bg-slate-900 border-t border-purple-500/20 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Star className="h-6 w-6 text-purple-400" />
                <span className="text-xl font-bold text-white">
                  Galaxy Academy
                </span>
              </div>
              <p className="text-gray-400">
                Empowering students to reach for the stars through quality
                education.
              </p>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/"
                    className="text-gray-400 hover:text-purple-300 transition-colors"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog"
                    className="text-gray-400 hover:text-purple-300 transition-colors"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="text-gray-400 hover:text-purple-300 transition-colors"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-gray-400 hover:text-purple-300 transition-colors"
                  >
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
            <p className="text-gray-400">
              © 2024 Galaxy Academy. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer

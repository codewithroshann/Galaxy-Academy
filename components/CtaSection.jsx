import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'

const CtaSection = () => {
  return (
    <div className="max-w-4xl mx-auto text-center">
    <h2 className="text-4xl font-bold text-white mb-6">
      Ready to Start Your Journey?
    </h2>
    <p className="text-gray-300 text-lg mb-8">
      Join Galaxy Academy today and unlock your potential with our
      comprehensive learning platform.
    </p>
    <div className="flex flex-wrap sm:flex-row gap-4 justify-center">
      <Button
        size="lg"
        className="bg-purple-600 hover:bg-purple-700 transition-all duration-200 hover:transform hover:scale-105"
      >
        Enroll Now
      </Button>
      <Link href="/contact">
        <Button
          size="lg"
          variant="outline"
          className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white transition-all duration-200 hover:transform hover:scale-105"
        >
          Contact Us
        </Button>
      </Link>
    </div>
  </div>
  )
}

export default CtaSection

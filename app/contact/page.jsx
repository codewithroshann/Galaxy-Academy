import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Star, Mail, Phone, MapPin, Clock, ArrowLeft, Send } from "lucide-react"

export default function ContactPage() {
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
            <h1 className="text-5xl font-bold text-white mb-6">
              Contact{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Galaxy Academy
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Have questions about our programs? Need help with enrollment? We're here to help you on your educational
              journey.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="bg-slate-800/50 border-purple-500/20 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white text-2xl">Send us a Message</CardTitle>
                <CardDescription className="text-gray-300">
                  Fill out the form below and we'll get back to you within 24 hours.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">First Name</label>
                    <Input
                      placeholder="John"
                      className="bg-slate-700 border-purple-500/20 text-white placeholder-gray-400 focus:border-purple-400"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Last Name</label>
                    <Input
                      placeholder="Doe"
                      className="bg-slate-700 border-purple-500/20 text-white placeholder-gray-400 focus:border-purple-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
                  <Input
                    type="email"
                    placeholder="john.doe@example.com"
                    className="bg-slate-700 border-purple-500/20 text-white placeholder-gray-400 focus:border-purple-400"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Phone Number</label>
                  <Input
                    type="tel"
                    placeholder="(555) 123-4567"
                    className="bg-slate-700 border-purple-500/20 text-white placeholder-gray-400 focus:border-purple-400"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Subject</label>
                  <select className="w-full px-3 py-2 bg-slate-700 border border-purple-500/20 rounded-md text-white focus:outline-none focus:border-purple-400">
                    <option value="">Select a subject</option>
                    <option value="enrollment">Enrollment Information</option>
                    <option value="programs">Program Details</option>
                    <option value="technical">Technical Support</option>
                    <option value="partnership">Partnership Opportunities</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                  <Textarea
                    placeholder="Tell us how we can help you..."
                    rows={5}
                    className="bg-slate-700 border-purple-500/20 text-white placeholder-gray-400 focus:border-purple-400"
                  />
                </div>

                <Button className="w-full bg-purple-600 hover:bg-purple-700">
                  <Send className="h-4 w-4 mr-2" />
                  Send Message
                </Button>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="bg-slate-800/50 border-purple-500/20 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-white text-2xl">Get in Touch</CardTitle>
                  <CardDescription className="text-gray-300">
                    We're here to help you succeed. Reach out to us through any of these channels.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start gap-4">
                    <Mail className="h-6 w-6 text-purple-400 mt-1" />
                    <div>
                      <h3 className="text-white font-semibold mb-1">Email Us</h3>
                      <p className="text-gray-300">info@galaxyacademy.com</p>
                      <p className="text-gray-300">support@galaxyacademy.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Phone className="h-6 w-6 text-purple-400 mt-1" />
                    <div>
                      <h3 className="text-white font-semibold mb-1">Call Us</h3>
                      <p className="text-gray-300">Main: (555) 123-4567</p>
                      <p className="text-gray-300">Support: (555) 123-4568</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <MapPin className="h-6 w-6 text-purple-400 mt-1" />
                    <div>
                      <h3 className="text-white font-semibold mb-1">Visit Us</h3>
                      <p className="text-gray-300">123 Galaxy Street</p>
                      <p className="text-gray-300">Space City, SC 12345</p>
                      <p className="text-gray-300">United States</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Clock className="h-6 w-6 text-purple-400 mt-1" />
                    <div>
                      <h3 className="text-white font-semibold mb-1">Office Hours</h3>
                      <p className="text-gray-300">Monday - Friday: 9:00 AM - 6:00 PM</p>
                      <p className="text-gray-300">Saturday: 10:00 AM - 4:00 PM</p>
                      <p className="text-gray-300">Sunday: Closed</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* FAQ Section */}
              <Card className="bg-slate-800/50 border-purple-500/20 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-white text-2xl">Frequently Asked Questions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="text-white font-semibold mb-2">How do I enroll in a program?</h4>
                    <p className="text-gray-300 text-sm">
                      You can enroll by clicking "Get Started" on any program page or contacting our enrollment team
                      directly.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-white font-semibold mb-2">Do you offer financial aid?</h4>
                    <p className="text-gray-300 text-sm">
                      Yes, we offer various financial aid options including scholarships, payment plans, and employer
                      sponsorship programs.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-white font-semibold mb-2">Are the courses self-paced?</h4>
                    <p className="text-gray-300 text-sm">
                      Most of our courses offer flexible scheduling with both self-paced and instructor-led options
                      available.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-white font-semibold mb-2">What kind of support do you provide?</h4>
                    <p className="text-gray-300 text-sm">
                      We provide 24/7 technical support, academic mentoring, career counseling, and peer community
                      access.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Find Us</h2>
            <p className="text-gray-300 text-lg">
              Located in the heart of Space City, we're easily accessible by public transportation.
            </p>
          </div>

          <div className="bg-slate-700 rounded-lg h-96 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="h-16 w-16 text-purple-400 mx-auto mb-4" />
              <h3 className="text-white text-xl font-semibold mb-2">Interactive Map</h3>
              <p className="text-gray-300">123 Galaxy Street, Space City, SC 12345</p>
              <Button className="mt-4 bg-purple-600 hover:bg-purple-700">Get Directions</Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Start Your Journey?</h2>
          <p className="text-gray-300 text-lg mb-8">
            Don't wait – your future starts today. Join thousands of successful students at Galaxy Academy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
              Enroll Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white"
            >
              Schedule a Call
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
                  <Link href="/" className="text-gray-400 hover:text-purple-300">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-gray-400 hover:text-purple-300">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-gray-400 hover:text-purple-300">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-400 hover:text-purple-300">
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

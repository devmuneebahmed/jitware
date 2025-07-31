"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Mail, Phone, MapPin, Clock, Send, MessageSquare, Calendar, ArrowRight, CheckCircle } from "lucide-react"
import { useState } from "react"

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    budget: "",
    message: "",
  })

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: "hello@creativeflow.com",
      description: "Get a response within 24 hours",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Phone,
      title: "Call Us",
      details: "+1 (555) 123-4567",
      description: "Mon-Fri, 9AM-6PM PST",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: "123 Innovation St, San Francisco, CA",
      description: "Schedule an appointment",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Clock,
      title: "Response Time",
      details: "< 24 Hours",
      description: "Average response time",
      color: "from-orange-500 to-red-500",
    },
  ]

  const services = [
    "SEO & Digital Marketing",
    "Web Development",
    "AI Automation",
    "Brand Design",
    "Growth Strategy",
    "Other",
  ]

  const budgetRanges = ["$5K - $10K", "$10K - $25K", "$25K - $50K", "$50K - $100K", "$100K+"]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  return (
    <section className="py-20 bg-gradient-to-b from-background to-gray-50/50 dark:to-gray-900/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-sm font-medium text-blue-700 dark:text-blue-300 mb-6">
            <MessageSquare className="w-4 h-4 mr-2" />
            Get In Touch
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let's Start Your{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Growth Journey
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to transform your business? Get in touch with our team and let's discuss how we can help you achieve
            your goals.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <Card className="border-0 shadow-2xl bg-white dark:bg-gray-900 overflow-hidden relative">
              {/* Decorative gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 dark:from-blue-900/10 dark:to-purple-900/10" />

              <CardHeader className="relative z-10 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                <CardTitle className="text-2xl font-bold">Send us a message</CardTitle>
                <p className="text-white/90">Fill out the form below and we'll get back to you within 24 hours.</p>
              </CardHeader>

              <CardContent className="relative z-10 p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Full Name *</label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="John Doe"
                        required
                        className="h-12"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Email Address *</label>
                      <Input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="john@company.com"
                        required
                        className="h-12"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Company Name</label>
                    <Input
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="Your Company"
                      className="h-12"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Services Interested In</label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                      {services.map((service) => (
                        <Badge
                          key={service}
                          variant="outline"
                          className="cursor-pointer hover:bg-blue-50 dark:hover:bg-blue-900/20 justify-center py-2"
                        >
                          {service}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Project Budget</label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                      {budgetRanges.map((budget) => (
                        <Badge
                          key={budget}
                          variant="outline"
                          className="cursor-pointer hover:bg-purple-50 dark:hover:bg-purple-900/20 justify-center py-2"
                        >
                          {budget}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Project Details *</label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us about your project, goals, and how we can help..."
                      required
                      rows={5}
                      className="resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-6 text-lg font-bold group shadow-lg"
                  >
                    Send Message
                    <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Info & Quick Actions */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Contact Information */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="group cursor-pointer"
                >
                  <Card className="p-4 border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white dark:bg-gray-900">
                    <div className="flex items-center space-x-4">
                      <div
                        className={`w-12 h-12 rounded-xl bg-gradient-to-r ${info.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                      >
                        <info.icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300">
                          {info.title}
                        </h4>
                        <p className="text-sm font-medium text-blue-600">{info.details}</p>
                        <p className="text-xs text-muted-foreground">{info.description}</p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Quick Actions */}
            <Card className="p-6 border-0 shadow-xl bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20">
              <h3 className="font-bold text-lg mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <Button variant="outline" className="w-full justify-between group bg-transparent">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2" />
                    Schedule a Call
                  </div>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>

                <Button variant="outline" className="w-full justify-between group bg-transparent">
                  <div className="flex items-center">
                    <MessageSquare className="h-4 w-4 mr-2" />
                    Live Chat
                  </div>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>

                <Button variant="outline" className="w-full justify-between group bg-transparent">
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2" />
                    Free Audit
                  </div>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </Card>

            {/* Guarantee */}
            <Card className="p-6 border-0 shadow-xl bg-gradient-to-r from-green-600 to-emerald-600 text-white">
              <div className="text-center">
                <CheckCircle className="h-12 w-12 mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">Our Guarantee</h3>
                <p className="text-sm opacity-90">
                  We're so confident in our results, we offer a 30-day money-back guarantee on all our services.
                </p>
              </div>
            </Card>
          </motion.div>
        </div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h3 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h3>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                question: "How long does it take to see results?",
                answer:
                  "Most clients see initial improvements within 30-60 days, with significant results typically achieved within 3-6 months.",
              },
              {
                question: "Do you work with small businesses?",
                answer: "We work with businesses of all sizes, from startups to Fortune 500 companies.",
              },
              {
                question: "What's included in your services?",
                answer:
                  "Our services include strategy development, implementation, ongoing optimization, and detailed reporting.",
              },
              {
                question: "Can I cancel anytime?",
                answer:
                  "Yes, we offer flexible contracts with no long-term commitments. You can cancel with 30 days notice.",
              },
            ].map((faq, index) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="p-6 bg-white dark:bg-gray-900 rounded-xl shadow-lg border border-gray-100 dark:border-gray-800"
              >
                <h4 className="font-semibold mb-3">{faq.question}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ContactSection

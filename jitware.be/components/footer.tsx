"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Send,
  Star,
  Award,
  Users,
  Zap,
} from "lucide-react"

const Footer = () => {
  const footerLinks = {
    Services: [
      { name: "SEO & Digital Marketing", href: "#expertise" },
      { name: "Web Development", href: "#expertise" },
      { name: "AI Automation", href: "#expertise" },
      { name: "Brand Design", href: "#expertise" },
      { name: "Growth Strategy", href: "#expertise" },
    ],
    Company: [
      { name: "About Us", href: "#about" },
      { name: "Our Team", href: "#about" },
      { name: "Case Studies", href: "#cases" },
      { name: "Contact", href: "#contact" },
      { name: "Blog", href: "#blog" },
    ],
    Resources: [
      { name: "Free Tools", href: "#tools" },
      { name: "Knowledge Base", href: "#knowledge" },
      { name: "Financial Insights", href: "#insights" },
      { name: "Webinars", href: "#" },
      { name: "Reports", href: "#" },
    ],
    Legal: [
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" },
      { name: "Cookie Policy", href: "#" },
      { name: "GDPR Compliance", href: "#" },
    ],
  }

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook", color: "hover:bg-blue-600" },
    { icon: Twitter, href: "#", label: "Twitter", color: "hover:bg-sky-500" },
    { icon: Instagram, href: "#", label: "Instagram", color: "hover:bg-pink-600" },
    { icon: Linkedin, href: "#", label: "LinkedIn", color: "hover:bg-blue-700" },
    { icon: Youtube, href: "#", label: "YouTube", color: "hover:bg-red-600" },
  ]

  const stats = [
    { icon: Users, value: "500+", label: "Happy Clients" },
    { icon: Award, value: "50+", label: "Awards Won" },
    { icon: Star, value: "4.9/5", label: "Client Rating" },
    { icon: Zap, value: "99%", label: "Success Rate" },
  ]

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:50px_50px]" />
      </div>

      {/* Top Section - Newsletter & CTA */}
      <div className="relative z-10 border-b border-white/10">
        <div className="container mx-auto px-4 py-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            {/* Left - CTA */}
            <div>
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to{" "}
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Transform
                </span>{" "}
                Your Business?
              </h3>
              <p className="text-white/80 text-lg mb-6 leading-relaxed">
                Join 500+ successful businesses that have accelerated their growth with our proven strategies.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold px-8"
                >
                  Get Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10 bg-transparent font-bold"
                >
                  View Our Work
                </Button>
              </div>
            </div>

            {/* Right - Newsletter */}
            <Card className="bg-white/10 backdrop-blur-lg border-white/20 p-8">
              <div className="text-center mb-6">
                <Mail className="h-12 w-12 mx-auto mb-4 text-blue-400" />
                <h4 className="text-xl font-bold mb-2">Stay Ahead of the Curve</h4>
                <p className="text-white/80">
                  Get weekly insights, tips, and industry updates delivered to your inbox.
                </p>
              </div>

              <div className="space-y-4">
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  className="bg-white/10 border-white/20 text-white placeholder-white/60 focus:border-blue-400 h-12"
                />
                <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold h-12">
                  Subscribe Now
                  <Send className="ml-2 h-4 w-4" />
                </Button>
              </div>

              <div className="flex items-center justify-center mt-4 text-sm text-white/60">
                <span>✨ Join 10,000+ subscribers</span>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="relative z-10 border-b border-white/10">
        <div className="container mx-auto px-4 py-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="text-center group"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-white/70 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10">
        <div className="container mx-auto px-4 py-16">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-6">
                Jitware
              </div>
              <p className="text-white/80 mb-8 leading-relaxed text-lg">
                Transforming businesses through innovative digital strategies, AI automation, and data-driven growth
                tactics. Your success is our mission.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center text-white/80 hover:text-white transition-colors group cursor-pointer">
                  <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center mr-4 group-hover:bg-blue-600 transition-colors">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-medium">hello@jitware.com</div>
                    <div className="text-sm text-white/60">We reply within 24 hours</div>
                  </div>
                </div>

                <div className="flex items-center text-white/80 hover:text-white transition-colors group cursor-pointer">
                  <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center mr-4 group-hover:bg-purple-600 transition-colors">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-medium">+1 (555) 123-4567</div>
                    <div className="text-sm text-white/60">Mon-Fri, 9AM-6PM PST</div>
                  </div>
                </div>

                <div className="flex items-center text-white/80 hover:text-white transition-colors group cursor-pointer">
                  <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center mr-4 group-hover:bg-green-600 transition-colors">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-medium">San Francisco, CA</div>
                    <div className="text-sm text-white/60">Schedule a visit</div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-3">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className={`w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center transition-all duration-300 ${social.color} hover:text-white`}
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Links */}
            {Object.entries(footerLinks).map(([category, links], index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="font-bold text-lg mb-6 text-white">{category}</h3>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-white/70 hover:text-white transition-colors duration-200 text-sm hover:translate-x-1 transform inline-block"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative z-10 border-t border-white/10">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <p className="text-white/60 text-sm">© 2024 Jitware. All rights reserved.</p>
              <div className="flex items-center space-x-4">
                <Badge variant="outline" className="border-white/30 text-white/80 bg-transparent">
                  Made with ❤️ in San Francisco
                </Badge>
                <Badge variant="outline" className="border-green-500/30 text-green-400 bg-green-500/10">
                  ✓ GDPR Compliant
                </Badge>
              </div>
            </div>

            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <span className="text-white/60 text-sm">Trusted by 500+ businesses worldwide</span>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500" />
    </footer>
  )
}

export default Footer

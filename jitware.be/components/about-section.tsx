"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Users, Award, Target, Heart, ArrowRight, Quote, User, Mail } from "lucide-react"
import Image from "next/image"

const AboutSection = () => {
  const stats = [
    { icon: Users, value: "50+", label: "Team Members" },
    { icon: Award, value: "5+", label: "Years Experience" },
    { icon: Target, value: "500+", label: "Projects Completed" },
    { icon: Heart, value: "98%", label: "Client Satisfaction" },
  ]

  const team = [
    {
      name: "Sarah Johnson",
      role: "Founder & CEO",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Former Google marketing executive with 10+ years of experience scaling digital businesses.",
      specialties: ["Strategy", "Leadership", "Growth"],
    },
    {
      name: "Michael Chen",
      role: "Head of Technology",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Full-stack developer and AI specialist who's built systems for Fortune 500 companies.",
      specialties: ["AI/ML", "Development", "Innovation"],
    },
    {
      name: "Emily Rodriguez",
      role: "Creative Director",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Award-winning designer with expertise in brand identity and user experience design.",
      specialties: ["Design", "Branding", "UX/UI"],
    },
  ]

  const values = [
    {
      title: "Innovation First",
      description: "We stay ahead of trends and embrace cutting-edge technologies to deliver exceptional results.",
      icon: "🚀",
    },
    {
      title: "Client Success",
      description: "Your success is our success. We're committed to delivering measurable results that matter.",
      icon: "🎯",
    },
    {
      title: "Transparency",
      description: "Clear communication, honest reporting, and full visibility into our processes and results.",
      icon: "🔍",
    },
    {
      title: "Continuous Learning",
      description: "We invest in our team's growth and stay updated with the latest industry developments.",
      icon: "📚",
    },
  ]

  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-b from-gray-50/50 to-background dark:from-gray-900/50 dark:to-background"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-sm font-medium text-blue-700 dark:text-blue-300 mb-6">
            <Users className="w-4 h-4 mr-2" />
            About Jitware
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Who we are & why we do this
            </span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left Content - New Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/jens-eigenaar-jitware.png"
                alt="Jens Van den Eeckhout - Founder & SEO Expert"
                width={500}
                height={600}
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />

              {/* Premium overlay effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10" />
            </div>

            {/* Enhanced Floating Contact Card */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="absolute -bottom-8 -right-8 bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-2xl border border-gray-100 dark:border-gray-800 backdrop-blur-sm"
              style={{
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.05)",
              }}
            >
              <div className="flex items-center space-x-4 mb-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                  <User className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="font-bold text-lg bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Jens Van den Eeckhout
                  </div>
                  <div className="text-sm text-muted-foreground">Founder & SEO Expert</div>
                </div>
              </div>

              {/* Premium badge */}
              <Badge className="bg-gradient-to-r from-green-500 to-emerald-500 text-white border-0">
                ✓ Available for consultation
              </Badge>
            </motion.div>
          </motion.div>

          {/* Right Content - Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p className="text-lg">
                At <span className="font-semibold text-blue-600">Jitware</span>, we believe every business deserves to
                be found. Founded in 2021 and now a team of freelancers, we combine creativity with data-driven
                strategies to deliver measurable results.
              </p>
              <p className="text-lg">
                Our approach is simple: we don't just build websites or run campaigns - we become your digital partner.
                Every project starts with understanding your unique challenges. We're not just your digital partner, but
                an extension of your team, helping you thrive through opportunities and solutions.
              </p>
              <p className="text-lg">
                <span className="font-semibold text-purple-600">Jens</span>, our founder and lead SEO expert, brings
                years of experience in helping businesses achieve top rankings and sustainable growth through strategic
                digital marketing.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold shadow-lg"
                >
                  Meet our team
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" variant="outline" className="font-bold bg-transparent border-2">
                  <Mail className="mr-2 h-5 w-5" />
                  Contact Jens
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20 mt-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="text-center p-8 bg-white dark:bg-gray-900 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-800 card-premium"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center mx-auto mb-4 shadow-lg">
                <stat.icon className="h-8 w-8 text-white" />
              </div>
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-muted-foreground font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Team */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-4">Leadership Team</h3>
          <p className="text-xl text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Meet the visionaries and experts who drive our mission forward every day.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group"
              >
                <Card className="h-full overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 bg-white dark:bg-gray-900 card-premium">
                  <div className="relative">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      width={300}
                      height={300}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  </div>

                  <CardContent className="p-6">
                    <h4 className="text-xl font-bold mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300">
                      {member.name}
                    </h4>
                    <p className="text-blue-600 font-medium mb-4">{member.role}</p>
                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{member.bio}</p>

                    <div className="flex flex-wrap gap-2">
                      {member.specialties.map((specialty) => (
                        <Badge key={specialty} variant="outline" className="text-xs">
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-4">Our Values</h3>
          <p className="text-xl text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            The principles that guide everything we do and shape our culture.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="group"
              >
                <Card className="p-8 h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-gray-50/50 dark:from-gray-900 dark:to-gray-800/50 card-premium">
                  <div className="flex items-start space-x-4">
                    <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                      {value.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300">
                        {value.title}
                      </h4>
                      <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Testimonial Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Card className="max-w-4xl mx-auto p-8 md:p-12 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border-0 card-premium">
            <Quote className="h-12 w-12 text-blue-600 mx-auto mb-6" />
            <blockquote className="text-2xl md:text-3xl font-medium leading-relaxed mb-8 text-foreground">
              "Jitware doesn't just deliver results – they become true partners in your success. Their innovative
              approach and genuine care for our business made all the difference."
            </blockquote>
            <div className="flex items-center justify-center space-x-4">
              <Image
                src="/placeholder.svg?height=60&width=60"
                alt="Client testimonial"
                width={60}
                height={60}
                className="rounded-full"
              />
              <div className="text-left">
                <div className="font-semibold">Jennifer Martinez</div>
                <div className="text-muted-foreground">CEO, TechVision Inc.</div>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 to-purple-600/90" />
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">Ready to Work Together?</h3>
              <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
                Let's discuss how our team can help transform your business and achieve your growth goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100 font-bold">
                    Schedule a Call
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </motion.div>

                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white text-white hover:bg-white/10 bg-transparent font-bold"
                  >
                    View Our Work
                  </Button>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutSection

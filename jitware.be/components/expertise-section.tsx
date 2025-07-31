"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Search, Video, Bot, ArrowRight, CheckCircle } from "lucide-react"

const ExpertiseSection = () => {
  const services = [
    {
      icon: Search,
      title: "SEO & web design",
      description:
        "We ensure your site gets found and converts. From technical optimization to user experience design.",
      features: ["Technical SEO audit", "Conversion optimization", "Responsive web design"],
      link: "More about web & SEO",
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20",
    },
    {
      icon: Video,
      title: "Video & graphic design",
      description: "Attract attention and build brand awareness. From video production to social media content.",
      features: ["Corporate videos", "Logo & corporate identity", "Social media content"],
      link: "View video & design work",
      color: "from-purple-500 to-pink-500",
      bgColor: "from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20",
    },
    {
      icon: Bot,
      title: "AI solutions",
      description: "Automate, scale and innovate with our AI integrations. Save time and increase efficiency.",
      features: ["AI analysis", "Content generation", "Generative Engine Optimization (GEO) & SEO"],
      link: "Discover AI tools",
      color: "from-green-500 to-emerald-500",
      bgColor: "from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  return (
    <section
      id="expertise"
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
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">Our expertise</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-center">
            Everything you need for digital growth, under one roof
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group"
            >
              <Card
                className={`h-full bg-gradient-to-br ${service.bgColor} border-0 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden relative`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent dark:from-white/5 dark:to-transparent" />

                <CardHeader className="relative z-10 text-center">
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}
                  >
                    <service.icon className="h-8 w-8 text-white" />
                  </div>

                  <CardTitle className="text-2xl font-bold mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300">
                    {service.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="relative z-10 text-center">
                  <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>

                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <motion.li
                        key={feature}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: featureIndex * 0.1 }}
                        className="flex items-center text-sm justify-center"
                      >
                        <CheckCircle className={`w-4 h-4 mr-3 text-green-600`} />
                        {feature}
                      </motion.li>
                    ))}
                  </ul>

                  <Button
                    variant="ghost"
                    className="group/btn w-full justify-center hover:bg-white/50 dark:hover:bg-white/10 text-blue-600 font-semibold"
                  >
                    {service.link}
                    <ArrowRight className="h-4 w-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>

                {/* Hover Effect */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                />
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default ExpertiseSection

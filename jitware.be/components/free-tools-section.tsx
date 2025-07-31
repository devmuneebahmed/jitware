"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Search, User, Globe, ArrowRight, Calendar } from "lucide-react"

const FreeToolsSection = () => {
  const tools = [
    {
      icon: Search,
      title: "SEO Meta Analyzer",
      description: "Optimize your meta tags with real-time visual feedback",
      date: "June 23, 2025",
      tags: ["SEO", "meta", "optimization"],
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20",
    },
    {
      icon: User,
      title: "Create your own AI influencer",
      description: "No hassle with expensive influencers",
      date: "May 28, 2025",
      tags: ["AI", "influencer", "marketing"],
      color: "from-purple-500 to-pink-500",
      bgColor: "from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20",
    },
    {
      icon: Globe,
      title: "SEO Sitemap Generator",
      description:
        "Transform your URLs into a professionally formatted XML sitemap to improve your search engine rankings. Download it as an XML file for easy submission to search engines.",
      date: "May 28, 2025",
      tags: ["SEO", "sitemap", "XML"],
      color: "from-green-500 to-emerald-500",
      bgColor: "from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20",
    },
  ]

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
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-foreground">(free)</span>{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Tools</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-4">
            Increase your efficiency with our free tools
          </p>
          <p className="text-muted-foreground">For custom tools, you can always contact us without obligation.</p>
        </motion.div>

        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {tools.map((tool, index) => (
            <motion.div
              key={tool.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group"
            >
              <Card
                className={`h-full bg-gradient-to-br ${tool.bgColor} border-0 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden relative`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent dark:from-white/5 dark:to-transparent" />

                <CardHeader className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-r ${tool.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                    >
                      <tool.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex items-center text-xs text-muted-foreground">
                      <Calendar className="h-3 w-3 mr-1" />
                      {tool.date}
                    </div>
                  </div>

                  <CardTitle className="text-xl font-bold mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300">
                    {tool.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="relative z-10">
                  <p className="text-muted-foreground mb-6 leading-relaxed text-sm">{tool.description}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {tool.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <Button className={`w-full bg-gradient-to-r ${tool.color} hover:opacity-90 text-white group/btn`}>
                    Use tool
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>

                {/* Hover Effect */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${tool.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                />
              </Card>
            </motion.div>
          ))}
        </div>

        {/* View All Tools Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button variant="outline" size="lg" className="px-8 py-6 bg-transparent font-bold">
            View all tools
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

export default FreeToolsSection

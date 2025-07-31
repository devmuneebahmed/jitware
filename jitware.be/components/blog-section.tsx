"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, ArrowRight, User } from "lucide-react"
import Image from "next/image"

const BlogSection = () => {
  const blogPosts = [
    {
      title: "The Future of AI in Digital Marketing: 10 Trends to Watch",
      excerpt:
        "Discover how artificial intelligence is revolutionizing digital marketing strategies and what it means for your business growth.",
      image: "/placeholder.svg?height=300&width=400",
      category: "AI & Marketing",
      author: "Sarah Johnson",
      date: "Dec 15, 2024",
      readTime: "8 min read",
      featured: true,
    },
    {
      title: "Complete Guide to SEO in 2024: Strategies That Actually Work",
      excerpt:
        "Master the latest SEO techniques and algorithm updates to dominate search rankings and drive organic traffic.",
      image: "/placeholder.svg?height=300&width=400",
      category: "SEO",
      author: "Michael Chen",
      date: "Dec 12, 2024",
      readTime: "12 min read",
      featured: false,
    },
    {
      title: "Conversion Rate Optimization: From 2% to 15% in 90 Days",
      excerpt:
        "Real case study showing how we increased a client's conversion rate by 650% using data-driven optimization techniques.",
      image: "/placeholder.svg?height=300&width=400",
      category: "CRO",
      author: "Emily Rodriguez",
      date: "Dec 10, 2024",
      readTime: "6 min read",
      featured: false,
    },
  ]

  return (
    <section id="blog" className="py-20 bg-gradient-to-b from-background to-gray-50/50 dark:to-gray-900/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Latest insights & tips</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Stay informed about digital trends and strategies
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group"
            >
              <Card className="h-full overflow-hidden hover:shadow-2xl transition-all duration-300 group border-0 bg-white dark:bg-gray-900">
                <div className="relative">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    width={400}
                    height={250}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  {post.featured && (
                    <Badge className="absolute top-4 left-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                      Featured
                    </Badge>
                  )}
                  <Badge variant="secondary" className="absolute top-4 right-4">
                    {post.category}
                  </Badge>
                </div>

                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3 leading-tight group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300">
                    {post.title}
                  </h3>

                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{post.excerpt}</p>

                  <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center space-x-1">
                        <User className="h-3 w-3" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-3 w-3" />
                        <span>{post.date}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-3 w-3" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  <Button variant="ghost" className="group/btn w-full justify-between p-0 h-auto">
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BlogSection

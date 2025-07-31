"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

const CaseStudiesSection = () => {
  const caseStudies = [
    {
      title: "Roofing works Van den Driessche",
      client: "Van den Driessche",
      industry: "Construction",
      challenge: "Website + local SEO strategy",
      solution:
        "From page 10 to position 1 in Google. A spectacular result! Some in incredibly difficult keywords. Great work and!",
      results: [
        { metric: "Position", value: "1-3" },
        { metric: "Local SEO", value: "Top ranking" },
        { metric: "Visibility", value: "+300%" },
      ],
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Website", "Local SEO", "Google Ranking"],
      color: "from-blue-500 to-cyan-500",
      link: "View website + View case",
    },
    {
      title: "The Doncker",
      client: "The Doncker",
      industry: "Restaurant",
      challenge: "Hent en dubbeltjes low website",
      solution: "SEO + website redesign with online reservations",
      results: [
        { metric: "Online Bookings", value: "+250%" },
        { metric: "Website Traffic", value: "+180%" },
        { metric: "Local Visibility", value: "Top 3" },
      ],
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Website Redesign", "Online Reservations", "SEO"],
      color: "from-purple-500 to-pink-500",
      link: "View website + View case",
    },
    {
      title: "Olenlik Wellness",
      client: "Olenlik Wellness",
      industry: "Wellness",
      challenge: "New website Axel",
      solution: "SEO + website redesign with online booking system",
      results: [
        { metric: "Online Bookings", value: "+400%" },
        { metric: "Mobile Experience", value: "Optimized" },
        { metric: "Conversion Rate", value: "+150%" },
      ],
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Website", "Online Booking", "Mobile Optimization"],
      color: "from-green-500 to-emerald-500",
      link: "View website",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50/50 to-background dark:from-gray-900/50 dark:to-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">They grew thanks to our approach – will you too?</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">Real results from real companies</p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group"
            >
              <div className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-800">
                <div className="relative">
                  <Image
                    src={study.image || "/placeholder.svg"}
                    alt={study.title}
                    width={400}
                    height={250}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${study.color} opacity-20`} />
                  <Badge className="absolute top-4 left-4 bg-white/90 text-gray-900">{study.industry}</Badge>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300">
                    {study.title}
                  </h3>

                  <p className="text-sm text-muted-foreground mb-4">{study.challenge}</p>

                  <p className="text-sm mb-4 leading-relaxed">{study.solution}</p>

                  {/* Results */}
                  <div className="grid grid-cols-1 gap-2 mb-4">
                    {study.results.map((result, resultIndex) => (
                      <div key={result.metric} className="flex justify-between items-center text-sm">
                        <span className="text-muted-foreground">{result.metric}:</span>
                        <span className={`font-semibold bg-gradient-to-r ${study.color} bg-clip-text text-transparent`}>
                          {result.value}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {study.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <Button variant="outline" className="w-full group/btn bg-transparent">
                    {study.link}
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button variant="outline" size="lg" className="px-8 py-6 bg-transparent">
            View all success stories
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

export default CaseStudiesSection

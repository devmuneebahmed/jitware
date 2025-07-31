"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, BarChart3, Bot, ArrowRight, Calendar } from "lucide-react"

const FinancialInsightsSection = () => {
  const insights = [
    {
      icon: TrendingUp,
      title: "An exclusive market analysis in your inbox every day",
      description: "Get the most profitable opportunities every morning before the market opens",
      date: "June 3, 2025",
      tags: ["finance", "AI analysis", "daily"],
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20",
    },
    {
      icon: BarChart3,
      title: "An exclusive market analysis delivered directly to your inbox every day",
      description: "Don't miss any opportunity at the stock exchange and always stay informed",
      date: "May 30, 2025",
      tags: ["finance", "AI analysis", "market"],
      color: "from-purple-500 to-pink-500",
      bgColor: "from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20",
    },
    {
      icon: Bot,
      title: "Discover how our AI analytics tool delivered up to +233% returns in 5 months",
      description:
        "Investing based on gut feeling is a thing of the past. With our AI-powered analysis, our clients achieved stunning results in just a few months.",
      date: "May 20, 2025",
      tags: ["finance", "AI analytics", "returns"],
      color: "from-green-500 to-emerald-500",
      bgColor: "from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20",
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
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Financial insights
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Stay up to date with the latest financial trends and analyses
          </p>
        </motion.div>

        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {insights.map((insight, index) => (
            <motion.div
              key={insight.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group"
            >
              <Card
                className={`h-full bg-gradient-to-br ${insight.bgColor} border-0 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden relative`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent dark:from-white/5 dark:to-transparent" />

                <CardHeader className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-r ${insight.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                    >
                      <insight.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex items-center text-xs text-muted-foreground">
                      <Calendar className="h-3 w-3 mr-1" />
                      {insight.date}
                    </div>
                  </div>

                  <CardTitle className="text-lg font-bold mb-2 leading-tight group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300">
                    {insight.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="relative z-10">
                  <p className="text-muted-foreground mb-6 leading-relaxed text-sm">{insight.description}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {insight.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <Button className={`w-full bg-gradient-to-r ${insight.color} hover:opacity-90 text-white group/btn`}>
                    Read more
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>

                {/* Hover Effect */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${insight.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                />
              </Card>
            </motion.div>
          ))}
        </div>

        {/* View All Financial Articles Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button variant="outline" size="lg" className="px-8 py-6 bg-transparent font-bold">
            View all financial articles
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

export default FinancialInsightsSection

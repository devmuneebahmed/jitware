"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Bot, BarChart3, FileText, Zap, ArrowRight } from "lucide-react"

const AIGrowthSection = () => {
  const aiFeatures = [
    {
      icon: BarChart3,
      title: "AI data analysis",
      description: "Analyze data faster than your data scientist",
    },
    {
      icon: FileText,
      title: "AI copy for landing pages",
      description: "Optimized texts that convert better",
    },
    {
      icon: Zap,
      title: "AI optimizations",
      description: "Identify the pain points and optimize them",
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
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Grow smarter with{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">AI</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Our advanced AI solutions help you save time, automate processes, and make better decisions.
            </p>

            <div className="space-y-6">
              {aiFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2 group-hover:text-blue-600 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Content - Promotional Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <Card className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border-2 border-blue-200 dark:border-blue-800 overflow-hidden">
              <CardHeader>
                <Badge className="w-fit bg-blue-600 text-white mb-4">AI Generated</Badge>
                <CardTitle className="text-xl font-bold">
                  Think of 10 books for a Facebook ad for a car detailing company
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  Use AI creativity, psychologically smart wording. Use for an advertisement.
                </p>
                <div className="flex items-center justify-between">
                  <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
                    View prompt library
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <span className="text-sm text-muted-foreground">Get premium access</span>
                </div>
              </CardContent>
            </Card>

            {/* Floating Element */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 bg-gradient-to-r from-green-400 to-blue-500 text-white p-3 rounded-full shadow-lg"
            >
              <Bot className="h-6 w-6" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default AIGrowthSection

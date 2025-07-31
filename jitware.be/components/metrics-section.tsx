"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { TrendingUp, Users, Target } from "lucide-react"

const MetricsSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const metrics = [
    {
      icon: TrendingUp,
      value: "+75%",
      label: "More visitors",
      description: "Average increase in organic traffic within 6 months for our SEO clients",
      color: "text-white",
    },
    {
      icon: Target,
      value: "Position 1-3",
      label: "in Google",
      description: "From page 10 to top 3 for important search terms thanks to our strategy",
      color: "text-white",
    },
    {
      icon: Users,
      value: "5% - 20%",
      label: "More conversions",
      description: "Thanks to better working pages and the right approach",
      color: "text-white",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Results that really matter</h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">We measure our success based on your growth</p>
        </motion.div>

        <div ref={ref} className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.05 }}
              className="group text-center"
            >
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-white/20 relative overflow-hidden">
                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                  <metric.icon className="h-8 w-8 text-white" />
                </div>

                {/* Value */}
                <div className="mb-4">
                  <span className="text-4xl md:text-6xl font-bold text-white">{metric.value}</span>
                </div>

                {/* Label */}
                <h3 className="text-xl font-bold mb-4 text-white">{metric.label}</h3>

                {/* Description */}
                <p className="text-white/80 text-sm leading-relaxed">{metric.description}</p>

                {/* Decorative Elements */}
                <div className="absolute top-4 right-4 w-20 h-20 bg-white/10 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-300" />
                <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-white/10 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-300" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default MetricsSection

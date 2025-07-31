"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"

const TestimonialsSection = () => {
  const testimonial = {
    name: "Alex L.",
    role: "Olenlik Wellness",
    content:
      "Super happy with the result and helpful out to work with. Nothing is too much trouble for him. Always available and works quickly! Great guy! Thanks Javier!",
    rating: 5,
    image: "/placeholder.svg?height=60&width=60",
  }

  const clients = ["The Doncker", "OS Cleaning", "Fisherman's Court", "Olenlik Wellness", "Cowell BV"]

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
          <div className="flex items-center justify-center space-x-4 mb-8">
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-lg font-semibold">Average 4.9/5</span>
            <span className="text-muted-foreground">40+ satisfied customers</span>
          </div>

          {/* Client logos */}
          <div className="flex items-center justify-center flex-wrap gap-8 mb-12">
            {clients.map((client, index) => (
              <motion.div
                key={client}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
              >
                {client}
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Main Testimonial */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <Card className="bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm border-2 border-blue-200 dark:border-blue-800">
              <CardContent className="p-8 md:p-12">
                <Quote className="h-12 w-12 text-blue-600 mb-6" />

                <blockquote className="text-xl md:text-2xl font-medium leading-relaxed mb-8 text-foreground">
                  "{testimonial.content}"
                </blockquote>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <motion.img
                      whileHover={{ scale: 1.1 }}
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover border-2 border-blue-200 dark:border-blue-800"
                    />
                    <div>
                      <h4 className="font-semibold text-lg">{testimonial.name}</h4>
                      <p className="text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>

                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.1 }}
                      >
                        <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                      </motion.div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection

"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, ExternalLink } from "lucide-react"

const AdditionalSections = () => {
  return (
    <>
      {/* View All Blogs Section */}
      <section className="py-12 bg-gradient-to-b from-background to-gray-50/50 dark:to-gray-900/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Button
              variant="outline"
              size="lg"
              className="px-8 py-6 bg-transparent font-bold border-2 hover:bg-blue-50 dark:hover:bg-blue-900/20"
            >
              View all blogs
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Business Articles Section */}
      <section className="py-12 bg-gradient-to-b from-gray-50/50 to-background dark:from-gray-900/50 dark:to-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Button
              variant="outline"
              size="lg"
              className="px-8 py-6 bg-transparent font-bold border-2 hover:bg-purple-50 dark:hover:bg-purple-900/20"
            >
              View all business articles
              <ExternalLink className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default AdditionalSections

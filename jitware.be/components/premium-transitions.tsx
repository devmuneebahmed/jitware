"use client"

import type React from "react"

import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"

const PremiumTransitions = ({ children }: { children: React.ReactNode }) => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <AnimatePresence mode="wait">
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{
            duration: 0.8,
            ease: [0.25, 0.46, 0.45, 0.94],
            staggerChildren: 0.1,
          }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default PremiumTransitions

"use client"

import { motion } from "framer-motion"
import { Sparkles, Zap, Star, Heart, Diamond } from "lucide-react"

const FloatingElements = () => {
  const elements = [
    { Icon: Sparkles, color: "text-yellow-400", delay: 0 },
    { Icon: Zap, color: "text-blue-400", delay: 1 },
    { Icon: Star, color: "text-purple-400", delay: 2 },
    { Icon: Heart, color: "text-pink-400", delay: 3 },
    { Icon: Diamond, color: "text-cyan-400", delay: 4 },
  ]

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {elements.map(({ Icon, color, delay }, index) => (
        <motion.div
          key={index}
          initial={{
            x: Math.random() * window.innerWidth,
            y: window.innerHeight + 100,
            opacity: 0,
            scale: 0,
          }}
          animate={{
            y: -100,
            opacity: [0, 1, 1, 0],
            scale: [0, 1, 1, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 15,
            delay: delay * 2,
            repeat: Number.POSITIVE_INFINITY,
            repeatDelay: 10,
            ease: "linear",
          }}
          className={`absolute ${color}`}
        >
          <Icon className="w-6 h-6" />
        </motion.div>
      ))}
    </div>
  )
}

export default FloatingElements

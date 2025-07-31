"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { TrendingUp, Zap, BarChart3, Sparkles, ArrowRight, Play } from "lucide-react"
import { useEffect, useState } from "react"

const HeroSection = () => {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 500], [0, 150])
  const opacity = useTransform(scrollY, [0, 300], [1, 0])
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
        type: "spring",
        stiffness: 100,
      },
    },
  }

  const floatingVariants = {
    animate: {
      y: [-20, 20, -20],
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 6,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      },
    },
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Premium Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 via-purple-600/30 to-pink-600/20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]" />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Orbs */}
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -150, 0],
            y: [0, 100, 0],
            scale: [1, 0.8, 1],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{ duration: 25, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-pink-500/30 to-purple-500/30 rounded-full blur-3xl"
        />

        {/* Geometric Shapes */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          className="absolute top-1/4 right-1/4 w-32 h-32 border border-white/10 rounded-lg"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 40, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          className="absolute bottom-1/4 left-1/4 w-24 h-24 border border-purple-400/20 rounded-full"
        />

        {/* Interactive Mouse Follower */}
        <motion.div
          animate={{
            x: mousePosition.x - 400,
            y: mousePosition.y - 400,
          }}
          transition={{ type: "spring", stiffness: 50, damping: 30 }}
          className="absolute w-96 h-96 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl pointer-events-none"
        />
      </div>

      <div className="container-fluid mx-auto px-4 py-20 relative z-10 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            style={{ y, opacity }}
            className="text-center lg:text-left"
          >
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-white/20 text-sm font-medium text-white mb-8 group hover:scale-105 transition-transform duration-300"
            >
              <Sparkles className="w-4 h-4 mr-2 text-yellow-400" />
              <span className="bg-gradient-to-r from-blue-200 to-purple-200 bg-clip-text text-transparent">
                Strategic Digital Growth
              </span>
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                className="ml-2"
              >
                <Zap className="w-4 h-4 text-yellow-400" />
              </motion.div>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-8"
            >
              <span className="text-white">More </span>
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                customers
              </span>
              <br />
              <span className="text-white">thanks to </span>
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                strategic
              </span>
              <br />
              <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
                visibility
              </span>
            </motion.h1>

            <motion.p variants={itemVariants} className="text-xl text-gray-300 mb-10 max-w-2xl leading-relaxed">
              We combine <span className="text-blue-400 font-semibold">web design</span>,
              <span className="text-purple-400 font-semibold"> SEO</span> and
              <span className="text-pink-400 font-semibold"> AI</span> to help your business grow online.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 justify-center lg:justify-start mb-12 max-w-2xl"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 text-white px-8 py-6 text-base font-bold group w-full shadow-2xl shadow-purple-500/25 border border-white/10"
                >
                  <Sparkles className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                  Request Free Analysis
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  variant="outline"
                  className="px-8 py-6 text-base border-2 border-white/30 text-white hover:bg-white/10 bg-white/5 backdrop-blur-sm font-bold w-full group"
                >
                  <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                  Watch Demo
                </Button>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  variant="outline"
                  className="px-8 py-6 text-base border-2 border-gradient-to-r from-blue-500 to-purple-500 text-white hover:bg-gradient-to-r hover:from-blue-500/10 hover:to-purple-500/10 bg-white/5 backdrop-blur-sm font-bold w-full"
                >
                  Success Cases
                </Button>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  variant="outline"
                  className="px-8 py-6 text-base border-2 border-gradient-to-r from-purple-500 to-pink-500 text-white hover:bg-gradient-to-r hover:from-purple-500/10 hover:to-pink-500/10 bg-white/5 backdrop-blur-sm font-bold w-full"
                >
                  AI Solutions
                </Button>
              </motion.div>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-8 text-sm text-gray-400"
            >
              <div className="flex items-center">
                <div className="flex -space-x-2 mr-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 border-2 border-white/20"
                    />
                  ))}
                </div>
                <span>500+ Happy Clients</span>
              </div>
              <div className="flex items-center">
                <div className="flex mr-2">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <motion.div
                      key={i}
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ delay: i * 0.1, duration: 2, repeat: Number.POSITIVE_INFINITY }}
                    >
                      ⭐
                    </motion.div>
                  ))}
                </div>
                <span>4.9/5 Rating</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Premium Dashboard */}
          <motion.div
            initial={{ opacity: 0, x: 100, rotateY: 15 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ delay: 0.5, duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative perspective-1000"
          >
            <motion.div
              variants={floatingVariants}
              animate="animate"
              className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-white/20 overflow-hidden"
              style={{
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.1)",
              }}
            >
              {/* Premium Glass Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-3xl" />

              {/* Dashboard Header */}
              <div className="flex items-center justify-between mb-8 relative z-10">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-red-400 rounded-full animate-pulse" />
                  <div
                    className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse"
                    style={{ animationDelay: "0.5s" }}
                  />
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" style={{ animationDelay: "1s" }} />
                </div>
                <h3 className="text-lg font-bold text-white bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Performance Dashboard
                </h3>
                <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-white" />
                </div>
              </div>

              {/* Premium Chart Area */}
              <div className="h-40 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center mb-8 relative overflow-hidden border border-white/10">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-pulse" />
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
                >
                  <TrendingUp className="h-16 w-16 text-white/70" />
                </motion.div>

                {/* Animated Chart Lines */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 300 150">
                  <motion.path
                    d="M20,120 Q80,60 150,80 T280,40"
                    stroke="url(#gradient1)"
                    strokeWidth="3"
                    fill="none"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, repeatDelay: 1 }}
                  />
                  <defs>
                    <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#3B82F6" />
                      <stop offset="50%" stopColor="#8B5CF6" />
                      <stop offset="100%" stopColor="#EC4899" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              {/* Premium Metrics Grid */}
              <div className="grid grid-cols-2 gap-6 mb-8">
                {[
                  { value: "18,294", label: "Visitors", color: "from-blue-500 to-cyan-500", icon: "👥" },
                  { value: "3.8%", label: "Conversion", color: "from-purple-500 to-pink-500", icon: "📈" },
                  { value: "2m45s", label: "Avg. time", color: "from-green-500 to-emerald-500", icon: "⏱️" },
                  { value: "42.1%", label: "Bounce rate", color: "from-orange-500 to-red-500", icon: "📊" },
                ].map((metric, index) => (
                  <motion.div
                    key={metric.label}
                    whileHover={{ scale: 1.05, rotateY: 5 }}
                    className={`bg-gradient-to-br ${metric.color} p-6 rounded-2xl text-center relative overflow-hidden group cursor-pointer`}
                    style={{
                      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.1)",
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="text-2xl mb-2">{metric.icon}</div>
                    <div className="text-2xl font-bold text-white mb-1">{metric.value}</div>
                    <div className="text-sm text-white/80">{metric.label}</div>
                  </motion.div>
                ))}
              </div>

              {/* Premium Growth Card */}
              <motion.div
                whileHover={{ scale: 1.02, rotateX: 5 }}
                className="bg-gradient-to-r from-emerald-500 via-green-500 to-teal-500 p-6 rounded-2xl relative overflow-hidden"
                style={{
                  boxShadow: "0 20px 40px -10px rgba(16, 185, 129, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.1)",
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent" />
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-2">
                    <div className="text-sm text-white/90 font-medium">Customer Growth</div>
                    <motion.div
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                    >
                      <Sparkles className="h-5 w-5 text-white" />
                    </motion.div>
                  </div>
                  <div className="text-4xl font-bold text-white mb-1">+247%</div>
                  <div className="text-sm text-white/80">This quarter</div>
                </div>
              </motion.div>
            </motion.div>

            {/* Premium Floating Elements */}
            <motion.div
              animate={{
                y: [0, -30, 0],
                rotate: [0, 10, -10, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-white p-4 rounded-2xl shadow-2xl border border-white/20"
            >
              <Zap className="h-8 w-8" />
            </motion.div>

            <motion.div
              animate={{
                y: [0, 25, 0],
                rotate: [0, -15, 15, 0],
                scale: [1, 0.9, 1],
              }}
              transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 2 }}
              className="absolute -bottom-6 -left-6 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white p-4 rounded-2xl shadow-2xl border border-white/20"
            >
              <BarChart3 className="h-8 w-8" />
            </motion.div>

            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.7, 1, 0.7],
              }}
              transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              className="absolute top-1/2 -right-12 bg-gradient-to-r from-pink-500 to-purple-500 text-white p-3 rounded-full shadow-xl border border-white/20"
            >
              <TrendingUp className="h-6 w-6" />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Premium Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}

export default HeroSection

"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section ref={ref} className="min-h-screen flex items-center justify-center p-6">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="max-w-3xl text-center"
      >
        <h2 className="text-4xl md:text-5xl font-serif text-gray-800 mb-8 text-balance">About This Day</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed text-balance">
          Today is a celebration of <span className="text-pink-500 font-medium">peace</span>, of{" "}
          <span className="text-purple-500 font-medium">warmth</span>, and of{" "}
          <span className="text-peach-500 font-medium">joy</span>. It's a day to honor someone who brings light to every
          room, and makes the world feel a little softer, a little kinder. This is your day, Simran. 💖
        </p>
      </motion.div>
    </section>
  )
}

"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useEffect, useState } from "react"
import { Heart, Sparkles, Star } from "lucide-react"

export function FinalSurprise() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [confetti, setConfetti] = useState(false)

  useEffect(() => {
    if (isInView) {
      setConfetti(true)
    }
  }, [isInView])

  return (
    <section ref={ref} className="min-h-screen flex items-center justify-center p-6 relative">
      {confetti && (
        <div className="absolute inset-0 pointer-events-none">
          {Array.from({ length: 100 }).map((_, i) => (
            <motion.div
              key={i}
              initial={{
                y: -20,
                x: Math.random() * (typeof window !== "undefined" ? window.innerWidth : 1000),
                opacity: 1,
                rotate: 0,
              }}
              animate={{
                y: typeof window !== "undefined" ? window.innerHeight : 1000,
                opacity: 0,
                rotate: 360,
              }}
              transition={{
                duration: 3 + Math.random() * 3,
                ease: "linear",
                delay: Math.random() * 2,
              }}
              className="absolute"
            >
              {i % 3 === 0 ? (
                <Heart className="w-4 h-4 text-pink-400 fill-pink-400" />
              ) : i % 3 === 1 ? (
                <Sparkles className="w-4 h-4 text-yellow-400" />
              ) : (
                <Star className="w-4 h-4 text-purple-400 fill-purple-400" />
              )}
            </motion.div>
          ))}
        </div>
      )}

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 1 }}
        className="max-w-4xl w-full"
      >
        <div className="bg-gradient-to-br from-pink-200/80 via-purple-200/80 to-peach-200/80 backdrop-blur-xl rounded-3xl p-12 md:p-16 border-2 border-white/50 shadow-2xl text-center">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ delay: 0.5 }}
          >
            <h2 className="text-4xl md:text-6xl font-serif text-gray-800 mb-6 text-balance">
              Simran, you are loved, celebrated and unforgettable 💕
            </h2>
            <p className="text-2xl md:text-3xl text-gray-700 font-serif text-balance">Happy Birthday!</p>
          </motion.div>

          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ delay: 1, type: "spring" }}
            className="mt-12 flex justify-center gap-4"
          >
            <Heart className="w-12 h-12 text-pink-400 fill-pink-400 animate-pulse" />
            <Sparkles className="w-12 h-12 text-yellow-400 animate-spin" style={{ animationDuration: "3s" }} />
            <Star className="w-12 h-12 text-purple-400 fill-purple-400 animate-pulse" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 1.5 }}
            className="mt-8 text-lg text-gray-600 text-balance"
          >
            May this year bring you endless joy, peace, and beautiful moments ✨
          </motion.p>
        </div>
      </motion.div>
    </section>
  )
}

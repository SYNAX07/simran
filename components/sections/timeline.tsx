"use client"

import { motion } from "framer-motion"
import { Heart, Sparkles, Flower2, Star } from "lucide-react"

export function Timeline() {
  const moments = [
    { emotion: "Gratitude", icon: Heart, color: "text-pink-400" },
    { emotion: "Peace", icon: Sparkles, color: "text-purple-400" },
    { emotion: "Growth", icon: Flower2, color: "text-green-400" },
    { emotion: "Joy", icon: Star, color: "text-yellow-400" },
  ]

  return (
    <section className="min-h-screen flex items-center justify-center p-6">
      <div className="max-w-6xl w-full">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-serif text-gray-800 mb-12 text-center text-balance"
        >
          Timeline of Feelings 🌈
        </motion.h2>

        <div className="overflow-x-auto pb-8">
          <div className="flex gap-8 min-w-max px-4">
            {moments.map((moment, index) => {
              const Icon = moment.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="flex flex-col items-center gap-4"
                >
                  <div className="w-32 h-32 rounded-full bg-white/40 backdrop-blur-sm border border-white/50 flex items-center justify-center">
                    <Icon className={`w-16 h-16 ${moment.color}`} />
                  </div>
                  <p className="text-xl font-serif text-gray-700">{moment.emotion}</p>
                  <div className="w-px h-16 bg-gradient-to-b from-gray-300 to-transparent" />
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

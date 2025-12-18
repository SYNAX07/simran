"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"

export function ComplimentsGarden() {
  const [revealed, setRevealed] = useState<number[]>([])

  const compliments = [
    "You bring balance 🌸",
    "Your presence feels safe 💕",
    "You make things brighter ✨",
    "You inspire quiet strength 🌟",
    "You're genuinely caring 💖",
    "You create peaceful moments 🌙",
  ]

  const toggleReveal = (index: number) => {
    setRevealed((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]))
  }

  return (
    <section className="min-h-screen flex items-center justify-center p-6">
      <div className="max-w-4xl w-full">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-serif text-gray-800 mb-12 text-center text-balance"
        >
          Compliments Garden 🌺
        </motion.h2>

        <div className="grid gap-4 md:grid-cols-3">
          {compliments.map((compliment, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card
                className="h-32 flex items-center justify-center cursor-pointer bg-white/40 backdrop-blur-sm border-white/50 hover:shadow-xl transition-all duration-300"
                onClick={() => toggleReveal(index)}
              >
                {revealed.includes(index) ? (
                  <motion.p
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-lg text-gray-700 font-medium text-center p-4 text-balance"
                  >
                    {compliment}
                  </motion.p>
                ) : (
                  <p className="text-gray-400 text-sm">Tap to reveal ✨</p>
                )}
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

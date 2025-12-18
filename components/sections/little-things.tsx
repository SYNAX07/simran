"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Sparkles, Heart, Star } from "lucide-react"

export function LittleThings() {
  const things = [
    { text: "A calming presence", icon: Sparkles },
    { text: "Kind without trying", icon: Heart },
    { text: "Strong in gentle ways", icon: Star },
  ]

  return (
    <section className="min-h-screen flex items-center justify-center p-6">
      <div className="max-w-4xl w-full">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-serif text-gray-800 mb-12 text-center text-balance"
        >
          Little Things About Simran
        </motion.h2>

        <div className="grid gap-6 md:grid-cols-3">
          {things.map((thing, index) => {
            const Icon = thing.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <Card className="p-8 text-center bg-white/40 backdrop-blur-sm border-white/50 hover:shadow-xl hover:scale-105 transition-all duration-300">
                  <Icon className="w-12 h-12 mx-auto mb-4 text-pink-400" />
                  <p className="text-xl text-gray-700 font-medium text-balance">{thing.text}</p>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

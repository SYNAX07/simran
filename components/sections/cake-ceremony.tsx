"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Cake } from "lucide-react"

export function CakeCeremony() {
  const [candlesLit, setCandlesLit] = useState(true)
  const [confetti, setConfetti] = useState(false)

  const blowCandles = () => {
    setCandlesLit(false)
    setConfetti(true)
    setTimeout(() => setConfetti(false), 3000)
  }

  const cutCake = () => {
    setConfetti(true)
    setTimeout(() => setConfetti(false), 3000)
  }

  return (
    <section className="min-h-screen flex items-center justify-center p-6 relative">
      {confetti && (
        <div className="absolute inset-0 pointer-events-none">
          {Array.from({ length: 50 }).map((_, i) => (
            <motion.div
              key={i}
              initial={{ y: -20, x: Math.random() * window.innerWidth, opacity: 1 }}
              animate={{ y: window.innerHeight, opacity: 0 }}
              transition={{ duration: 2 + Math.random() * 2, ease: "linear" }}
              className="absolute w-2 h-2 rounded-full"
              style={{
                backgroundColor: ["#f472b6", "#c084fc", "#fbbf24", "#fb923c"][Math.floor(Math.random() * 4)],
              }}
            />
          ))}
        </div>
      )}

      <div className="max-w-2xl w-full">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-serif text-gray-800 mb-12 text-center text-balance"
        >
          Cake Time 🎂
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-white/40 backdrop-blur-sm rounded-2xl p-12 border border-white/50 text-center"
        >
          <motion.div
            animate={candlesLit ? { scale: [1, 1.05, 1] } : {}}
            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 0.8 }}
            className="mb-8"
          >
            <Cake className="w-32 h-32 mx-auto text-pink-400" />
            {candlesLit && (
              <div className="flex justify-center gap-2 mt-4">
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{ opacity: [1, 0.5, 1] }}
                    transition={{ repeat: Number.POSITIVE_INFINITY, duration: 0.5 + i * 0.1 }}
                    className="w-2 h-6 bg-gradient-to-t from-orange-400 to-yellow-300 rounded-full"
                  />
                ))}
              </div>
            )}
          </motion.div>

          <div className="space-y-4">
            <Button
              onClick={blowCandles}
              disabled={!candlesLit}
              className="w-full bg-pink-400 hover:bg-pink-500 text-white"
            >
              Blow Candles 💨
            </Button>
            <Button onClick={cutCake} className="w-full bg-purple-400 hover:bg-purple-500 text-white">
              Cut Cake 🔪
            </Button>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-8 text-xl text-gray-700 font-serif text-balance"
          >
            A sweet moment just for you 💕
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}

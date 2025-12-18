"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { MemoryGame } from "@/components/games/memory-game"
import { CatchHeartsGame } from "@/components/games/catch-hearts-game"
import { Button } from "@/components/ui/button"

export function InteractiveGames() {
  const [activeGame, setActiveGame] = useState<"memory" | "catch" | null>(null)

  return (
    <section className="min-h-screen flex items-center justify-center p-6">
      <div className="max-w-4xl w-full">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-serif text-gray-800 mb-12 text-center text-balance"
        >
          Interactive Games 🎮
        </motion.h2>

        {!activeGame && (
          <div className="grid gap-6 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <Button
                onClick={() => setActiveGame("memory")}
                className="w-full h-40 text-2xl bg-pink-400 hover:bg-pink-500 text-white rounded-2xl"
              >
                Memory Flip 💝
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <Button
                onClick={() => setActiveGame("catch")}
                className="w-full h-40 text-2xl bg-purple-400 hover:bg-purple-500 text-white rounded-2xl"
              >
                Catch the Hearts 💕
              </Button>
            </motion.div>
          </div>
        )}

        {activeGame === "memory" && <MemoryGame onClose={() => setActiveGame(null)} />}
        {activeGame === "catch" && <CatchHeartsGame onClose={() => setActiveGame(null)} />}
      </div>
    </section>
  )
}

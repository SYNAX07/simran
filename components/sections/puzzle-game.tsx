"use client"

import type React from "react"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function PuzzleGame() {
  const [answer, setAnswer] = useState("")
  const [showPuzzle, setShowPuzzle] = useState(false)
  const [completed, setCompleted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (answer.toLowerCase().includes("love") || answer.toLowerCase().includes("simran")) {
      setCompleted(true)
    }
  }

  return (
    <>
      <section className="min-h-screen flex items-center justify-center p-6">
        <div className="max-w-2xl w-full">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            onViewportEnter={() => setShowPuzzle(true)}
          >
            <AnimatePresence>
              {showPuzzle && !completed && (
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white/40 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/50"
                >
                  <h2 className="text-3xl md:text-4xl font-serif text-gray-800 mb-6 text-center text-balance">
                    Final Puzzle 🧩
                  </h2>
                  <p className="text-lg text-gray-700 mb-8 text-center text-balance">
                    What makes a birthday special? Solve this riddle to unlock your final surprise:
                  </p>
                  <p className="text-xl text-gray-800 font-serif text-center mb-8 text-balance italic">
                    "I'm shared without speaking, felt without touching, and makes everything worth celebrating. What am
                    I?"
                  </p>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <Input
                      value={answer}
                      onChange={(e) => setAnswer(e.target.value)}
                      placeholder="Type your answer..."
                      className="bg-white/50 backdrop-blur-sm border-white/50 text-lg text-center"
                    />
                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-pink-400 via-purple-400 to-peach-400 hover:from-pink-500 hover:via-purple-500 hover:to-peach-500 text-white"
                    >
                      Submit Answer ✨
                    </Button>
                  </form>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </>
  )
}

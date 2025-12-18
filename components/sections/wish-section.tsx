"use client"

import type React from "react"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Sparkles } from "lucide-react"

export function WishSection() {
  const [wish, setWish] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (wish.trim()) {
      setSubmitted(true)
      setTimeout(() => {
        setSubmitted(false)
        setWish("")
      }, 4000)
    }
  }

  return (
    <section className="min-h-screen flex items-center justify-center p-6">
      <div className="max-w-2xl w-full">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-serif text-gray-800 mb-12 text-center text-balance"
        >
          Make a Wish 🌟
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-white/40 backdrop-blur-sm rounded-2xl p-8 border border-white/50"
        >
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              value={wish}
              onChange={(e) => setWish(e.target.value)}
              placeholder="Type your birthday wish..."
              className="bg-white/50 backdrop-blur-sm border-white/50 text-lg"
            />
            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-pink-400 to-purple-400 hover:from-pink-500 hover:to-purple-500 text-white"
            >
              Save Wish ✨
            </Button>
          </form>

          <AnimatePresence>
            {submitted && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="mt-8 text-center"
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  className="inline-block mb-4"
                >
                  <Sparkles className="w-12 h-12 text-yellow-400" />
                </motion.div>
                <p className="text-xl text-gray-700 font-serif text-balance">
                  Some wishes are meant to stay in the heart 💖
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}

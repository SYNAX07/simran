"use client"

import type React from "react"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Heart, Sparkles } from "lucide-react"

interface PasswordEntryProps {
  onSuccess: () => void
}

export function PasswordEntry({ onSuccess }: PasswordEntryProps) {
  const [password, setPassword] = useState("")
  const [error, setError] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Assuming the password is related to her birthday, accept variations
    if (password.toLowerCase().includes("birthday") || password === "2025" || password.toLowerCase() === "simran") {
      setSuccess(true)
      setTimeout(() => {
        onSuccess()
      }, 2000)
    } else {
      setError(true)
      setTimeout(() => setError(false), 500)
    }
  }

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-pink-200/40 via-purple-200/30 to-peach-200/40 backdrop-blur-3xl flex items-center justify-center p-4">
      <AnimatePresence>
        {success && (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            className="fixed inset-0 flex items-center justify-center pointer-events-none z-50"
          >
            <div className="relative">
              <Heart className="w-32 h-32 text-pink-400 fill-pink-400 animate-ping" />
              <Sparkles className="w-16 h-16 text-yellow-300 absolute top-0 right-0 animate-spin" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: 1,
          y: 0,
          x: error ? [-10, 10, -10, 10, 0] : 0,
        }}
        transition={{ duration: error ? 0.4 : 0.6 }}
        className="w-full max-w-md"
      >
        <div className="bg-white/20 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/30">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-serif text-gray-800 mb-2 text-balance">
              A private birthday space for Simran ✨
            </h1>
            <p className="text-sm text-gray-600">Your special day 💕</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password..."
              className="bg-white/50 backdrop-blur-sm border-white/50 text-center text-lg"
            />
            <Button type="submit" className="w-full bg-pink-400 hover:bg-pink-500 text-white">
              Enter ✨
            </Button>
          </form>

          {error && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center text-sm text-gray-600 mt-4"
            >
              Almost there ✨
            </motion.p>
          )}
        </div>
      </motion.div>
    </div>
  )
}

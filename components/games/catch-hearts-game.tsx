"use client"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { Heart, X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface CatchHeartsGameProps {
  onClose: () => void
}

interface HeartItem {
  id: number
  x: number
}

export function CatchHeartsGame({ onClose }: CatchHeartsGameProps) {
  const [hearts, setHearts] = useState<HeartItem[]>([])
  const [score, setScore] = useState(0)
  const [gameActive, setGameActive] = useState(true)
  const containerRef = useRef<HTMLDivElement>(null)
  const heartIdRef = useRef(0)

  useEffect(() => {
    if (!gameActive) return

    const interval = setInterval(() => {
      setHearts((prev) => [...prev, { id: heartIdRef.current++, x: Math.random() * 80 + 10 }])
    }, 1000)

    const cleanup = setInterval(() => {
      setHearts((prev) => prev.filter((heart) => heart.id > heartIdRef.current - 20))
    }, 5000)

    return () => {
      clearInterval(interval)
      clearInterval(cleanup)
    }
  }, [gameActive])

  useEffect(() => {
    if (score >= 10) {
      setGameActive(false)
    }
  }, [score])

  const catchHeart = (id: number) => {
    setHearts((prev) => prev.filter((heart) => heart.id !== id))
    setScore((prev) => prev + 1)
  }

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="relative">
      <div className="flex justify-between items-center mb-4">
        <p className="text-2xl font-serif text-gray-800">Score: {score}</p>
        <Button onClick={onClose} variant="ghost" size="icon">
          <X className="w-6 h-6" />
        </Button>
      </div>

      <div
        ref={containerRef}
        className="relative h-96 bg-white/20 backdrop-blur-sm rounded-2xl border border-white/50 overflow-hidden"
      >
        {hearts.map((heart) => (
          <motion.div
            key={heart.id}
            initial={{ y: 0, opacity: 1 }}
            animate={{ y: 400, opacity: 0 }}
            transition={{ duration: 4, ease: "linear" }}
            style={{ left: `${heart.x}%` }}
            className="absolute cursor-pointer"
            onClick={() => catchHeart(heart.id)}
          >
            <Heart className="w-8 h-8 text-pink-400 fill-pink-400" />
          </motion.div>
        ))}
      </div>

      {!gameActive && score >= 10 && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center mt-8 p-6 bg-white/40 backdrop-blur-sm rounded-2xl border border-white/50"
        >
          <p className="text-2xl text-gray-800 font-serif text-balance">So much love collected ✨</p>
        </motion.div>
      )}
    </motion.div>
  )
}

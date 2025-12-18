"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ChevronRight, Heart } from "lucide-react"

interface StorySlidesProps {
  onComplete: () => void
}

export function StorySlides({ onComplete }: StorySlidesProps) {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      title: "Happy Birthday, Simran 💕",
      subtitle: "A little world made just for you ✨",
      gradient: "from-pink-300/50 via-purple-300/50 to-pink-300/50",
    },
    {
      title: "You make memories feel warmer, and hearts feel lighter 💖",
      subtitle: "",
      gradient: "from-purple-300/50 via-peach-300/50 to-lavender-300/50",
    },
  ]

  const handleNext = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1)
    } else {
      onComplete()
    }
  }

  return (
    <div className="fixed inset-0 overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          className={`absolute inset-0 bg-gradient-to-br ${slides[currentSlide].gradient} flex items-center justify-center p-6`}
        >
          <div className="text-center max-w-2xl">
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-6xl font-serif text-gray-800 mb-4 text-balance"
            >
              {slides[currentSlide].title}
            </motion.h1>
            {slides[currentSlide].subtitle && (
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-xl md:text-2xl text-gray-700 text-balance"
              >
                {slides[currentSlide].subtitle}
              </motion.p>
            )}

            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.6, type: "spring" }}
              className="mt-12 space-y-4"
            >
              {Array.from({ length: 5 }).map((_, i) => (
                <Heart
                  key={i}
                  className="inline-block w-6 h-6 text-pink-400 fill-pink-400 mx-1 animate-pulse"
                  style={{ animationDelay: `${i * 0.2}s` }}
                />
              ))}
            </motion.div>
          </div>

          <Button
            onClick={handleNext}
            className="absolute bottom-8 right-8 rounded-full w-16 h-16 bg-white/30 hover:bg-white/50 backdrop-blur-sm border border-white/50"
            size="icon"
          >
            <ChevronRight className="w-6 h-6 text-gray-800" />
          </Button>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

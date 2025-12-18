"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Heart, X } from "lucide-react"

export function HiddenSection() {
  const [revealed, setRevealed] = useState(false)

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="fixed bottom-8 left-8 z-40"
      >
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setRevealed(true)}
          className="w-16 h-16 rounded-full bg-pink-400/80 backdrop-blur-sm border-2 border-white/50 flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow"
        >
          <Heart className="w-8 h-8 text-white fill-white" />
        </motion.button>
      </motion.div>

      <AnimatePresence>
        {revealed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setRevealed(false)}
          >
            <motion.div
              initial={{ scale: 0.8, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 50 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-2xl w-full bg-gradient-to-br from-pink-200/90 via-purple-200/90 to-peach-200/90 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/50"
            >
              <button
                onClick={() => setRevealed(false)}
                className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 transition-colors"
              >
                <X className="w-6 h-6 text-gray-800" />
              </button>

              <div className="text-center space-y-6">
                <h3 className="text-3xl md:text-4xl font-serif text-gray-800 text-balance">A Hidden Little World 💖</h3>
                <p className="text-lg text-gray-700 leading-relaxed text-balance">
                  You found the secret space! This is a reminder that some of the most beautiful things in life are
                  discovered when we're curious enough to look deeper. Just like this hidden section, there's so much
                  wonder waiting to be found in every day.
                </p>
                <div className="grid grid-cols-2 gap-4 mt-8">
                  <img
                    src="/peaceful-moment-of-reflection.jpg"
                    alt="Hidden memory"
                    className="w-full aspect-square object-cover rounded-2xl"
                  />
                  <img
                    src="/serene-natural-beauty.jpg"
                    alt="Hidden memory"
                    className="w-full aspect-square object-cover rounded-2xl"
                  />
                </div>
                <motion.div animate={{ y: [0, -10, 0] }} transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Heart key={i} className="inline-block w-6 h-6 text-pink-400 fill-pink-400 mx-1" />
                  ))}
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

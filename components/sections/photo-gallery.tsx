"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"
import { Card } from "@/components/ui/card"

export function PhotoGallery() {
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null)

  const photos = [
    {
      caption: "That quiet smile that says everything ✨",
      query: "peaceful-portrait-girl-with-quiet-confident-smile",
    },
    {
      caption: "Moments that deserve forever 💫",
      query: "candid-moment-genuine-happiness-laughter",
    },
    {
      caption: "Effortless, graceful, real 💕",
      query: "natural-portrait-grace-authenticity",
    },
    {
      caption: "Simply Simran 🌸",
      query: "serene-portrait-soft-natural-lighting",
    },
  ]

  return (
    <section className="min-h-screen flex items-center justify-center p-6 py-20">
      <div className="max-w-6xl w-full">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-serif text-gray-800 mb-12 text-center text-balance"
        >
          Captured Moments 📸
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {photos.map((photo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card
                className="overflow-hidden cursor-pointer group bg-white/40 backdrop-blur-sm border-white/50 hover:shadow-2xl transition-all duration-300"
                onClick={() => setSelectedPhoto(index)}
              >
                <div className="aspect-square relative">
                  <img
                    src={`/.jpg?key=nt6cg&height=400&width=400&query=${photo.query}`}
                    alt={photo.caption}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-4">
                  <p className="text-center text-gray-700 font-medium text-balance">{photo.caption}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedPhoto !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedPhoto(null)}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="relative max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={`/.jpg?key=wo3up&height=800&width=800&query=${photos[selectedPhoto].query}`}
                alt={photos[selectedPhoto].caption}
                className="w-full h-auto rounded-2xl"
              />
              <p className="text-white text-center mt-4 text-lg">{photos[selectedPhoto].caption}</p>
              <button
                onClick={() => setSelectedPhoto(null)}
                className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 transition-colors"
              >
                <X className="w-6 h-6 text-white" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

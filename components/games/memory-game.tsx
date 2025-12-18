"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Heart, Star, Flower2, Sparkles, X } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface MemoryGameProps {
  onClose: () => void
}

type CardType = {
  id: number
  icon: typeof Heart
  matched: boolean
  flipped: boolean
}

export function MemoryGame({ onClose }: MemoryGameProps) {
  const icons = [Heart, Star, Flower2, Sparkles]
  const [cards, setCards] = useState<CardType[]>([])
  const [flippedCards, setFlippedCards] = useState<number[]>([])
  const [completed, setCompleted] = useState(false)

  useEffect(() => {
    const gameCards = icons
      .flatMap((icon, index) => [
        { id: index * 2, icon, matched: false, flipped: false },
        { id: index * 2 + 1, icon, matched: false, flipped: false },
      ])
      .sort(() => Math.random() - 0.5)
    setCards(gameCards)
  }, [])

  const handleCardClick = (index: number) => {
    if (flippedCards.length === 2 || cards[index].matched || cards[index].flipped) return

    const newCards = [...cards]
    newCards[index].flipped = true
    setCards(newCards)

    const newFlipped = [...flippedCards, index]
    setFlippedCards(newFlipped)

    if (newFlipped.length === 2) {
      setTimeout(() => {
        const [first, second] = newFlipped
        if (cards[first].icon === cards[second].icon) {
          const updatedCards = [...cards]
          updatedCards[first].matched = true
          updatedCards[second].matched = true
          setCards(updatedCards)

          if (updatedCards.every((card) => card.matched)) {
            setCompleted(true)
          }
        } else {
          const updatedCards = [...cards]
          updatedCards[first].flipped = false
          updatedCards[second].flipped = false
          setCards(updatedCards)
        }
        setFlippedCards([])
      }, 1000)
    }
  }

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="relative">
      <Button onClick={onClose} variant="ghost" size="icon" className="absolute -top-12 right-0">
        <X className="w-6 h-6" />
      </Button>

      <div className="grid grid-cols-4 gap-4 mt-8">
        {cards.map((card, index) => {
          const Icon = card.icon
          return (
            <motion.div key={card.id} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Card
                className={`aspect-square flex items-center justify-center cursor-pointer ${
                  card.flipped || card.matched
                    ? "bg-pink-200 border-pink-300"
                    : "bg-white/40 backdrop-blur-sm border-white/50"
                }`}
                onClick={() => handleCardClick(index)}
              >
                {(card.flipped || card.matched) && <Icon className="w-12 h-12 text-pink-500" />}
              </Card>
            </motion.div>
          )
        })}
      </div>

      {completed && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center mt-8 p-6 bg-white/40 backdrop-blur-sm rounded-2xl border border-white/50"
        >
          <p className="text-2xl text-gray-800 font-serif text-balance">Every little moment matters 💖</p>
        </motion.div>
      )}
    </motion.div>
  )
}

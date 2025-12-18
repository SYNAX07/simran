"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export function CursorTrail() {
  const [trails, setTrails] = useState<Array<{ x: number; y: number; id: number }>>([])

  useEffect(() => {
    let trailId = 0

    const handleMouseMove = (e: MouseEvent) => {
      const newTrail = { x: e.clientX, y: e.clientY, id: trailId++ }
      setTrails((prev) => [...prev.slice(-20), newTrail])
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {trails.map((trail) => (
        <motion.div
          key={trail.id}
          initial={{ opacity: 0.8, scale: 1 }}
          animate={{ opacity: 0, scale: 0 }}
          transition={{ duration: 0.8 }}
          style={{
            position: "absolute",
            left: trail.x - 4,
            top: trail.y - 4,
            width: 8,
            height: 8,
            borderRadius: "50%",
          }}
          className="bg-gradient-to-r from-pink-400 via-purple-400 to-yellow-400"
        />
      ))}
    </div>
  )
}

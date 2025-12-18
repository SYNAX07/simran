"use client"

import { motion } from "framer-motion"

export function LetterSection() {
  return (
    <section className="min-h-screen flex items-center justify-center p-6">
      <div className="max-w-3xl w-full">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-serif text-gray-800 mb-12 text-center text-balance"
        >
          A Letter for Simran 💌
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="bg-white/40 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/50 space-y-6 font-serif text-gray-700 text-lg leading-relaxed"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-balance"
          >
            Dear Simran,
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-balance"
          >
            Today is more than just a birthday. It's a celebration of the person you are—someone who brings warmth
            without effort, who carries strength in gentleness, and who makes every space feel a little more peaceful.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="text-balance"
          >
            You have a way of making people feel seen, of turning ordinary moments into memories that stay. Your
            presence is a gift, and the world is softer because you're in it.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            className="text-balance"
          >
            May this year bring you everything your heart quietly hopes for—peace, joy, love, and all the little things
            that make life beautiful. You deserve it all.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 1 }}
            className="text-balance"
          >
            Happy Birthday, Simran. 💖
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}

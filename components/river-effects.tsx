"use client"

import type React from "react"
import { motion } from "framer-motion"

export function RiverScrollEffect() {
  // Simplified version without canvas to avoid potential fetch issues
  return (
    <div className="fixed inset-0 pointer-events-none z-0 opacity-30">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-cyan-500/5" />
    </div>
  )
}

export function RiverHoverEffect({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      className={`relative overflow-hidden ${className}`}
      whileHover={{
        scale: 1.02,
        transition: {
          type: "spring",
          stiffness: 300,
          damping: 20,
        },
      }}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-cyan-500/5 opacity-0"
        whileHover={{
          opacity: 1,
          transition: {
            duration: 0.3,
            ease: "easeInOut",
          },
        }}
      />
      {children}
    </motion.div>
  )
}

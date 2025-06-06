"use client"

import type React from "react"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

interface FlowingSectionProps {
  children: React.ReactNode
  className?: string
  delay?: number
}

export function FlowingSection({ children, className = "", delay = 0 }: FlowingSectionProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.section
      ref={ref}
      className={`relative ${className}`}
      initial={{ opacity: 0, y: 100 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.25, 0.25, 0, 1],
      }}
    >
      {/* Flowing background effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-cyan-500/5 opacity-0"
        animate={
          isInView
            ? {
                opacity: [0, 0.3, 0],
                background: [
                  "linear-gradient(90deg, rgba(59,130,246,0.05) 0%, rgba(147,51,234,0.05) 50%, rgba(6,182,212,0.05) 100%)",
                  "linear-gradient(180deg, rgba(59,130,246,0.05) 0%, rgba(147,51,234,0.05) 50%, rgba(6,182,212,0.05) 100%)",
                  "linear-gradient(270deg, rgba(59,130,246,0.05) 0%, rgba(147,51,234,0.05) 50%, rgba(6,182,212,0.05) 100%)",
                ],
              }
            : {}
        }
        transition={{
          duration: 3,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
      {children}
    </motion.section>
  )
}

export function FlowingCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <motion.div
      ref={ref}
      className={`relative overflow-hidden ${className}`}
      initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
      animate={isInView ? { opacity: 1, scale: 1, rotateY: 0 } : { opacity: 0, scale: 0.8, rotateY: -15 }}
      whileHover={{
        scale: 1.05,
        rotateY: 5,
        transition: {
          type: "spring",
          stiffness: 300,
          damping: 20,
        },
      }}
      transition={{
        duration: 0.6,
        ease: [0.25, 0.25, 0, 1],
      }}
    >
      {/* River flow effect on hover */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-blue-400/10 via-purple-400/10 to-cyan-400/10 opacity-0"
        whileHover={{
          opacity: 1,
          background: [
            "linear-gradient(45deg, rgba(59,130,246,0.1) 0%, rgba(147,51,234,0.1) 50%, rgba(6,182,212,0.1) 100%)",
            "linear-gradient(135deg, rgba(59,130,246,0.1) 0%, rgba(147,51,234,0.1) 50%, rgba(6,182,212,0.1) 100%)",
            "linear-gradient(225deg, rgba(59,130,246,0.1) 0%, rgba(147,51,234,0.1) 50%, rgba(6,182,212,0.1) 100%)",
            "linear-gradient(315deg, rgba(59,130,246,0.1) 0%, rgba(147,51,234,0.1) 50%, rgba(6,182,212,0.1) 100%)",
          ],
        }}
        transition={{
          duration: 2,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      {/* Flowing border effect */}
      <motion.div
        className="absolute inset-0 rounded-lg"
        style={{
          background: "linear-gradient(45deg, transparent, rgba(59,130,246,0.3), transparent)",
          padding: "1px",
        }}
        whileHover={{
          background: [
            "linear-gradient(0deg, transparent, rgba(59,130,246,0.3), transparent)",
            "linear-gradient(90deg, transparent, rgba(147,51,234,0.3), transparent)",
            "linear-gradient(180deg, transparent, rgba(6,182,212,0.3), transparent)",
            "linear-gradient(270deg, transparent, rgba(59,130,246,0.3), transparent)",
          ],
        }}
        transition={{
          duration: 2,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      >
        <div className="w-full h-full bg-white dark:bg-gray-800 rounded-lg" />
      </motion.div>

      <div className="relative z-10">{children}</div>
    </motion.div>
  )
}

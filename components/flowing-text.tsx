"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

interface FlowingTextProps {
  children: string
  className?: string
  delay?: number
}

export function FlowingText({ children, className = "", delay = 0 }: FlowingTextProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const words = children.split(" ")

  return (
    <motion.div ref={ref} className={className}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          className="inline-block mr-2"
          initial={{ opacity: 0, y: 50, rotateX: -90 }}
          animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : { opacity: 0, y: 50, rotateX: -90 }}
          transition={{
            duration: 0.6,
            delay: delay + i * 0.1,
            ease: [0.25, 0.25, 0, 1],
          }}
          whileHover={{
            scale: 1.1,
            color: "#3b82f6",
            transition: {
              type: "spring",
              stiffness: 300,
              damping: 20,
            },
          }}
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  )
}

export function FlowingTitle({ children, className = "" }: { children: string; className?: string }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const letters = children.split("")

  return (
    <motion.h1 ref={ref} className={`${className} relative`}>
      {/* Background flowing effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent opacity-20"
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{
          duration: 3,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        style={{
          backgroundSize: "200% 200%",
        }}
      >
        {children}
      </motion.div>

      {/* Animated letters */}
      <div className="relative z-10">
        {letters.map((letter, i) => (
          <motion.span
            key={i}
            className="inline-block"
            initial={{ opacity: 0, y: 100, rotateY: -90 }}
            animate={isInView ? { opacity: 1, y: 0, rotateY: 0 } : { opacity: 0, y: 100, rotateY: -90 }}
            transition={{
              duration: 0.8,
              delay: i * 0.05,
              ease: [0.25, 0.25, 0, 1],
            }}
            whileHover={{
              scale: 1.2,
              rotateY: 15,
              color: "#3b82f6",
              textShadow: "0 0 20px rgba(59,130,246,0.5)",
              transition: {
                type: "spring",
                stiffness: 300,
                damping: 20,
              },
            }}
          >
            {letter === " " ? "\u00A0" : letter}
          </motion.span>
        ))}
      </div>
    </motion.h1>
  )
}

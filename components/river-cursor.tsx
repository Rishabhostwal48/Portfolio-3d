"use client"

import { useEffect, useState } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"

export function RiverCursor() {
  const [isVisible, setIsVisible] = useState(false)
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)

  const springConfig = { damping: 25, stiffness: 700 }
  const cursorXSpring = useSpring(cursorX, springConfig)
  const cursorYSpring = useSpring(cursorY, springConfig)

  const trailingParticles = [...Array(3)].map((_, i) => ({
    key: i,
    className: "fixed top-0 left-0 w-4 h-4 pointer-events-none z-40",
    style: {
      x: useSpring(cursorX, { damping: 25 - i * 5, stiffness: 700 - i * 100 }),
      y: useSpring(cursorY, { damping: 25 - i * 5, stiffness: 700 - i * 100 }),
    },
    animate: {
      opacity: isVisible ? 0.6 - i * 0.2 : 0,
      scale: isVisible ? 1 - i * 0.2 : 0,
    },
    background: `radial-gradient(circle, rgba(59,130,246,${0.4 - i * 0.1}) 0%, transparent 70%)`,
  }))

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16)
      cursorY.set(e.clientY - 16)
    }

    const handleMouseEnter = () => setIsVisible(true)
    const handleMouseLeave = () => setIsVisible(false)

    window.addEventListener("mousemove", moveCursor)
    document.addEventListener("mouseenter", handleMouseEnter)
    document.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      window.removeEventListener("mousemove", moveCursor)
      document.removeEventListener("mouseenter", handleMouseEnter)
      document.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [cursorX, cursorY])

  return (
    <>
      {/* Main cursor */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 pointer-events-none z-50 mix-blend-difference"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
        animate={{
          opacity: isVisible ? 1 : 0,
          scale: isVisible ? 1 : 0,
        }}
      >
        <div className="w-full h-full bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur-sm" />
      </motion.div>

      {/* Trailing particles */}
      {trailingParticles.map(({ key, className, style, animate, background }) => (
        <motion.div key={key} className={className} style={style} animate={animate}>
          <div className="w-full h-full rounded-full" style={{ background }} />
        </motion.div>
      ))}
    </>
  )
}

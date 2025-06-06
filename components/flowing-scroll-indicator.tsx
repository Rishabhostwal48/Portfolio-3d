"use client"

import { motion, useScroll, useSpring, useTransform } from "framer-motion"
import { useEffect, useState } from "react"

export function FlowingScrollIndicator() {
  const { scrollYProgress } = useScroll()
  const [isVisible, setIsVisible] = useState(false)
  const waveOffset = useTransform(scrollYProgress, [0, 1], [0, 360])

  // Create smooth spring animation for scroll progress
  const springProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((latest) => {
      setIsVisible(latest > 0.1 && latest < 0.95)
    })
    return unsubscribe
  }, [scrollYProgress])

  if (!isVisible) return null

  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-transparent">
      {/* Flowing river progress bar */}
      <motion.div
        className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 relative overflow-hidden"
        style={{
          scaleX: springProgress,
          transformOrigin: "0%",
        }}
      >
        {/* Animated wave overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
          style={{
            x: waveOffset,
          }}
          animate={{
            x: ["0%", "100%", "0%"],
          }}
          transition={{
            duration: 3,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      </motion.div>

      {/* Flowing particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400 rounded-full"
            style={{
              left: `${i * 20}%`,
              top: "50%",
            }}
            animate={{
              x: [0, window.innerWidth || 1000],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 4,
              repeat: Number.POSITIVE_INFINITY,
              delay: i * 0.5,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </div>
  )
}

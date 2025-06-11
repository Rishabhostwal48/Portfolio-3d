"use client"

import type React from "react"

import { useEffect, useRef } from "react"
import { motion, useScroll, useTransform, useSpring } from "framer-motion"

export function RiverScrollEffect() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { scrollYProgress } = useScroll()

  // Create flowing river effect on scroll
  const riverFlow = useTransform(scrollYProgress, [0, 1], [0, 100])
  const springRiver = useSpring(riverFlow, { stiffness: 100, damping: 30 })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationId: number
    let time = 0

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const drawRiverFlow = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Create flowing river particles
      const particles = 50
      for (let i = 0; i < particles; i++) {
        const x = (i / particles) * canvas.width
        const y = canvas.height / 2 + Math.sin(x * 0.01 + time * 0.02) * 50
        const size = Math.max(1, Math.sin(x * 0.02 + time * 0.03) * 3 + 2) // Ensure size is always positive

        // Create gradient for river effect with positive radius values
        const innerRadius = 0
        const outerRadius = Math.max(size * 2, 1) // Ensure outer radius is always positive and greater than inner

        const gradient = ctx.createRadialGradient(x, y, innerRadius, x, y, outerRadius)
        gradient.addColorStop(0, "rgba(59, 130, 246, 0.3)")
        gradient.addColorStop(0.5, "rgba(147, 51, 234, 0.2)")
        gradient.addColorStop(1, "rgba(59, 130, 246, 0)")

        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(x, y, Math.max(size, 1), 0, Math.PI * 2) // Ensure arc radius is positive
        ctx.fill()
      }

      time += 1
      animationId = requestAnimationFrame(drawRiverFlow)
    }

    resizeCanvas()
    drawRiverFlow()

    window.addEventListener("resize", resizeCanvas)

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-30"
      style={{ mixBlendMode: "multiply" }}
    />
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
      onHoverStart={() => {
        // Create ripple effect
        const ripple = document.createElement("div")
        ripple.className = "absolute inset-0 pointer-events-none"
        ripple.innerHTML = `
          <div class="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-blue-500/10 animate-pulse"></div>
        `
      }}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-cyan-500/5 opacity-0"
        whileHover={{
          opacity: 1,
          background: [
            "linear-gradient(90deg, rgba(59,130,246,0.05) 0%, rgba(147,51,234,0.05) 50%, rgba(6,182,212,0.05) 100%)",
            "linear-gradient(180deg, rgba(59,130,246,0.05) 0%, rgba(147,51,234,0.05) 50%, rgba(6,182,212,0.05) 100%)",
            "linear-gradient(270deg, rgba(59,130,246,0.05) 0%, rgba(147,51,234,0.05) 50%, rgba(6,182,212,0.05) 100%)",
            "linear-gradient(90deg, rgba(59,130,246,0.05) 0%, rgba(147,51,234,0.05) 50%, rgba(6,182,212,0.05) 100%)",
          ],
          transition: {
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          },
        }}
      />
      {children}
    </motion.div>
  )
}

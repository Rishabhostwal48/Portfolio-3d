"use client"

import { Canvas } from "@react-three/fiber"
import { OrbitControls, Environment, Float, Text3D } from "@react-three/drei"
import { Suspense, useRef, useEffect, useState } from "react"
import { useFrame } from "@react-three/fiber"
import type * as THREE from "three"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Mail, ExternalLink, Code, Palette, Zap, ArrowDown } from "lucide-react"
import { useTheme } from "next-themes"
import { PageTransition } from "@/components/page-transition"
import Link from "next/link"
import { FlowingSection, FlowingCard } from "@/components/flowing-section-transition"
import { FlowingText, FlowingTitle } from "@/components/flowing-text"
import { RiverHoverEffect } from "@/components/river-effects"
import { motion } from "framer-motion"

function FloatingCube({
  position,
  color,
  speed = 1,
  isDarkMode = false,
}: {
  position: [number, number, number]
  color: string
  speed?: number
  isDarkMode?: boolean
}) {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01 * speed
      meshRef.current.rotation.y += 0.01 * speed
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * speed) * 0.2
    }
  })

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh ref={meshRef} position={position}>
        <boxGeometry args={[0.5, 0.5, 0.5]} />
        <meshStandardMaterial color={color} />
      </mesh>
    </Float>
  )
}

function FloatingSphere({
  position,
  color,
  speed = 1,
}: {
  position: [number, number, number]
  color: string
  speed?: number
}) {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.005 * speed
      meshRef.current.rotation.z += 0.005 * speed
      meshRef.current.position.x = position[0] + Math.cos(state.clock.elapsedTime * speed) * 0.3
    }
  })

  return (
    <Float speed={1.5} rotationIntensity={2} floatIntensity={1}>
      <mesh ref={meshRef} position={position}>
        <sphereGeometry args={[0.3, 32, 32]} />
        <meshStandardMaterial color={color} metalness={0.8} roughness={0.2} />
      </mesh>
    </Float>
  )
}

function Scene3D({ isDarkMode }: { isDarkMode: boolean }) {
  return (
    <>
      <ambientLight intensity={isDarkMode ? 0.3 : 0.5} />
      <pointLight position={[10, 10, 10]} intensity={isDarkMode ? 0.8 : 1} />
      <pointLight position={[-10, -10, -10]} intensity={isDarkMode ? 0.3 : 0.5} color="#3b82f6" />

      {/* Floating geometric shapes with cohesive color scheme */}
      <FloatingCube position={[-3, 2, -2]} color="#3b82f6" speed={0.8} isDarkMode={isDarkMode} />
      <FloatingCube position={[3, -1, -1]} color="#06b6d4" speed={1.2} isDarkMode={isDarkMode} />
      <FloatingSphere position={[-2, -2, -3]} color="#8b5cf6" speed={0.6} />
      <FloatingSphere position={[2, 3, -2]} color="#f59e0b" speed={1.4} />
      <FloatingCube position={[0, -3, -4]} color="#ef4444" speed={1.0} isDarkMode={isDarkMode} />
      <FloatingSphere position={[-4, 0, -1]} color="#10b981" speed={0.9} />

      {/* 3D Text */}
      <Float speed={1} rotationIntensity={0.5} floatIntensity={0.5}>
        <Text3D font="/fonts/Geist_Bold.json" size={0.8} height={0.1} position={[-2.5, 0, 0]}>
          {"PORTFOLIO"}
          <meshStandardMaterial color={isDarkMode ? "#e2e8f0" : "#ffffff"} metalness={0.3} roughness={0.4} />
        </Text3D>
      </Float>

      <Environment preset={isDarkMode ? "night" : "city"} />
      <OrbitControls enableZoom={false} enablePan={false} maxPolarAngle={Math.PI / 2} />
    </>
  )
}

function Hero() {
  const { resolvedTheme } = useTheme()
  const isDarkMode = resolvedTheme === "dark"
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <FlowingSection className="relative h-screen w-full overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-blue-900 dark:to-indigo-900 transition-colors duration-500">
      {mounted && (
        <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
          <Suspense fallback={null}>
            <Scene3D isDarkMode={isDarkMode} />
          </Suspense>
        </Canvas>
      )}

      {/* Overlay content */}
      <div className="absolute inset-0 flex items-center justify-center pt-16">
        <div className="text-center z-10 max-w-4xl mx-auto px-4">
          <FlowingTitle className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 dark:from-blue-400 dark:via-purple-400 dark:to-indigo-400 bg-clip-text text-transparent">
            Rishabh Ostwal
          </FlowingTitle>

          <FlowingText
            className="text-xl md:text-2xl lg:text-3xl mb-8 text-gray-700 dark:text-gray-300 font-light"
            delay={0.5}
          >
            Web Designer & Developer
          </FlowingText>

          <FlowingText className="text-lg mb-12 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto" delay={1}>
            Crafting immersive digital experiences with cutting-edge technology and creative vision
          </FlowingText>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
          >
            <Link href="/projects">
              <RiverHoverEffect>
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  View My Work
                </Button>
              </RiverHoverEffect>
            </Link>
            <Link href="/contact">
              <RiverHoverEffect>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-400 dark:hover:text-gray-900 transition-all duration-300"
                >
                  Get In Touch
                </Button>
              </RiverHoverEffect>
            </Link>
          </motion.div>

          <motion.div
            className="flex gap-6 justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2 }}
          >
            {[
              { href: "https://github.com", icon: Github },
              { href: "https://linkedin.com", icon: Linkedin },
              { href: "mailto:john@example.com", icon: Mail },
            ].map((social, index) => (
              <RiverHoverEffect key={index}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  <social.icon className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                </a>
              </RiverHoverEffect>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
        aria-label="Scroll to about section"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 2.5 }}
        whileHover={{ scale: 1.1 }}
      >
        <RiverHoverEffect>
          <div className="flex flex-col items-center space-y-2">
            <span className="text-sm font-medium">Scroll Down</span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            >
              <ArrowDown className="w-5 h-5" />
            </motion.div>
          </div>
        </RiverHoverEffect>
      </motion.button>
    </FlowingSection>
  )
}

function AboutPreview() {
  const { resolvedTheme } = useTheme()
  const isDarkMode = resolvedTheme === "dark"

  return (
    <section id="about" className="py-20 px-4 bg-white dark:bg-gray-900 transition-colors duration-500">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-gray-100">About Me</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Passionate about creating digital experiences that bridge the gap between imagination and reality
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">Crafting Digital Experiences</h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              With over 5 years of experience in modern web technologies, I specialize in creating immersive 3D web
              experiences using React, Next.js, and Three.js. My passion lies in pushing the boundaries of what's
              possible on the web.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              When I'm not coding, you'll find me exploring the latest in web3, AI, and creative coding. I believe in
              the power of technology to create meaningful connections and solve real-world problems.
            </p>
            <Link href="/about">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">Learn More About Me</Button>
            </Link>
          </div>

          <div className="relative">
            <div className="w-full h-96 bg-gradient-to-br from-blue-500 to-purple-600 dark:from-blue-600 dark:to-purple-800 rounded-2xl overflow-hidden shadow-2xl">
              <Canvas camera={{ position: [0, 0, 3] }}>
                <Suspense fallback={null}>
                  <ambientLight intensity={isDarkMode ? 0.4 : 0.6} />
                  <pointLight position={[5, 5, 5]} intensity={isDarkMode ? 0.8 : 1} />
                  <Float speed={2} rotationIntensity={1} floatIntensity={2}>
                    <mesh>
                      <torusKnotGeometry args={[0.8, 0.3, 100, 16]} />
                      <meshStandardMaterial
                        color={isDarkMode ? "#a78bfa" : "#ffffff"}
                        metalness={isDarkMode ? 0.6 : 0.8}
                        roughness={0.2}
                      />
                    </mesh>
                  </Float>
                  <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={2} />
                </Suspense>
              </Canvas>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function SkillsPreview() {
  const skills = [
    {
      icon: Code,
      title: "Frontend Development",
      description: "React, Next.js, Vue.js, TypeScript",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Zap,
      title: "Backend Development",
      description: "Node.js, Python, PostgreSQL, MongoDB",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Palette,
      title: "3D & Creative",
      description: "Three.js, Blender, WebGL, GSAP",
      color: "from-orange-500 to-red-500",
    },
  ]

  return (
    <FlowingSection className="py-20 px-4 bg-slate-50 dark:bg-gray-800 transition-colors duration-500">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <FlowingTitle className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-gray-100">
            Skills & Expertise
          </FlowingTitle>
          <FlowingText className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto" delay={0.3}>
            Combining technical expertise with creative vision to deliver exceptional results
          </FlowingText>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {skills.map((skill, index) => (
            <FlowingCard
              key={index}
              className="group hover:shadow-xl transition-all duration-300 dark:bg-gray-700 dark:border-gray-600 border-0 shadow-lg"
            >
              <div className="p-8 text-center">
                <div
                  className={`w-16 h-16 mx-auto mb-6 bg-gradient-to-r ${skill.color} rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg`}
                >
                  <skill.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">{skill.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{skill.description}</p>
              </div>
            </FlowingCard>
          ))}
        </div>

        <div className="text-center">
          <Link href="/skills">
            <RiverHoverEffect>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
              >
                View All Skills
              </Button>
            </RiverHoverEffect>
          </Link>
        </div>
      </div>
    </FlowingSection>
  )
}

function ProjectsPreview() {
  const projects = [
    {
      title: "3D E-commerce Platform",
      description: "Interactive 3D product visualization with AR capabilities",
      tech: ["Next.js", "Three.js", "WebXR"],
      image: "/placeholder.svg?height=300&width=400",
      gradient: "from-blue-500 to-purple-600",
    },
    {
      title: "AI-Powered Dashboard",
      description: "Real-time analytics dashboard with machine learning insights",
      tech: ["React", "Python", "TensorFlow"],
      image: "/placeholder.svg?height=300&width=400",
      gradient: "from-green-500 to-teal-600",
    },
    {
      title: "Metaverse Gallery",
      description: "Virtual art gallery with NFT integration",
      tech: ["Three.js", "Web3", "Solidity"],
      image: "/placeholder.svg?height=300&width=400",
      gradient: "from-purple-500 to-pink-600",
    },
  ]

  return (
    <section className="py-20 px-4 bg-white dark:bg-gray-900 transition-colors duration-500">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-gray-100">Featured Projects</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Showcasing innovative solutions and creative implementations
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 dark:bg-gray-800 dark:border-gray-700 border-0 shadow-lg"
            >
              <div className="relative overflow-hidden">
                <div className={`w-full h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center`}>
                  <div className="text-white text-6xl font-bold opacity-20">{index + 1}</div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-end p-4">
                  <ExternalLink className="w-6 h-6 text-white" />
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-gray-100">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="secondary"
                      className="text-xs bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link href="/projects">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
              View All Projects
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

function CTASection() {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-600 dark:from-blue-800 dark:via-purple-800 dark:to-indigo-800">
      <div className="max-w-4xl mx-auto text-center text-white">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's Create Something Amazing</h2>
        <p className="text-xl mb-12 opacity-90 max-w-2xl mx-auto">
          Ready to bring your ideas to life? Let's discuss your next project and create something extraordinary
          together.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Link href="/contact">
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Mail className="w-5 h-5 mr-2" />
              Get In Touch
            </Button>
          </Link>
          <div className="flex gap-6">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:john@example.com"
              className="p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function Portfolio() {
  return (
    <PageTransition>
      <div className="min-h-screen">
        <Hero />
        <AboutPreview />
        <SkillsPreview />
        <ProjectsPreview />
        <CTASection />
      </div>
    </PageTransition>
  )
}

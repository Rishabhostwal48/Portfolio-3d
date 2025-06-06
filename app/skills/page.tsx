"use client"

import { Canvas } from "@react-three/fiber"
import { OrbitControls, Environment, Float } from "@react-three/drei"
import { Suspense, useRef } from "react"
import { useFrame } from "@react-three/fiber"
import type * as THREE from "three"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Code, Database, Palette, Globe, Smartphone, Cloud } from "lucide-react"
import { useTheme } from "next-themes"
import { PageTransition } from "@/components/page-transition"

function AnimatedCube({ position, color }: { position: [number, number, number]; color: string }) {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01
      meshRef.current.rotation.y += 0.01
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + position[0]) * 0.1
    }
  })

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh ref={meshRef} position={position}>
        <boxGeometry args={[0.3, 0.3, 0.3]} />
        <meshStandardMaterial color={color} metalness={0.8} roughness={0.2} />
      </mesh>
    </Float>
  )
}

function Hero() {
  const { resolvedTheme } = useTheme()
  const isDarkMode = resolvedTheme === "dark"

  return (
    <section className="relative pt-24 pb-16 px-4 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-blue-900 dark:to-indigo-900 overflow-hidden">
      <div className="absolute inset-0">
        <Canvas camera={{ position: [0, 0, 5] }}>
          <Suspense fallback={null}>
            <ambientLight intensity={isDarkMode ? 0.3 : 0.5} />
            <pointLight position={[10, 10, 10]} intensity={1} />
            <AnimatedCube position={[-2, 1, -1]} color="#3b82f6" />
            <AnimatedCube position={[2, -1, -2]} color="#8b5cf6" />
            <AnimatedCube position={[0, 2, -3]} color="#06b6d4" />
            <AnimatedCube position={[-3, -2, -1]} color="#f59e0b" />
            <AnimatedCube position={[3, 1, -2]} color="#ef4444" />
            <Environment preset={isDarkMode ? "night" : "city"} />
            <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
          </Suspense>
        </Canvas>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Skills & Expertise
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          A comprehensive overview of my technical skills, tools, and expertise across various domains of software
          development
        </p>
      </div>
    </section>
  )
}

function SkillsOverview() {
  const skillCategories = [
    {
      icon: Code,
      title: "Frontend Development",
      description: "Creating responsive and interactive user interfaces",
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "React", level: 95 },
        { name: "Next.js", level: 90 },
        { name: "TypeScript", level: 88 },
        { name: "Three.js", level: 85 },
        { name: "Tailwind CSS", level: 92 },
        { name: "Vue.js", level: 75 },
      ],
    },
    {
      icon: Database,
      title: "Backend Development",
      description: "Building scalable server-side applications and APIs",
      color: "from-green-500 to-emerald-500",
      skills: [
        { name: "Node.js", level: 90 },
        { name: "Python", level: 85 },
        { name: "PostgreSQL", level: 88 },
        { name: "MongoDB", level: 82 },
        { name: "GraphQL", level: 78 },
        { name: "REST APIs", level: 92 },
      ],
    },
    {
      icon: Palette,
      title: "3D & Creative",
      description: "Crafting immersive 3D experiences and visual effects",
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "Three.js", level: 85 },
        { name: "WebGL", level: 80 },
        { name: "Blender", level: 75 },
        { name: "GSAP", level: 88 },
        { name: "Canvas API", level: 82 },
        { name: "WebXR", level: 70 },
      ],
    },
    {
      icon: Globe,
      title: "Web Technologies",
      description: "Modern web standards and performance optimization",
      color: "from-orange-500 to-red-500",
      skills: [
        { name: "HTML5", level: 95 },
        { name: "CSS3", level: 92 },
        { name: "JavaScript", level: 93 },
        { name: "WebAssembly", level: 65 },
        { name: "PWA", level: 80 },
        { name: "Web Performance", level: 85 },
      ],
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description: "Cross-platform mobile application development",
      color: "from-cyan-500 to-blue-500",
      skills: [
        { name: "React Native", level: 82 },
        { name: "Flutter", level: 70 },
        { name: "Expo", level: 85 },
        { name: "Mobile UI/UX", level: 80 },
        { name: "App Store Optimization", level: 75 },
        { name: "Push Notifications", level: 78 },
      ],
    },
    {
      icon: Cloud,
      title: "DevOps & Cloud",
      description: "Deployment, scaling, and infrastructure management",
      color: "from-indigo-500 to-purple-500",
      skills: [
        { name: "AWS", level: 80 },
        { name: "Docker", level: 85 },
        { name: "Vercel", level: 90 },
        { name: "Git", level: 92 },
        { name: "CI/CD", level: 78 },
        { name: "Monitoring", level: 75 },
      ],
    },
  ]

  return (
    <section className="py-20 px-4 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="dark:bg-gray-800 dark:border-gray-700 border-0 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <CardContent className="p-6">
                <div
                  className={`w-16 h-16 mb-6 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center`}
                >
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-gray-100">{category.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">{category.description}</p>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
                        <span className="text-sm text-gray-500 dark:text-gray-400">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

function Tools() {
  const toolCategories = [
    {
      title: "Development Tools",
      tools: ["VS Code", "Git", "GitHub", "Figma", "Postman", "Chrome DevTools"],
    },
    {
      title: "Frameworks & Libraries",
      tools: ["React", "Next.js", "Express.js", "Tailwind CSS", "Material-UI", "Framer Motion"],
    },
    {
      title: "Databases & Storage",
      tools: ["PostgreSQL", "MongoDB", "Redis", "Supabase", "Firebase", "AWS S3"],
    },
    {
      title: "Cloud & Deployment",
      tools: ["Vercel", "AWS", "Docker", "Netlify", "Heroku", "GitHub Actions"],
    },
    {
      title: "Design & 3D",
      tools: ["Blender", "Adobe Creative Suite", "Sketch", "Principle", "After Effects", "Cinema 4D"],
    },
    {
      title: "Testing & Quality",
      tools: ["Jest", "Cypress", "ESLint", "Prettier", "Lighthouse", "WebPageTest"],
    },
  ]

  return (
    <section className="py-20 px-4 bg-slate-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-900 dark:text-gray-100">Tools & Technologies</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {toolCategories.map((category, index) => (
            <Card key={index} className="dark:bg-gray-700 dark:border-gray-600">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-gray-100">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.tools.map((tool, toolIndex) => (
                    <Badge
                      key={toolIndex}
                      variant="secondary"
                      className="bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300"
                    >
                      {tool}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

function Certifications() {
  const certifications = [
    {
      title: "AWS Certified Developer",
      issuer: "Amazon Web Services",
      date: "2023",
      badge: "🏆",
    },
    {
      title: "React Developer Certification",
      issuer: "Meta",
      date: "2022",
      badge: "⚛️",
    },
    {
      title: "Google Cloud Professional",
      issuer: "Google Cloud",
      date: "2023",
      badge: "☁️",
    },
    {
      title: "Three.js Journey",
      issuer: "Bruno Simon",
      date: "2022",
      badge: "🎮",
    },
  ]

  return (
    <section className="py-20 px-4 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-900 dark:text-gray-100">
          Certifications & Achievements
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <Card key={index} className="dark:bg-gray-800 dark:border-gray-700 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 flex items-center gap-4">
                <div className="text-3xl">{cert.badge}</div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">{cert.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    {cert.issuer} • {cert.date}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function SkillsPage() {
  return (
    <PageTransition>
      <div className="min-h-screen">
        <Hero />
        <SkillsOverview />
        <Tools />
        <Certifications />
      </div>
    </PageTransition>
  )
}

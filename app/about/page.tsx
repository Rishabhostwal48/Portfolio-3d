"use client"

import { Canvas } from "@react-three/fiber"
import { OrbitControls, Environment, Float } from "@react-three/drei"
import { Suspense, useRef } from "react"
import { useFrame } from "@react-three/fiber"
import type * as THREE from "three"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Download, MapPin, Calendar, Award, Heart, Coffee } from "lucide-react"
import { useTheme } from "next-themes"
import { PageTransition } from "@/components/page-transition"
import Link from "next/link"
import { FlowingSection, FlowingCard } from "@/components/flowing-section-transition"
import { FlowingText, FlowingTitle } from "@/components/flowing-text"
import { RiverHoverEffect } from "@/components/river-effects"

function AnimatedSphere() {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.2
      meshRef.current.rotation.y += 0.01
    }
  })

  return (
    <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
      <mesh ref={meshRef}>
        <sphereGeometry args={[1, 64, 64]} />
        <meshStandardMaterial color="#3b82f6" metalness={0.8} roughness={0.2} wireframe={false} />
      </mesh>
    </Float>
  )
}

function Hero() {
  const { resolvedTheme } = useTheme()
  const isDarkMode = resolvedTheme === "dark"

  return (
    <FlowingSection className="relative min-h-screen pt-16 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-blue-900 dark:to-indigo-900">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-96 h-96">
          <Canvas camera={{ position: [0, 0, 3] }}>
            <Suspense fallback={null}>
              <ambientLight intensity={isDarkMode ? 0.4 : 0.6} />
              <pointLight position={[5, 5, 5]} intensity={1} />
              <AnimatedSphere />
              <Environment preset={isDarkMode ? "night" : "city"} />
              <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1} />
            </Suspense>
          </Canvas>
        </div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <FlowingTitle className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              About Me
            </FlowingTitle>
            <FlowingText className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed" delay={0.5}>
              I'm a passionate full-stack developer with a love for creating immersive digital experiences that push the
              boundaries of what's possible on the web.
            </FlowingText>
            <div className="flex flex-wrap gap-4 mb-8">
              {[
                { icon: MapPin, text: "San Francisco, CA", color: "text-blue-600" },
                { icon: Calendar, text: "5+ Years Experience", color: "text-blue-600" },
                { icon: Award, text: "50+ Projects Completed", color: "text-blue-600" },
              ].map((item, index) => (
                <RiverHoverEffect key={index}>
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                    <item.icon className={`w-5 h-5 ${item.color}`} />
                    <span>{item.text}</span>
                  </div>
                </RiverHoverEffect>
              ))}
            </div>
            <RiverHoverEffect>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                <Download className="w-4 h-4 mr-2" />
                Download Resume
              </Button>
            </RiverHoverEffect>
          </div>

          <div className="relative">
            <FlowingCard className="w-full max-w-md mx-auto">
              <img
                src="/placeholder.svg?height=400&width=400"
                alt="John Doe"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </FlowingCard>
          </div>
        </div>
      </div>
    </FlowingSection>
  )
}

function Journey() {
  const milestones = [
    {
      year: "2019",
      title: "Started Web Development",
      description: "Began my journey with HTML, CSS, and JavaScript",
    },
    {
      year: "2020",
      title: "First React Project",
      description: "Built my first React application and fell in love with component-based architecture",
    },
    {
      year: "2021",
      title: "Discovered Three.js",
      description: "Started exploring 3D web development and interactive experiences",
    },
    {
      year: "2022",
      title: "Full-Stack Developer",
      description: "Expanded skills to backend development with Node.js and databases",
    },
    {
      year: "2023",
      title: "3D Specialist",
      description: "Specialized in creating immersive 3D web experiences",
    },
    {
      year: "2024",
      title: "Present",
      description: "Leading innovative projects and mentoring other developers",
    },
  ]

  return (
    <section className="py-20 px-4 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-900 dark:text-gray-100">My Journey</h2>
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-600"></div>
          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <div key={index} className={`flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}>
                <div className={`w-1/2 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8"}`}>
                  <Card className="dark:bg-gray-800 dark:border-gray-700">
                    <CardContent className="p-6">
                      <div className="text-blue-600 font-bold text-lg mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">{milestone.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300">{milestone.description}</p>
                    </CardContent>
                  </Card>
                </div>
                <div className="relative z-10 w-4 h-4 bg-blue-600 rounded-full border-4 border-white dark:border-gray-900"></div>
                <div className="w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function Values() {
  const values = [
    {
      icon: Heart,
      title: "Passion-Driven",
      description: "I believe that passion is the fuel for exceptional work and continuous learning.",
    },
    {
      icon: Award,
      title: "Quality First",
      description: "Every project deserves attention to detail and commitment to excellence.",
    },
    {
      icon: Coffee,
      title: "Collaborative",
      description: "Great things happen when talented people work together towards a common goal.",
    },
  ]

  return (
    <section className="py-20 px-4 bg-slate-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-900 dark:text-gray-100">My Values</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <Card key={index} className="text-center dark:bg-gray-700 dark:border-gray-600">
              <CardContent className="p-8">
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">{value.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["React", "Next.js", "TypeScript", "Three.js", "Tailwind CSS", "Vue.js"],
    },
    {
      title: "Backend",
      skills: ["Node.js", "Python", "PostgreSQL", "MongoDB", "GraphQL", "REST APIs"],
    },
    {
      title: "Tools & Others",
      skills: ["Git", "Docker", "AWS", "Figma", "Blender", "WebGL"],
    },
  ]

  return (
    <section className="py-20 px-4 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-900 dark:text-gray-100">Technical Skills</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="dark:bg-gray-800 dark:border-gray-700">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="secondary" className="dark:bg-gray-700">
                      {skill}
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

function CTA() {
  return (
    <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600">
      <div className="max-w-4xl mx-auto text-center text-white">
        <h2 className="text-4xl font-bold mb-6">Let's Work Together</h2>
        <p className="text-xl mb-8 opacity-90">
          Interested in collaborating? I'd love to hear about your project and discuss how we can bring your ideas to
          life.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              Get In Touch
            </Button>
          </Link>
          <Link href="/projects">
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              View My Work
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default function AboutPage() {
  return (
    <PageTransition>
      <div className="min-h-screen">
        <Hero />
        <Journey />
        <Values />
        <Skills />
        <CTA />
      </div>
    </PageTransition>
  )
}

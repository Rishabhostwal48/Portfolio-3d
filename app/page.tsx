"use client"

import { useEffect, useState } from "react"
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

// Simple 3D-like visual component without Three.js
function Simple3DBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Floating geometric shapes using CSS animations */}
      <div
        className="absolute top-1/4 left-1/4 w-16 h-16 bg-blue-500/20 rounded-lg animate-bounce"
        style={{ animationDelay: "0s", animationDuration: "3s" }}
      />
      <div
        className="absolute top-1/3 right-1/4 w-12 h-12 bg-purple-500/20 rounded-full animate-pulse"
        style={{ animationDelay: "1s", animationDuration: "4s" }}
      />
      <div
        className="absolute bottom-1/3 left-1/3 w-20 h-20 bg-cyan-500/20 rounded-lg animate-spin"
        style={{ animationDelay: "2s", animationDuration: "8s" }}
      />
      <div
        className="absolute top-1/2 right-1/3 w-14 h-14 bg-orange-500/20 rounded-full animate-bounce"
        style={{ animationDelay: "0.5s", animationDuration: "3.5s" }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-18 h-18 bg-red-500/20 rounded-lg animate-pulse"
        style={{ animationDelay: "1.5s", animationDuration: "5s" }}
      />
      <div
        className="absolute top-3/4 left-1/4 w-16 h-16 bg-green-500/20 rounded-full animate-spin"
        style={{ animationDelay: "3s", animationDuration: "6s" }}
      />
    </div>
  )
}

function Hero() {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <FlowingSection className="relative h-screen w-full overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-blue-900 dark:to-indigo-900 transition-colors duration-500">
      {mounted && <Simple3DBackground />}

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
              With over 5 years of experience in modern web technologies, I specialize in creating immersive web
              experiences using React, Next.js, and modern web technologies. My passion lies in pushing the boundaries
              of what's possible on the web.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              When I'm not coding, you'll find me exploring the latest in web development, AI, and creative coding. I
              believe in the power of technology to create meaningful connections and solve real-world problems.
            </p>
            <Link href="/about">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">Learn More About Me</Button>
            </Link>
          </div>

          <div className="relative">
            <div className="w-full h-96 bg-gradient-to-br from-blue-500 to-purple-600 dark:from-blue-600 dark:to-purple-800 rounded-2xl overflow-hidden shadow-2xl flex items-center justify-center">
              {/* Simple animated shapes instead of Three.js */}
              <div className="relative w-32 h-32">
                <div
                  className="absolute inset-0 bg-white/20 rounded-full animate-spin"
                  style={{ animationDuration: "8s" }}
                />
                <div
                  className="absolute inset-4 bg-white/30 rounded-full animate-pulse"
                  style={{ animationDuration: "3s" }}
                />
                <div
                  className="absolute inset-8 bg-white/40 rounded-full animate-bounce"
                  style={{ animationDuration: "2s" }}
                />
              </div>
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
      title: "Manglanam Naturals - E-commerce Platform",
      description: "Premium spice emporium with full e-commerce functionality",
      tech: ["Next.js", "React", "E-commerce"],
      gradient: "from-orange-500 to-red-600",
    },
    {
      title: "Personal Portfolio Website",
      description: "Modern portfolio with advanced animations and interactions",
      tech: ["React", "Next.js", "Framer Motion"],
      gradient: "from-blue-500 to-purple-600",
    },
    {
      title: "Interactive Web Application",
      description: "Dynamic web application with real-time features",
      tech: ["React", "Next.js", "Real-time"],
      gradient: "from-green-500 to-teal-600",
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

"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Filter } from "lucide-react"
import { PageTransition } from "@/components/page-transition"

const projects = [
  {
    id: 1,
    title: "3D E-commerce Platform",
    description: "Interactive 3D product visualization with AR capabilities and real-time customization",
    longDescription:
      "A revolutionary e-commerce platform that allows customers to interact with products in 3D space, customize materials and colors in real-time, and preview items using augmented reality before purchase.",
    tech: ["Next.js", "Three.js", "WebXR", "TypeScript", "Tailwind CSS"],
    category: "Web Development",
    image: "/placeholder.svg?height=300&width=500",
    gradient: "from-blue-500 to-purple-600",
    github: "https://github.com",
    demo: "https://example.com",
    featured: true,
  },
  {
    id: 2,
    title: "AI-Powered Dashboard",
    description: "Real-time analytics dashboard with machine learning insights and predictive analytics",
    longDescription:
      "An intelligent dashboard that processes large datasets in real-time, provides actionable insights through machine learning algorithms, and offers predictive analytics for business decision-making.",
    tech: ["React", "Python", "TensorFlow", "D3.js", "PostgreSQL"],
    category: "Data Science",
    image: "/placeholder.svg?height=300&width=500",
    gradient: "from-green-500 to-teal-600",
    github: "https://github.com",
    demo: "https://example.com",
    featured: true,
  },
  {
    id: 3,
    title: "Metaverse Gallery",
    description: "Virtual art gallery with NFT integration and immersive 3D experiences",
    longDescription:
      "A virtual reality art gallery that showcases NFT collections in an immersive 3D environment, complete with social features, virtual events, and blockchain integration.",
    tech: ["Three.js", "Web3", "Solidity", "IPFS", "WebGL"],
    category: "Blockchain",
    image: "/placeholder.svg?height=300&width=500",
    gradient: "from-purple-500 to-pink-600",
    github: "https://github.com",
    demo: "https://example.com",
    featured: true,
  },
  {
    id: 4,
    title: "Real-time Collaboration Tool",
    description: "Multi-user collaborative workspace with real-time synchronization",
    longDescription:
      "A comprehensive collaboration platform that enables teams to work together in real-time, featuring document editing, video conferencing, and project management tools.",
    tech: ["Next.js", "Socket.io", "MongoDB", "WebRTC", "Redis"],
    category: "Web Development",
    image: "/placeholder.svg?height=300&width=500",
    gradient: "from-orange-500 to-red-600",
    github: "https://github.com",
    demo: "https://example.com",
    featured: false,
  },
  {
    id: 5,
    title: "Mobile Fitness App",
    description: "Cross-platform fitness tracking app with AI-powered workout recommendations",
    longDescription:
      "A comprehensive fitness application that tracks workouts, provides personalized recommendations using AI, and includes social features for community engagement.",
    tech: ["React Native", "Node.js", "TensorFlow", "MongoDB", "AWS"],
    category: "Mobile Development",
    image: "/placeholder.svg?height=300&width=500",
    gradient: "from-cyan-500 to-blue-600",
    github: "https://github.com",
    demo: "https://example.com",
    featured: false,
  },
  {
    id: 6,
    title: "Blockchain Voting System",
    description: "Secure and transparent voting system built on blockchain technology",
    longDescription:
      "A decentralized voting platform that ensures transparency, security, and immutability of votes using blockchain technology and smart contracts.",
    tech: ["Solidity", "Web3.js", "React", "IPFS", "Ethereum"],
    category: "Blockchain",
    image: "/placeholder.svg?height=300&width=500",
    gradient: "from-indigo-500 to-purple-600",
    github: "https://github.com",
    demo: "https://example.com",
    featured: false,
  },
]

const categories = ["All", "Web Development", "Data Science", "Blockchain", "Mobile Development"]

function Hero() {
  return (
    <section className="pt-24 pb-16 px-4 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-blue-900 dark:to-indigo-900">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          My Projects
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          A showcase of innovative solutions, creative implementations, and technical expertise across various domains
        </p>
      </div>
    </section>
  )
}

function ProjectCard({ project }: { project: (typeof projects)[0] }) {
  return (
    <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 dark:bg-gray-800 dark:border-gray-700 border-0 shadow-lg">
      <div className="relative overflow-hidden">
        <div className={`w-full h-64 bg-gradient-to-br ${project.gradient} flex items-center justify-center relative`}>
          <div className="text-white text-8xl font-bold opacity-10 absolute">{project.id}</div>
          {project.featured && <Badge className="absolute top-4 left-4 bg-yellow-500 text-yellow-900">Featured</Badge>}
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4">
          <div className="flex gap-2">
            <Button size="sm" className="bg-white/20 backdrop-blur-sm hover:bg-white/30">
              <Github className="w-4 h-4" />
            </Button>
            <Button size="sm" className="bg-white/20 backdrop-blur-sm hover:bg-white/30">
              <ExternalLink className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-3">
          <Badge variant="outline" className="text-xs">
            {project.category}
          </Badge>
        </div>
        <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-gray-100">{project.title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.slice(0, 3).map((tech, techIndex) => (
            <Badge
              key={techIndex}
              variant="secondary"
              className="text-xs bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300"
            >
              {tech}
            </Badge>
          ))}
          {project.tech.length > 3 && (
            <Badge variant="secondary" className="text-xs">
              +{project.tech.length - 3} more
            </Badge>
          )}
        </div>
        <div className="flex gap-2">
          <Button size="sm" className="flex-1 bg-blue-600 hover:bg-blue-700 text-white">
            View Details
          </Button>
          <Button
            size="sm"
            variant="outline"
            className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
          >
            <ExternalLink className="w-4 h-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

function ProjectsGrid() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [showFeatured, setShowFeatured] = useState(false)

  const filteredProjects = projects.filter((project) => {
    const categoryMatch = selectedCategory === "All" || project.category === selectedCategory
    const featuredMatch = !showFeatured || project.featured
    return categoryMatch && featuredMatch
  })

  return (
    <section className="py-20 px-4 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-4 mb-12">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className={selectedCategory === category ? "bg-blue-600 hover:bg-blue-700" : ""}
              >
                {category}
              </Button>
            ))}
          </div>
          <Button
            variant={showFeatured ? "default" : "outline"}
            size="sm"
            onClick={() => setShowFeatured(!showFeatured)}
            className={`flex items-center gap-2 ${showFeatured ? "bg-yellow-500 hover:bg-yellow-600 text-yellow-900" : ""}`}
          >
            <Filter className="w-4 h-4" />
            Featured Only
          </Button>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 dark:text-gray-400 text-lg">No projects found for the selected filters.</p>
          </div>
        )}
      </div>
    </section>
  )
}

function CTA() {
  return (
    <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600">
      <div className="max-w-4xl mx-auto text-center text-white">
        <h2 className="text-4xl font-bold mb-6">Have a Project in Mind?</h2>
        <p className="text-xl mb-8 opacity-90">
          I'm always excited to work on new challenges and bring innovative ideas to life.
        </p>
        <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
          Let's Discuss Your Project
        </Button>
      </div>
    </section>
  )
}

export default function ProjectsPage() {
  return (
    <PageTransition>
      <div className="min-h-screen">
        <Hero />
        <ProjectsGrid />
        <CTA />
      </div>
    </PageTransition>
  )
}

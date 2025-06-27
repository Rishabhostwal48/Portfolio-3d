"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Filter, Eye, Code2 } from "lucide-react"
import { PageTransition } from "@/components/page-transition"
import Image from "next/image"

const projects = [
  {
    id: 1,
    title: "Manglanam Naturals - E-commerce Platform",
    description:
      "Premium spice emporium with full e-commerce functionality, featuring product catalog, shopping cart, and recipe integration",
    longDescription:
      "A comprehensive e-commerce platform for Manglanam Naturals, a premium spice company. Features include product browsing, shopping cart functionality, recipe integration, and a beautiful UI showcasing spice products with rich imagery and smooth user experience.",
    tech: ["React", "Next.js", "E-commerce", "Responsive Design", "SEO Optimization"],
    category: "E-commerce",
    image: "/placeholder.svg?height=300&width=500&text=Manglanam+Naturals",
    gradient: "from-orange-500 to-red-600",
    demo: "https://manglanam.com",
    featured: true,
    year: "2024",
    status: "Live",
  },
  {
    id: 2,
    title: "Personal Portfolio Website",
    description: "Modern portfolio website with advanced animations, loading states, and interactive elements",
    longDescription:
      "A sophisticated personal portfolio website featuring modern design principles, smooth animations, loading states, and interactive elements. Built with performance and user experience in mind, showcasing projects and skills in an engaging way.",
    tech: ["Next.js", "React", "Framer Motion", "Tailwind CSS", "TypeScript"],
    category: "Portfolio",
    image: "/placeholder.svg?height=300&width=500&text=Portfolio+Website",
    gradient: "from-blue-500 to-purple-600",
    demo: "https://rishabhostwal.vercel.app",
    featured: true,
    year: "2024",
    status: "Live",
  },
  {
    id: 3,
    title: "Interactive Web Application",
    description: "Dynamic web application with real-time features and modern UI components",
    longDescription:
      "A cutting-edge web application featuring real-time interactions, modern UI components, and seamless user experience. Built with the latest web technologies to deliver high performance and engaging user interactions.",
    tech: ["React", "Next.js", "Real-time Features", "Modern UI", "Performance Optimization"],
    category: "Web Application",
    image: "/placeholder.svg?height=300&width=500",
    gradient: "from-green-500 to-teal-600",
    demo: "https://tbpehi6mrtfjnpf0.vercel.app",
    featured: true,
    year: "2024",
    status: "Live",
  },
  {
    id: 4,
    title: "Advanced Web Platform",
    description: "Sophisticated web platform with advanced functionality and user-centric design",
    longDescription:
      "An advanced web platform showcasing sophisticated functionality and user-centric design principles. Features modern architecture, responsive design, and optimized performance for exceptional user experience.",
    tech: ["Advanced JavaScript", "Modern Frameworks", "Responsive Design", "UX/UI", "Performance"],
    category: "Web Platform",
    image: "/placeholder.svg?height=300&width=500",
    gradient: "from-purple-500 to-pink-600",
    demo: "https://ht0zr9u1uqq5o48j7.lite.vusercontent.net/",
    featured: true,
    year: "2024",
    status: "Live",
  },
  {
    id: 5,
    title: "3D E-commerce Platform",
    description: "Interactive 3D product visualization with AR capabilities and real-time customization",
    longDescription:
      "A revolutionary e-commerce platform that allows customers to interact with products in 3D space, customize materials and colors in real-time, and preview items using augmented reality before purchase.",
    tech: ["Next.js", "Three.js", "WebXR", "TypeScript", "Tailwind CSS"],
    category: "3D Development",
    image: "/placeholder.svg?height=300&width=500",
    gradient: "from-blue-500 to-purple-600",
    github: "https://github.com",
    demo: "https://example.com",
    featured: false,
    year: "2023",
    status: "Demo",
  },
  {
    id: 6,
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
    featured: false,
    year: "2023",
    status: "Demo",
  },
]

const categories = [
  "All",
  "E-commerce",
  "Portfolio",
  "Web Application",
  "Web Platform",
  "3D Development",
  "Data Science",
]

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
        <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm text-gray-600 dark:text-gray-400">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span>Live Projects</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
            <span>Demo Projects</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <span>Featured</span>
          </div>
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project }: { project: (typeof projects)[0] }) {
  return (
    <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 dark:bg-gray-800 dark:border-gray-700 border-0 shadow-lg">
      <div className="relative overflow-hidden">
        <div className={`w-full h-64 bg-gradient-to-br ${project.gradient} flex items-center justify-center relative`}>
          {project.image.startsWith("/images/") ? (
            <div className="absolute inset-0 z-10">
              <div className="relative w-full h-full">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover"
                  onError={(e) => {
                    // Fallback to gradient background if image fails to load
                    e.currentTarget.style.display = "none"
                  }}
                />
              </div>
            </div>
          ) : null}
          <div className="text-white text-8xl font-bold opacity-10 absolute">{project.id}</div>
        </div>

        <div className="absolute top-4 left-4 flex gap-2 z-20">
          {project.featured && <Badge className="bg-yellow-500 text-yellow-900">Featured</Badge>}
          <Badge className={project.status === "Live" ? "bg-green-500 text-white" : "bg-blue-500 text-white"}>
            {project.status}
          </Badge>
        </div>

        <div className="absolute top-4 right-4 z-20">
          <Badge variant="outline" className="bg-white/90 text-gray-800">
            {project.year}
          </Badge>
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4 z-20">
          <div className="flex gap-2">
            {project.github && (
              <Button size="sm" className="bg-white/20 backdrop-blur-sm hover:bg-white/30" asChild>
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4" />
                </a>
              </Button>
            )}
            <Button size="sm" className="bg-white/20 backdrop-blur-sm hover:bg-white/30" asChild>
              <a href={project.demo} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4" />
              </a>
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

        <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-gray-100 line-clamp-2">{project.title}</h3>

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
          <Button size="sm" className="flex-1 bg-blue-600 hover:bg-blue-700 text-white" asChild>
            <a href={project.demo} target="_blank" rel="noopener noreferrer">
              <Eye className="w-4 h-4 mr-2" />
              View Live
            </a>
          </Button>
          {project.github && (
            <Button
              size="sm"
              variant="outline"
              className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
              asChild
            >
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                <Code2 className="w-4 h-4" />
              </a>
            </Button>
          )}
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

  const featuredProjects = filteredProjects.filter((p) => p.featured)
  const regularProjects = filteredProjects.filter((p) => !p.featured)

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

        {/* Featured Projects */}
        {featuredProjects.length > 0 && !showFeatured && (
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-gray-100">Featured Projects</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {featuredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        )}

        {/* All Projects or Filtered Results */}
        {(showFeatured ? featuredProjects : regularProjects).length > 0 && (
          <div>
            <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-gray-100">
              {showFeatured ? "Featured Projects" : "All Projects"}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {(showFeatured ? featuredProjects : regularProjects).map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        )}

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 dark:text-gray-400 text-lg">No projects found for the selected filters.</p>
          </div>
        )}
      </div>
    </section>
  )
}

function ProjectStats() {
  const stats = [
    { label: "Total Projects", value: projects.length },
    { label: "Live Applications", value: projects.filter((p) => p.status === "Live").length },
    { label: "Technologies Used", value: [...new Set(projects.flatMap((p) => p.tech))].length },
    { label: "Years of Experience", value: "5+" },
  ]

  return (
    <section className="py-16 px-4 bg-slate-50 dark:bg-gray-800">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">{stat.value}</div>
              <div className="text-gray-600 dark:text-gray-300 text-sm md:text-base">{stat.label}</div>
            </div>
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
        <h2 className="text-4xl font-bold mb-6">Have a Project in Mind?</h2>
        <p className="text-xl mb-8 opacity-90">
          I'm always excited to work on new challenges and bring innovative ideas to life. Let's discuss how we can
          create something amazing together.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100" asChild>
            <a href="/contact">Let's Discuss Your Project</a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-blue-600"
            asChild
          >
            <a href="mailto:rishabh@example.com">Send Email</a>
          </Button>
        </div>
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
        <ProjectStats />
        <CTA />
      </div>
    </PageTransition>
  )
}

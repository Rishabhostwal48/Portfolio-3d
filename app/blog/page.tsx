"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, ArrowRight, Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { PageTransition } from "@/components/page-transition"
import { useState } from "react"

const blogPosts = [
  {
    id: 1,
    title: "Building Immersive 3D Web Experiences with Three.js",
    excerpt:
      "Learn how to create stunning 3D web applications that captivate users and push the boundaries of web development.",
    content:
      "In this comprehensive guide, we'll explore the fundamentals of Three.js and how to create immersive 3D experiences...",
    author: "John Doe",
    date: "2024-01-15",
    readTime: "8 min read",
    category: "3D Development",
    tags: ["Three.js", "WebGL", "JavaScript"],
    featured: true,
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    id: 2,
    title: "The Future of Web Development: WebAssembly and Beyond",
    excerpt:
      "Exploring how WebAssembly is revolutionizing web performance and opening new possibilities for web applications.",
    content: "WebAssembly represents a paradigm shift in web development, offering near-native performance...",
    author: "John Doe",
    date: "2024-01-10",
    readTime: "6 min read",
    category: "Web Development",
    tags: ["WebAssembly", "Performance", "Future Tech"],
    featured: false,
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    id: 3,
    title: "Optimizing React Applications for Better Performance",
    excerpt: "Practical tips and techniques to make your React applications faster and more efficient.",
    content: "Performance optimization is crucial for user experience. Here are proven strategies...",
    author: "John Doe",
    date: "2024-01-05",
    readTime: "10 min read",
    category: "React",
    tags: ["React", "Performance", "Optimization"],
    featured: true,
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    id: 4,
    title: "Creating Responsive Designs with Tailwind CSS",
    excerpt: "Master the art of responsive design using Tailwind CSS utility classes and best practices.",
    content: "Responsive design is essential in today's multi-device world. Tailwind CSS makes it easier...",
    author: "John Doe",
    date: "2023-12-28",
    readTime: "7 min read",
    category: "CSS",
    tags: ["Tailwind CSS", "Responsive Design", "CSS"],
    featured: false,
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    id: 5,
    title: "Introduction to WebXR: Building AR/VR Experiences",
    excerpt:
      "Dive into the world of WebXR and learn how to create augmented and virtual reality experiences for the web.",
    content: "WebXR opens up exciting possibilities for immersive web experiences...",
    author: "John Doe",
    date: "2023-12-20",
    readTime: "12 min read",
    category: "AR/VR",
    tags: ["WebXR", "AR", "VR", "Immersive Tech"],
    featured: false,
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    id: 6,
    title: "Modern JavaScript: ES2024 Features You Should Know",
    excerpt: "Stay up-to-date with the latest JavaScript features and how they can improve your development workflow.",
    content: "JavaScript continues to evolve with new features that enhance developer productivity...",
    author: "John Doe",
    date: "2023-12-15",
    readTime: "9 min read",
    category: "JavaScript",
    tags: ["JavaScript", "ES2024", "Modern JS"],
    featured: false,
    image: "/placeholder.svg?height=300&width=500",
  },
]

const categories = ["All", "3D Development", "Web Development", "React", "CSS", "AR/VR", "JavaScript"]

function Hero() {
  return (
    <section className="pt-24 pb-16 px-4 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-blue-900 dark:to-indigo-900">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Blog & Insights
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Sharing knowledge, experiences, and insights about web development, 3D graphics, and emerging technologies
        </p>
      </div>
    </section>
  )
}

function BlogGrid() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchTerm, setSearchTerm] = useState("")

  const filteredPosts = blogPosts.filter((post) => {
    const categoryMatch = selectedCategory === "All" || post.category === selectedCategory
    const searchMatch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    return categoryMatch && searchMatch
  })

  const featuredPosts = filteredPosts.filter((post) => post.featured)
  const regularPosts = filteredPosts.filter((post) => !post.featured)

  return (
    <section className="py-20 px-4 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        {/* Search and Filters */}
        <div className="flex flex-col lg:flex-row gap-4 mb-12">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 dark:bg-gray-800 dark:border-gray-700"
            />
          </div>
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
        </div>

        {/* Featured Posts */}
        {featuredPosts.length > 0 && (
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8 text-gray-900 dark:text-gray-100">Featured Articles</h2>
            <div className="grid lg:grid-cols-2 gap-8">
              {featuredPosts.map((post) => (
                <Card
                  key={post.id}
                  className="group overflow-hidden hover:shadow-xl transition-all duration-300 dark:bg-gray-800 dark:border-gray-700"
                >
                  <div className="relative overflow-hidden">
                    <div className="w-full h-64 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                      <div className="text-white text-6xl font-bold opacity-20">{post.id}</div>
                    </div>
                    <Badge className="absolute top-4 left-4 bg-yellow-500 text-yellow-900">Featured</Badge>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-3 text-sm text-gray-500 dark:text-gray-400">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    <Badge variant="outline" className="mb-3">
                      {post.category}
                    </Badge>
                    <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">{post.excerpt}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white group">
                      Read More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Regular Posts */}
        {regularPosts.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold mb-8 text-gray-900 dark:text-gray-100">All Articles</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.map((post) => (
                <Card
                  key={post.id}
                  className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 dark:bg-gray-800 dark:border-gray-700"
                >
                  <div className="relative overflow-hidden">
                    <div className="w-full h-48 bg-gradient-to-br from-gray-400 to-gray-600 flex items-center justify-center">
                      <div className="text-white text-4xl font-bold opacity-30">{post.id}</div>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-3 text-sm text-gray-500 dark:text-gray-400">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    <Badge variant="outline" className="mb-3">
                      {post.category}
                    </Badge>
                    <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">{post.excerpt}</p>
                    <div className="flex flex-wrap gap-1 mb-4">
                      {post.tags.slice(0, 2).map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                      {post.tags.length > 2 && (
                        <Badge variant="secondary" className="text-xs">
                          +{post.tags.length - 2}
                        </Badge>
                      )}
                    </div>
                    <Button
                      variant="outline"
                      className="w-full border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
                    >
                      Read More
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 dark:text-gray-400 text-lg">No articles found for the selected filters.</p>
          </div>
        )}
      </div>
    </section>
  )
}

function Newsletter() {
  return (
    <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600">
      <div className="max-w-4xl mx-auto text-center text-white">
        <h2 className="text-4xl font-bold mb-6">Stay Updated</h2>
        <p className="text-xl mb-8 opacity-90">
          Subscribe to my newsletter for the latest articles, tutorials, and insights about web development and 3D
          graphics.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <Input
            placeholder="Enter your email"
            className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-white/70"
          />
          <Button className="bg-white text-blue-600 hover:bg-gray-100">Subscribe</Button>
        </div>
      </div>
    </section>
  )
}

export default function BlogPage() {
  return (
    <PageTransition>
      <div className="min-h-screen">
        <Hero />
        <BlogGrid />
        <Newsletter />
      </div>
    </PageTransition>
  )
}

"use client"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Code, Database, Palette, Globe, Smartphone, Cloud } from "lucide-react"
import { PageTransition } from "@/components/page-transition"

function SimpleAnimatedBackground() {
  return (
    <div className="absolute inset-0">
      <div className="absolute top-1/4 left-1/4 w-8 h-8 bg-blue-500/20 rounded animate-pulse" />
      <div className="absolute top-1/3 right-1/4 w-6 h-6 bg-purple-500/20 rounded-full animate-bounce" />
      <div
        className="absolute bottom-1/3 left-1/3 w-10 h-10 bg-cyan-500/20 rounded animate-spin"
        style={{ animationDuration: "8s" }}
      />
      <div className="absolute top-1/2 right-1/3 w-7 h-7 bg-orange-500/20 rounded-full animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-9 h-9 bg-red-500/20 rounded animate-bounce" />
    </div>
  )
}

function Hero() {
  return (
    <section className="relative pt-24 pb-16 px-4 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-blue-900 dark:to-indigo-900 overflow-hidden">
      <SimpleAnimatedBackground />

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

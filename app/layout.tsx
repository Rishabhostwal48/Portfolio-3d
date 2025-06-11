import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Navigation } from "@/components/navigation"
import { SmoothScroll } from "@/components/smooth-scroll"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "John Doe - 3D Portfolio",
  description: "Full Stack Developer & 3D Artist Portfolio with stunning 3D interactions",
  keywords: ["portfolio", "3d", "developer", "react", "nextjs", "threejs"],
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navigation />
          <SmoothScroll />
          <main className="min-h-screen relative z-10">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  )
}

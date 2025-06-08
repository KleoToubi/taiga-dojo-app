import type React from "react"

export const metadata = {
  title: "Taiga Dojo - Kyokushin Karate",
  description: "Management system for Taiga Dojo Kyokushin Karate school",
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
    generator: 'v0.dev'
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  )
}


import './globals.css'
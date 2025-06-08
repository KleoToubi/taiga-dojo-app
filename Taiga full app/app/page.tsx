"use client"

import type React from "react"
import { Inter } from "next/font/google"
import { Toaster } from "@/components/ui/toaster"
import { ThemeProvider } from "@/components/theme-provider"
import { LanguageProvider } from "@/contexts/language-context"
import { SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { MobileNavigation } from "@/components/mobile-navigation"
import { useIsMobile } from "@/hooks/use-mobile"
import { useState, useEffect } from "react"
import { useToast } from "@/components/ui/use-toast"
import { useLanguage } from "@/contexts/language-context"
import { InstructorDashboard } from "@/components/instructor-dashboard"
import { StudentDashboard } from "@/components/student-dashboard"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

function DashboardContent() {
  const [currentUser, setCurrentUser] = useState<any>(null)
  const { toast } = useToast()
  const { t } = useLanguage()

  useEffect(() => {
    const userData = localStorage.getItem("currentUser")
    if (userData) {
      setCurrentUser(JSON.parse(userData))
    }
  }, [])

  if (!currentUser) {
    return <div>Loading...</div>
  }

  const isInstructor = currentUser.category === "instructor"

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">
            {isInstructor ? t("dashboardTitle") : t("studentDashboardTitle")}
          </h1>
          <p className="text-muted-foreground">
            {isInstructor ? t("dashboardSubtitle") : t("studentDashboardSubtitle")}
          </p>
        </div>
      </div>

      {isInstructor ? <InstructorDashboard /> : <StudentDashboard />}
    </div>
  )
}

function RootLayoutContent({ children }: { children: React.ReactNode }) {
  const isMobile = useIsMobile()

  return (
    <SidebarProvider>
      <div className="flex h-screen">
        {!isMobile && <AppSidebar />}
        <div className="flex-1 flex flex-col overflow-hidden">
          <main className="flex-1 overflow-y-auto p-4 md:p-6 pb-20 md:pb-6">{children}</main>
          {isMobile && <MobileNavigation />}
        </div>
      </div>
      <Toaster />
    </SidebarProvider>
  )
}

export default function Dashboard() {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <LanguageProvider>
          <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
            <RootLayoutContent>
              <DashboardContent />
            </RootLayoutContent>
          </ThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  )
}

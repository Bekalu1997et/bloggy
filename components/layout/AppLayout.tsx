'use client'

import { Navbar } from './Navbar'
import { Sidebar } from './Sidebar'
import { ProtectedRoute } from './ProtectedRoute'

interface AppLayoutProps {
  children: React.ReactNode
}

export function AppLayout({ children }: AppLayoutProps) {
  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="flex">
          <Sidebar />
          <main className="flex-1 lg:ml-64">
            <div className="container mx-auto py-6">
              {children}
            </div>
          </main>
        </div>
      </div>
    </ProtectedRoute>
  )
}
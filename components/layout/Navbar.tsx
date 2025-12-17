'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Avatar } from '@/components/common/Avatar'
import { Search, Bell, MessageCircle } from 'lucide-react'
import Link from 'next/link'

export function Navbar() {
  const [user, setUser] = useState<any>(null)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const userData = localStorage.getItem('user')
      if (userData) {
        setUser(JSON.parse(userData))
      }
    }
  }, [])

  if (!user) {
    return null
  }

  return (
    <nav className="sticky top-0 z-40 bg-background border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/feed" className="text-xl font-bold">
          Bloggy
        </Link>
        
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon">
            <Search className="w-5 h-5" />
          </Button>
          
          <Link href="/messages">
            <Button variant="ghost" size="icon">
              <MessageCircle className="w-5 h-5" />
            </Button>
          </Link>
          
          <Link href="/notifications">
            <Button variant="ghost" size="icon">
              <Bell className="w-5 h-5" />
            </Button>
          </Link>
          
          <Link href={`/${user.username}`}>
            <Avatar user={{
              ...user,
              followersCount: 0,
              followingCount: 0,
              postsCount: 0,
            }} size="sm" />
          </Link>
        </div>
      </div>
    </nav>
  )
}
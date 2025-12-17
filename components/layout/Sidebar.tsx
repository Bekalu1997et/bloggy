'use client'

import { Button } from '@/components/ui/button'
import { Home, FileText, Users, Network, Settings } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

const navigation = [
  { name: 'Feed', href: '/feed', icon: Home },
  { name: 'Blog', href: '/blog/create', icon: FileText },
  { name: 'Forum', href: '/forum', icon: Users },
  { name: 'Network', href: '/network', icon: Network },
  { name: 'Settings', href: '/settings', icon: Settings },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="fixed left-0 top-16 h-[calc(100vh-4rem)] w-64 bg-background border-r p-4 hidden lg:block">
      <nav className="space-y-2">
        {navigation.map((item) => {
          const Icon = item.icon
          const isActive = pathname.startsWith(item.href)
          
          return (
            <Link key={item.name} href={item.href}>
              <Button
                variant={isActive ? 'secondary' : 'ghost'}
                className={cn(
                  'w-full justify-start',
                  isActive && 'bg-secondary'
                )}
              >
                <Icon className="w-4 h-4 mr-2" />
                {item.name}
              </Button>
            </Link>
          )
        })}
      </nav>
    </aside>
  )
}
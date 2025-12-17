'use client'

import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Avatar } from '@/components/common/Avatar'
import { formatDate, truncate } from '@/lib/utils'
import { ArrowUp, ArrowDown, MessageCircle } from 'lucide-react'
import type { Thread } from '@/types/api'
import Link from 'next/link'

interface ThreadCardProps {
  thread: Thread
}

export function ThreadCard({ thread }: ThreadCardProps) {
  return (
    <Card>
      <CardHeader className="pb-3">
        <div className="flex items-center space-x-3">
          <Avatar user={thread.author} size="sm" />
          <div>
            <Link href={`/${thread.author.username}`} className="font-medium hover:underline">
              {thread.author.username}
            </Link>
            <p className="text-sm text-muted-foreground">
              in <Link href={`/forum/${thread.community.slug}`} className="hover:underline">
                r/{thread.community.name}
              </Link> • {formatDate(thread.createdAt)}
            </p>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <Link href={`/forum/${thread.community.slug}/${thread.id}`}>
          <h3 className="text-lg font-semibold hover:underline">{thread.title}</h3>
          <p className="text-muted-foreground mt-2">
            {truncate(thread.content.replace(/<[^>]*>/g, ''), 150)}
          </p>
        </Link>
        
        <div className="flex items-center space-x-4 pt-2">
          <div className="flex items-center space-x-1">
            <Button variant="ghost" size="sm" className="text-muted-foreground p-1">
              <ArrowUp className={`w-4 h-4 ${thread.userVote === 'up' ? 'text-orange-500' : ''}`} />
            </Button>
            <span className="text-sm font-medium">{thread.votesCount}</span>
            <Button variant="ghost" size="sm" className="text-muted-foreground p-1">
              <ArrowDown className={`w-4 h-4 ${thread.userVote === 'down' ? 'text-blue-500' : ''}`} />
            </Button>
          </div>
          <Button variant="ghost" size="sm" className="text-muted-foreground">
            <MessageCircle className="w-4 h-4 mr-1" />
            {thread.repliesCount}
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
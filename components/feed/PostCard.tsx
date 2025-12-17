'use client'

import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Avatar } from '@/components/common/Avatar'
import { formatDate, truncate } from '@/lib/utils'
import { Heart, MessageCircle, Share } from 'lucide-react'
import type { Post } from '@/types/api'
import Link from 'next/link'

interface PostCardProps {
  post: Post
}

export function PostCard({ post }: PostCardProps) {
  return (
    <Card>
      <CardHeader className="pb-3">
        <div className="flex items-center space-x-3">
          <Avatar user={post.author} size="sm" />
          <div>
            <Link href={`/${post.author.username}`} className="font-medium hover:underline">
              {post.author.username}
            </Link>
            <p className="text-sm text-muted-foreground">{formatDate(post.createdAt)}</p>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <Link href={`/blog/${post.slug}`}>
          <h3 className="text-lg font-semibold hover:underline">{post.title}</h3>
          <p className="text-muted-foreground mt-2">
            {truncate(post.content.replace(/<[^>]*>/g, ''), 150)}
          </p>
        </Link>
        
        {post.coverImage && (
          <img 
            src={post.coverImage} 
            alt={post.title}
            className="w-full h-48 object-cover rounded-md"
          />
        )}
        
        <div className="flex items-center space-x-4 pt-2">
          <Button variant="ghost" size="sm" className="text-muted-foreground">
            <Heart className={`w-4 h-4 mr-1 ${post.isLiked ? 'fill-red-500 text-red-500' : ''}`} />
            {post.likesCount}
          </Button>
          <Button variant="ghost" size="sm" className="text-muted-foreground">
            <MessageCircle className="w-4 h-4 mr-1" />
            {post.commentsCount}
          </Button>
          <Button variant="ghost" size="sm" className="text-muted-foreground">
            <Share className="w-4 h-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
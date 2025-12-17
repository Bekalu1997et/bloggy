'use client'

import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { useParams } from 'next/navigation'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { Avatar } from '@/components/common/Avatar'
import { formatDate } from '@/lib/utils'
import { Heart, MessageCircle, Share } from 'lucide-react'
import { useState } from 'react'
import api from '@/lib/api'

export default function BlogPage() {
  const params = useParams()
  const queryClient = useQueryClient()
  const [comment, setComment] = useState('')

  const { data: blog, isLoading } = useQuery({
    queryKey: ['blog', params.slug],
    queryFn: async () => {
      const response = await api.get(`/blogs/${params.slug}`)
      return response.data
    },
  })

  const likeMutation = useMutation({
    mutationFn: async () => {
      const response = await api.post(`/blogs/${blog.id}/like`)
      return response.data
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['blog', params.slug] })
    },
  })

  const commentMutation = useMutation({
    mutationFn: async (content: string) => {
      const response = await api.post(`/blogs/${blog.id}/comment`, { content })
      return response.data
    },
    onSuccess: () => {
      setComment('')
      queryClient.invalidateQueries({ queryKey: ['blog', params.slug] })
    },
  })

  const handleLike = () => {
    likeMutation.mutate()
  }

  const handleComment = () => {
    if (comment.trim()) {
      commentMutation.mutate(comment)
    }
  }

  if (isLoading) {
    return (
      <div className="max-w-4xl mx-auto p-6">
        <div className="animate-pulse space-y-4">
          <div className="h-8 bg-muted rounded w-3/4"></div>
          <div className="h-4 bg-muted rounded w-1/4"></div>
          <div className="h-64 bg-muted rounded"></div>
        </div>
      </div>
    )
  }

  if (!blog) {
    return (
      <div className="max-w-4xl mx-auto p-6 text-center">
        <h1 className="text-2xl font-bold">Blog not found</h1>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <article className="space-y-6">
        {blog.coverImage && (
          <img 
            src={blog.coverImage} 
            alt={blog.title}
            className="w-full h-64 object-cover rounded-lg"
          />
        )}
        
        <header className="space-y-4">
          <h1 className="text-4xl font-bold">{blog.title}</h1>
          
          <div className="flex items-center space-x-4">
            <Avatar user={blog.author} size="md" />
            <div>
              <p className="font-medium">{blog.author.username}</p>
              <p className="text-sm text-muted-foreground">
                {formatDate(blog.publishedAt || blog.createdAt)}
              </p>
            </div>
          </div>
        </header>
        
        <div className="prose max-w-none">
          <div dangerouslySetInnerHTML={{ __html: blog.content }} />
        </div>
        
        <div className="flex items-center space-x-4 py-4 border-t">
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={handleLike}
            disabled={likeMutation.isPending}
          >
            <Heart className={`w-4 h-4 mr-1 ${blog.isLiked ? 'fill-red-500 text-red-500' : ''}`} />
            {blog._count?.likes || 0}
          </Button>
          <Button variant="ghost" size="sm">
            <MessageCircle className="w-4 h-4 mr-1" />
            {blog._count?.comments || 0}
          </Button>
          <Button variant="ghost" size="sm">
            <Share className="w-4 h-4" />
          </Button>
        </div>
      </article>
      
      <section className="mt-8 space-y-6">
        <h2 className="text-2xl font-bold">Comments</h2>
        
        <Card>
          <CardContent className="p-4">
            <div className="space-y-4">
              <Textarea
                placeholder="Write a comment..."
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              />
              <Button 
                onClick={handleComment}
                disabled={!comment.trim() || commentMutation.isPending}
              >
                {commentMutation.isPending ? 'Posting...' : 'Post Comment'}
              </Button>
            </div>
          </CardContent>
        </Card>
        
        <div className="space-y-4">
          {blog.comments?.map((comment: any) => (
            <Card key={comment.id}>
              <CardHeader className="pb-2">
                <div className="flex items-center space-x-3">
                  <Avatar user={comment.author} size="sm" />
                  <div>
                    <p className="font-medium">{comment.author.username}</p>
                    <p className="text-sm text-muted-foreground">
                      {formatDate(comment.createdAt)}
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <p>{comment.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}
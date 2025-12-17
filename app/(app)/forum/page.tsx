'use client'

import { useQuery } from '@tanstack/react-query'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Plus, Users } from 'lucide-react'
import Link from 'next/link'
import api from '@/lib/api'

export default function ForumPage() {
  const { data: forums, isLoading } = useQuery({
    queryKey: ['forums'],
    queryFn: async () => {
      const response = await api.get('/forums')
      return response.data
    },
  })

  if (isLoading) {
    return (
      <div className="max-w-4xl mx-auto p-6">
        <div className="animate-pulse space-y-4">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="h-32 bg-muted rounded"></div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Communities</h1>
        <Link href="/forum/create-community">
          <Button>
            <Plus className="w-4 h-4 mr-2" />
            Create Community
          </Button>
        </Link>
      </div>

      <div className="grid gap-4">
        {forums?.map((forum: any) => (
          <Card key={forum.id} className="hover:shadow-md transition-shadow">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-xl">
                    <Link 
                      href={`/forum/${forum.slug}`}
                      className="hover:underline"
                    >
                      r/{forum.name}
                    </Link>
                  </CardTitle>
                  {forum.description && (
                    <p className="text-muted-foreground mt-2">
                      {forum.description}
                    </p>
                  )}
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Users className="w-4 h-4 mr-1" />
                  {forum._count?.threads || 0} threads
                </div>
              </div>
            </CardHeader>
          </Card>
        ))}
      </div>

      {forums?.length === 0 && (
        <div className="text-center py-12">
          <h2 className="text-xl font-semibold mb-2">No communities yet</h2>
          <p className="text-muted-foreground mb-4">
            Be the first to create a community!
          </p>
          <Link href="/forum/create-community">
            <Button>
              <Plus className="w-4 h-4 mr-2" />
              Create Community
            </Button>
          </Link>
        </div>
      )}
    </div>
  )
}
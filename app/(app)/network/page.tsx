'use client'

import { useQuery } from '@tanstack/react-query'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Avatar } from '@/components/common/Avatar'
import { UserPlus } from 'lucide-react'
import api from '@/lib/api'

export default function NetworkPage() {
  const { data: suggestions, isLoading } = useQuery({
    queryKey: ['user-suggestions'],
    queryFn: async () => {
      const response = await api.get('/network/suggestions')
      return response.data
    },
  })

  if (isLoading) {
    return (
      <div className="max-w-4xl mx-auto p-6">
        <div className="animate-pulse space-y-4">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="h-24 bg-muted rounded"></div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <h1 className="text-3xl font-bold">Discover People</h1>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {suggestions?.map((user: any) => (
          <Card key={user.id} className="hover:shadow-md transition-shadow">
            <CardHeader className="pb-2">
              <div className="flex items-center space-x-3">
                <Avatar user={user} size="md" />
                <div className="flex-1">
                  <h3 className="font-semibold">{user.username}</h3>
                  {user.profile?.bio && (
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {user.profile.bio}
                    </p>
                  )}
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="flex justify-between items-center">
                <div className="text-sm text-muted-foreground">
                  {user.stats?.followers || 0} followers
                </div>
                <Button size="sm">
                  <UserPlus className="w-4 h-4 mr-1" />
                  Follow
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {suggestions?.length === 0 && (
        <div className="text-center py-12">
          <h2 className="text-xl font-semibold mb-2">No suggestions available</h2>
          <p className="text-muted-foreground">
            Check back later for people to connect with!
          </p>
        </div>
      )}
    </div>
  )
}
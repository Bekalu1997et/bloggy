'use client'

import { Card, CardContent } from '@/components/ui/card'
import { Avatar } from '@/components/common/Avatar'
import { formatDate } from '@/lib/utils'
import { Heart, MessageCircle, UserPlus, Bell } from 'lucide-react'

export default function NotificationsPage() {
  // Mock data - replace with real data
  const notifications = [
    {
      id: '1',
      type: 'LIKE',
      actor: {
        id: '1',
        username: 'johndoe',
        email: 'john@example.com',
        avatar: '',
        bio: '',
        followersCount: 0,
        followingCount: 0,
        postsCount: 0,
      },
      content: 'liked your blog post "Getting Started with Next.js"',
      createdAt: new Date().toISOString(),
      isRead: false,
    },
  ]

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case 'LIKE':
        return <Heart className="w-4 h-4 text-red-500" />
      case 'COMMENT':
        return <MessageCircle className="w-4 h-4 text-blue-500" />
      case 'FOLLOW':
        return <UserPlus className="w-4 h-4 text-green-500" />
      default:
        return <Bell className="w-4 h-4 text-gray-500" />
    }
  }

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <h1 className="text-3xl font-bold">Notifications</h1>

      <div className="space-y-4">
        {notifications.map((notification) => (
          <Card key={notification.id} className={`hover:shadow-md transition-shadow ${!notification.isRead ? 'border-primary/20 bg-primary/5' : ''}`}>
            <CardContent className="p-4">
              <div className="flex items-start space-x-4">
                <Avatar user={notification.actor} size="sm" />
                <div className="flex-1">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-2">
                      {getNotificationIcon(notification.type)}
                      <p className="text-sm">
                        <span className="font-medium">{notification.actor.username}</span>{' '}
                        {notification.content}
                      </p>
                    </div>
                    <span className="text-xs text-muted-foreground">
                      {formatDate(notification.createdAt)}
                    </span>
                  </div>
                </div>
                {!notification.isRead && (
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {notifications.length === 0 && (
        <div className="text-center py-12">
          <Bell className="w-12 h-12 mx-auto text-muted-foreground mb-4" />
          <h2 className="text-xl font-semibold mb-2">No notifications yet</h2>
          <p className="text-muted-foreground">
            You'll see notifications here when people interact with your content.
          </p>
        </div>
      )}
    </div>
  )
}
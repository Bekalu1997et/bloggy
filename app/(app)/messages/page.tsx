'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Avatar } from '@/components/common/Avatar'
import { formatDate } from '@/lib/utils'
import { MessageCircle } from 'lucide-react'

export default function MessagesPage() {
  // Mock data - replace with real data
  const conversations = [
    {
      id: '1',
      user: {
        id: '1',
        username: 'johndoe',
        email: 'john@example.com',
        avatar: '',
        bio: '',
        followersCount: 0,
        followingCount: 0,
        postsCount: 0,
      },
      lastMessage: {
        content: 'Hey, how are you doing?',
        sentAt: new Date().toISOString(),
        isRead: false,
      },
    },
  ]

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <h1 className="text-3xl font-bold">Messages</h1>

      <div className="space-y-4">
        {conversations.map((conversation) => (
          <Card key={conversation.id} className="hover:shadow-md transition-shadow cursor-pointer">
            <CardContent className="p-4">
              <div className="flex items-center space-x-4">
                <Avatar user={conversation.user} size="md" />
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <h3 className="font-semibold">{conversation.user.username}</h3>
                    <span className="text-sm text-muted-foreground">
                      {formatDate(conversation.lastMessage.sentAt)}
                    </span>
                  </div>
                  <p className={`text-sm ${!conversation.lastMessage.isRead ? 'font-medium' : 'text-muted-foreground'}`}>
                    {conversation.lastMessage.content}
                  </p>
                </div>
                {!conversation.lastMessage.isRead && (
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {conversations.length === 0 && (
        <div className="text-center py-12">
          <MessageCircle className="w-12 h-12 mx-auto text-muted-foreground mb-4" />
          <h2 className="text-xl font-semibold mb-2">No messages yet</h2>
          <p className="text-muted-foreground">
            Start a conversation with someone from your network!
          </p>
        </div>
      )}
    </div>
  )
}
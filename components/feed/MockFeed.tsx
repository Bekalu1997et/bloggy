'use client'

import { PostCard } from './PostCard'
import { ThreadCard } from './ThreadCard'
import { mockFeedItems } from '@/lib/mockData'

export function MockFeed() {
  return (
    <div className="space-y-4">
      {mockFeedItems.map((item, index) => (
        <div key={`${item.type}-${item.data.id}`}>
          {item.type === 'post' ? (
            <PostCard post={item.data as any} />
          ) : (
            <ThreadCard thread={item.data as any} />
          )}
        </div>
      ))}
    </div>
  )
}
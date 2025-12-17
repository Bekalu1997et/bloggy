import { InfiniteFeed } from '@/components/feed/InfiniteFeed'
import { CreatePostButton } from '@/components/feed/CreatePostButton'

export default function FeedPage() {
  return (
    <div className="max-w-2xl mx-auto p-4 space-y-6">
      <CreatePostButton />
      <InfiniteFeed />
    </div>
  )
}
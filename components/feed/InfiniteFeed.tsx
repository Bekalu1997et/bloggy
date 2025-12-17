'use client'

import { useInfiniteQuery } from '@tanstack/react-query'
import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import api from '@/lib/api'
import { PostCard } from './PostCard'
import { ThreadCard } from './ThreadCard'
import { FeedSkeleton } from './FeedSkeleton'
import type { Post, Thread, PaginatedResponse } from '@/types/api'

interface FeedItem {
  type: 'post' | 'thread'
  data: Post | Thread
}

export function InfiniteFeed() {
  const { ref, inView } = useInView()

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
  } = useInfiniteQuery({
    queryKey: ['feed'],
    queryFn: async ({ pageParam = 1 }) => {
      const { data } = await api.get<PaginatedResponse<FeedItem>>(`/feed?page=${pageParam}`)
      return data
    },
    initialPageParam: 1,
    getNextPageParam: (lastPage) => 
      lastPage.meta.page < lastPage.meta.totalPages ? lastPage.meta.page + 1 : undefined,
  })

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage()
    }
  }, [inView, hasNextPage, fetchNextPage])

  if (isLoading) {
    console.log('Feed is loading...')
    return <FeedSkeleton />
  }

  if (!data) {
    console.log('No feed data available')
    return <div className="text-center py-8">No posts available</div>
  }

  const items = data?.pages.flatMap(page => page.data) ?? []

  console.log('Feed items:', items)

  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <div key={`${item.type}-${item.data.id}`}>
          {item.type === 'post' ? (
            <PostCard post={item.data as Post} />
          ) : (
            <ThreadCard thread={item.data as Thread} />
          )}
        </div>
      ))}
      
      <div ref={ref}>
        {isFetchingNextPage && <FeedSkeleton />}
      </div>
    </div>
  )
}
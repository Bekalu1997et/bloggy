import { useInfiniteQuery } from '@tanstack/react-query'
import api from '@/lib/api'
import type { PaginatedResponse } from '@/types/api'

interface FeedItem {
  type: 'post' | 'thread'
  data: any
}

export function useInfiniteFeed() {
  return useInfiniteQuery({
    queryKey: ['feed'],
    queryFn: async ({ pageParam = 1 }) => {
      const { data } = await api.get<PaginatedResponse<FeedItem>>(`/feed?page=${pageParam}`)
      return data
    },
    initialPageParam: 1,
    getNextPageParam: (lastPage) => 
      lastPage.meta.page < lastPage.meta.totalPages ? lastPage.meta.page + 1 : undefined,
  })
}
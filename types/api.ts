export interface User {
  id: string
  username: string
  email: string
  avatar?: string
  bio?: string
  followersCount: number
  followingCount: number
  postsCount: number
}

export interface Post {
  id: string
  title: string
  content: string
  slug: string
  coverImage?: string
  author: User
  likesCount: number
  commentsCount: number
  isLiked: boolean
  createdAt: string
  updatedAt: string
}

export interface Thread {
  id: string
  title: string
  content: string
  author: User
  community: Community
  repliesCount: number
  votesCount: number
  userVote?: 'up' | 'down'
  createdAt: string
}

export interface Community {
  id: string
  name: string
  slug: string
  description: string
  membersCount: number
  isJoined: boolean
}

export interface Message {
  id: string
  content: string
  sender: User
  recipient: User
  createdAt: string
  isRead: boolean
}

export interface PaginatedResponse<T> {
  data: T[]
  meta: {
    page: number
    limit: number
    total: number
    totalPages: number
  }
}
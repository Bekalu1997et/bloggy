import { Injectable } from '@nestjs/common'
import { PrismaService } from '../../database/prisma/prisma.service'

@Injectable()
export class FeedService {
  constructor(private prisma: PrismaService) {}

  async getFeed(page: number = 1, limit: number = 10) {
    const skip = (page - 1) * limit

    // Get recent blogs
    const blogs = await this.prisma.blog.findMany({
      where: { status: 'PUBLISHED' },
      include: {
        author: {
          select: { id: true, username: true, profile: true },
        },
        _count: {
          select: { likes: true, comments: true },
        },
      },
      orderBy: { publishedAt: 'desc' },
      skip,
      take: Math.floor(limit / 2),
    })

    // Get recent threads
    const threads = await this.prisma.thread.findMany({
      include: {
        author: {
          select: { id: true, username: true, profile: true },
        },
        forum: {
          select: { name: true, slug: true },
        },
        _count: {
          select: { replies: true, votes: true },
        },
      },
      orderBy: { createdAt: 'desc' },
      skip,
      take: Math.ceil(limit / 2),
    })

    // Combine and format
    const feedItems = [
      ...blogs.map(blog => ({
        type: 'post',
        data: {
          ...blog,
          likesCount: blog._count.likes,
          commentsCount: blog._count.comments,
        },
      })),
      ...threads.map(thread => ({
        type: 'thread',
        data: {
          ...thread,
          community: thread.forum,
          repliesCount: thread._count.replies,
          votesCount: thread.upvotes - thread.downvotes,
        },
      })),
    ]

    // Sort by creation date
    feedItems.sort((a, b) => {
      const dateA = new Date(a.data.createdAt || a.data.publishedAt)
      const dateB = new Date(b.data.createdAt || b.data.publishedAt)
      return dateB.getTime() - dateA.getTime()
    })

    const total = await this.prisma.blog.count({ where: { status: 'PUBLISHED' } }) +
                  await this.prisma.thread.count()

    return {
      data: feedItems.slice(0, limit),
      meta: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
      },
    }
  }
}
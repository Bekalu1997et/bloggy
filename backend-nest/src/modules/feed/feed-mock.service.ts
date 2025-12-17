import { Injectable } from '@nestjs/common'

@Injectable()
export class FeedMockService {
  async getFeed(page: number = 1, limit: number = 10) {
    // Mock feed data
    const mockPosts = [
      {
        type: 'post',
        data: {
          id: '1',
          title: 'Welcome to Bloggy!',
          content: 'This is your first blog post. Start writing amazing content!',
          slug: 'welcome-to-bloggy',
          author: {
            id: '1',
            username: 'admin',
            profile: { photoUrl: null }
          },
          likesCount: 5,
          commentsCount: 2,
          isLiked: false,
          createdAt: new Date().toISOString(),
        }
      },
      {
        type: 'thread',
        data: {
          id: '1',
          title: 'Welcome to the community!',
          content: 'Let\'s start some great discussions here.',
          author: {
            id: '1',
            username: 'admin',
            profile: { photoUrl: null }
          },
          community: {
            name: 'General',
            slug: 'general'
          },
          repliesCount: 3,
          votesCount: 8,
          userVote: null,
          createdAt: new Date().toISOString(),
        }
      }
    ]

    return {
      data: mockPosts,
      meta: {
        page,
        limit,
        total: mockPosts.length,
        totalPages: 1,
      },
    }
  }
}
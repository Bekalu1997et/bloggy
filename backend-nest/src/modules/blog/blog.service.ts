import { Injectable, NotFoundException, ForbiddenException } from '@nestjs/common'
import { PrismaService } from '../../database/prisma/prisma.service'
import { CreateBlogDto } from './dto/create-blog.dto'

@Injectable()
export class BlogService {
  constructor(private prisma: PrismaService) {}

  private generateSlug(title: string): string {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9 -]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim('-')
  }

  async create(authorId: string, dto: CreateBlogDto) {
    const slug = this.generateSlug(dto.title)
    
    return this.prisma.blog.create({
      data: {
        ...dto,
        slug,
        authorId,
        status: dto.publish ? 'PUBLISHED' : 'DRAFT',
        publishedAt: dto.publish ? new Date() : null,
      },
      include: {
        author: {
          select: { id: true, username: true, profile: true },
        },
        _count: {
          select: { likes: true, comments: true },
        },
      },
    })
  }

  async findBySlug(slug: string) {
    const blog = await this.prisma.blog.findUnique({
      where: { slug },
      include: {
        author: {
          select: { id: true, username: true, profile: true },
        },
        comments: {
          include: {
            author: {
              select: { id: true, username: true, profile: true },
            },
          },
          orderBy: { createdAt: 'desc' },
        },
        _count: {
          select: { likes: true, comments: true },
        },
      },
    })

    if (!blog || blog.status !== 'PUBLISHED') {
      throw new NotFoundException('Blog not found')
    }

    return blog
  }

  async publish(id: string, authorId: string) {
    const blog = await this.prisma.blog.findUnique({
      where: { id },
    })

    if (!blog) {
      throw new NotFoundException('Blog not found')
    }

    if (blog.authorId !== authorId) {
      throw new ForbiddenException('Not authorized')
    }

    return this.prisma.blog.update({
      where: { id },
      data: {
        status: 'PUBLISHED',
        publishedAt: new Date(),
      },
    })
  }

  async like(blogId: string, userId: string) {
    const existing = await this.prisma.like.findUnique({
      where: {
        userId_contentType_contentId: {
          userId,
          contentType: 'BLOG',
          contentId: blogId,
        },
      },
    })

    if (existing) {
      await this.prisma.like.delete({
        where: { id: existing.id },
      })
      return { liked: false }
    } else {
      await this.prisma.like.create({
        data: {
          userId,
          contentType: 'BLOG',
          contentId: blogId,
        },
      })
      return { liked: true }
    }
  }

  async addComment(blogId: string, authorId: string, content: string) {
    return this.prisma.comment.create({
      data: {
        blogId,
        authorId,
        content,
      },
      include: {
        author: {
          select: { id: true, username: true, profile: true },
        },
      },
    })
  }
}
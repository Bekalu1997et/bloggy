import { Injectable, ConflictException } from '@nestjs/common'
import { PrismaService } from '../../../database/prisma/prisma.service'

@Injectable()
export class CommunitiesService {
  constructor(private prisma: PrismaService) {}

  private generateSlug(name: string): string {
    return name
      .toLowerCase()
      .replace(/[^a-z0-9 -]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim('-')
  }

  async create(creatorId: string, data: { name: string; description?: string; rules?: string }) {
    const slug = this.generateSlug(data.name)
    
    const existing = await this.prisma.forum.findUnique({
      where: { slug },
    })

    if (existing) {
      throw new ConflictException('Community already exists')
    }

    return this.prisma.forum.create({
      data: {
        ...data,
        slug,
        creatorId,
      },
    })
  }

  async findAll() {
    return this.prisma.forum.findMany({
      include: {
        _count: {
          select: { threads: true },
        },
      },
      orderBy: { createdAt: 'desc' },
    })
  }

  async findBySlug(slug: string) {
    return this.prisma.forum.findUnique({
      where: { slug },
      include: {
        threads: {
          include: {
            author: {
              select: { id: true, username: true, profile: true },
            },
            _count: {
              select: { replies: true, votes: true },
            },
          },
          orderBy: { createdAt: 'desc' },
          take: 20,
        },
        _count: {
          select: { threads: true },
        },
      },
    })
  }
}
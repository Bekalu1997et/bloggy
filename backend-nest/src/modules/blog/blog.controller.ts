import { Controller, Post, Get, Patch, Body, Param, UseGuards } from '@nestjs/common'
import { BlogService } from './blog.service'
import { CreateBlogDto } from './dto/create-blog.dto'
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard'
import { CurrentUser } from '../../common/decorators/current-user.decorator'

@Controller('blogs')
export class BlogController {
  constructor(private blogService: BlogService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  async create(@CurrentUser() user: any, @Body() dto: CreateBlogDto) {
    return this.blogService.create(user.id, dto)
  }

  @Get(':slug')
  async findBySlug(@Param('slug') slug: string) {
    return this.blogService.findBySlug(slug)
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id/publish')
  async publish(@Param('id') id: string, @CurrentUser() user: any) {
    return this.blogService.publish(id, user.id)
  }

  @UseGuards(JwtAuthGuard)
  @Post(':id/like')
  async like(@Param('id') id: string, @CurrentUser() user: any) {
    return this.blogService.like(id, user.id)
  }

  @UseGuards(JwtAuthGuard)
  @Post(':id/comment')
  async addComment(
    @Param('id') id: string,
    @CurrentUser() user: any,
    @Body('content') content: string,
  ) {
    return this.blogService.addComment(id, user.id, content)
  }
}
import { Controller, Post, Get, Body, Param, UseGuards } from '@nestjs/common'
import { CommunitiesService } from './communities.service'
import { JwtAuthGuard } from '../../../common/guards/jwt-auth.guard'
import { CurrentUser } from '../../../common/decorators/current-user.decorator'

@Controller('forums')
export class CommunitiesController {
  constructor(private communitiesService: CommunitiesService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  async create(@CurrentUser() user: any, @Body() data: any) {
    return this.communitiesService.create(user.id, data)
  }

  @Get()
  async findAll() {
    return this.communitiesService.findAll()
  }

  @Get(':slug')
  async findBySlug(@Param('slug') slug: string) {
    return this.communitiesService.findBySlug(slug)
  }
}
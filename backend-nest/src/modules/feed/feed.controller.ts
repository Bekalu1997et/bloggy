import { Controller, Get, Query } from '@nestjs/common'
import { FeedService } from './feed.service'
import { FeedMockService } from './feed-mock.service'

@Controller('feed')
export class FeedController {
  constructor(
    private feedService: FeedService,
    private feedMockService: FeedMockService,
  ) {}

  @Get()
  async getFeed(
    @Query('page') page: string = '1',
    @Query('limit') limit: string = '10',
  ) {
    // Use mock service for now
    return this.feedMockService.getFeed(parseInt(page), parseInt(limit))
    // return this.feedService.getFeed(parseInt(page), parseInt(limit))
  }
}
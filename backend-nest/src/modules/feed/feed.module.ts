import { Module } from '@nestjs/common'
import { FeedController } from './feed.controller'
import { FeedService } from './feed.service'
import { FeedMockService } from './feed-mock.service'

@Module({
  controllers: [FeedController],
  providers: [FeedService, FeedMockService],
})
export class FeedModule {}
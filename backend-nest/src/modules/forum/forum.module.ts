import { Module } from '@nestjs/common'
import { CommunitiesModule } from './communities/communities.module'
import { ThreadsModule } from './threads/threads.module'
import { RepliesModule } from './replies/replies.module'

@Module({
  imports: [CommunitiesModule, ThreadsModule, RepliesModule],
})
export class ForumModule {}
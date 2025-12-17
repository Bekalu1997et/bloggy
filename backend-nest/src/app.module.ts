import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { AppController } from './app.controller'
import { AuthModule } from './modules/auth/auth.module'
import { UsersModule } from './modules/users/users.module'
import { BlogModule } from './modules/blog/blog.module'
import { ForumModule } from './modules/forum/forum.module'
import { FeedModule } from './modules/feed/feed.module'
import { PrismaModule } from './database/prisma/prisma.module'
import { CommonModule } from './common/common.module'

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    CommonModule,
    PrismaModule,
    AuthModule,
    UsersModule,
    BlogModule,
    ForumModule,
    FeedModule,
  ],
  controllers: [AppController],
})
export class AppModule {}
import { Module, Global } from '@nestjs/common'
import { LoggerService } from './services/logger.service'
import { HashService } from './services/hash.service'

@Global()
@Module({
  providers: [LoggerService, HashService],
  exports: [LoggerService, HashService],
})
export class CommonModule {}
import { Controller, Get, Param, Patch, Body, UseGuards } from '@nestjs/common'
import { UsersService } from './users.service'
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard'
import { CurrentUser } from '../../common/decorators/current-user.decorator'

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get('@:username')
  async getUserProfile(@Param('username') username: string) {
    return this.usersService.findByUsername(username)
  }

  @UseGuards(JwtAuthGuard)
  @Patch('profile')
  async updateProfile(@CurrentUser() user: any, @Body() data: any) {
    return this.usersService.updateProfile(user.id, data)
  }
}
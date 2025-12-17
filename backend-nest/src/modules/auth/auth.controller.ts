import { Controller, Post, Body, HttpCode, HttpStatus, BadRequestException } from '@nestjs/common'
import { AuthService } from './auth.service'
import { AuthMockService } from './auth-mock.service'
import { RegisterDto } from './dto/register.dto'
import { LoginDto } from './dto/login.dto'

@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private authMockService: AuthMockService,
  ) {}

  @Post('register')
  async register(@Body() dto: RegisterDto) {
    try {
      // Use mock service for now
      return await this.authMockService.register(dto)
      // return await this.authService.register(dto)
    } catch (error) {
      if (error.code === 'P2002') {
        throw new BadRequestException('User with this email or username already exists')
      }
      throw error
    }
  }

  @Post('login')
  @HttpCode(HttpStatus.OK)
  async login(@Body() dto: LoginDto) {
    // Use mock service for now
    return await this.authMockService.login(dto)
    // return this.authService.login(dto)
  }
}
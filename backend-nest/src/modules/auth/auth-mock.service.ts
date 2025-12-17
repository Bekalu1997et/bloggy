import { Injectable } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'

@Injectable()
export class AuthMockService {
  constructor(private jwt: JwtService) {}

  async register(dto: any) {
    // Mock registration
    const user = {
      id: '1',
      username: dto.username,
      email: dto.email,
    }

    const token = this.jwt.sign({ sub: user.id, username: user.username })
    
    return {
      user,
      token,
    }
  }

  async login(dto: any) {
    // Mock login
    const user = {
      id: '1',
      username: 'testuser',
      email: 'test@example.com',
    }

    const token = this.jwt.sign({ sub: user.id, username: user.username })
    
    return {
      user,
      token,
    }
  }

  async validateUser(userId: string) {
    return {
      id: userId,
      username: 'testuser',
      email: 'test@example.com',
      isVerified: true,
    }
  }
}
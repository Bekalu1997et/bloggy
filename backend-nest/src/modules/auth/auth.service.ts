import { Injectable, UnauthorizedException, ConflictException } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { PrismaService } from '../../database/prisma/prisma.service'
import { HashService } from '../../common/services/hash.service'
import { RegisterDto } from './dto/register.dto'
import { LoginDto } from './dto/login.dto'

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwt: JwtService,
    private hash: HashService,
  ) {}

  async register(dto: RegisterDto) {
    // Check if user exists
    const existing = await this.prisma.user.findFirst({
      where: {
        OR: [
          { email: dto.email },
          { phone: dto.phone },
          { username: dto.username },
        ],
      },
    })

    if (existing) {
      throw new ConflictException('User already exists')
    }

    // Create user
    const passwordHash = await this.hash.hash(dto.password)
    const user = await this.prisma.user.create({
      data: {
        username: dto.username,
        email: dto.email,
        phone: dto.phone,
        passwordHash,
        provider: 'email',
      },
    })

    // Create profile
    await this.prisma.profile.create({
      data: { userId: user.id },
    })

    const token = this.jwt.sign({ sub: user.id, username: user.username })
    
    return {
      user: { id: user.id, username: user.username, email: user.email },
      token,
    }
  }

  async login(dto: LoginDto) {
    const user = await this.prisma.user.findFirst({
      where: {
        OR: [
          { email: dto.identifier },
          { phone: dto.identifier },
          { username: dto.identifier },
        ],
      },
    })

    if (!user || !user.passwordHash) {
      throw new UnauthorizedException('Invalid credentials')
    }

    const isValid = await this.hash.compare(dto.password, user.passwordHash)
    if (!isValid) {
      throw new UnauthorizedException('Invalid credentials')
    }

    // Create session
    const token = this.jwt.sign({ sub: user.id, username: user.username })
    await this.prisma.session.create({
      data: {
        userId: user.id,
        token,
        device: dto.device,
        expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7 days
      },
    })

    return {
      user: { id: user.id, username: user.username, email: user.email },
      token,
    }
  }

  async validateUser(userId: string) {
    return this.prisma.user.findUnique({
      where: { id: userId },
      select: { id: true, username: true, email: true, isVerified: true },
    })
  }
}
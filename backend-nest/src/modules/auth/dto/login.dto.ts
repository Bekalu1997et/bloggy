import { IsString, IsOptional } from 'class-validator'

export class LoginDto {
  @IsString()
  identifier: string // email, phone, or username

  @IsString()
  password: string

  @IsOptional()
  @IsString()
  device?: string
}
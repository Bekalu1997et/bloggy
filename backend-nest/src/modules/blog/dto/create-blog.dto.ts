import { IsString, IsOptional, IsBoolean } from 'class-validator'

export class CreateBlogDto {
  @IsString()
  title: string

  @IsString()
  content: string

  @IsOptional()
  @IsString()
  coverImage?: string

  @IsOptional()
  @IsString()
  metaTitle?: string

  @IsOptional()
  @IsString()
  metaDesc?: string

  @IsOptional()
  @IsBoolean()
  publish?: boolean = false
}
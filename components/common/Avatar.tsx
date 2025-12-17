import { cn } from '@/lib/utils'
import type { User } from '@/types/api'

interface AvatarProps {
  user: User
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

const sizeClasses = {
  sm: 'w-8 h-8',
  md: 'w-12 h-12',
  lg: 'w-16 h-16',
}

export function Avatar({ user, size = 'md', className }: AvatarProps) {
  return (
    <div className={cn(
      'rounded-full bg-muted flex items-center justify-center overflow-hidden',
      sizeClasses[size],
      className
    )}>
      {user.avatar ? (
        <img 
          src={user.avatar} 
          alt={user.username}
          className="w-full h-full object-cover"
        />
      ) : (
        <span className="text-sm font-medium">
          {user.username.charAt(0).toUpperCase()}
        </span>
      )}
    </div>
  )
}
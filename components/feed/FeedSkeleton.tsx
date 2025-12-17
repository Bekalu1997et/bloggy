import { Card, CardContent, CardHeader } from '@/components/ui/card'

export function FeedSkeleton() {
  return (
    <div className="space-y-4">
      {Array.from({ length: 3 }).map((_, i) => (
        <Card key={i}>
          <CardHeader className="pb-3">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-muted rounded-full animate-pulse" />
              <div className="space-y-2">
                <div className="w-24 h-4 bg-muted rounded animate-pulse" />
                <div className="w-16 h-3 bg-muted rounded animate-pulse" />
              </div>
            </div>
          </CardHeader>
          
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="w-3/4 h-5 bg-muted rounded animate-pulse" />
              <div className="w-full h-4 bg-muted rounded animate-pulse" />
              <div className="w-2/3 h-4 bg-muted rounded animate-pulse" />
            </div>
            
            <div className="w-full h-48 bg-muted rounded-md animate-pulse" />
            
            <div className="flex items-center space-x-4 pt-2">
              <div className="w-12 h-8 bg-muted rounded animate-pulse" />
              <div className="w-12 h-8 bg-muted rounded animate-pulse" />
              <div className="w-8 h-8 bg-muted rounded animate-pulse" />
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
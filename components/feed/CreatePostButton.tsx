'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { CreateModal } from '@/components/common/CreateModal'
import { PlusIcon } from 'lucide-react'

export function CreatePostButton() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <Card className="p-4">
        <Button 
          onClick={() => setIsOpen(true)}
          className="w-full justify-start text-muted-foreground"
          variant="ghost"
        >
          <PlusIcon className="w-4 h-4 mr-2" />
          What's on your mind?
        </Button>
      </Card>
      
      <CreateModal 
        isOpen={isOpen} 
        onClose={() => setIsOpen(false)} 
      />
    </>
  )
}
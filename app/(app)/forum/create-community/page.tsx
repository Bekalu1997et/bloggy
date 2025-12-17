'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form'
import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import api from '@/lib/api'

const communitySchema = z.object({
  name: z.string().min(3, 'Name must be at least 3 characters'),
  description: z.string().optional(),
  rules: z.string().optional(),
})

type CommunityForm = z.infer<typeof communitySchema>

export default function CreateCommunityPage() {
  const router = useRouter()
  
  const form = useForm<CommunityForm>({
    resolver: zodResolver(communitySchema),
    defaultValues: {
      name: '',
      description: '',
      rules: '',
    },
  })

  const createCommunityMutation = useMutation({
    mutationFn: async (data: CommunityForm) => {
      const response = await api.post('/forums', data)
      return response.data
    },
    onSuccess: (data) => {
      router.push(`/forum/${data.slug}`)
    },
  })

  const onSubmit = async (data: CommunityForm) => {
    await createCommunityMutation.mutateAsync(data)
  }

  return (
    <div className="max-w-2xl mx-auto p-6">
      <Card>
        <CardHeader>
          <CardTitle>Create Community</CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="Community name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Textarea 
                        placeholder="Describe your community..." 
                        className="min-h-[100px]"
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="rules"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Textarea 
                        placeholder="Community rules (optional)..." 
                        className="min-h-[100px]"
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <Button 
                type="submit" 
                className="w-full"
                disabled={createCommunityMutation.isPending}
              >
                {createCommunityMutation.isPending ? 'Creating...' : 'Create Community'}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  )
}
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

const blogSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  content: z.string().min(10, 'Content must be at least 10 characters'),
  coverImage: z.string().optional(),
  metaTitle: z.string().optional(),
  metaDesc: z.string().optional(),
})

type BlogForm = z.infer<typeof blogSchema>

export default function CreateBlogPage() {
  const router = useRouter()
  
  const form = useForm<BlogForm>({
    resolver: zodResolver(blogSchema),
    defaultValues: {
      title: '',
      content: '',
      coverImage: '',
      metaTitle: '',
      metaDesc: '',
    },
  })

  const createBlogMutation = useMutation({
    mutationFn: async (data: BlogForm & { publish?: boolean }) => {
      const response = await api.post('/blogs', data)
      return response.data
    },
    onSuccess: (data) => {
      router.push(`/blog/${data.slug}`)
    },
  })

  const onSubmit = async (data: BlogForm) => {
    await createBlogMutation.mutateAsync({ ...data, publish: false })
  }

  const onPublish = async (data: BlogForm) => {
    await createBlogMutation.mutateAsync({ ...data, publish: true })
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <Card>
        <CardHeader>
          <CardTitle>Create Blog Post</CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form className="space-y-6">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input 
                        placeholder="Enter your blog title..." 
                        className="text-2xl font-bold border-none p-0 focus-visible:ring-0" 
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="coverImage"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="Cover image URL (optional)" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="content"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Textarea 
                        placeholder="Write your blog content here..." 
                        className="min-h-[400px] resize-none" 
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="metaTitle"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder="SEO Title (optional)" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="metaDesc"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder="SEO Description (optional)" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              
              <div className="flex gap-4">
                <Button 
                  type="button" 
                  variant="outline" 
                  onClick={form.handleSubmit(onSubmit)}
                  disabled={createBlogMutation.isPending}
                >
                  Save Draft
                </Button>
                <Button 
                  type="button" 
                  onClick={form.handleSubmit(onPublish)}
                  disabled={createBlogMutation.isPending}
                >
                  {createBlogMutation.isPending ? 'Publishing...' : 'Publish'}
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  )
}
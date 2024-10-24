'use client'

import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import fetchWithTokenAction from '@/actions/fetchWithToken'
import { HttpMethod } from '@/types/requestTypes'
import { useToast } from '@/hooks/use-toast'

import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'

const formSchema = z
  .object({
    password: z.string().min(8),
    repeatPassword: z.string().min(8),
  })
  .refine((data) => data.password === data.repeatPassword, {
    message: 'Passwords must match',
    path: ['repeatPassword'],
  })

export default function ChangePasswordForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  })
  const { toast } = useToast()

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const { password } = values

    try {
      const req = await fetchWithTokenAction('/auth/change_password', {
        method: HttpMethod.POST,
        body: {
          password,
        },
      })

      if (req.ok) {
        toast({
          title: 'Password changed!',
        })
      } else {
        toast({
          variant: 'destructive',
          title: 'Something went wrong.',
          description: 'Try again later.',
        })
      }
    } catch (error) {
      toast({
        variant: 'destructive',
        title: 'Something went wrong.',
        description: 'Try again later.',
      })
      throw error
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='w-1/3 grid gap-3'
      >
        <FormField
          name='password'
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input
                  type='password'
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name='repeatPassword'
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Repeat password</FormLabel>
              <FormControl>
                <Input
                  type='password'
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div>
          <Button type='submit'>Change password</Button>
        </div>
      </form>
    </Form>
  )
}

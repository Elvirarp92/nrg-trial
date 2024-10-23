'use client'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { useCallback } from 'react'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'

const formSchema = z.object({
  code__icontains: z.string().min(0).max(50),
})

export default function DealsFilter() {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      code__icontains: '',
    },
  })

  const createQueryString = useCallback(
    (values: z.infer<typeof formSchema>) => {
      const params = new URLSearchParams(searchParams.toString())

      for (const key in values) {
        if (Object.prototype.hasOwnProperty.call(values, key)) {
          if (!!values[key]) {
            params.set(key, values[key])
          } else if (!values[key] && params.has(key)) {
            params.delete(key)
          }
        }
      }

      return params.toString()
    },
    [searchParams],
  )

  function onSubmit(values: z.infer<typeof formSchema>) {
    router.push(pathname + '?' + createQueryString(values))
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='flex items-end gap-3'
      >
        <FormField
          control={form.control}
          name='code__icontains'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Code</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type='submit'>Filter</Button>
      </form>
    </Form>
  )
}

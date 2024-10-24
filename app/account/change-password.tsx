'use client'

import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import fetchWithTokenAction from '@/actions/fetchWithToken'
import { HttpMethod } from '@/types/requestTypes'
import { useToast } from '@/hooks/use-toast'
import zxcvbn from 'zxcvbn-typescript'
import { Eye, EyeClosed } from 'lucide-react'

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
import { Progress } from '@/components/ui/progress'
import { useState } from 'react'

const passwordUserInputs = ['nrg', 'consulting', 'nrgconsulting', 'energy']

const formSchema = z
  .object({
    password: z.string().min(8),
    repeatPassword: z.string().min(8),
  })
  .refine((data) => data.password === data.repeatPassword, {
    message: 'Passwords must match',
    path: ['repeatPassword'],
  })
  .superRefine((data, ctx) => {
    const passwordStrengthTest = zxcvbn(data.password, passwordUserInputs)
    console.log(passwordStrengthTest)
    if (passwordStrengthTest.score < 3) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: `Password too weak. ${passwordStrengthTest.feedback?.warning}`,
        path: ['password'],
      })
    }
  })

export default function ChangePasswordForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  })

  const { toast } = useToast()

  const [hidePassword, setHidePassword] = useState(true)
  const [hidePasswordRepeat, setHidePasswordRepeat] = useState(true)

  const handleHidePassword = () => {
    setHidePassword(!hidePassword)
  }
  const handleHidePasswordRepeat = () => {
    setHidePasswordRepeat(!hidePasswordRepeat)
  }

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const { password } = values

    try {
      const req = await fetchWithTokenAction('/auth/change_passwor', {
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
              <div className='flex gap-1'>
                <FormControl>
                  <Input
                    type={hidePassword ? 'password' : 'text'}
                    {...field}
                  />
                </FormControl>
                <Button
                  variant='ghost'
                  onClick={handleHidePassword}
                >
                  {hidePassword ? <Eye /> : <EyeClosed />}
                </Button>
              </div>
              <Progress
                value={zxcvbn(field.value || '', passwordUserInputs).score * 25}
              />
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
              <div className='flex gap-1'>
                <FormControl>
                  <Input
                    type={hidePasswordRepeat ? 'password' : 'text'}
                    {...field}
                  />
                </FormControl>
                <Button
                  variant='ghost'
                  onClick={handleHidePasswordRepeat}
                >
                  {hidePasswordRepeat ? <Eye /> : <EyeClosed />}
                </Button>
              </div>
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

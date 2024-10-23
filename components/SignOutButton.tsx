'use client'
import { getSession, signOut } from 'next-auth/react'
import { LogOut } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'

async function handleLogout() {
  const session = await getSession()
  const headers = {
    'Content-Type': 'application/json',
    Authorization: `Token ${session?.accessToken}`,
  }
  const logout = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/auth/logout/`,
    {
      method: 'POST',
      headers,
    },
  )

  if (logout.ok) signOut()
}

export default function Component() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            className='h-7 w-7'
            variant='ghost'
            size='icon'
            onClick={() => handleLogout()}
          >
            <LogOut />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Log out</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

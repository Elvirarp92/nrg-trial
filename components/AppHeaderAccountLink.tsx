import Link from 'next/link'
import { UserCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'

export default function AppHeaderAccountLink() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            asChild
            className='h-7 w-7'
            variant='ghost'
            size='icon'
          >
            <Link href='/account'>
              <UserCircle />
            </Link>
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Account</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

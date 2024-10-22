import { SidebarTrigger } from '@/components/ui/sidebar'
import Link from 'next/link'
import SignOutButton from '@/components/SignOutButton'

export function AppHeader() {
  return (
    <header>
      <SidebarTrigger />
      <Link
        className='header__logotype'
        href='/'
      >
        NRG Deal Manager
      </Link>
      <SignOutButton />
    </header>
  )
}

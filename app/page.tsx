import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/authOptions'
import Link from 'next/link'

export default async function Home() {
  const session = await getServerSession(authOptions)
  return (
    <div>
      <h1>NRG Deal Manager</h1>
      <p>
        Welcome,{' '}
        <Link
          className='text-secondary'
          href='/account'
        >
          {session?.username}
        </Link>
        !
      </p>
    </div>
  )
}

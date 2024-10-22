import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'

export default async function Home() {
  const session = await getServerSession(authOptions)
  return (
    <div>
      <h1>NRG Deal Manager</h1>
      <p>Welcome, {session?.username}!</p>
    </div>
  )
}

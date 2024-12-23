import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/authOptions'
import ChangePasswordForm from './change-password'

export default async function Me() {
  const session = await getServerSession(authOptions)

  return (
    <article className='grid gap-3'>
      <h1>Your account</h1>
      <h2>Overview</h2>
      <ul>
        <li>
          <b>Name:</b> {session?.username}
        </li>
        <li>
          <b>Staff:</b> {session?.isStaff ? 'Yes' : 'No'}
        </li>
      </ul>
      <h2>Change password</h2>
      <ChangePasswordForm />
    </article>
  )
}

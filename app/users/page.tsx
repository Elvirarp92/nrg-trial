import fetchWithToken from '@/utils/fetchWithToken'
import { DataTable } from '@/components/ui/data-table'
import { User } from '@/types/apiTypes'
import { usersColumns } from './columns'

export default async function Users() {
  const request = await fetchWithToken('/auth/users')
  const users: User[] = await request.json()

  return (
    <>
      <h1>Users</h1>
      <div className='grid w-full mt-6 gap-1.5'>
        <DataTable
          columns={usersColumns}
          data={users}
        />
      </div>
    </>
  )
}

import fetchWithToken from '@/utils/fetchWithToken'
import { DataTable } from '@/components/ui/data-table'
import { Principal } from '@/types/apiTypes'
import { principalsColumns } from './columns'

export default async function Principals() {
  const request = await fetchWithToken('/deals/principal')
  const principals: Principal[] = await request.json()

  const theOtherRequest = await fetchWithToken('/deals/principal/1')
  const prin: Principal = await theOtherRequest.json()
  console.log(prin)

  return (
    <>
      <h1>Principals</h1>
      <div className='grid w-full mt-6'>
        <DataTable
          columns={principalsColumns}
          data={principals}
        />
      </div>
    </>
  )
}

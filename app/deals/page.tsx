import fetchWithToken from '@/utils/fetchWithToken'
import { DataTable } from '@/components/ui/data-table'
import { dealsColumns } from './columns'

export default async function Deals() {
  const request = await fetchWithToken('/deals', {
    queryParams: { scenario: 'datatable' },
  })
  const deals = await request.json()

  return (
    <>
      <h1>Deals</h1>
      <DataTable
        columns={dealsColumns}
        data={deals}
      />
    </>
  )
}

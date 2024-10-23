import fetchWithToken from '@/utils/fetchWithToken'
import { DataTable } from '@/components/ui/data-table'
import { TableDeal } from '@/types/apiTypes'
import { dealsColumns } from './columns'
import DealsFilter from './filter'

export default async function Deals({
  searchParams,
}: {
  searchParams: URLSearchParams
}) {
  const request = await fetchWithToken('/deals', {
    queryParams: { scenario: 'datatable', ...searchParams },
  })
  const deals: TableDeal[] = await request.json()

  return (
    <>
      <h1>Deals</h1>
      <div className='grid w-full mt-6 gap-1.5'>
        <DealsFilter />
        <DataTable
          columns={dealsColumns}
          data={deals}
        />
      </div>
    </>
  )
}

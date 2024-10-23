import fetchWithToken from '@/utils/fetchWithToken'
import { DataTable } from '@/components/ui/data-table'
import { counterpartiesColumns } from './columns'

export default async function Counterparties() {
  const request = await fetchWithToken('/deals/counterparties')
  const counterparties = await request.json()

  return (
    <>
      <h1>Counterparties</h1>
      <div className='grid mt-6 gap-1.5'>
        <DataTable
          columns={counterpartiesColumns}
          data={counterparties}
        />
      </div>
    </>
  )
}

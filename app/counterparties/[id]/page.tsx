import fetchWithToken from '@/utils/fetchWithToken'
import NotFound from '@/app/not-found'
import { Counterparty as CounterpartyType } from '@/types/apiTypes'
import { getCounterpartyTypeLabel } from '@/utils/apiEnumMappingFunctions'

export default async function Counterparty({
  params,
}: {
  params: { id: string | number }
}) {
  const request = await fetchWithToken(`/deals/counterparties/${params.id}`)
  const counterparty: CounterpartyType = await request.json()

  if (request.status === 404) return <NotFound />

  return (
    <article className='grid gap-3'>
      <h1>{counterparty.name}</h1>
      <h2>Overview</h2>
      <ul>
        <li>
          <b>CIF:</b> {counterparty.cif}
        </li>
        <li>
          <b>Type:</b> {getCounterpartyTypeLabel(counterparty.type)}
        </li>
      </ul>
      {!!counterparty.contacts?.length && (
        <div>
          <h2>Contacts</h2>
          <p>{JSON.stringify(counterparty.contacts)}</p>
        </div>
      )}
    </article>
  )
}

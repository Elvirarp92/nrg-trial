import fetchWithToken from '@/utils/fetchWithToken'
import NotFound from '@/app/not-found'
import { Deal as DealType } from '@/types/apiTypes'
import Link from 'next/link'
import {
  getDealStatusLabel,
  getDealProposedToLabel,
  getDealBillingLabel,
  getDealSenseLabel,
} from '@/utils/apiEnumMappingFunctions'

export default async function Deal({ params }: { params: { id: string } }) {
  const request = await fetchWithToken(`/deals/${params.id}`)
  const deal: DealType = await request.json()

  if (request.status === 404) return <NotFound />

  const tradeDate = new Date(deal.trade_date)

  return (
    <article className='grid gap-3'>
      <h1>{deal.code}</h1>
      <h2>Status</h2>
      <ul>
        <li>
          <b>Status:</b> {getDealStatusLabel(deal.status)}
        </li>
        <li>
          <b>Proposed to:</b> {getDealProposedToLabel(deal.proposed_to)}
        </li>
        <li>
          <b>Billing:</b> {getDealBillingLabel(deal.is_billing)}
        </li>
      </ul>
      <h2>Deal details</h2>
      <ul>
        <li>
          <b>Sense:</b> {getDealSenseLabel(deal.sense)}
        </li>
        <li>
          <b>Commodity group:</b> {deal.commodity_group.name}
        </li>
        <li>
          <b>Volume:</b> {deal.volume} {deal.commodity_group.measurement_unit}
        </li>
        <li>
          <b>Fixed price:</b> {deal.fixed_price}
        </li>
        <li>
          <b>Trade date:</b> {tradeDate.toLocaleDateString()}
        </li>
      </ul>
      <h2>Involved parts</h2>
      <ul>
        <li>
          <b>Broker:</b> {deal.broker}
        </li>
        <li>
          <b>Counterparty:</b>{' '}
          <Link
            className='text-secondary'
            href={`/counterparties/${deal.counterparty.id}`}
          >
            {deal.counterparty.name}
          </Link>
        </li>
      </ul>
    </article>
  )
}

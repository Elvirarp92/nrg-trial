import fetchWithToken from '@/utils/fetchWithToken'

type DealStatus = 0 | 1 | 2
type DealProposedTo = 0 | 1 | 2
type DealBilling = 0 | 1 | 10 | 20 | 21 | 30

const dealStatusLabels: { [key in DealStatus]: string } = {
  0: 'Inactive',
  1: 'Unverified',
  2: 'Verified',
}

const dealProposedToLabels: { [key in DealProposedTo]: string } = {
  0: 'None',
  1: 'Amend',
  2: 'Delete',
}

const dealBillingLabels: { [key in DealBilling]: string } = {
  0: 'None',
  1: 'In Progress',
  10: 'Completed',
  20: 'Cancelled',
  21: 'Rejected',
  30: 'Failed',
}

const getDealStatusLabel = (status: DealStatus): string =>
  dealStatusLabels[status]
const getDealProposedToLabel = (proposedTo: DealProposedTo): string =>
  dealProposedToLabels[proposedTo]
const getDealBillingLabels = (billing: DealBilling): string =>
  dealBillingLabels[billing]

export default async function Deal({ params }: { params: { id: string } }) {
  const request = await fetchWithToken(`/deals/${params.id}`)
  const deal = await request.json()
  const tradeDate = new Date(deal.trade_date)

  return (
    <article className='grid gap-3'>
      <h1>{deal.code}</h1>
      <ul>
        <li>
          <b>Status:</b> {getDealStatusLabel(deal.status as DealStatus)}
        </li>
        <li>
          <b>Commodity group:</b> {deal.commodity_group.name}
        </li>
        <li>
          <b>Volume:</b> {deal.volume} {deal.commodity_group.measurement_unit}
        </li>
        <li>
          <b>Trade date:</b> {tradeDate.toLocaleDateString()}
        </li>
        <li>
          <b>Proposed to:</b>{' '}
          {getDealProposedToLabel(deal.proposed_to as DealProposedTo)}
        </li>
        <li>
          <b>Billing:</b> {getDealBillingLabels(deal.is_billing)}
        </li>
      </ul>
      <h2>Involved parts</h2>
      <ul>
        <li>
          <b>Broker:</b> {deal.broker}
        </li>
        <li>
          <b>Counterparty:</b> {deal.counterparty.name}
        </li>
      </ul>
    </article>
  )
}

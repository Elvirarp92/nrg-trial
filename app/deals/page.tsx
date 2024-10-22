import fetchWithToken from '@/utils/fetchWithToken'

const tableHeaders = [
  {
    name: 'code',
    label: 'Code',
  },
  {
    name: 'trade_date',
    label: 'Trade date',
  },
  {
    name: 'status',
    label: 'Status',
  },
  {
    name: 'proposed_to',
    label: 'Proposed to',
  },
  {
    name: 'sense',
    label: 'Sense',
  },
  {
    name: 'volume',
    label: 'Volume',
  },
  {
    name: 'measurement_unit',
    label: 'Measurement unit',
  },
  {
    name: 'fixed_price',
    label: 'Fixed price',
  },
  {
    name: 'counterparty',
    label: 'Counterparty',
  },
  {
    name: 'commodity_group',
    label: 'Commodity group',
  },
  {
    name: 'broker',
    label: 'Broker',
  },
]

export default async function Deals() {
  const request = await fetchWithToken('/deals', {
    queryParams: { scenario: 'datatable' },
  })
  const deals = await request.json()
  const headers = tableHeaders.map((header) => (
    <th key={header.name}>{header.label}</th>
  ))

  const dealRows = deals.map((deal) => (
    <tr key={deal.id}>
      {tableHeaders.map((header) => {
        if (header.name === 'counterparty')
          return (
            <td key={`${deal.id}-${header.name}`}>{deal[header.name].name}</td>
          )

        if (header.name === 'trade_date') {
          const date = new Date(deal[header.name])
          return (
            <td key={`${deal.id}-${header.name}`}>
              {date.toLocaleDateString()}
            </td>
          )
        }

        return <td key={`${deal.id}-${header.name}`}>{deal[header.name]}</td>
      })}
    </tr>
  ))

  return (
    <>
      <h1>Deals</h1>
      <table>
        <thead>
          <tr>{headers}</tr>
        </thead>
        <tbody>{dealRows}</tbody>
      </table>
    </>
  )
}

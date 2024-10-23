export type DealStatus = 0 | 1 | 2
export type DealProposedTo = 0 | 1 | 2
export type DealBilling = 0 | 1 | 10 | 20 | 21 | 30
export type DealSense = 1 | 2
export type CounterpartyType = 1 | 2 | 3
export type CounterpartyContact = {
  id: number
  name: string
  email: string
  phone: string
}

export type Counterparty = {
  id: number
  name: string
  type: CounterpartyType
  cif?: string
  contacts?: CounterpartyContact[]
  about?: null
}

export type TableDeal = {
  id: string
  code: string
  trade_date: string
  status: 'Verified' | 'Unverified'
  proposed_to: string
  sense: 'Sell' | 'Buy'
  volume: number
  measurement_unit: string
  fixed_price: number
  counterparty: Counterparty
  commodity_group: string
  broker: string
}

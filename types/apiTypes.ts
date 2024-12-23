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

export type CommodityGroup = {
  id: number
  name: string
  short_name: string
  measurement_unit: string
  df_rounding: number
}

export type TableDeal = {
  /* Deals as returned by /deals?scenario=datatable */
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

export type Deal = {
  id: string
  counterparty: Counterparty
  commodity_group: CommodityGroup
  broker: string
  code: string
  trade_date: string
  status: DealStatus
  proposed_to: DealProposedTo
  sense: DealSense
  volume: number
  fixed_price: number
  is_billing: DealBilling
  is_deleted: boolean
  created_at: string
  updated_at: string
}

export type User = {
  id: string
  username: string
  groups: number[]
  is_staff: boolean
}

export type Principal = {
  id: number
  name: string
  short_name: string
  about?: unknown
}

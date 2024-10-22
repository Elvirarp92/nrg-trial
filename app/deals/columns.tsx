'use client'
import { ColumnDef } from '@tanstack/react-table'
type Counterparty = {
  id: number
  name: string
  type: number
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

export const dealsColumns: ColumnDef<TableDeal>[] = [
  {
    accessorKey: 'code',
    header: 'Code',
  },
  {
    accessorKey: 'trade_date',
    header: 'Trade date',
    cell: ({ row }) => {
      const tradeDate: Date = new Date(row.getValue('trade_date'))
      return <span>{tradeDate.toLocaleDateString()}</span>
    },
  },
  {
    accessorKey: 'status',
    header: 'Status',
  },
  {
    accessorKey: 'proposed_to',
    header: 'Proposed to',
  },
  {
    accessorKey: 'sense',
    header: 'Sense',
  },
  {
    accessorKey: 'volume',
    header: 'Volume',
  },
  {
    accessorKey: 'measurement_unit',
    header: 'Measurement unit',
  },
  {
    accessorKey: 'fixed_price',
    header: 'Fixed price',
  },
  {
    accessorKey: 'counterparty',
    header: 'Counterparty',
    cell: ({ row }) => {
      const counterparty: Counterparty = row.getValue('counterparty')
      return <span>{counterparty.name}</span>
    },
  },
  {
    accessorKey: 'commodity_group',
    header: 'Commodity group',
  },
  {
    accessorKey: 'broker',
    header: 'Broker',
  },
]

'use client'
import { ColumnDef } from '@tanstack/react-table'
import Link from 'next/link'
import { Counterparty, TableDeal } from '@/types/apiTypes'

export const dealsColumns: ColumnDef<TableDeal>[] = [
  {
    accessorKey: 'code',
    header: 'Code',
    cell: ({ row }) => {
      const id: string = row.original.id
      const code: string = row.getValue('code')
      return <Link href={`/deals/${id}`}>{code}</Link>
    },
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

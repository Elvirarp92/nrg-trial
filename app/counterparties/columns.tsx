'use client'

import { ColumnDef } from '@tanstack/react-table'
import { Counterparty } from '@/types/apiTypes'
import Link from 'next/link'
import { getCounterpartyTypeLabel } from '@/utils/apiEnumMappingFunctions'

export const counterpartiesColumns: ColumnDef<Counterparty>[] = [
  {
    accessorKey: 'name',
    header: 'Name',
    cell: ({ row }) => {
      const id: number = row.original.id
      const name: string = row.getValue('name')
      return <Link href={`/counterparties/${id}`}>{name}</Link>
    },
  },
  {
    accessorKey: 'type',
    header: 'Type',
    cell: ({ row }) => {
      return <span>{getCounterpartyTypeLabel(row.getValue('type'))}</span>
    },
  },
]

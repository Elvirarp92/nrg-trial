'use client'

import { ColumnDef } from '@tanstack/react-table'
import { Counterparty } from '@/types/apiTypes'
import { getCounterpartyTypeLabel } from '@/utils/apiEnumMappingFunctions'

export const counterpartiesColumns: ColumnDef<Counterparty>[] = [
  {
    accessorKey: 'name',
    header: 'Name',
  },
  {
    accessorKey: 'type',
    header: 'Type',
    cell: ({ row }) => {
      return <span>{getCounterpartyTypeLabel(row.getValue('type'))}</span>
    },
  },
]

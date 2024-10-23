'use client'
import { ColumnDef } from '@tanstack/react-table'
import { Principal } from '@/types/apiTypes'

export const principalsColumns: ColumnDef<Principal>[] = [
  {
    accessorKey: 'short_name',
    header: 'Short name',
  },
  {
    accessorKey: 'name',
    header: 'Name',
  },
]

'use client'
import { ColumnDef } from '@tanstack/react-table'
import { User } from '@/types/apiTypes'

export const usersColumns: ColumnDef<User>[] = [
  {
    accessorKey: 'username',
    header: 'Username',
  },
  {
    accessorKey: 'is_staff',
    header: 'Staff',
    cell: ({ row }) => {
      return <span>{row.getValue('is_staff') ? 'Yes' : 'No'}</span>
    },
  },
]

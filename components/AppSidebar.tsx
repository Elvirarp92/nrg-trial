import { Handshake, Users } from 'lucide-react'

import {
  Sidebar,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarHeader,
  SidebarSeparator,
} from '@/components/ui/sidebar'
import Link from 'next/link'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'

const pages = [
  { name: 'Deals', url: 'deals', isStaff: false, icon: Handshake },
  { name: 'Users', url: 'users', isStaff: true, icon: Users },
]

export async function AppSidebar() {
  const session = await getServerSession(authOptions)
  const links = pages
    .filter((page) => {
      if (session?.isStaff) return true

      return !page.isStaff
    })
    .map((page) => (
      <SidebarMenuItem key={page.name}>
        <SidebarMenuButton asChild>
          <Link
            href={page.url}
            data-cy={page.name}
          >
            <page.icon />
            <span>{page.name}</span>
          </Link>
        </SidebarMenuButton>
      </SidebarMenuItem>
    ))

  return (
    <Sidebar>
      <SidebarHeader>Links</SidebarHeader>
      <SidebarSeparator />
      <SidebarContent>
        <nav>
          <SidebarMenu>{links}</SidebarMenu>
        </nav>
      </SidebarContent>
    </Sidebar>
  )
}

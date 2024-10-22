import type { Metadata } from 'next'
import Link from 'next/link'
import SignOutButton from '@/components/SignOutButton'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'

export const metadata: Metadata = {
  title: 'NRG Deal Manager',
  description: 'NRG Consulting Technical Challenge',
}

const pages = [
  { name: 'Deals', url: 'deals', isStaff: false },
  { name: 'Users', url: 'users', isStaff: true },
]

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const session = await getServerSession(authOptions)
  const links = pages
    .filter((page) => {
      if (session?.isStaff) return true

      return !page.isStaff
    })
    .map((page) => (
      <Link
        href={page.url}
        key={page.name}
        data-cy={page.name}
      >
        {page.name}
      </Link>
    ))

  return (
    <html lang='en'>
      <body>
        <nav>
          <Link href='/'>NRG Deal Manager</Link>
          <SignOutButton />
        </nav>
        <aside>
          <nav data-cy='link-bar'>{links}</nav>
        </aside>
        <main>{children}</main>
      </body>
    </html>
  )
}

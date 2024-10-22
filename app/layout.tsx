import type { Metadata } from 'next'
import { SidebarProvider } from '@/components/ui/sidebar'

import { AppSidebar } from '@/components/AppSidebar'
import { AppHeader } from '@/components/AppHeader'

import './globals.css'

export const metadata: Metadata = {
  title: 'NRG Deal Manager',
  description: 'NRG Consulting Technical Challenge',
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body>
        <SidebarProvider>
          <AppSidebar />
          <div id='app-container'>
            <AppHeader />
            <main>
              <div>{children}</div>
            </main>
          </div>
        </SidebarProvider>
      </body>
    </html>
  )
}

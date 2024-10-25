import type { Metadata } from 'next'
import { SidebarProvider } from '@/components/ui/sidebar'
import { ThemeProvider } from '@/components/ThemeProvider'
import { AppSidebar } from '@/components/AppSidebar'
import { AppHeader } from '@/components/AppHeader'
import { Toaster } from '@/components/ui/toaster'

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
    <html
      lang='en'
      suppressHydrationWarning
    >
      <body>
        <ThemeProvider
          attribute='class'
          defaultTheme='light'
          disableTransitionOnChange
        >
          <SidebarProvider>
            <AppSidebar />
            <div id='app-container'>
              <AppHeader />
              <main>
                <div>{children}</div>
              </main>
            </div>
          </SidebarProvider>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}

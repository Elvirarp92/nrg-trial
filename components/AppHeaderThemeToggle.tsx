'use client'
import { useTheme } from 'next-themes'
import { useState, useEffect } from 'react'
import { Sun, Moon } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function AppHeaderThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  const handleThemeToggle = () => {
    if (theme === 'light') setTheme('dark')
    else if (theme === 'dark') setTheme('light')
  }

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <Button
      className='h-7 w-7'
      variant='ghost'
      size='icon'
      onClick={handleThemeToggle}
    >
      {theme === 'dark' ? <Sun /> : <Moon />}
    </Button>
  )
}

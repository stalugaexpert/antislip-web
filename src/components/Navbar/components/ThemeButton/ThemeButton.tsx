import { AnimatePresence } from 'framer-motion'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

import { MoonIcon } from '../MoonIcon'
import { SunIcon } from '../SunIcon'

export const ThemeButton = () => {
  const [mounted, setMounted] = useState(false)
  const { systemTheme, theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const currentTheme = theme === 'system' ? systemTheme : theme

  return (
    <AnimatePresence>
      <button
        aria-label="change theme"
        className="ml-2 p-3"
        onClick={() => setTheme(currentTheme === 'light' ? 'dark' : 'light')}
      >
        {currentTheme === 'dark' ? <MoonIcon /> : <SunIcon />}
      </button>
    </AnimatePresence>
  )
}

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

import { MoonIcon } from "../MoonIcon"
import { SunIcon } from "../SunIcon"

export const ThemeButton = () => {
  const { systemTheme, theme, setTheme } = useTheme()
  const [currentTheme, setCurrentTheme] = useState<string>('light')

  useEffect(() => {
    if (theme && systemTheme) {
      setCurrentTheme(theme === 'system' ? systemTheme : theme)
    }
  }, [theme, systemTheme])

  return (
    <button
      className="ml-2 p-3"
      onClick={() => setTheme(currentTheme === 'light' ? 'dark' : 'light')}
    >
      { currentTheme === 'dark' ? <MoonIcon /> : <SunIcon />}
    </button>
  )
}

import React, { PropsWithChildren, useEffect, useState } from "react"

import ThemeContext, { initialThemeState } from "./ThemeContext"

const ThemeProvider = ({ children }: PropsWithChildren) => {
  const [theme, setTheme] = useState(initialThemeState.theme)

  useEffect(() => {
    const savedThemeLocal = window.localStorage.getItem("globalTheme")

    if (!!savedThemeLocal) {
      setTheme(savedThemeLocal)
    }
  }, [])

  useEffect(() => {
    window.localStorage.setItem("globalTheme", theme)
  }, [theme])

  return (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    <ThemeContext.Provider value={{ theme, setTheme } as any}>
      <div className={`theme--${theme}`}>{children}</div>
    </ThemeContext.Provider>
  )
}

export default ThemeProvider

import '@styles/globals.scss'

// import "../styles/index.scss"
import type { AppProps } from 'next/app'
import { appWithTranslation } from 'next-i18next'

import ThemeProvider from "../contexts/ThemeProvider"

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  )}

export default appWithTranslation(MyApp)

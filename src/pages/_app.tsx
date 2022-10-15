import '@styles/globals.css'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import type { AppProps } from 'next/app'
import { appWithTranslation } from 'next-i18next'
import { ThemeProvider } from 'next-themes'

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <ThemeProvider attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  )}

export default appWithTranslation(MyApp)

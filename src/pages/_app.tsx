import '@styles/globals.css'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import type { AppProps } from 'next/app'
import { appWithTranslation } from 'next-i18next'
import { ThemeProvider } from 'next-themes'
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3"

import { SITE_KEY } from '../config/config'

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <GoogleReCaptchaProvider
      reCaptchaKey={SITE_KEY as string}
      scriptProps={{
        async: false,
        defer: false,
        appendTo: "head",
        nonce: undefined,
      }}
    >
      <ThemeProvider attribute="class">
        <Component {...pageProps} />
      </ThemeProvider>
    </GoogleReCaptchaProvider>
  )}

export default appWithTranslation(MyApp)

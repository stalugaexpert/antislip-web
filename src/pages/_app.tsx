import '@styles/globals.css'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import type { AppProps } from 'next/app'
import Head from 'next/head'
import Script from 'next/script'
import { appWithTranslation } from 'next-i18next'
import { ThemeProvider } from 'next-themes'
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3"

import { GA_TRACKING_ID, SITE_KEY } from '../config/config'

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
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${(GA_TRACKING_ID) as string}`}
          strategy="afterInteractive"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
        >
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${GA_TRACKING_ID}' );
        `}
        </Script>
        <Head>
          <meta
            content="crMEVcBj01zmkWJcPT-8ytQqu3WitPnoJJ11FOKpecg"
            name="google-site-verification"
          />
          <meta
            content="width=device-width, initial-scale=1.0"
            name="viewport"
          />
          <link
            href="/favicon/apple-touch-icon.png"
            rel="apple-touch-icon"
            sizes="180x180"
          />
          <link
            href="/favicon/favicon-32x32.png"
            rel="icon"
            sizes="32x32"
            type="image/png"
          />
          <link
            href="/favicon/favicon-16x16.png"
            rel="icon"
            sizes="16x16"
            type="image/png"
          />
          <link
            href="/favicon/site.webmanifest"
            rel="manifest"
          />
          <link
            color="#d97706"
            href="/favicon/safari-pinned-tab.svg"
            rel="mask-icon"
          />
          <link
            href="/favicon/favicon.ico"
            rel="shortcut icon"
          />
          <meta
            content="#da532c"
            name="msapplication-TileColor"
          />
          <meta
            content="/favicon/browserconfig.xml"
            name="msapplication-config"
          />
          <meta
            content="#ffffff"
            name="theme-color"
          />
        </Head>
        <Component {...pageProps} />
      </ThemeProvider>
    </GoogleReCaptchaProvider>
  )}

export default appWithTranslation(MyApp)

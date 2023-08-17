import '@styles/globals.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import { getCookie } from 'cookies-next'
import { AnimatePresence } from 'framer-motion'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import Script from 'next/script'
import { appWithTranslation } from 'next-i18next'
import { ThemeProvider } from 'next-themes'
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3'
import { Toaster } from 'src/components/ui/Toaster'

import { G_TAG_KEY, SITE_KEY } from '../config/config'

// const variants = {
//   out: {
//     opacity: 0,
//     y: 40,
//     transition: {
//       duration: 0.1
//     }
//   },
//   in: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.35,
//       delay: 0.0
//     }
//   }
// }

// const variants = {
//   inactive: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.5,
//       ease: 'easeInOut'
//     },
//   },
//   out: {
//     opacity: 0,
//     y: -100,
//     transition: {
//       duration: 0.5,
//       ease: 'easeInOut'
//     }
//   },
//   in: {
//     y: 100,
//     opacity: 0,
//     transition: {
//       duration: 0.5,
//       ease: 'easeInOut'
//     }
//   },
// }

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  const consent = getCookie('localConsent')

  return (
    <GoogleReCaptchaProvider
      reCaptchaKey={SITE_KEY as string}
      scriptProps={{
        async: false,
        defer: false,
        appendTo: 'head',
        nonce: undefined,
      }}
    >
      <AnimatePresence
        initial={false}
        mode="wait"
      >
        <div
          className="test-animate"
          // animate="inactive"
          // exit="out"
          // initial="in"
          // key={router.route}
          // variants={variants}
        >
          <ThemeProvider attribute="class">
            <Script
              id="gtag"
              strategy="afterInteractive"
            >
              {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
                        
            gtag('consent', 'default', {
              'ad_storage': 'denied',
              'analytics_storage': 'denied'
            });

            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${G_TAG_KEY}');
        `}
            </Script>
            {consent === true && (
              <Script
                id="consupd"
                strategy="afterInteractive"
              >
                {`
              gtag('consent', 'update', {
                'ad_storage': 'granted',
                'analytics_storage': 'granted'
              });
          `}
              </Script>
            )}
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
            <Toaster />
          </ThemeProvider>
        </div>
      </AnimatePresence>
    </GoogleReCaptchaProvider>
  )
}

export default appWithTranslation(MyApp)

import { hasCookie, setCookie } from 'cookies-next'
import Link from 'next/link'
import { useTranslation } from 'next-i18next'
import { useEffect, useState } from 'react'

export const CookiesConsent = () => {
  const { t } = useTranslation()

  const [consent, setConsent] = useState(true)
  useEffect(() => {
    setConsent(hasCookie('localConsent'))
  }, [])

  const acceptCookie = () => {
    setConsent(true)
    setCookie('localConsent', 'true', { maxAge: 60 * 60 * 24 * 365 })
    // eslint-disable-next-line no-undef
    gtag('consent', 'update', {
      ad_storage: 'granted',
      analytics_storage: 'granted',
    })
  }

  const closeP = () => {
    setConsent(true)
  }

  const denyCookie = () => {
    setConsent(true)
    setCookie('localConsent', 'false', { maxAge: 60 * 60 * 24 * 365 })
  }

  if (consent === true) {
    return null
  }

  return (
    <div
      aria-hidden={consent ? true : false}
      className={`h-modal fixed bottom-0 right-0 z-50 h-full w-full overflow-y-auto overflow-x-hidden p-4 backdrop-blur ${
        consent ? 'hidden' : ''
      }`}
    >
      <div className="absolute bottom-0 right-0 m-4 h-fit max-w-2xl about-md:top-2/4 about-md:left-2/4 about-md:m-0 about-md:w-full about-md:-translate-x-2/4 about-md:-translate-y-2/4 about-md:p-8">
        <div className="relative rounded-lg bg-white shadow dark:bg-gray-700">
          <div className="flex items-center justify-between rounded-t border-b p-4 dark:border-gray-600">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white about-md:text-base">
              {t('cookies:title')}
            </h3>
            <button
              className="ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-toggle="staticModal"
              type="button"
              onClick={closeP}
            >
              <svg
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  clipRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  fillRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div className="space-y-6 p-6 text-justify">
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400 about-md:text-sm">
              {t('cookies:descriptionTop')}
            </p>
            <div>
              <p className="inline text-base leading-relaxed text-gray-500 dark:text-gray-400 about-md:text-sm">
                {t('cookies:descriptionBottom')}
              </p>
              <Link href="/privacy-policy">
                <a className="inline text-base font-semibold text-amber400 duration-300 hover:opacity-75 about-md:text-sm">
                  {t('cookies:privacyPolicy')}
                </a>
              </Link>
            </div>
          </div>
          <div className="flex items-center space-x-2 rounded-b border-t border-gray-200 p-6 dark:border-gray-600">
            <button
              className="rounded-lg bg-amber600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-amber400 focus:outline-none focus:ring-4 focus:ring-neutral300 dark:bg-amber600 dark:hover:bg-amber400 dark:focus:ring-neutral300"
              data-modal-toggle="staticModal"
              type="button"
              onClick={acceptCookie}
            >
              {t('cookies:button.accept')}
            </button>
            <button
              className="rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-900 focus:z-10 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:border-gray-500 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-600"
              data-modal-toggle="staticModal"
              type="button"
              onClick={denyCookie}
            >
              {t('cookies:button.decline')}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

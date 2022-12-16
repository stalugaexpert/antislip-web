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
      aria-hidden={ consent ? true : false }
      className={`fixed backdrop-blur bottom-0 right-0 w-full h-full z-50 p-4 overflow-x-hidden overflow-y-auto h-modal ${
        consent ? 'hidden' : ''
      }`}
    >
      <div className="absolute bottom-0 right-0 m-4 max-w-2xl h-fit about-md:m-0 about-md:p-8 about-md:w-full about-md:top-2/4 about-md:left-2/4 about-md:-translate-x-2/4 about-md:-translate-y-2/4">
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <div className="flex items-center justify-between p-4 border-b rounded-t dark:border-gray-600">
            <h3 className="text-xl about-md:text-base font-semibold text-gray-900 dark:text-white">
              {t('cookies:title')}
            </h3>
            <button
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-toggle="staticModal"
              type="button"
              onClick={closeP}
            >
              <svg
                className="w-5 h-5"
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
          <div className="p-6 space-y-6 text-justify">
            <p className="text-base leading-relaxed about-md:text-sm text-gray-500 dark:text-gray-400">
              {t('cookies:descriptionTop')}
            </p>
            <div>
              <p className="text-base leading-relaxed inline about-md:text-sm text-gray-500 dark:text-gray-400">
                {t('cookies:descriptionBottom')}
              </p>
              <Link href="/privacy-policy">
                <a className='font-semibold inline text-base about-md:text-sm text-amber400 duration-300 hover:opacity-75'>{t('cookies:privacyPolicy')}</a>
              </Link>
            </div>
          </div>
          <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
            <button
              className="text-white bg-amber600 hover:bg-amber400 focus:ring-4 focus:outline-none focus:ring-neutral300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-amber600 dark:hover:bg-amber400 dark:focus:ring-neutral300"
              data-modal-toggle="staticModal"
              type="button"
              onClick={acceptCookie}
            >
              {t('cookies:button.accept')}
            </button>
            <button
              className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
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

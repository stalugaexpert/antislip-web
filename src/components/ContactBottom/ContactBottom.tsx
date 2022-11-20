import { useTranslation } from "next-i18next"

export const ContactBottom = () => {
  const { t } = useTranslation()

  return (
    <section className='px-24 max-w-screen-2xl mx-auto mb-20 h-fit services-xs:mb-12 services-xs:px-14 about-sm:px-10 about-xsm:px-6'>
      <div>
        <div className="flex items-center justify-center flex-col gap-4 mb-12">
          <h5 className='text-base text-center about-md:text-sm font-semibold text-amber600'>{t('contact-page:contactUs')}</h5>
          <h2 className='text-4xl text-center about-md:text-3xl about-xsm:text-xl font-semibold text-neutral800 dark:text-neutral50'>{t('contact-page:contactTitle')}</h2>
          <h2 className='text-lg text-center about-xsm:text-base font-normal text-neutral700 dark:text-neutral200'>{t('contact-page:contactDescription')}</h2>
        </div>
        <div className="flex contact-sm:flex-wrap items-center justify-around gap-12">
          <div className="max-w-[280px] flex flex-col items-center gap-4 w-1/3 contact-sm:w-full min-h-[220px] justify-between contact-sm:min-h-0">
            <a
              aria-label={t('contact-page:mailDescriptionLink')}
              href="mailto:office@e-nubes.com"
            >
              <div className="p-3 relative w-fit h-fit rounded-full bg-amber600 duration-300 hover:opacity-75 hover:translate-y-[2px]">
                <svg
                  className="w-8 h-8 text-neutral50"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </a>
            <h5 className='text-lg text-center about-xsm:text-base font-semibold text-neutral800 dark:text-neutral50'>{t('contact-page:email')}</h5>
            <p className="text-base text-center about-xsm:text-sm font-normal text-neutral700 dark:text-neutral200">{t('contact-page:emailDescription')}</p>
            <a
              className="text-base text-center about-xsm:text-sm font-normal text-amber600 duration-300 hover:opacity-75 hover:translate-y-[1px]"
              href="mailto:office@e-nubes.com"
            >
              office@e-nubes.com
            </a>
          </div>

          <div className="max-w-[280px] flex flex-col items-center gap-4 w-1/3 contact-sm:w-full min-h-[220px] justify-between contact-sm:min-h-0">
            <a
              aria-label={t('contact-page:phoneDescriptionLink')}
              href="tel:+48882186624"
            >
              <div className="p-3.5 relative w-fit h-fit rounded-full bg-amber600 duration-300 hover:opacity-75 hover:translate-y-[2px]">
                <svg
                  className="w-7 h-7 text-neutral50"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </a>
            <h5 className='text-lg text-center about-xsm:text-base font-semibold text-neutral800 dark:text-neutral50'>{t('contact-page:phone')}</h5>
            <p className="text-base text-center about-xsm:text-sm font-normal text-neutral700 dark:text-neutral200">{t('contact-page:phoneDescription')}</p>
            <p className="text-base text-center about-xsm:text-sm font-normal text-neutral700 dark:text-neutral200">{t('contact-page:phoneDescriptionBottom')}</p>
            <a
              className="text-base text-center about-xsm:text-sm font-normal text-amber600 duration-300 hover:opacity-75 hover:translate-y-[1px]"
              href="tel:+48882186624"
            >
              +48 882 186 624
            </a>
          </div>

          <div className="max-w-[280px] flex flex-col gap-4 items-center w-1/3 contact-sm:w-full min-h-[220px] justify-between contact-sm:min-h-0">
            <a
              aria-label={t('contact-page:officeDescriptionLink')}
              href="https://g.page/impregnaty-bc?share"
              rel="noreferrer"
              target="_blank"
            >
              <div className="p-3 relative w-fit h-fit rounded-full bg-amber600 duration-300 hover:opacity-75 hover:translate-y-[2px]">
                <svg
                  className="w-8 h-8 text-neutral50"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </a>
            <h5 className='text-lg text-center about-xsm:text-base font-semibold text-neutral800 dark:text-neutral50'>{t('contact-page:office')}</h5>
            <p className="text-base text-center about-xsm:text-sm font-normal text-neutral700 dark:text-neutral200">{t('contact-page:officeDescription')}</p>
            <a
              className="text-base text-center about-xsm:text-sm font-normal text-amber600 duration-300 hover:opacity-75 hover:translate-y-[1px]"
              href="https://g.page/impregnaty-bc?share"
              rel="noreferrer"
              target="_blank"
            >
              64-930 Dolaszewo, Wierzbowa 22
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

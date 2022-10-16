import Image from 'next/image'
import Link from 'next/link'
import { useTranslation } from 'next-i18next'

export const HeroSection = () => {
  const { t } = useTranslation()

  return (
    <section className='px-36 pt-32 navbar-md:pt-24 max-w-screen-2xl mx-auto mb-20 services-xs:mb-12 services-sm:pl-24 services-sm:pr-[8rem] services-xs:pl-14 about-md:pr-14 about-sm:px-10 about-xsm:px-6'>
      <h5 className='text-base about-md:text-sm font-semibold text-amber400 mb-6'>{t('hero:technology')}</h5>
      <div className='mb-8'>
        <h2 className='text-4xl about-md:text-3xl about-xsm:text-2xl font-semibold text-neutral800 dark:text-neutral50'>{t('hero:description')}</h2>
        <h2 className='text-4xl about-md:text-3xl about-xsm:text-2xl font-semibold text-neutral800 dark:text-neutral50'>{t('hero:descriptionBottom')}</h2>
      </div>
      <div className='relative h-[31.2rem] about-md:h-[30vh] w-full'>
        <Image
          alt={t('hero:imageAlt')}
          layout="fill"
          objectFit='cover'
          src="/images/hero-image.png"
        />
        <div className='absolute about-md:hidden p-10 bg-neutral50 dark:bg-neutral700 max-w-[25rem] -right-24 top-2/4 -translate-y-2/4'>
          <p className='text-sm font-normal text-neutral700 dark:text-neutral200 mb-4'>{t('hero:stats')}</p>
          <Link href="">
            <a>
              <div className='flex items-center gap-2 text-neutral700 dark:text-neutral100 duration-300 hover:opacity-70 hover:translate-x-1'>
                <svg
                  className="w-3 h-3"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className='text-xs font-semibold text-neutral700 dark:text-neutral100'>{t('hero:button')}</span>
              </div>
            </a>
          </Link>
        </div>
      </div>
      <div className='hidden about-md:block p-6 bg-neutral50 dark:bg-neutral700 max-w-full'>
        <p className='text-sm font-normal text-neutral700 dark:text-neutral200 mb-4'>{t('hero:stats')}</p>
        <Link href="">
          <a>
            <div className='flex items-center gap-2 text-neutral700 dark:text-neutral100 duration-300 hover:opacity-70 hover:translate-x-1'>
              <svg
                className="w-3 h-3"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className='text-xs font-semibold text-neutral700 dark:text-neutral100'>{t('hero:button')}</span>
            </div>
          </a>
        </Link>
      </div>
    </section>
  )
}

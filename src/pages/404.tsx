import { PageLayout } from '@components'
import type { NextPage } from 'next'
import Link from 'next/link'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const NotFound: NextPage = () => {
  const { t } = useTranslation()
  return (
    <PageLayout>
      <section className="py-40 navbar-md:py-24 w-full h-[80vh] flex items-center justify-center px-4">
        <div className='flex h-fit items-center gap-8'>
          <span className='text-amber600 text-5xl recommendations-xsm:text-3xl font-bold'>404</span>
          <div className='h-48 w-[1px] bg-neutral600 dark:bg-neutral300' />
          <div className='flex flex-col gap-6'>
            <span className='font-semibold text-3xl recommendations-xsm:text-xl text-neutral900 dark:text-neutral50'>{t('error:pageNotFound')}</span>
            <span className='text-xl recommendations-xsm:text-base text-neutral600 dark:text-neutral300'>{t('error:tryAnotherUrl')}</span>
            <Link href="/">
              <a>
                <button
                  className="flex cursor-pointer justify-center items-center gap-3 bg-amber600 px-4 py-2.5 mission-sm:p-2 rounded-lg text-neutral50 duration-300 hover:opacity-80 hover:translate-y-1"
                >
                  <span className="text-base font-semibold mission-sm:text-sm">{t('error:homePage')}</span>
                </button>
              </a>
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        'navbar',
        'footer',
        'error',
        'seo',
        'cookies'
      ])),
    },
  }
}

export default NotFound

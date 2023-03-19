import { PageLayout } from '@components'
import type { NextPage } from 'next'
import Link from 'next/link'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const NotFound: NextPage = () => {
  const { t } = useTranslation()
  return (
    <PageLayout>
      <section className="flex h-[80vh] w-full items-center justify-center py-40 px-4 navbar-md:py-24">
        <div className="flex h-fit items-center gap-8">
          <span className="text-5xl font-bold text-amber600 recommendations-xsm:text-3xl">
            404
          </span>
          <div className="h-48 w-[1px] bg-neutral600 dark:bg-neutral300" />
          <div className="flex flex-col gap-6">
            <span className="text-3xl font-semibold text-neutral900 dark:text-neutral50 recommendations-xsm:text-xl">
              {t('error:pageNotFound')}
            </span>
            <span className="text-xl text-neutral600 dark:text-neutral300 recommendations-xsm:text-base">
              {t('error:tryAnotherUrl')}
            </span>
            <Link href="/">
              <a>
                <button className="flex cursor-pointer items-center justify-center gap-3 rounded-lg bg-amber600 px-4 py-2.5 text-neutral50 duration-300 hover:translate-y-1 hover:opacity-80 mission-sm:p-2">
                  <span className="text-base font-semibold mission-sm:text-sm">
                    {t('error:homePage')}
                  </span>
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
        'cookies',
      ])),
    },
  }
}

export default NotFound

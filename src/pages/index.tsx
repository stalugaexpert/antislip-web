import { PageLayout, Recommendations } from '@components'
import type { NextPage } from 'next'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const Home: NextPage = () => {
  const { t } = useTranslation()

  return (
    <PageLayout>
      <div className='flex flex-col items-center justify-center h-screen bg-neutral50 dark:bg-neutral800'>
        <p className='text-4xl mb-5 text-neutral900 dark:text-neutral50'>{t('common:testNamespace')}</p>
      </div>
      <Recommendations />
    </PageLayout>
  )
}

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'navbar', 'footer', 'recommendations'])),
    },
  }
}

export default Home

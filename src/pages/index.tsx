import type { NextPage } from 'next'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { Navbar } from '../components/Navbar'

const Home: NextPage = () => {
  const { t } = useTranslation()

  return (
    <>
      <Navbar />
      <div className='flex flex-col items-center justify-center h-screen bg-neutral50 dark:bg-neutral800'>
        <p className='text-4xl mb-5 text-neutral900 dark:text-neutral50'>{t('common:testNamespace')}</p>
      </div>
    </>
  )
}

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'navbar'])),
    },
  }
}

export default Home

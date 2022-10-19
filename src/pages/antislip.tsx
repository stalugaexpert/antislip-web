import { PageLayout } from '@components'
import type { NextPage } from 'next'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const Home: NextPage = () => {
  const { t } = useTranslation()

  return (
    <PageLayout>
      <div className='flex items-center justify-center w-full h-[100vh]'>Antislip</div>
    </PageLayout>
  )
}

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['navbar', 'footer'])),
    },
  }
}

export default Home

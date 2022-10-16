import { AboutUs, HeroSection, OurServices, PageLayout, Recommendations, TrustedBy } from '@components'
import type { NextPage } from 'next'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const Home: NextPage = () => {
  const { t } = useTranslation()

  return (
    <PageLayout>
      <HeroSection />
      <OurServices />
      <AboutUs />
      <Recommendations />
      <TrustedBy />
    </PageLayout>
  )
}

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'navbar', 'footer', 'recommendations', 'about', 'services', 'hero'])),
    },
  }
}

export default Home

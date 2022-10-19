import { PageLayout } from '@components'
import type { NextPage } from 'next'
import Image from 'next/image'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const Home: NextPage = () => {
  const { t } = useTranslation()

  return (
    <PageLayout>
      <section className='px-36 pt-32 navbar-md:pt-24 max-w-screen-2xl mx-auto mb-20 services-xs:mb-12 services-sm:pl-24 services-sm:pr-[8rem] services-xs:pl-14 about-md:pr-14 about-sm:px-10 about-xsm:px-6'>
        <h5 className='text-base about-md:text-sm font-semibold text-amber400 mb-6'>{t('knowledge:knowledge')}</h5>
        <div className='mb-8'>
          <h2 className='text-4xl about-md:text-3xl about-xsm:text-2xl font-semibold text-neutral800 dark:text-neutral50'>{t('knowledge:description')}</h2>
          <h2 className='text-4xl about-md:text-3xl about-xsm:text-2xl font-semibold text-neutral800 dark:text-neutral50'>{t('knowledge:descriptionBottom')}</h2>
        </div>
        <div className='relative h-[31.2rem] about-md:h-[30vh] w-full'>
          <Image
            alt=""
            layout="fill"
            objectFit='cover'
            src="/images/knowledge-hero.jpg"
          />
        </div>
      </section>
      <section>
        <section>
          test
        </section>
      </section>
    </PageLayout>
  )
}

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['navbar', 'footer', 'knowledge'])),
    },
  }
}

export default Home

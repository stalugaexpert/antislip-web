/* eslint-disable @typescript-eslint/no-explicit-any */
import { PageLayout, Seo } from '@components'
import DOMPurify from 'isomorphic-dompurify'
import type { NextPage } from 'next'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { fetchSingleContentData } from 'src/utils/api/service'

const PrivacyPolicy: NextPage = ({ content }: any) => {
  const { t } = useTranslation()

  return (
    <PageLayout>
      <Seo
        description={t('seo:privacyPolicy.metaDescription')}
        title={t('seo:privacyPolicy.title')}
      />
      <section className="mx-auto mb-12 max-w-screen-2xl px-24 pt-32 navbar-md:pt-24 services-xs:mb-12 services-xs:px-14 about-sm:px-10 about-xsm:px-6">
        <div
          className="ck-content"
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(content.data.attributes.content),
          }}
        />
      </section>
    </PageLayout>
  )
}

export async function getStaticProps({ locale }: { locale: string }) {
  const localization = locale === 'pl' ? 'pl-PL' : 'en'
  const res = await fetchSingleContentData(localization, 'privacy-policy')

  return {
    props: {
      ...(await serverSideTranslations(locale, [
        'navbar',
        'footer',
        'seo',
        'cookies',
      ])),
      content: await res.json(),
    },
  }
}

export default PrivacyPolicy

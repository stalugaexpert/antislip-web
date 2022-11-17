/* eslint-disable @typescript-eslint/no-explicit-any */
import { PageLayout } from '@components'
import DOMPurify from 'isomorphic-dompurify'
import type { NextPage } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { fetchSingleContentData } from 'src/utils/api/service'

const Rodo: NextPage = ({ content }: any) => {
  return (
    <PageLayout>
      <section className="px-24 pt-32 navbar-md:pt-24 max-w-screen-2xl mx-auto mb-12 services-xs:mb-12 services-xs:px-14 about-sm:px-10 about-xsm:px-6">
        <div
          className='ck-content'
          dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(content.data.attributes.content) }}
        />
      </section>
    </PageLayout>
  )
}

export async function getStaticProps({ locale }: { locale: string }) {
  const localization = locale === 'pl' ? 'pl-PL' : 'en'
  const res = await fetchSingleContentData(localization, 'rodo')

  return {
    props: {
      ...(await serverSideTranslations(locale, [
        'navbar',
        'footer',
      ])),
      content: await res.json()
    },
  }
}

export default Rodo

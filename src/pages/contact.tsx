import { ContactLong, PageLayout, Seo } from '@components'
import type { NextPage } from 'next'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { ContactBottom } from 'src/components/ContactBottom'

const Contact: NextPage = () => {
  const { t } = useTranslation()
  return (
    <PageLayout>
      <Seo
        description={t('seo:contact.metaDescription')}
        title={t('seo:contact.title')}
      />
      <section className="pt-40 navbar-md:pt-24">
        <ContactLong />
      </section>
      <ContactBottom />
    </PageLayout>
  )
}

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        'navbar',
        'footer',
        'contact',
        'contact-page',
        'seo',
        'cookies',
      ])),
    },
  }
}

export default Contact

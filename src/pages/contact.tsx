import { PageLayout } from '@components'
import type { NextPage } from 'next'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { ContactBottom } from 'src/components/ContactBottom'

const Contact: NextPage = () => {
  const { t } = useTranslation()

  return (
    <PageLayout>
      <section className='pt-32 navbar-md:pt-24'>
      </section>
      <ContactBottom />
    </PageLayout>
  )
}

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['navbar', 'footer', 'contact', 'contact-page'])),
    },
  }
}

export default Contact

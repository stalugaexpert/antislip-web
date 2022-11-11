import { ContactLong, PageLayout } from '@components'
import type { NextPage } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { ContactBottom } from 'src/components/ContactBottom'

const Contact: NextPage = () => {
  return (
    <PageLayout>
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
      ])),
    },
  }
}

export default Contact

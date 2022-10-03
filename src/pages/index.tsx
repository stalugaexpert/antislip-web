import styles from '@styles/index.module.scss'
// import styles from '@styles/abstracts/test.module.scss'
import type { NextPage } from 'next'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const Home: NextPage = () => {
  const { t } = useTranslation()
  console.log(styles)

  return (
    // <div className={styles.HomePage}>
    //   <p>{t('common:testNamespace')}</p>
    // </div>
    <div className={`${styles.myClass}`}>
      <p>{t('common:testNamespace')}</p>
    </div>
  )
}

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  }
}

export default Home

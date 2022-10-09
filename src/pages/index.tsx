import type { NextPage } from 'next'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTheme } from 'next-themes'

const Home: NextPage = () => {
  const { t } = useTranslation()
  const { systemTheme, theme, setTheme } = useTheme()
  const currentTheme = theme === 'system' ? systemTheme : theme

  return (
    <div className='flex flex-col items-center justify-center h-screen bg-neutral50 dark:bg-neutral900'>
      <p className='text-4xl mb-5 text-neutral900 dark:text-neutral50'>{t('common:testNamespace')}</p>
      <button
        className='py-3 px-4 rounded-3xl bg-neutral900 dark:bg-neutral50 text-neutral50 dark:text-neutral900'
        onClick={() => setTheme(currentTheme === 'light' ? 'dark' : 'light')}
      >
        {t('common:changeTheme')}
      </button>
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

import {
  AboutUs,
  BlogSection,
  ContactShort,
  HeroSection,
  OurMission,
  OurRealizationsHero,
  OurServices,
  PageLayout,
  Recommendations,
  Seo,
  TrustedBy,
} from '@components'
import type { NextPage } from 'next'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { fetchAllBlogPosts, fetchAllRealizations } from 'src/utils/api/service'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Home: NextPage = ({ blogPostsAll, ourRealizationsAll }: any) => {
  const { t } = useTranslation()

  return (
    <>
      <Seo
        description={t('seo:home.metaDescription')}
        title={t('seo:home.title')}
      />
      <PageLayout>
        <HeroSection />
        <OurServices />
        <AboutUs />
        { ourRealizationsAll.data && <OurRealizationsHero ourRealizationsAll={ourRealizationsAll} /> }
        <OurMission />
        { blogPostsAll.data && (
          <BlogSection
            blogPostsAll={blogPostsAll}
            subtitle={t('blog:checkOurBlog')}
            title={t('blog:wantMore')}
          />
        ) }
        <Recommendations />
        <TrustedBy />
        <ContactShort />
      </PageLayout>
    </>
  )
}

export async function getStaticProps({ locale }: { locale: string }) {
  const localization = locale === 'pl' ? 'pl-PL' : 'en'
  const resBlogPostsAll = await fetchAllBlogPosts(localization)
  const resOurRealizationsAll = await fetchAllRealizations(localization)

  return {
    props: {
      ...(await serverSideTranslations(locale, [
        'common',
        'navbar',
        'footer',
        'recommendations',
        'mission',
        'about',
        'services',
        'hero',
        'contact',
        'realizations',
        'blog',
        'seo',
        'cookies'
      ])),
      blogPostsAll : await resBlogPostsAll.json(),
      ourRealizationsAll: await resOurRealizationsAll.json(),
    },
  }
}

export default Home

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
import {
  BlogPostsQuery,
  OurRealizationsQuery,
} from 'src/graphql/generated/graphql'
import {
  getAllBlogPosts,
  getAllRealizations,
} from 'src/utils/requests/requests'

interface IHomePageProps {
  blogPostsAll: BlogPostsQuery
  ourRealizationsAll: OurRealizationsQuery
}

const Home: NextPage<IHomePageProps> = ({
  blogPostsAll,
  ourRealizationsAll,
}) => {
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
        {ourRealizationsAll.ourRealizations?.data && (
          <OurRealizationsHero ourRealizationsAll={ourRealizationsAll} />
        )}
        <OurMission />
        {blogPostsAll.blogs?.data && (
          <BlogSection
            blogPostsAll={blogPostsAll}
            subtitle={t('blog:checkOurBlog')}
            title={t('blog:wantMore')}
          />
        )}
        <Recommendations />
        <TrustedBy />
        <ContactShort />
      </PageLayout>
    </>
  )
}

export async function getStaticProps({ locale }: { locale: string }) {
  const localization = locale === 'pl' ? 'pl-PL' : 'en'

  const blogPostsAll = await getAllBlogPosts(localization)

  const ourRealizationsAll = await getAllRealizations(localization)

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
        'cookies',
      ])),
      blogPostsAll,
      ourRealizationsAll,
    },
  }
}

export default Home

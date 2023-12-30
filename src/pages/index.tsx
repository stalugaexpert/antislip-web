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
  RecommendationsQuery,
} from 'src/graphql/generated/graphql'
import {
  getAllBlogPosts,
  getAllRealizations,
  getAllRecommendations,
} from 'src/utils/requests/requests'

interface IHomePageProps {
  blogPostsAll: BlogPostsQuery
  ourRealizationsAll: OurRealizationsQuery
  recommendationsAll: RecommendationsQuery
}

const Home: NextPage<IHomePageProps> = ({
  blogPostsAll,
  ourRealizationsAll,
  recommendationsAll,
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
        {recommendationsAll.recommendations?.data && (
          <Recommendations recommendationsAll={recommendationsAll} />
        )}
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

  const recommendationsAll = await getAllRecommendations(localization)

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
      recommendationsAll,
    },
  }
}

export default Home

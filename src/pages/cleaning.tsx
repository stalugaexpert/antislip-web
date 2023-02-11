import {
  BlogPostsSticky,
  ContactShort,
  HeroPages,
  PageLayout,
  Recommendations,
  Seo,
} from '@components'
import type { NextPage } from 'next'
import Image from 'next/image'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { BlogPostsQuery } from 'src/graphql/generated/graphql'
import { getAllBlogPosts } from 'src/utils/requests/requests'

import cleaningHero from '../../public/images/cleaning-hero.jpg'
import cleaningImage from '../../public/images/cleaning-image-1.jpg'

interface ICleaningPageProps {
  blogPostsAll: BlogPostsQuery
}

const Cleaning: NextPage<ICleaningPageProps> = ({ blogPostsAll }) => {
  const { t } = useTranslation()

  const cleaningAboutItems = [
    t('cleaning:cleaningAboutItems.first'),
    t('cleaning:cleaningAboutItems.second'),
    t('cleaning:cleaningAboutItems.third'),
    t('cleaning:cleaningAboutItems.fourth'),
    t('cleaning:cleaningAboutItems.fifth'),
    t('cleaning:cleaningAboutItems.sixth'),
    t('cleaning:cleaningAboutItems.seventh'),
  ]

  return (
    <PageLayout>
      <Seo
        description={t('seo:cleaning.metaDescription')}
        title={t('seo:cleaning.title')}
      />
      <HeroPages
        description={t('cleaning:heroDescription')}
        image={cleaningHero}
        section={t('cleaning:ourServices')}
        title={t('cleaning:cleaningDescription')}
        titleIcon="/icons/clean.png"
      />
      <section className="mx-auto mb-20 h-fit max-w-screen-2xl px-24 services-xs:mb-12 services-xs:px-14 about-sm:px-10 about-xsm:px-6">
        <div className="relative flex justify-between gap-32 about-md:flex-wrap about-md:gap-14">
          <div className="w-[75%] about-md:w-full">
            <section className="mb-10">
              <div className="text-justify">
                <h3 className="mb-3 text-left text-xl font-semibold text-neutral800 dark:text-neutral50 about-md:text-base">
                  {t('cleaning:cleaningWhen')}
                </h3>
                <p className="mb-2 text-base font-normal text-neutral800 dark:text-neutral50 about-md:text-sm">
                  {t('cleaning:cleaningWhenDescription')}
                </p>
                <p className="mb-4 text-base font-normal text-neutral800 dark:text-neutral50 about-md:text-sm">
                  {t('cleaning:cleaningWhenDescriptionBottom')}
                </p>
                <div className="mb-3">
                  <p className="inline text-base font-normal text-neutral800 dark:text-neutral50 about-md:text-sm">
                    {t('cleaning:cleaningWhenDescTop')}
                  </p>
                  <span className="text-base font-semibold text-amber400 about-md:text-sm">
                    {t('cleaning:betterThan')}
                  </span>
                  <p className="inline text-base font-normal text-neutral800 dark:text-neutral50 about-md:text-sm">
                    {t('cleaning:cleaningWhenDescMid')}
                  </p>
                  <span className="text-base font-semibold text-amber400 about-md:text-sm">
                    {t('cleaning:cleaningSlower')}
                  </span>
                  <p className="inline text-base font-normal text-neutral800 dark:text-neutral50 about-md:text-sm">
                    {t('cleaning:cleaningWhenDescBottom')}
                  </p>
                  <span className="text-base font-semibold text-amber400 about-md:text-sm">
                    {t('cleaning:cleaningSecure')}
                  </span>
                  <p className="inline text-base font-normal text-neutral800 dark:text-neutral50 about-md:text-sm">
                    {t('cleaning:cleaningWhenDescBottomBottom')}
                  </p>
                </div>
              </div>
            </section>
            <section className="mb-10">
              <div className="relative h-[50vh] w-full knowledge-md:h-[30vh]">
                <Image
                  alt=""
                  layout="fill"
                  objectFit="cover"
                  placeholder="blur"
                  src={cleaningImage}
                />
              </div>
            </section>
            <section className="mb-10">
              <h3 className="mb-4 text-left text-xl font-semibold text-neutral800 dark:text-neutral50 about-md:text-base">
                {t('cleaning:cleaningAbout')}
              </h3>
              <div className="flex flex-col gap-5">
                {cleaningAboutItems.map((item, index) => (
                  <div
                    className="flex items-center gap-6 text-left"
                    key={index}
                  >
                    <div className="h-6 w-6">
                      <svg
                        className="h-6 w-6"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={1.5}
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <h5 className="text-base font-normal text-neutral800 dark:text-neutral50 about-md:text-sm">
                      {item}
                    </h5>
                  </div>
                ))}
              </div>
            </section>
            <section>
              <h3 className="mb-4 text-left text-xl font-semibold text-amber600 about-md:text-base">
                {t('cleaning:trustUs')}
              </h3>
              <p className="text-base font-normal text-neutral800 dark:text-neutral50 about-md:text-sm">
                {t('cleaning:beforeService')}
              </p>
            </section>
          </div>
          <BlogPostsSticky blogPosts={blogPostsAll} />
        </div>
      </section>
      <Recommendations />
      <ContactShort />
    </PageLayout>
  )
}

export async function getStaticProps({ locale }: { locale: string }) {
  const localization = locale === 'pl' ? 'pl-PL' : 'en'

  const blogPostsAll = await getAllBlogPosts(localization)

  return {
    props: {
      ...(await serverSideTranslations(locale, [
        'navbar',
        'footer',
        'common',
        'recommendations',
        'cleaning',
        'contact',
        'seo',
        'cookies',
      ])),
      blogPostsAll,
    },
  }
}

export default Cleaning

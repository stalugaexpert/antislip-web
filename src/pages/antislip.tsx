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
import Link from 'next/link'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { BlogPostsQuery } from 'src/graphql/generated/graphql'
import { getAllBlogPosts } from 'src/utils/requests/requests'

import antiSlipHero from '../../public/images/antislip-hero.jpg'
import antiSlipHero2 from '../../public/images/antislip-hero-2.jpg'

interface IAntislipPageProps {
  blogPostsAll: BlogPostsQuery
}

const Antislip: NextPage<IAntislipPageProps> = ({ blogPostsAll }) => {
  const { t } = useTranslation()

  const attributesItems = [
    {
      title: t('antislip:attributes.first.title'),
      description: t('antislip:attributes.first.description'),
    },
    {
      title: t('antislip:attributes.second.title'),
      description: t('antislip:attributes.second.description'),
    },
    {
      title: t('antislip:attributes.third.title'),
      description: t('antislip:attributes.third.description'),
    },
    {
      title: t('antislip:attributes.fourth.title'),
      description: t('antislip:attributes.fourth.description'),
    },
  ]

  const attributesTechnology = [
    t('antislip:attributesTechnology.first'),
    t('antislip:attributesTechnology.second'),
    t('antislip:attributesTechnology.third'),
    t('antislip:attributesTechnology.fourth'),
    t('antislip:attributesTechnology.fifth'),
    t('antislip:attributesTechnology.sixth'),
    t('antislip:attributesTechnology.seventh'),
    t('antislip:attributesTechnology.eighth'),
  ]

  return (
    <PageLayout>
      <Seo
        description={t('seo:antislip.metaDescription')}
        title={t('seo:antislip.title')}
      />
      <HeroPages
        description={t('antislip:heroDescription')}
        image={antiSlipHero}
        section={t('antislip:ourServices')}
        title={t('antislip:antislipDescription')}
        titleIcon="/icons/slip.png"
      />
      <section className="mx-auto mb-20 h-fit max-w-screen-2xl px-24 services-xs:mb-12 services-xs:px-14 about-sm:px-10 about-xsm:px-6">
        <div className="relative flex justify-between gap-32 about-md:flex-wrap about-md:gap-14">
          <div className="w-[75%] about-md:w-full">
            <div className="mb-14 flex flex-col gap-8">
              {attributesItems.map((item, index) => (
                <div
                  className="flex flex-col gap-3 text-justify"
                  key={index}
                >
                  <h3 className="text-left text-xl font-semibold text-neutral800 dark:text-neutral50 about-md:text-base">
                    {item.title}
                  </h3>
                  <p className="text-base font-normal text-neutral700 dark:text-neutral200 about-md:text-sm">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
            <section className="mb-14">
              <div className="flex flex-col gap-4 bg-neutral50 p-8 dark:bg-neutral700">
                <h4 className="text-3xl font-semibold text-neutral800 dark:text-neutral50 about-md:text-xl">
                  {t('antislip:zapTechnology')}
                </h4>
                <h5 className="text-base font-normal text-neutral700 dark:text-neutral200">
                  {t('antislip:zapDetails')}
                </h5>
                <h5 className="text-base font-normal text-neutral700 dark:text-neutral200 about-md:text-sm">
                  {t('antislip:zapCheck')}
                </h5>
              </div>
            </section>
            <section className="mb-10">
              <h3 className="mb-6 text-xl font-semibold text-neutral800 dark:text-neutral50 about-md:text-base">
                {t('antislip:security')}
              </h3>
              <div className="flex flex-col gap-4">
                {attributesTechnology.map((item, index) => (
                  <div
                    className="flex items-center gap-4"
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
                          d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <p className="text-base font-normal text-neutral800 dark:text-neutral50 about-md:text-sm">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </section>
            <div className="relative mb-10 h-[50vh] w-full about-md:h-[30vh]">
              <Image
                alt=""
                layout="fill"
                objectFit="cover"
                placeholder="blur"
                src={antiSlipHero2}
              />
            </div>
            <section className="mb-10 text-justify">
              <div className="mb-10">
                <h3 className="mb-3 text-left text-xl font-semibold text-neutral800 dark:text-neutral50 about-md:text-base">
                  {t('antislip:measurement')}
                </h3>
                <p className="text-base font-normal text-neutral800 dark:text-neutral50 about-md:text-sm">
                  {t('antislip:measurementDescription')}
                </p>
              </div>
              <div>
                <h3 className="mb-3 text-left text-xl font-semibold text-neutral800 dark:text-neutral50 about-md:text-base">
                  {t('antislip:measurementHow')}
                </h3>
                <p className="mb-3 text-base font-normal text-neutral800 dark:text-neutral50 about-md:text-sm">
                  {t('antislip:measurementHowDescription')}
                </p>
                <p className="inline text-base font-normal text-neutral800 dark:text-neutral50 about-md:text-sm">
                  {t('antislip:measurementLink')}
                </p>
                <Link href="/friction-measurement">
                  <a className="text-base font-semibold text-amber400 duration-300 hover:opacity-75 about-md:text-sm">
                    {t('antislip:here')}
                  </a>
                </Link>
              </div>
            </section>
            <section>
              <div className="text-justify">
                <h3 className="mb-3 text-left text-xl font-semibold text-neutral800 dark:text-neutral50 about-md:text-base">
                  {t('antislip:antislipWhen')}
                </h3>
                <p className="mb-2 text-base font-normal text-neutral800 dark:text-neutral50 about-md:text-sm">
                  {t('antislip:antislipWhenDescription')}
                </p>
                <p className="mb-2 text-base font-normal text-neutral800 dark:text-neutral50 about-md:text-sm">
                  {t('antislip:antislipWhenDescriptionBottom')}
                </p>
                <p className="inline text-base font-normal text-neutral800 dark:text-neutral50 about-md:text-sm">
                  {t('antislip:antislipWhenLink')}
                </p>
                <Link href="/knowledge">
                  <a className="text-base font-semibold text-amber400 duration-300 hover:opacity-75 about-md:text-sm">
                    {t('antislip:here')}
                  </a>
                </Link>
              </div>
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
        'antislip',
        'recommendations',
        'contact',
        'seo',
        'cookies',
      ])),
      blogPostsAll,
    },
  }
}

export default Antislip

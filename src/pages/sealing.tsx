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
import { getPlaiceholder } from 'plaiceholder'
import { BlogPostsQuery } from 'src/graphql/generated/graphql'
import { getAllBlogPosts } from 'src/utils/requests/requests'

import sealingHero from '../../public/images/sealing-hero.jpg'
import sealingImage from '../../public/images/sealing-image-1.jpg'
import sealingImageBottom from '../../public/images/sealing-image-3.jpg'

interface ISealingPageProps {
  blogPostsAll: BlogPostsQuery
  gifBlur: string
}

const Sealing: NextPage<ISealingPageProps> = ({ gifBlur, blogPostsAll }) => {
  const { t } = useTranslation()

  const sealingPros = [
    t('sealing:sealingPros.first'),
    t('sealing:sealingPros.second'),
    t('sealing:sealingPros.third'),
    t('sealing:sealingPros.fourth'),
    t('sealing:sealingPros.fifth'),
    t('sealing:sealingPros.sixth'),
    t('sealing:sealingPros.seventh'),
    t('sealing:sealingPros.eighth'),
    t('sealing:sealingPros.ninth'),
    t('sealing:sealingPros.tenth'),
  ]
  const productSelectItems = [
    t('sealing:productSelectItems.first'),
    t('sealing:productSelectItems.second'),
    t('sealing:productSelectItems.third'),
    t('sealing:productSelectItems.fourth'),
    t('sealing:productSelectItems.fifth'),
    t('sealing:productSelectItems.sixth'),
    t('sealing:productSelectItems.seventh'),
  ]

  return (
    <PageLayout>
      <Seo
        description={t('seo:sealing.metaDescription')}
        title={t('seo:sealing.title')}
      />
      <HeroPages
        description={t('sealing:heroDescription')}
        image={sealingHero}
        section={t('sealing:ourServices')}
        title={t('sealing:sealingDescription')}
        titleIcon="/icons/sealer.png"
      />
      <section className="mx-auto mb-20 h-fit max-w-screen-2xl px-24 services-xs:mb-12 services-xs:px-14 about-sm:px-10 about-xsm:px-6">
        <div className="relative flex justify-between gap-32 about-md:flex-wrap about-md:gap-14">
          <div className="w-[75%] about-md:w-full">
            <section className="mb-10">
              <div className="text-justify">
                <h3 className="mb-3 text-left text-xl font-semibold text-neutral800 dark:text-neutral50 about-md:text-base">
                  {t('sealing:whichSurfaces')}
                </h3>
                <p className="mb-2 text-base font-normal text-neutral800 dark:text-neutral50 about-md:text-sm">
                  {t('sealing:whichSurfacesDescription')}
                </p>
                <p className="text-base font-normal text-neutral800 dark:text-neutral50 about-md:text-sm">
                  {t('sealing:whichSurfacesDescriptionBottom')}
                </p>
              </div>
            </section>
            <section className="mb-10">
              <div className="text-justify">
                <h3 className="mb-6 text-left text-xl font-semibold text-neutral800 dark:text-neutral50 about-md:text-base">
                  {t('sealing:sealingProsDescription')}
                </h3>
                <div className="flex flex-col gap-5 text-left">
                  {sealingPros.map((item, index) => (
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
              </div>
            </section>
            <section className="mb-10">
              <div className="relative h-[50vh] w-full knowledge-md:h-[30vh]">
                <Image
                  alt=""
                  layout="fill"
                  objectFit="cover"
                  placeholder="blur"
                  src={sealingImage}
                />
              </div>
            </section>
            <section className="mb-10">
              <div className="mb-6 text-justify">
                <h3 className="mb-6 text-left text-xl font-semibold text-neutral800 dark:text-neutral50 about-md:text-base">
                  {t('sealing:productSelect')}
                </h3>
                <div className="flex flex-col gap-5">
                  {productSelectItems.map((item, index) => (
                    <div
                      className="flex items-center gap-6"
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
              </div>
              <p className="mb-2 inline text-base font-normal text-neutral800 dark:text-neutral50 about-md:text-sm">
                {t('sealing:sealingRecommendations')}
              </p>
              <Link href="/contact">
                <a className="text-left text-base font-semibold text-amber400 duration-300 hover:opacity-75 about-md:text-sm">
                  {t('sealing:here')}
                </a>
              </Link>
            </section>
            <section className="mb-10">
              <div className="relative h-[50vh] w-full knowledge-md:h-[30vh]">
                <Image
                  alt=""
                  blurDataURL={gifBlur}
                  layout="fill"
                  objectFit="cover"
                  placeholder="blur"
                  src="/images/sealing-image-2.gif"
                  unoptimized
                />
              </div>
            </section>
            <section className="mb-6 text-justify">
              <h3 className="mb-4 text-left text-xl font-semibold text-neutral800 dark:text-neutral50 about-md:text-base">
                {t('sealing:sealingBetter')}
              </h3>
              <p className="mb-4 text-base font-normal text-neutral800 dark:text-neutral50 about-md:text-sm">
                {t('sealing:sealingBetterDescription')}
              </p>
              <p className="inline text-base font-normal text-neutral800 dark:text-neutral50 about-md:text-sm">
                {t('sealing:sealingBetterDescriptionMid')}
              </p>
              <span className="text-base font-semibold text-amber400 about-md:text-sm">
                {t('sealing:sealingBetterDescriptionHighlight')}
              </span>
              <p className="inline text-base font-normal text-neutral800 dark:text-neutral50 about-md:text-sm">
                {t('sealing:sealingBetterDescriptionBot')}
              </p>
            </section>
            <section className="mb-10 text-justify">
              <div className="relative h-[50vh] w-full knowledge-md:h-[30vh]">
                <Image
                  alt=""
                  layout="fill"
                  objectFit="cover"
                  placeholder="blur"
                  src={sealingImageBottom}
                />
              </div>
            </section>
            <section className="mb-6 text-justify">
              <h3 className="mb-4 text-left text-xl font-semibold text-neutral800 dark:text-neutral50 about-md:text-base">
                {t('sealing:whatToRecommend')}
              </h3>
              <div className="mb-3">
                <p className="inline text-base font-normal text-neutral800 dark:text-neutral50 about-md:text-sm">
                  {t('sealing:whatToRecommendDescriptionTop')}
                </p>
                <span className="text-base font-semibold text-amber400 about-md:text-sm">
                  {t('sealing:new')}
                </span>
                <p className="inline text-base font-normal text-neutral800 dark:text-neutral50 about-md:text-sm">
                  {t('sealing:whatToRecommendDescriptionMid')}
                </p>
                <span className="text-base font-semibold text-amber400 about-md:text-sm">
                  {t('sealing:old')}
                </span>
                <p className="inline text-base font-normal text-neutral800 dark:text-neutral50 about-md:text-sm">
                  {t('sealing:whatToRecommendDescriptionMidBottom')}
                </p>
                <span className="text-base font-semibold text-amber400 about-md:text-sm">
                  {t('sealing:inside')}
                </span>
                <p className="inline text-base font-normal text-neutral800 dark:text-neutral50 about-md:text-sm">
                  {t('sealing:whatToRecommendDescriptionBottom')}
                </p>
                <span className="text-base font-semibold text-amber400 about-md:text-sm">
                  {t('sealing:outside')}
                </span>
                <p className="inline text-base font-normal text-neutral800 dark:text-neutral50 about-md:text-sm">
                  {t('sealing:whatToRecommendDescriptionBottomBottom')}
                </p>
              </div>
              <p className="mb-3 text-base font-normal text-neutral800 dark:text-neutral50 about-md:text-sm">
                {t('sealing:recommendationsInfo')}
              </p>
              <p className="text-base font-normal text-neutral800 dark:text-neutral50 about-md:text-sm">
                {t('sealing:recommendationsInfoUs')}
              </p>
            </section>
            <section>
              <Link href="/contact">
                <a>
                  <div className="flex w-fit items-center justify-center gap-3 rounded-lg bg-amber600 px-4 py-2.5 uppercase text-neutral50 duration-300 hover:translate-y-1 hover:opacity-80">
                    <svg
                      className="h-5 w-5 about-md:h-4 about-md:w-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={1.5}
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span className="text-base font-semibold about-md:text-sm">
                      {t('sealing:order')}
                    </span>
                  </div>
                </a>
              </Link>
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
  const { base64 } = await getPlaiceholder('/images/sealing-image-2.gif')
  const localization = locale === 'pl' ? 'pl-PL' : 'en'

  const blogPostsAll = await getAllBlogPosts(localization)

  return {
    props: {
      ...(await serverSideTranslations(locale, [
        'navbar',
        'footer',
        'common',
        'recommendations',
        'sealing',
        'contact',
        'seo',
        'cookies',
      ])),
      gifBlur: base64,
      blogPostsAll,
    },
  }
}

export default Sealing

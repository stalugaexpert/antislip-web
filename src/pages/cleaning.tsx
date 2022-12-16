/* eslint-disable @typescript-eslint/no-explicit-any */
import { ContactShort, PageLayout, Recommendations, Seo } from '@components'
import type { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { fetchAllBlogPosts } from 'src/utils/api/service'

import cleaningHero from '../../public/images/cleaning-hero.jpg'
import cleaningImage from '../../public/images/cleaning-image-1.jpg'

const Cleaning: NextPage = ({ blogPosts }: any) => {
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
      <section className="px-24 pt-32 navbar-md:pt-24 max-w-screen-2xl mx-auto mb-12 services-xs:mb-12 services-xs:px-14 about-sm:px-10 about-xsm:px-6">
        <div className="flex justify-between mb-8">
          <div className="w-3/4 recommendations-ds:w-[85%]">
            <h5 className="text-base about-md:text-sm font-semibold text-amber400 mb-4">
              {t('cleaning:ourServices')}
            </h5>
            <h2 className="text-4xl mb-6 about-md:text-3xl about-xsm:text-2xl font-semibold text-neutral800 dark:text-neutral50">
              {t('cleaning:cleaningDescription')}
            </h2>
            <h2 className="text-lg about-xsm:text-base font-normal text-neutral800 dark:text-neutral100">
              {t('cleaning:heroDescription')}
            </h2>
          </div>
          <div className="p-3 about-md:p-2 rounded-md bg-neutral50 dark:bg-neutral200 w-fit h-fit">
            <div className="relative w-[40px] h-[30px] about-md:w-[24px] about-md:h-[18px]">
              <Image
                alt=""
                layout="fill"
                objectFit="cover"
                src="/icons/clean.png"
              />
            </div>
          </div>
        </div>
        <div className="relative h-[31.2rem] about-md:h-[30vh] w-full before:content-[''] before:absolute before:h-48 before:w-48 before:bg-amber400 before:z-10 before:top-0 before:left-full before:-translate-x-full before:-translate-y-2/4 before:blur-[100px] before:opacity-50 dark:before:opacity-30">
          <Image
            alt=""
            layout="fill"
            objectFit="cover"
            placeholder="blur"
            src={cleaningHero}
          />
        </div>
      </section>
      <section className="px-24 max-w-screen-2xl mx-auto mb-20 h-fit services-xs:mb-12 services-xs:px-14 about-sm:px-10 about-xsm:px-6">
        <div className="flex justify-between gap-32 relative about-md:flex-wrap about-md:gap-14">
          <div className="w-[75%] about-md:w-full">
            <section className="mb-10">
              <div className="text-justify">
                <h3 className="font-semibold text-left text-xl about-md:text-base text-neutral800 dark:text-neutral50 mb-3">
                  {t('cleaning:cleaningWhen')}
                </h3>
                <p className="text-base about-md:text-sm font-normal text-neutral800 dark:text-neutral50 mb-2">
                  {t('cleaning:cleaningWhenDescription')}
                </p>
                <p className="text-base about-md:text-sm font-normal text-neutral800 dark:text-neutral50 mb-4">
                  {t('cleaning:cleaningWhenDescriptionBottom')}
                </p>
                <div className="mb-3">
                  <p className="text-base inline about-md:text-sm font-normal text-neutral800 dark:text-neutral50">
                    {t('cleaning:cleaningWhenDescTop')}
                  </p>
                  <span className="font-semibold text-base about-md:text-sm text-amber400">
                    {t('cleaning:betterThan')}
                  </span>
                  <p className="text-base inline about-md:text-sm font-normal text-neutral800 dark:text-neutral50">
                    {t('cleaning:cleaningWhenDescMid')}
                  </p>
                  <span className="font-semibold text-base about-md:text-sm text-amber400">
                    {t('cleaning:cleaningSlower')}
                  </span>
                  <p className="text-base inline about-md:text-sm font-normal text-neutral800 dark:text-neutral50">
                    {t('cleaning:cleaningWhenDescBottom')}
                  </p>
                  <span className="font-semibold text-base about-md:text-sm text-amber400">
                    {t('cleaning:cleaningSecure')}
                  </span>
                  <p className="text-base inline about-md:text-sm font-normal text-neutral800 dark:text-neutral50">
                    {t('cleaning:cleaningWhenDescBottomBottom')}
                  </p>
                </div>
              </div>
            </section>
            <section className="mb-10">
              <div className="relative h-[50vh] knowledge-md:h-[30vh] w-full">
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
              <h3 className="font-semibold text-left text-xl about-md:text-base text-neutral800 dark:text-neutral50 mb-4">
                {t('cleaning:cleaningAbout')}
              </h3>
              <div className="flex flex-col gap-5">
                {cleaningAboutItems.map((item, index) => (
                  <div
                    className="flex items-center gap-6 text-left"
                    key={index}
                  >
                    <div className="w-6 h-6">
                      <svg
                        className="w-6 h-6"
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
                    <h5 className="text-base about-md:text-sm font-normal text-neutral800 dark:text-neutral50">
                      {item}
                    </h5>
                  </div>
                ))}
              </div>
            </section>
            <section>
              <h3 className="font-semibold text-left text-xl about-md:text-base text-amber600 mb-4">
                {t('cleaning:trustUs')}
              </h3>
              <p className="text-base about-md:text-sm font-normal text-neutral800 dark:text-neutral50">
                {t('cleaning:beforeService')}
              </p>
            </section>
          </div>

          <div className="sticky h-fit w-1/4 about-md:static about-md:w-full top-[15%] flex flex-col gap-20 about-md:gap-8">
            <span className="hidden text-xl font-semibold about-md:block">
              {t('cleaning:readMore')}
            </span>
            {blogPosts.data.slice(-2).map((post: any) => (
              <Link
                href={`/blog/${post.attributes.slug}`}
                key={post.id}
              >
                <a>
                  <div className="flex flex-col gap-4 duration-300 hover:opacity-70 hover:translate-y-[2px]">
                    <div className="relative h-[153px] about-md:h-[20vh] w-full">
                      <Image
                        alt=""
                        layout="fill"
                        objectFit="cover"
                        src={`${post.attributes.postImage.data.attributes.formats.small.url}`}
                      />
                    </div>
                    <h5 className="text-sm font-semibold about-md:font-normal text-neutral800 dark:text-neutral50">
                      {post.attributes.title}
                    </h5>
                  </div>
                </a>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <Recommendations />
      <ContactShort />
    </PageLayout>
  )
}

export async function getStaticProps({ locale }: { locale: string }) {
  const localization = locale === 'pl' ? 'pl-PL' : 'en'
  const res = await fetchAllBlogPosts(localization)

  return {
    props: {
      ...(await serverSideTranslations(locale, [
        'navbar',
        'footer',
        'recommendations',
        'cleaning',
        'contact',
        'seo',
        'cookies'
      ])),
      blogPosts: await res.json()
    },
  }
}

export default Cleaning

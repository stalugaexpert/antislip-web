/* eslint-disable @typescript-eslint/no-explicit-any */
import { ContactShort, PageLayout, Recommendations } from '@components'
import type { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { getPlaiceholder } from 'plaiceholder'
import { fetchAllBlogPosts } from 'src/utils/api/service'
import { PlaiceHolderProps } from 'src/utils/types/PlaiceHolderProps'

import sealingHero from '../../public/images/sealing-hero.jpg'
import sealingImage from '../../public/images/sealing-image-1.jpg'
import sealingImageBottom from '../../public/images/sealing-image-3.jpg'

const Sealing: NextPage = ({ sealingGif, blogPosts }: any) => {
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
      <section className="px-24 pt-32 navbar-md:pt-24 max-w-screen-2xl mx-auto mb-12 services-xs:mb-12 services-xs:px-14 about-sm:px-10 about-xsm:px-6">
        <div className="flex justify-between mb-8">
          <div className="w-3/4 recommendations-ds:w-[85%]">
            <h5 className="text-base about-md:text-sm font-semibold text-amber400 mb-4">
              {t('sealing:ourServices')}
            </h5>
            <h2 className="text-4xl mb-6 about-md:text-3xl about-xsm:text-2xl font-semibold text-neutral800 dark:text-neutral50">
              {t('sealing:sealingDescription')}
            </h2>
            <h2 className="text-lg about-xsm:text-base font-normal text-neutral800 dark:text-neutral100">
              {t('sealing:heroDescription')}
            </h2>
          </div>
          <div className="p-3 about-md:p-2 rounded-md bg-neutral50 dark:bg-neutral200 w-fit h-fit">
            <div className="relative w-[38px] h-[38px] about-md:w-[24px] about-md:h-[24px]">
              <Image
                alt=""
                layout="fill"
                objectFit="cover"
                src="/icons/sealer.png"
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
            src={sealingHero}
          />
        </div>
      </section>
      <section className="px-24 max-w-screen-2xl mx-auto mb-20 h-fit services-xs:mb-12 services-xs:px-14 about-sm:px-10 about-xsm:px-6">
        <div className="flex justify-between gap-32 relative about-md:flex-wrap about-md:gap-14">
          <div className="w-[75%] about-md:w-full">
            <section className="mb-10">
              <div className="text-justify">
                <h3 className="font-semibold text-left text-xl about-md:text-base text-neutral800 dark:text-neutral50 mb-3">
                  {t('sealing:whichSurfaces')}
                </h3>
                <p className="text-base about-md:text-sm font-normal text-neutral800 dark:text-neutral50 mb-2">
                  {t('sealing:whichSurfacesDescription')}
                </p>
                <p className="text-base about-md:text-sm font-normal text-neutral800 dark:text-neutral50">
                  {t('sealing:whichSurfacesDescriptionBottom')}
                </p>
              </div>
            </section>
            <section className="mb-10">
              <div className="text-justify">
                <h3 className="font-semibold text-left text-xl about-md:text-base text-neutral800 dark:text-neutral50 mb-6">
                  {t('sealing:sealingProsDescription')}
                </h3>
                <div className="flex flex-col gap-5 text-left">
                  {sealingPros.map((item, index) => (
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
              </div>
            </section>
            <section className="mb-10">
              <div className="relative h-[50vh] knowledge-md:h-[30vh] w-full">
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
              <div className="text-justify mb-6">
                <h3 className="font-semibold text-left text-xl about-md:text-base text-neutral800 dark:text-neutral50 mb-6">
                  {t('sealing:productSelect')}
                </h3>
                <div className="flex flex-col gap-5">
                  {productSelectItems.map((item, index) => (
                    <div
                      className="flex items-center gap-6"
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
              </div>
              <p className="text-base inline about-md:text-sm font-normal text-neutral800 dark:text-neutral50 mb-2">
                {t('sealing:sealingRecommendations')}
              </p>
              <Link href="/contact">
                <a className="font-semibold text-left text-base about-md:text-sm text-amber400 duration-300 hover:opacity-75">
                  {t('sealing:here')}
                </a>
              </Link>
            </section>
            <section className="mb-10">
              <div className="relative h-[50vh] knowledge-md:h-[30vh] w-full">
                <Image
                  alt=""
                  layout="fill"
                  objectFit="cover"
                  placeholder="blur"
                  {...(sealingGif as PlaiceHolderProps)}
                />
              </div>
            </section>
            <section className="mb-6 text-justify">
              <h3 className="font-semibold text-left text-xl about-md:text-base text-neutral800 dark:text-neutral50 mb-4">
                {t('sealing:sealingBetter')}
              </h3>
              <p className="text-base about-md:text-sm font-normal text-neutral800 dark:text-neutral50 mb-4">
                {t('sealing:sealingBetterDescription')}
              </p>
              <p className="text-base inline about-md:text-sm font-normal text-neutral800 dark:text-neutral50">
                {t('sealing:sealingBetterDescriptionMid')}
              </p>
              <span className="font-semibold text-base about-md:text-sm text-amber400">
                {t('sealing:sealingBetterDescriptionHighlight')}
              </span>
              <p className="text-base inline about-md:text-sm font-normal text-neutral800 dark:text-neutral50">
                {t('sealing:sealingBetterDescriptionBot')}
              </p>
            </section>
            <section className="mb-10 text-justify">
              <div className="relative h-[50vh] knowledge-md:h-[30vh] w-full">
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
              <h3 className="font-semibold text-left text-xl about-md:text-base text-neutral800 dark:text-neutral50 mb-4">
                {t('sealing:whatToRecommend')}
              </h3>
              <div className="mb-3">
                <p className="text-base inline about-md:text-sm font-normal text-neutral800 dark:text-neutral50">
                  {t('sealing:whatToRecommendDescriptionTop')}
                </p>
                <span className="font-semibold text-base about-md:text-sm text-amber400">
                  {t('sealing:new')}
                </span>
                <p className="text-base inline about-md:text-sm font-normal text-neutral800 dark:text-neutral50">
                  {t('sealing:whatToRecommendDescriptionMid')}
                </p>
                <span className="font-semibold text-base about-md:text-sm text-amber400">
                  {t('sealing:old')}
                </span>
                <p className="text-base inline about-md:text-sm font-normal text-neutral800 dark:text-neutral50">
                  {t('sealing:whatToRecommendDescriptionMidBottom')}
                </p>
                <span className="font-semibold text-base about-md:text-sm text-amber400">
                  {t('sealing:inside')}
                </span>
                <p className="text-base inline about-md:text-sm font-normal text-neutral800 dark:text-neutral50">
                  {t('sealing:whatToRecommendDescriptionBottom')}
                </p>
                <span className="font-semibold text-base about-md:text-sm text-amber400">
                  {t('sealing:outside')}
                </span>
                <p className="text-base inline about-md:text-sm font-normal text-neutral800 dark:text-neutral50">
                  {t('sealing:whatToRecommendDescriptionBottomBottom')}
                </p>
              </div>
              <p className="text-base about-md:text-sm font-normal text-neutral800 dark:text-neutral50 mb-3">
                {t('sealing:recommendationsInfo')}
              </p>
              <p className="text-base about-md:text-sm font-normal text-neutral800 dark:text-neutral50">
                {t('sealing:recommendationsInfoUs')}
              </p>
            </section>
            <section>
              <Link href="/contact">
                <a>
                  <div className="flex uppercase w-fit justify-center items-center gap-3 bg-amber600 px-4 py-2.5 rounded-lg text-neutral50 duration-300 hover:opacity-80 hover:translate-y-1">
                    <svg
                      className="w-5 h-5 about-md:w-4 about-md:h-4"
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
                    <span className="text-base about-md:text-sm font-semibold">
                      {t('sealing:order')}
                    </span>
                  </div>
                </a>
              </Link>
            </section>
          </div>

          <div className="sticky h-fit w-1/4 about-md:static about-md:w-full top-[15%] flex flex-col gap-20 about-md:gap-8">
            <span className="hidden text-xl font-semibold about-md:block">
              {t('sealing:readMore')}
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
  const {
    base64,
    img: { src },
  } = await getPlaiceholder('/images/sealing-image-2.gif')
  const localization = locale === 'pl' ? 'pl-PL' : 'en'
  const res = await fetchAllBlogPosts(localization)

  return {
    props: {
      ...(await serverSideTranslations(locale, [
        'navbar',
        'footer',
        'recommendations',
        'sealing',
        'contact',
      ])),
      sealingGif: {
        blurDataURL: base64,
        src,
      },
      blogPosts: await res.json()
    },
  }
}

export default Sealing

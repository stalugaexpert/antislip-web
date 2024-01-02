import {
  AccordionMeasurement,
  BlogPostsSticky,
  CardSwitcher,
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

import measurementHero from '../../public/images/measurement-hero-1.png'
import measurementHero2 from '../../public/images/measurement-hero-2.png'

interface IFrictionPageProps {
  blogPostsAll: BlogPostsQuery
  gifBlur: string
}

const Friction: NextPage<IFrictionPageProps> = ({ gifBlur, blogPostsAll }) => {
  const { t } = useTranslation()

  const howToItems = [
    t('measurement:measurementHowToDescription.first'),
    t('measurement:measurementHowToDescription.second'),
    t('measurement:measurementHowToDescription.third'),
  ]

  return (
    <PageLayout>
      <Seo
        description={t('seo:measurement.metaDescription')}
        title={t('seo:measurement.title')}
      />
      <HeroPages
        description={t('measurement:heroDescription')}
        image={measurementHero2}
        imageSecond={measurementHero}
        section={t('measurement:ourServices')}
        title={t('measurement:measurementDescription')}
        titleIcon="/icons/pendulum.png"
      />
      <section className="mx-auto mb-10 h-fit max-w-screen-2xl px-24 services-xs:mb-12 services-xs:px-14 about-sm:px-10 about-xsm:px-6">
        <h3 className="mb-4 text-left text-xl font-semibold text-neutral800 dark:text-neutral50 about-md:text-base">
          {t('measurement:measurementHow')}
        </h3>
        <div className="mb-6 w-3/4 text-justify mission-sm:w-full">
          <p className="mb-6 inline text-base font-normal text-neutral800 dark:text-neutral50 about-md:text-sm">
            {t('measurement:measurementDeviceDescription')}
          </p>
        </div>
        <CardSwitcher />
      </section>
      <section className="mx-auto mb-20 h-fit max-w-screen-2xl px-24 services-xs:mb-12 services-xs:px-14 about-sm:px-10 about-xsm:px-6">
        <div className="relative flex justify-between gap-32 about-md:flex-wrap about-md:gap-14">
          <div className="w-[75%] about-md:w-full">
            <section className="mb-10">
              <div className="text-justify">
                <h3 className="mb-3 text-left text-xl font-semibold text-neutral800 dark:text-neutral50 about-md:text-base">
                  {t('measurement:measurementWhy')}
                </h3>
                <div>
                  <p className="mb-2 text-base font-normal text-neutral800 dark:text-neutral50 about-md:text-sm">
                    {t('measurement:measurementWhyDescription')}
                  </p>
                  <p className="mb-6 text-base font-normal text-neutral800 dark:text-neutral50 about-md:text-sm">
                    {t('measurement:measurementWhyDescriptionBottom')}
                  </p>
                  <Link href="/knowledge">
                    <a>
                      <div className="flex items-center gap-6 duration-300 hover:translate-x-2 hover:opacity-75">
                        <div className="rounded-full bg-amber600 p-3 text-neutral50 about-md:p-2">
                          <svg
                            className="h-8 w-8 about-md:h-6 about-md:w-6"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={3}
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M8.25 4.5l7.5 7.5-7.5 7.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                        <div className="flex flex-col gap-2">
                          <span className="text-base font-semibold text-neutral800 dark:text-neutral50 about-md:text-sm">
                            {t('measurement:responsibility')}
                          </span>
                          <span className="text-base font-normal text-amber600 about-md:text-sm">
                            {t('measurement:readMoreButton')}
                          </span>
                        </div>
                      </div>
                    </a>
                  </Link>
                </div>
              </div>
            </section>
            <section className="mb-10 text-justify">
              <h3 className="mb-3 text-left text-xl font-semibold text-neutral800 dark:text-neutral50 about-md:text-base">
                {t('measurement:measurementWho')}
              </h3>
              <p className="text-base font-normal text-neutral800 dark:text-neutral50 about-md:text-sm">
                {t('measurement:measurementWhoDescription')}
              </p>
            </section>
            <section className="mb-10 text-justify">
              <h3 className="mb-3 text-left text-xl font-semibold text-neutral800 dark:text-neutral50 about-md:text-base">
                {t('measurement:measurementWhat')}
              </h3>
              <p className="mb-6 text-base font-normal text-neutral800 dark:text-neutral50 about-md:text-sm">
                {t('measurement:measurementPtv')}
              </p>
              <table className="mb-6 w-full text-center text-sm text-gray-500 dark:text-gray-400">
                <thead className="bg-gray-50 text-xs font-semibold uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th
                      className="py-3 px-6"
                      scope="col"
                    >
                      {t('measurement:ptvResistance')}
                    </th>
                    <th
                      className="py-3 px-6"
                      scope="col"
                    >
                      {t('measurement:classification')}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b bg-white dark:border-gray-700 dark:bg-gray-800">
                    <th
                      className="whitespace-nowrap py-4 px-6 font-medium text-gray-900 dark:text-white"
                      scope="row"
                    >
                      0 – 24
                    </th>
                    <td className="py-4 px-6">
                      {t('measurement:ptvLevel.high')}
                    </td>
                  </tr>
                  <tr className="border-b bg-white dark:border-gray-700 dark:bg-gray-800">
                    <th
                      className="whitespace-nowrap py-4 px-6 font-medium text-gray-900 dark:text-white"
                      scope="row"
                    >
                      25 - 35
                    </th>
                    <td className="py-4 px-6">
                      {t('measurement:ptvLevel.medium')}
                    </td>
                  </tr>
                  <tr className="bg-white dark:bg-gray-800">
                    <th
                      className="whitespace-nowrap py-4 px-6 font-medium text-gray-900 dark:text-white"
                      scope="row"
                    >
                      ≥ 36
                    </th>
                    <td className="py-4 px-6">
                      {t('measurement:ptvLevel.low')}
                    </td>
                  </tr>
                </tbody>
              </table>
              <p className="inline text-base font-normal text-neutral800 dark:text-neutral50 about-md:text-sm">
                {t('measurement:moreDescription')}
              </p>
              <Link href="/knowledge">
                <a className="text-base font-semibold text-amber400 duration-300 hover:opacity-75 about-md:text-sm">
                  {t('measurement:here')}
                </a>
              </Link>
            </section>
            <section className="mb-10 text-justify">
              <h3 className="mb-6 text-left text-xl font-semibold text-neutral800 dark:text-neutral50 about-md:text-base">
                {t('measurement:measurementHowTo')}
              </h3>
              <div className="flex flex-col gap-6">
                {howToItems.map((item, index) => (
                  <div
                    className="flex items-center gap-6"
                    key={index}
                  >
                    <div className="h-8 w-8">
                      <svg
                        className="h-8 w-8"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={1.5}
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
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
            <section className="mb-10">
              <div className="relative h-[50vh] w-full knowledge-md:h-[30vh]">
                <Image
                  alt=""
                  blurDataURL={gifBlur}
                  layout="fill"
                  objectFit="cover"
                  placeholder="blur"
                  src="/images/pendulum-knowledge.gif"
                  unoptimized
                />
              </div>
            </section>
            <section className="mb-10 text-justify">
              <h3 className="mb-6 text-left text-xl font-semibold text-neutral800 dark:text-neutral50 about-md:text-base">
                {t('measurement:measurementWhatToRemember')}
              </h3>
              <div className="mb-6">
                <p className="inline text-base font-normal text-neutral800 dark:text-neutral50 about-md:text-sm">
                  {t('measurement:measurementWhatToRememberHow')}
                </p>
                <span className="text-base font-semibold text-amber400 about-md:text-sm">
                  {t('measurement:more')}
                </span>
              </div>
              <AccordionMeasurement />
            </section>
            <section className="mb-10 text-justify">
              <p className="mb-3 text-base font-normal text-neutral800 dark:text-neutral50 about-md:text-sm">
                {t('measurement:measurementWorthTo')}
              </p>
              <p className="inline text-base font-normal text-neutral800 dark:text-neutral50 about-md:text-sm">
                {t('measurement:measurementWorthToDescriptionTop')}
              </p>
              <span className="text-base font-semibold text-amber400 about-md:text-sm">
                {t('measurement:measurementDevices')}
              </span>
              <p className="inline text-base font-normal text-neutral800 dark:text-neutral50 about-md:text-sm">
                {t('measurement:measurementWorthToDescriptionMid')}
              </p>
              <span className="text-base font-semibold text-amber400 about-md:text-sm">
                {t('measurement:realiableMeasurement')}
              </span>
              <p className="inline text-base font-normal text-neutral800 dark:text-neutral50 about-md:text-sm">
                {t('measurement:measurementWorthToDescriptionBottom')}
              </p>
            </section>
            <section className="mb-10">
              <h3 className="mb-6 inline text-left text-xl font-semibold text-neutral800 dark:text-neutral50 about-md:text-base">
                {t('measurement:measurementContactUsDescription')}
              </h3>
              <Link href="/contact">
                <a className="text-left text-xl font-semibold text-amber400 duration-300 hover:opacity-75 about-md:text-base">
                  {t('measurement:measurementContactUs')}
                </a>
              </Link>
            </section>
            <section>
              <h3 className="mb-6 text-left text-xl font-semibold text-neutral800 dark:text-neutral50 about-md:text-base">
                {t('measurement:measurementWorthRemember')}
              </h3>
              <Link href="/knowledge">
                <a>
                  <div className="flex items-center gap-6 duration-300 hover:translate-x-2 hover:opacity-75">
                    <div className="rounded-full bg-amber600 p-3 text-neutral50 about-md:p-2">
                      <svg
                        className="h-8 w-8 about-md:h-6 about-md:w-6"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={3}
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.25 4.5l7.5 7.5-7.5 7.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <div className="flex flex-col gap-2">
                      <span className="text-base font-semibold text-neutral800 dark:text-neutral50 about-md:text-sm">
                        {t('measurement:regulation')}
                      </span>
                      <span className="text-base font-normal text-amber600 about-md:text-sm">
                        {t('measurement:readMoreButton')}
                      </span>
                    </div>
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
  const { base64 } = await getPlaiceholder('/images/pendulum-knowledge.gif')
  const localization = locale === 'pl' ? 'pl-PL' : 'en'

  const blogPostsAll = await getAllBlogPosts(localization)

  return {
    props: {
      ...(await serverSideTranslations(locale, [
        'navbar',
        'footer',
        'common',
        'measurement',
        'recommendations',
        'card-switcher',
        'contact',
        'seo',
        'cookies',
      ])),
      gifBlur: base64,
      blogPostsAll,
    },
  }
}

export default Friction

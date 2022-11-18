/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  AccordionMeasurement,
  CardSwitcher,
  ContactShort,
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
import { fetchAllBlogPosts } from 'src/utils/api/service'

import measurementHero from '../../public/images/measurement-hero-1.png'
import measurementHero2 from '../../public/images/measurement-hero-2.png'

const Friction: NextPage = ({ gifBlur, blogPosts }: any) => {
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
      <section className="px-24 pt-32 navbar-md:pt-24 max-w-screen-2xl mx-auto mb-12 services-xs:mb-12 services-xs:px-14 about-sm:px-10 about-xsm:px-6">
        <div className="flex justify-between mb-8">
          <div className="w-3/4 recommendations-ds:w-[85%]">
            <h5 className="text-base about-md:text-sm font-semibold text-amber400 mb-4">
              {t('measurement:ourServices')}
            </h5>
            <h2 className="text-4xl mb-6 about-md:text-3xl about-xsm:text-2xl font-semibold text-neutral800 dark:text-neutral50">
              {t('measurement:measurementDescription')}
            </h2>
            <h2 className="text-lg about-xsm:text-base font-normal text-neutral800 dark:text-neutral100">
              {t('measurement:heroDescription')}
            </h2>
          </div>
          <div className="p-3 about-md:p-2 rounded-md bg-neutral50 dark:bg-neutral200 w-fit h-fit">
            <div className="relative w-[42px] h-[32px] about-md:w-[23px] about-md:h-[17px]">
              <Image
                alt=""
                layout="fill"
                objectFit="cover"
                src="/icons/pendulum.png"
              />
            </div>
          </div>
        </div>
        <div className="h-[31.2rem] about-md:h-[30vh] w-full">
          <div className="flex gap-8 mission-sm:gap-4">
            <div className="relative w-1/3 mission-sm:w-2/4 h-[31.2rem] about-md:h-[30vh]">
              <Image
                alt=""
                layout="fill"
                objectFit="cover"
                placeholder="blur"
                src={measurementHero2}
              />
            </div>
            <div className="relative w-2/3 mission-sm:w-2/4 h-[31.2rem] about-md:h-[30vh] before:content-[''] before:absolute before:h-48 before:w-48 before:bg-amber400 before:z-10 before:top-0 before:left-full before:-translate-x-full before:-translate-y-2/4 before:blur-[100px] before:opacity-50 dark:before:opacity-30">
              <Image
                alt=""
                layout="fill"
                objectFit="cover"
                placeholder="blur"
                src={measurementHero}
              />
            </div>
          </div>
        </div>
      </section>
      <section className="px-24 max-w-screen-2xl mx-auto mb-10 h-fit services-xs:mb-12 services-xs:px-14 about-sm:px-10 about-xsm:px-6">
        <h3 className="font-semibold text-left text-xl about-md:text-base text-neutral800 dark:text-neutral50 mb-4">
          {t('measurement:measurementHow')}
        </h3>
        <div className="mb-6 w-3/4 text-justify mission-sm:w-full">
          <p className="text-base inline about-md:text-sm font-normal text-neutral800 dark:text-neutral50 mb-6">
            {t('measurement:smartfloor')}
          </p>
          <a
            className="font-semibold text-base about-md:text-sm text-amber400 duration-300 hover:opacity-75"
            href="https://antyposlizg.pl/"
            rel="noreferrer"
            target="_blank"
          >
            {t('measurement:smartfloorCompany')}
          </a>
          <p className="text-base inline about-md:text-sm font-normal text-neutral800 dark:text-neutral50 mb-6">
            {t('measurement:smartfloorDescription')}
          </p>
        </div>
        <CardSwitcher />
      </section>
      <section className="px-24 max-w-screen-2xl mx-auto mb-20 h-fit services-xs:mb-12 services-xs:px-14 about-sm:px-10 about-xsm:px-6">
        <div className="flex justify-between gap-32 relative about-md:flex-wrap about-md:gap-14">
          <div className="w-[75%] about-md:w-full">
            <section className="mb-10">
              <div className="text-justify">
                <h3 className="font-semibold text-left text-xl about-md:text-base text-neutral800 dark:text-neutral50 mb-3">
                  {t('measurement:measurementWhy')}
                </h3>
                <div>
                  <p className="text-base about-md:text-sm font-normal text-neutral800 dark:text-neutral50 mb-2">
                    {t('measurement:measurementWhyDescription')}
                  </p>
                  <p className="text-base about-md:text-sm font-normal text-neutral800 dark:text-neutral50 mb-6">
                    {t('measurement:measurementWhyDescriptionBottom')}
                  </p>
                  <Link href="/knowledge">
                    <a>
                      <div className="flex items-center gap-6 duration-300 hover:opacity-75 hover:translate-x-2">
                        <div className="p-3 about-md:p-2 bg-amber600 rounded-full text-neutral50">
                          <svg
                            className="w-8 h-8 about-md:w-6 about-md:h-6"
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
                          <span className="text-base font-semibold about-md:text-sm text-neutral800 dark:text-neutral50">
                            {t('measurement:responsibility')}
                          </span>
                          <span className="text-base about-md:text-sm font-normal text-amber600">
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
              <h3 className="font-semibold text-left text-xl about-md:text-base text-neutral800 dark:text-neutral50 mb-3">
                {t('measurement:measurementWho')}
              </h3>
              <p className="text-base about-md:text-sm font-normal text-neutral800 dark:text-neutral50">
                {t('measurement:measurementWhoDescription')}
              </p>
            </section>
            <section className="mb-10 text-justify">
              <h3 className="font-semibold text-left text-xl about-md:text-base text-neutral800 dark:text-neutral50 mb-3">
                {t('measurement:measurementWhat')}
              </h3>
              <p className="text-base about-md:text-sm font-normal text-neutral800 dark:text-neutral50 mb-6">
                {t('measurement:measurementPtv')}
              </p>
              <table className="w-full text-sm text-center text-gray-500 dark:text-gray-400 mb-6">
                <thead className="text-xs font-semibold text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
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
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th
                      className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      scope="row"
                    >
                      0 – 24
                    </th>
                    <td className="py-4 px-6">
                      {t('measurement:ptvLevel.high')}
                    </td>
                  </tr>
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th
                      className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
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
                      className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
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
              <p className="text-base about-md:text-sm font-normal text-neutral800 dark:text-neutral50 inline">
                {t('measurement:moreDescription')}
              </p>
              <Link href="/knowledge">
                <a className="font-semibold text-base about-md:text-sm text-amber400 duration-300 hover:opacity-75">
                  {t('measurement:here')}
                </a>
              </Link>
            </section>
            <section className="mb-10 text-justify">
              <h3 className="font-semibold text-left text-xl about-md:text-base text-neutral800 dark:text-neutral50 mb-6">
                {t('measurement:measurementHowTo')}
              </h3>
              <div className="flex flex-col gap-6">
                {howToItems.map((item, index) => (
                  <div
                    className="flex items-center gap-6"
                    key={index}
                  >
                    <div className="w-8 h-8">
                      <svg
                        className="w-8 h-8"
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
                    <p className="text-base about-md:text-sm font-normal text-neutral800 dark:text-neutral50">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </section>
            <section className="mb-10">
              <div className="relative h-[50vh] knowledge-md:h-[30vh] w-full">
                <Image
                  alt=""
                  blurDataURL={gifBlur}
                  layout="fill"
                  objectFit="cover"
                  placeholder="blur"
                  src="/images/sealing-image-2.gif"
                />
              </div>
            </section>
            <section className="mb-10 text-justify">
              <h3 className="font-semibold text-left text-xl about-md:text-base text-neutral800 dark:text-neutral50 mb-6">
                {t('measurement:measurementWhatToRemember')}
              </h3>
              <div className="mb-6">
                <p className="text-base inline about-md:text-sm font-normal text-neutral800 dark:text-neutral50">
                  {t('measurement:measurementWhatToRememberHow')}
                </p>
                <span className="font-semibold text-base about-md:text-sm text-amber400">
                  {t('measurement:more')}
                </span>
              </div>
              <AccordionMeasurement />
            </section>
            <section className="mb-10 text-justify">
              <p className="text-base about-md:text-sm font-normal text-neutral800 dark:text-neutral50 mb-3">
                {t('measurement:measurementWorthTo')}
              </p>
              <p className="text-base inline about-md:text-sm font-normal text-neutral800 dark:text-neutral50">
                {t('measurement:measurementWorthToDescriptionTop')}
              </p>
              <span className="font-semibold text-base about-md:text-sm text-amber400">
                {t('measurement:measurementDevices')}
              </span>
              <p className="text-base inline about-md:text-sm font-normal text-neutral800 dark:text-neutral50">
                {t('measurement:measurementWorthToDescriptionMid')}
              </p>
              <span className="font-semibold text-base about-md:text-sm text-amber400">
                {t('measurement:realiableMeasurement')}
              </span>
              <p className="text-base inline about-md:text-sm font-normal text-neutral800 dark:text-neutral50">
                {t('measurement:measurementWorthToDescriptionBottom')}
              </p>
            </section>
            <section className="mb-10">
              <h3 className="font-semibold inline text-left text-xl about-md:text-base text-neutral800 dark:text-neutral50 mb-6">
                {t('measurement:measurementContactUsDescription')}
              </h3>
              <Link href="/contact">
                <a className="font-semibold text-left text-xl about-md:text-base text-amber400 duration-300 hover:opacity-75">
                  {t('measurement:measurementContactUs')}
                </a>
              </Link>
            </section>
            <section>
              <h3 className="font-semibold text-left text-xl about-md:text-base text-neutral800 dark:text-neutral50 mb-6">
                {t('measurement:measurementWorthRemember')}
              </h3>
              <Link href="/knowledge">
                <a>
                  <div className="flex items-center gap-6 duration-300 hover:opacity-75 hover:translate-x-2">
                    <div className="p-3 about-md:p-2 bg-amber600 rounded-full text-neutral50">
                      <svg
                        className="w-8 h-8 about-md:w-6 about-md:h-6"
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
                      <span className="text-base font-semibold about-md:text-sm text-neutral800 dark:text-neutral50">
                        {t('measurement:regulation')}
                      </span>
                      <span className="text-base about-md:text-sm font-normal text-amber600">
                        {t('measurement:readMoreButton')}
                      </span>
                    </div>
                  </div>
                </a>
              </Link>
            </section>
          </div>

          <div className="sticky h-fit w-1/4 about-md:static about-md:w-full top-[15%] flex flex-col gap-20 about-md:gap-8">
            <span className="hidden text-xl font-semibold about-md:block">
              {t('measurement:readMore')}
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
  } = await getPlaiceholder('/images/pendulum-knowledge.gif')
  const localization = locale === 'pl' ? 'pl-PL' : 'en'
  const res = await fetchAllBlogPosts(localization)

  return {
    props: {
      ...(await serverSideTranslations(locale, [
        'navbar',
        'footer',
        'measurement',
        'recommendations',
        'card-switcher',
        'contact',
        'seo'
      ])),
      gifBlur: base64,
      blogPosts: await res.json()
    },
  }
}

export default Friction

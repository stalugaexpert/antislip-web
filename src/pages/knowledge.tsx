import { ContactShort, HeroPages, PageLayout, Seo } from '@components'
import type { InferGetStaticPropsType, NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { getPlaiceholder } from 'plaiceholder'
import Balancer from 'react-wrap-balancer'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from 'src/components/ui/Accordion'

import antiSlipPTV from '../../public/images/antislip-ptv.png'
import knowledgeHero from '../../public/images/knowledge-hero.jpg'
import knowledgePlaces from '../../public/images/knowledge-places-1.jpg'
import knowledgePlaces2 from '../../public/images/knowledge-places-2.jpg'

const Knowledge: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  gifBlur,
}) => {
  const { t } = useTranslation()

  const knowledgeItems = [
    {
      title: t('knowledge:knowledgeFeatures.first'),
      description: t('knowledge:knowledgeFeatures.firstDescription'),
      icon: (
        <path
          d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      ),
    },
    {
      title: t('knowledge:knowledgeFeatures.second'),
      description: t('knowledge:knowledgeFeatures.secondDescription'),
      icon: (
        <path
          d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      ),
    },
    {
      title: t('knowledge:knowledgeFeatures.third'),
      description: t('knowledge:knowledgeFeatures.thirdDescription'),
      icon: (
        <path
          d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971z"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      ),
    },
    {
      title: t('knowledge:knowledgeFeatures.fourth'),
      description: t('knowledge:knowledgeFeatures.fourthDescription'),
      icon: (
        <path
          d="M12 9v3.75m0-10.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.249-8.25-3.286zm0 13.036h.008v.008H12v-.008z"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      ),
    },
    {
      title: t('knowledge:knowledgeFeatures.fifth'),
      description: t('knowledge:knowledgeFeatures.fifthDescription'),
      icon: (
        <path
          d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      ),
    },
    {
      title: t('knowledge:knowledgeFeatures.sixth'),
      description: t('knowledge:knowledgeFeatures.sixthDescription'),
      icon: (
        <path
          d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      ),
    },
  ]

  const placesItems = [
    t('knowledge:placesList.first'),
    t('knowledge:placesList.second'),
    t('knowledge:placesList.third'),
    t('knowledge:placesList.fourth'),
    t('knowledge:placesList.fifth'),
    t('knowledge:placesList.sixth'),
    t('knowledge:placesList.seventh'),
  ]
  const typesItems = [
    t('knowledge:typesList.first'),
    t('knowledge:typesList.second'),
    t('knowledge:typesList.third'),
    t('knowledge:typesList.fourth'),
    t('knowledge:typesList.fifth'),
    t('knowledge:typesList.sixth'),
    t('knowledge:typesList.seventh'),
  ]
  const cardItems = [
    {
      title: t('knowledge:cardsList.first.title'),
      subtitle: t('knowledge:cardsList.first.subtitle'),
      description: t('knowledge:cardsList.first.description'),
    },
    {
      title: t('knowledge:cardsList.second.title'),
      subtitle: t('knowledge:cardsList.second.subtitle'),
      description: t('knowledge:cardsList.second.description'),
    },
    {
      title: t('knowledge:cardsList.third.title'),
      subtitle: t('knowledge:cardsList.third.subtitle'),
      description: t('knowledge:cardsList.third.description'),
    },
  ]

  return (
    <PageLayout>
      <Seo
        description={t('seo:knowledge.metaDescription')}
        title={t('seo:knowledge.title')}
      />
      <HeroPages
        image={knowledgeHero}
        section={t('knowledge:knowledge')}
        title={t('knowledge:description')}
        titleBottom={t('knowledge:descriptionBottom')}
      />
      <section className="mx-auto mb-20 h-fit max-w-screen-2xl px-24 services-xs:mb-12 services-xs:px-14 about-sm:px-10 about-xsm:px-6">
        <h5 className="mb-4 text-base font-semibold text-amber400 about-md:text-sm">
          {t('knowledge:whatKnow')}
        </h5>
        <h5 className="mb-8 text-4xl font-semibold text-neutral800 dark:text-neutral50 about-md:text-3xl about-xsm:text-2xl">
          {t('knowledge:legalActs')}
        </h5>
        <div className="flex justify-between gap-12 knowledge-md:flex-wrap knowledge-md:gap-8">
          <div className="w-[60%] knowledge-md:order-2 knowledge-md:w-full">
            <Accordion
              defaultValue="item-3"
              type="single"
              collapsible
            >
              <AccordionItem
                className="dark:border-neutral400"
                value="item-1"
              >
                <AccordionTrigger className="gap-4 text-left font-normal">
                  {t('knowledge:actsFirst.title')}
                </AccordionTrigger>
                <AccordionContent>
                  <div className="p-2 text-base text-neutral800 dark:text-neutral50 about-xsm:text-sm">
                    <p className="mb-2.5">
                      <Balancer>
                        {t('knowledge:actsFirst.firstParagraph')}
                      </Balancer>
                    </p>
                    <p className="mb-2.5 italic">
                      <Balancer>
                        {t('knowledge:actsFirst.secondParagraph')}
                      </Balancer>
                    </p>
                    <p className="mb-2.5 italic">
                      <Balancer>
                        {t('knowledge:actsFirst.thirdParagraph')}
                      </Balancer>
                    </p>
                    <p className="italic">
                      <Balancer>
                        {t('knowledge:actsFirst.fourthParagraph')}
                      </Balancer>
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                className="dark:border-neutral400"
                value="item-2"
              >
                <AccordionTrigger className="gap-4 text-left font-normal">
                  {t('knowledge:actsSecond.title')}
                </AccordionTrigger>
                <AccordionContent>
                  <div className="p-2 text-base text-neutral800 dark:text-neutral50 about-xsm:text-sm">
                    <p className="mb-2.5 italic">
                      <Balancer>
                        {t('knowledge:actsSecond.firstParagraph')}
                      </Balancer>
                    </p>
                    <p className="mb-2.5 italic">
                      <Balancer>
                        {t('knowledge:actsSecond.secondParagraph')}
                      </Balancer>
                    </p>
                    <p className="mb-2.5 italic">
                      <Balancer>
                        {t('knowledge:actsSecond.thirdParagraph')}
                      </Balancer>
                    </p>
                    <p>
                      <Balancer>
                        {t('knowledge:actsSecond.fourthParagraph')}
                      </Balancer>
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                className="dark:border-neutral400"
                value="item-3"
              >
                <AccordionTrigger className="gap-4 text-left font-normal">
                  {t('knowledge:actsThird.title')}
                </AccordionTrigger>
                <AccordionContent>
                  <div className="p-2 text-base text-neutral800 dark:text-neutral50 about-xsm:text-sm">
                    <p className="mb-2.5 italic">
                      <Balancer>
                        {t('knowledge:actsThird.firstParagraph')}
                      </Balancer>
                    </p>
                    <p className="mb-2.5 italic">
                      <Balancer>
                        {t('knowledge:actsThird.secondParagraph')}
                      </Balancer>
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                className="dark:border-neutral400"
                value="item-4"
              >
                <AccordionTrigger className="gap-4 text-left font-normal">
                  {t('knowledge:actsFourth.title')}
                </AccordionTrigger>
                <AccordionContent>
                  <div className="p-2 text-base text-neutral800 dark:text-neutral50 about-xsm:text-sm">
                    <p className="mb-2.5 italic">
                      <Balancer>
                        {t('knowledge:actsFourth.firstParagraph')}
                      </Balancer>
                    </p>
                    <p className="mb-2.5 italic">
                      <Balancer>
                        {t('knowledge:actsFourth.secondParagraph')}
                      </Balancer>
                    </p>
                    <p className="mb-2.5 italic">
                      <Balancer>
                        {t('knowledge:actsFourth.thirdParagraph')}
                      </Balancer>
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          <div className="relative w-[40%] knowledge-md:h-[30vh] knowledge-md:w-full">
            <Image
              alt=""
              layout="fill"
              objectFit="contain"
              src="/images/knowledge-image-1.svg"
            />
          </div>
        </div>
      </section>
      <section className="mx-auto mb-20 h-fit max-w-screen-2xl px-24 services-xs:mb-12 services-xs:px-14 about-sm:px-10 about-xsm:px-6">
        <div>
          <h5 className="mb-4 text-base font-semibold text-amber400 about-md:text-sm">
            {t('knowledge:ptv')}
          </h5>
          <div className="mb-8">
            <h5 className="text-4xl font-semibold text-neutral800 dark:text-neutral50 about-md:text-3xl about-xsm:text-2xl">
              {t('knowledge:ptvAbout')}
            </h5>
            <h5 className="text-4xl font-semibold text-neutral800 dark:text-neutral50 about-md:text-3xl about-xsm:text-2xl">
              {t('knowledge:ptvAboutBottom')}
            </h5>
          </div>
          <div className="flex justify-between gap-12 knowledge-md:flex-wrap knowledge-md:gap-8">
            <div className="flex w-2/4 flex-col gap-4 knowledge-md:w-full">
              <div className="relative h-[380px] w-full knowledge-md:h-[30vh]">
                <Image
                  alt=""
                  layout="fill"
                  objectFit="contain"
                  placeholder="blur"
                  src={antiSlipPTV}
                />
              </div>
              <p className="text-justify text-base text-neutral800 dark:text-neutral50">
                {t('knowledge:ptvDescription.fourthParagraph')}
              </p>
            </div>
            <div className="w-2/4 text-justify text-base text-neutral800 dark:text-neutral50 about-xsm:text-sm knowledge-md:w-full">
              <p className="mb-2.5">
                {t('knowledge:ptvDescription.firstParagraph')}
              </p>
              <p className="mb-2.5">
                {t('knowledge:ptvDescription.secondParagraph')}
              </p>
              <p>{t('knowledge:ptvDescription.thirdParagraph')}</p>
            </div>
          </div>
        </div>
      </section>
      <section className="mx-auto mb-20 h-fit max-w-[87.5rem] px-24 services-xs:mb-12 services-xs:px-14 about-sm:px-10 knowledge-sm:pl-6 knowledge-sm:pr-8">
        <div className="grid grid-cols-3 gap-12 recommendations-ds:gap-10 about-sm:grid-cols-2 knowledge-sm:grid-cols-1">
          {knowledgeItems.map((item, index) => (
            <div
              className="relative flex flex-col items-center justify-between rounded-md bg-neutral200 p-6 shadow-md dark:bg-neutral700"
              key={index}
            >
              <div className="mb-4 flex w-full items-center">
                <h5 className="text-xl font-semibold text-neutral800 dark:text-neutral50 knowledge-md:text-base">
                  {item.title}
                </h5>
                <div className="absolute top-0 left-full -translate-y-2/4 -translate-x-2/4 rounded-full bg-neutral200 p-2 dark:bg-neutral700 knowledge-sm:p-1">
                  <svg
                    className="h-8 w-8 knowledge-sm:h-6 knowledge-sm:w-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {item.icon}
                  </svg>
                </div>
              </div>
              <p className="w-full text-base text-neutral800 dark:text-neutral50 knowledge-md:text-sm">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>
      <section className="mx-auto mb-20 h-fit max-w-screen-2xl px-24 services-xs:mb-12 services-xs:px-14 about-sm:px-10 about-xsm:px-6">
        <div>
          <h5 className="mb-4 text-base font-semibold text-amber400 about-md:text-sm">
            {t('knowledge:pendulumSection.title')}
          </h5>
          <h5 className="mb-8 text-4xl font-semibold text-neutral800 dark:text-neutral50 about-md:text-3xl about-xsm:text-2xl">
            {t('knowledge:pendulumSection.titleBottom')}
          </h5>
          <div className="flex items-center justify-between gap-12 knowledge-md:flex-wrap knowledge-md:gap-6">
            <div className="w-2/4 text-justify text-base text-neutral800 dark:text-neutral50 about-xsm:text-sm knowledge-md:w-full">
              <p className="mb-2.5">
                {t('knowledge:pendulumSection.firstParagraph')}
              </p>
              <p className="mb-2.5">
                {t('knowledge:pendulumSection.secondParagraph')}
              </p>
              <p className="mb-2.5 italic">
                {t('knowledge:pendulumSection.thirdParagraph')}
              </p>
              <p className="inline">
                {t('knowledge:pendulumSection.fourthParagraph')}
              </p>
              <Link href="/friction-measurement">
                <a className="font-semibold text-amber400 duration-300 hover:opacity-75">
                  <span>{t('knowledge:pendulumSection.here')}</span>
                </a>
              </Link>
            </div>
            <div className="flex w-2/4 flex-col gap-6 knowledge-md:w-full">
              <div className="relative h-[40vh] w-full knowledge-md:h-[30vh]">
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
              <p className="text-justify text-base text-neutral800 dark:text-neutral50 about-xsm:text-sm">
                {t('knowledge:pendulumSection.description')}
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="mx-auto mb-20 max-w-screen-2xl px-24 services-xs:mb-12 services-xs:px-14 about-sm:px-10 about-xsm:px-6">
        <div>
          <table className="w-full border-collapse border border-solid border-gray-700 text-center text-sm text-gray-500 dark:border-2 dark:text-gray-400 knowledge-xsm:text-xs">
            <thead className="bg-gray-50 text-xs font-semibold uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th
                  className="border border-solid border-gray-700 py-3 px-6 dark:border-2 knowledge-xsm:px-2"
                  scope="col"
                >
                  {t('knowledge:ptvTable.titles.first')}
                </th>
                <th
                  className="border border-solid border-gray-700 py-3 px-6 dark:border-2 knowledge-xsm:px-2"
                  scope="col"
                >
                  {t('knowledge:ptvTable.titles.second')}
                </th>
                <th
                  className="border border-solid border-gray-700 py-3 px-6 dark:border-2 knowledge-xsm:px-2"
                  scope="col"
                >
                  {t('knowledge:ptvTable.titles.third')}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <td
                  className="border border-solid border-gray-700 py-4 px-6 font-medium text-gray-900 dark:border-2 dark:text-white knowledge-xsm:px-2"
                  scope="row"
                >
                  {t('knowledge:ptvTable.firstCol.first')}
                </td>
                <td
                  className="border border-solid border-gray-700 py-4 px-6 dark:border-2 knowledge-xsm:px-2"
                  rowSpan={6}
                >
                  {t('knowledge:ptvTable.secondCol.first')}
                </td>
                <td
                  className="border border-solid border-gray-700 py-4 px-6 dark:border-2 knowledge-xsm:px-2"
                  rowSpan={7}
                >
                  PN-EN 13036-4²
                </td>
              </tr>
              <tr className="border-b bg-white dark:border-gray-700 dark:bg-gray-800">
                <th
                  className="border border-solid border-gray-700 py-4 px-6 font-medium text-gray-900 dark:border-2 dark:text-white knowledge-xsm:px-2"
                  scope="row"
                >
                  {t('knowledge:ptvTable.firstCol.second')}
                </th>
              </tr>
              <tr className="bg-white dark:bg-gray-800">
                <th
                  className="border border-solid border-gray-700 py-4 px-6 font-medium text-gray-900 dark:border-2 dark:text-white knowledge-xsm:px-2"
                  scope="row"
                >
                  {t('knowledge:ptvTable.firstCol.third')}
                </th>
              </tr>
              <tr className="bg-white dark:bg-gray-800">
                <th
                  className="border border-solid border-gray-700 py-4 px-6 font-medium text-gray-900 dark:border-2 dark:text-white knowledge-xsm:px-2"
                  scope="row"
                >
                  {t('knowledge:ptvTable.firstCol.fourth')}
                </th>
              </tr>
              <tr className="bg-white dark:bg-gray-800">
                <th
                  className="border border-solid border-gray-700 py-4 px-6 font-medium text-gray-900 dark:border-2 dark:text-white knowledge-xsm:px-2"
                  scope="row"
                >
                  {t('knowledge:ptvTable.firstCol.fifth')}
                </th>
              </tr>
              <tr className="bg-white dark:bg-gray-800">
                <th
                  className="border border-solid border-gray-700 py-4 px-6 font-medium text-gray-900 dark:border-2 dark:text-white knowledge-xsm:px-2"
                  scope="row"
                >
                  {t('knowledge:ptvTable.firstCol.sixth')}
                </th>
              </tr>
              <tr className="bg-white dark:bg-gray-800">
                <th
                  className="border border-solid border-gray-700 py-4 px-6 font-medium text-gray-900 dark:border-2 dark:text-white knowledge-xsm:px-2"
                  scope="row"
                >
                  {t('knowledge:ptvTable.firstCol.seventh')}
                </th>
                <td className="border border-solid border-gray-700 py-4 px-6 dark:border-2 knowledge-xsm:px-2">
                  {t('knowledge:ptvTable.secondCol.second')}
                </td>
              </tr>
              <tr className="bg-white dark:bg-gray-800">
                <th
                  className="border border-solid border-gray-700 py-4 px-6 font-medium text-gray-900 dark:border-2 dark:text-white knowledge-xsm:px-2"
                  scope="row"
                >
                  {t('knowledge:ptvTable.firstCol.eighth')}
                </th>
                <td className="border border-solid border-gray-700 py-4 px-6 dark:border-2 knowledge-xsm:px-2">
                  {t('knowledge:ptvTable.secondCol.third')}
                </td>
                <td className="border border-solid border-gray-700 py-4 px-6 dark:border-2 knowledge-xsm:px-2">
                  PN-EN 13036-4
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      <section className="mx-auto mb-12 h-fit max-w-screen-2xl px-24 services-xs:mb-12 services-xs:px-14 about-sm:px-10 about-xsm:px-6">
        <div>
          <h5 className="mb-4 text-base font-semibold text-amber400 about-md:text-sm">
            {t('knowledge:knowledge')}
          </h5>
          <div className="mb-8">
            <h5 className="text-4xl font-semibold text-neutral800 dark:text-neutral50 about-md:text-3xl about-xsm:text-2xl">
              {t('knowledge:surfaces')}
            </h5>
            <h5 className="text-4xl font-semibold text-neutral800 dark:text-neutral50 about-md:text-3xl about-xsm:text-2xl">
              {t('knowledge:surfacesBottom')}
            </h5>
          </div>
          <div className="flex items-center justify-between gap-12 knowledge-md:flex-wrap knowledge-md:gap-6">
            <div className="w-2/4 text-base text-neutral800 dark:text-neutral50 about-xsm:text-sm knowledge-md:w-full">
              <p className="mb-2.5 text-justify">
                {t('knowledge:surfacesDescription')}
              </p>
              <p className="mb-2.5 text-justify">
                {t('knowledge:surfacesDescriptionBotton')}
              </p>
              <ul className="flex flex-col gap-2">
                {placesItems.map((item, index) => (
                  <div
                    className="flex items-center gap-3"
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
                    <li className="text-base text-neutral800 dark:text-neutral50 about-xsm:text-sm">
                      {item}
                    </li>
                  </div>
                ))}
              </ul>
            </div>
            <div className="flex w-2/4 flex-col gap-6 knowledge-md:w-full">
              <div className="relative h-[60vh] w-full knowledge-md:h-[30vh]">
                <Image
                  alt=""
                  layout="fill"
                  objectFit="cover"
                  placeholder="blur"
                  src={knowledgePlaces}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mx-auto mb-20 h-fit max-w-screen-2xl px-24 services-xs:mb-12 services-xs:px-14 about-sm:px-10 about-xsm:px-6">
        <div className="flex items-center justify-between gap-12 knowledge-md:flex-wrap knowledge-md:gap-6">
          <div className="flex w-2/4 flex-col gap-6 knowledge-md:order-2 knowledge-md:w-full">
            <div className="relative h-[60vh] w-full knowledge-md:h-[30vh]">
              <Image
                alt=""
                layout="fill"
                objectFit="cover"
                placeholder="blur"
                src={knowledgePlaces2}
              />
            </div>
          </div>
          <div className="w-2/4 text-base text-neutral800 dark:text-neutral50 about-xsm:text-sm knowledge-md:w-full">
            <p className="mb-2.5 text-justify">
              {t('knowledge:surfacesSecond')}
            </p>
            <p className="mb-2.5 text-justify">
              {t('knowledge:surfacesSecondDescription')}
            </p>
            <p className="mb-2.5 text-justify">
              {t('knowledge:surfacesSecondDescriptionBottom')}
            </p>
            <ul className="flex flex-col gap-2">
              {typesItems.map((item, index) => (
                <div
                  className="flex items-center gap-3"
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
                        d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <li className="text-base text-neutral800 dark:text-neutral50 about-xsm:text-sm">
                    {item}
                  </li>
                </div>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <section className="mx-auto mb-20 h-fit max-w-screen-2xl px-24 services-xs:mb-12 services-xs:px-14 about-sm:px-10 about-xsm:px-6">
        <div className="flex items-stretch justify-center gap-12 about-md:flex-wrap about-md:gap-6">
          {cardItems.map((item, index) => (
            <div
              className="flex min-h-[270px] w-1/3 flex-col justify-between about-md:w-full "
              key={index}
            >
              <div className="relative flex h-2/4 min-h-[148px] flex-col items-center justify-center bg-neutral100 p-8 text-center dark:bg-neutral900 about-md:p-4">
                <h5 className="mb-2 text-base text-neutral800 dark:text-neutral50">
                  {item.title}
                </h5>
                <span className="text-base text-neutral800 dark:text-neutral50">
                  {item.subtitle}
                </span>
                <span className="bottom-50% absolute w-full translate-y-[150%] text-center text-5xl">
                  §
                </span>
              </div>
              <div className="flex h-2/4 min-h-[128px] flex-col items-center justify-around bg-neutral200 p-8 text-center dark:bg-neutral700 about-md:p-4">
                <p className="text-sm text-neutral800 dark:text-neutral50">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <ContactShort />
    </PageLayout>
  )
}

export async function getStaticProps({ locale }: { locale: string }) {
  const { base64 } = await getPlaiceholder('/images/pendulum-knowledge.gif')
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        'navbar',
        'footer',
        'knowledge',
        'contact',
        'seo',
        'cookies',
      ])),
      gifBlur: base64,
    },
  }
}

export default Knowledge

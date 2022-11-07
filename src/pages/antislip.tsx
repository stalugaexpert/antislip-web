import { PageLayout, Recommendations } from '@components'
import type { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const Antislip: NextPage = () => {
  const { t } = useTranslation()

  const sampleBlogData = [
    {
      title: "Dlaczego należy badać odporność na poślizg?",
      image: "/images/test-blog-1.png",
      alt: "sample alt",
      url: "/test"
    },
    {
      title: "Czym jest współczynnik poślizgu PTV?",
      image: "/images/test-blog-2.png",
      alt: "sample alt",
      url: "/test"
    }
  ]

  const attributesItems = [
    {
      title: t('antislip:attributes.first.title'),
      description: t('antislip:attributes.first.description')
    },
    {
      title: t('antislip:attributes.second.title'),
      description: t('antislip:attributes.second.description')
    },
    {
      title: t('antislip:attributes.third.title'),
      description: t('antislip:attributes.third.description')
    },
    {
      title: t('antislip:attributes.fourth.title'),
      description: t('antislip:attributes.fourth.description')
    },
  ]

  const attributesTechnology = [t('antislip:attributesTechnology.first'), t('antislip:attributesTechnology.second'), t('antislip:attributesTechnology.third'), t('antislip:attributesTechnology.fourth'), t('antislip:attributesTechnology.fifth'), t('antislip:attributesTechnology.sixth'), t('antislip:attributesTechnology.seventh'), t('antislip:attributesTechnology.eighth')]

  return (
    <PageLayout>
      <section className='px-24 pt-32 navbar-md:pt-24 max-w-screen-2xl mx-auto mb-20 services-xs:mb-12 services-xs:px-14 about-sm:px-10 about-xsm:px-6'>
        <div className='flex justify-between mb-12'>
          <div className='w-3/4 recommendations-ds:w-[85%]'>
            <h5 className='text-base about-md:text-sm font-semibold text-amber400 mb-4'>{t('antislip:ourServices')}</h5>
            <h2 className='text-4xl mb-6 about-md:text-3xl about-xsm:text-2xl font-semibold text-neutral800 dark:text-neutral50'>{t('antislip:antislipDescription')}</h2>
            <h2 className='text-lg about-xsm:text-base font-normal text-neutral800 dark:text-neutral100'>{t('antislip:heroDescription')}</h2>
          </div>
          <div className='p-3 about-md:p-2 rounded-md bg-neutral50 dark:bg-neutral200 w-fit h-fit'>
            <div className="relative w-[45px] h-[39px] about-md:w-[24px] about-md:h-[20.4px]">
              <Image
                alt=""
                layout="fill"
                objectFit='cover'
                src="/icons/slip.png"
              />
            </div>
          </div>
        </div>
        <div className='relative h-[31.2rem] about-md:h-[30vh] w-full'>
          <Image
            alt=""
            layout="fill"
            objectFit='cover'
            src="/images/antislip-hero.png"
          />
        </div>
      </section>
      <section className='px-24 max-w-screen-2xl mx-auto mb-20 h-fit services-xs:mb-12 services-xs:px-14 about-sm:px-10 about-xsm:px-6'>
        <div className='flex justify-between gap-32 relative about-md:flex-wrap about-md:gap-14'>
          <div className='w-[75%] about-md:w-full'>
            <div className='flex flex-col gap-8 mb-14'>
              {attributesItems.map((item, index) => (
                <div
                  className="flex flex-col gap-3 text-justify"
                  key={index}
                >
                  <h3 className='font-semibold text-left text-xl about-md:text-base text-neutral800 dark:text-neutral50'>{item.title}</h3>
                  <p className='font-normal text-base about-md:text-sm text-neutral700 dark:text-neutral200'>{item.description}</p>
                </div>
              ))}
            </div>
            <section className='mb-14'>
              <div className='bg-neutral50 dark:bg-neutral700 p-8 flex flex-col gap-4'>
                <h4 className='text-3xl about-md:text-xl font-semibold text-neutral800 dark:text-neutral50'>{t('antislip:zapTechnology')}</h4>
                <h5 className='text-base font-normal text-neutral700 dark:text-neutral200'>{t('antislip:zapDetails')}</h5>
                <h5 className='text-base about-md:text-sm font-normal text-neutral700 dark:text-neutral200'>{t('antislip:zapCheck')}</h5>
              </div>
            </section>
            <section className='mb-10'>
              <h3 className='font-semibold text-xl about-md:text-base text-neutral800 dark:text-neutral50 mb-6'>{t('antislip:security')}</h3>
              <div className='flex flex-col gap-4'>
                {attributesTechnology.map((item, index) => (
                  <div
                    className="flex items-center gap-4"
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
                          d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <p className='text-base about-md:text-sm font-normal text-neutral800 dark:text-neutral50'>{item}</p>
                  </div>
                ))}
              </div>
            </section>
            <div className='relative h-[50vh] about-md:h-[30vh] w-full mb-10'>
              <Image
                alt=""
                layout="fill"
                objectFit='cover'
                src="/images/antislip-hero-2.png"
              />
            </div>
            <section className='mb-10 text-justify'>
              <div className='mb-10'>
                <h3 className='font-semibold text-left text-xl about-md:text-base text-neutral800 dark:text-neutral50 mb-3'>{t('antislip:measurement')}</h3>
                <p className='text-base font-normal about-md:text-sm text-neutral800 dark:text-neutral50'>{t('antislip:measurementDescription')}</p>
              </div>
              <div>
                <h3 className='font-semibold text-left about-md:text-base text-xl text-neutral800 dark:text-neutral50 mb-3'>{t('antislip:measurementHow')}</h3>
                <p className='text-base about-md:text-sm font-normal text-neutral800 dark:text-neutral50 mb-3'>{t('antislip:measurementHowDescription')}</p>
                <p className='text-base about-md:text-sm font-normal text-neutral800 dark:text-neutral50 inline'>{t('antislip:measurementLink')}</p>
                <Link href="/friction-measurement">
                  <a className='font-semibold text-base about-md:text-sm text-amber400 duration-300 hover:opacity-75'>{t('antislip:here')}</a>
                </Link>
              </div>
            </section>
            <section>
              <div className='text-justify'>
                <h3 className='font-semibold text-left text-xl about-md:text-base text-neutral800 dark:text-neutral50 mb-3'>{t('antislip:antislipWhen')}</h3>
                <p className='text-base about-md:text-sm font-normal text-neutral800 dark:text-neutral50 mb-2'>{t('antislip:antislipWhenDescription')}</p>
                <p className='text-base about-md:text-sm font-normal text-neutral800 dark:text-neutral50 mb-2'>{t('antislip:antislipWhenDescriptionBottom')}</p>
                <p className='text-base about-md:text-sm font-normal text-neutral800 dark:text-neutral50 inline'>{t('antislip:antislipWhenLink')}</p>
                <Link href="/knowledge">
                  <a className='font-semibold text-base about-md:text-sm text-amber400 duration-300 hover:opacity-75'>{t('antislip:here')}</a>
                </Link>
              </div>
            </section>
          </div>

          <div className='sticky h-fit w-fit about-md:static about-md:w-full top-[15%] flex flex-col gap-20 about-md:gap-8'>
            <span className='hidden text-xl about-md:text-base font-semibold about-md:block'>{t('antislip:readMore')}</span>
            {sampleBlogData.map((post, index) => (
              <Link
                href={post.url}
                key={index}
              >
                <a>
                  <div
                    className="flex flex-col gap-4"
                  >
                    <div className='relative h-[153px] about-md:h-[20vh] w-full'>
                      <Image
                        alt={post.alt}
                        layout="fill"
                        objectFit='cover'
                        src={post.image}
                      />
                    </div>
                    <h5 className='text-sm font-semibold about-md:font-normal text-neutral800 dark:text-neutral50'>{post.title}</h5>
                  </div>
                </a>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <Recommendations />
    </PageLayout>
  )
}

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['navbar', 'footer', 'antislip', 'recommendations'])),
    },
  }
}

export default Antislip

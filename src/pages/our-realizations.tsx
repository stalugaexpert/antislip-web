import { HeroPages, PageLayout, Seo } from '@components'
import type { NextPage } from 'next'
import Image from 'next/image'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { OurRealizationsQuery } from 'src/graphql/generated/graphql'
import { getCorrectImageLargest } from 'src/utils/helpers/getCorrectImage'
import { getAllRealizations } from 'src/utils/requests/requests'

import realizationsHero from '../../public/images/realizations-hero-1.jpg'
import realizationsHero2 from '../../public/images/realizations-hero-2.jpg'

interface IOurRealizationsPageProps {
  ourRealizationsAll: OurRealizationsQuery
}

const Realizations: NextPage<IOurRealizationsPageProps> = ({
  ourRealizationsAll,
}) => {
  const { t } = useTranslation()

  return (
    <PageLayout>
      <Seo
        description={t('seo:measurement.metaDescription')}
        title={t('seo:measurement.title')}
      />
      <HeroPages
        description={t('realizations:description')}
        image={realizationsHero}
        imageSecond={realizationsHero2}
        section={t('realizations:trustSpecialists')}
        title={t('realizations:checkOurRealizations')}
      />
      <section className="mx-auto mb-20 h-fit max-w-screen-2xl px-24 services-xs:mb-12 services-xs:px-14 about-sm:px-10 about-xsm:px-6">
        <h2 className="mb-9 text-3xl font-semibold text-neutral800 dark:text-neutral50 about-xsm:text-2xl">
          {t('realizations:ourRealizations')}
        </h2>
        <div>
          <div className="grid grid-cols-2 gap-12 blog-sm:grid-cols-1">
            {ourRealizationsAll.ourRealizations?.data.map((realization) => (
              <div key={realization.id}>
                <div className="relative mb-3 h-[350px] w-full overflow-hidden rounded-lg about-md:h-[30vh] blog-sm:h-[35vh]">
                  <Image
                    alt=""
                    className="duration-300 hover:scale-110 hover:opacity-70"
                    layout="fill"
                    objectFit="cover"
                    src={getCorrectImageLargest(
                      realization.attributes?.mainImage.data?.attributes
                        ?.formats
                    )}
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <h5 className="text-lg font-bold text-neutral800 dark:text-neutral50 knowledge-md:text-base">
                    {realization.attributes?.objectName}
                  </h5>
                  <div>
                    <p className="inline text-base font-semibold text-neutral800 dark:text-neutral50 knowledge-md:text-sm">
                      {t('realizations:task')}
                    </p>
                    <span className="text-base text-neutral800 dark:text-neutral50 about-md:font-normal knowledge-md:text-sm">
                      {realization.attributes?.job}
                    </span>
                  </div>
                  <div>
                    <p className="inline text-base font-semibold text-neutral800 dark:text-neutral50 knowledge-md:text-sm">
                      {t('realizations:material')}
                    </p>
                    <span className="text-base text-neutral800 dark:text-neutral50 about-md:font-normal knowledge-md:text-sm">
                      {realization.attributes?.material}
                    </span>
                  </div>
                  {realization.attributes?.space && (
                    <div>
                      <p className="inline text-base font-semibold text-neutral800 dark:text-neutral50 knowledge-md:text-sm">
                        {t('realizations:space')}
                      </p>
                      <span className="text-base text-neutral800 dark:text-neutral50 about-md:font-normal knowledge-md:text-sm">
                        {realization.attributes.space}
                      </span>
                    </div>
                  )}
                  {realization.attributes?.area && (
                    <div>
                      <p className="inline text-base font-semibold text-neutral800 dark:text-neutral50 knowledge-md:text-sm">
                        {t('realizations:surface')}
                      </p>
                      <span className="text-base text-neutral800 dark:text-neutral50 about-md:font-normal knowledge-md:text-sm">{`${realization.attributes.area} m`}</span>
                      <span className="align-super text-xs text-neutral800 dark:text-neutral50 about-md:font-normal">
                        2
                      </span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  )
}

export async function getStaticProps({ locale }: { locale: string }) {
  const localization = locale === 'pl' ? 'pl-PL' : 'en'

  const ourRealizationsAll = await getAllRealizations(localization)

  return {
    props: {
      ...(await serverSideTranslations(locale, [
        'navbar',
        'footer',
        'realizations',
        'contact',
        'seo',
        'cookies',
      ])),
      ourRealizationsAll,
    },
  }
}

export default Realizations

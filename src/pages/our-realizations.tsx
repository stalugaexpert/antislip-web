/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  HeroPages,
  PageLayout,
  Seo,
} from '@components'
import type { NextPage } from 'next'
import Image from 'next/image'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { getPlaiceholder } from 'plaiceholder'
import { fetchAllRealizations } from 'src/utils/api/service'
import { getCorrectImageLargest } from 'src/utils/helpers/getCorrectImage'

import realizationsHero from '../../public/images/realizations-hero-1.jpg'
import realizationsHero2 from '../../public/images/realizations-hero-2.jpg'

const Realizations: NextPage = ({ ourRealizationsAll }: any) => {
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
      <section className="px-24 max-w-screen-2xl mx-auto mb-20 h-fit services-xs:mb-12 services-xs:px-14 about-sm:px-10 about-xsm:px-6">
        <h2 className="font-semibold text-3xl text-neutral800 dark:text-neutral50 mb-9 about-xsm:text-2xl">
          {t('realizations:ourRealizations')}
        </h2>
        <div>
          <div className="grid grid-cols-2 blog-sm:grid-cols-1 gap-12">
            {ourRealizationsAll.data.map((realization: any) => (
              <div
                key={realization.id}
              >
                <div className="relative h-[350px] about-md:h-[30vh] blog-sm:h-[35vh] w-full mb-3 rounded-lg overflow-hidden">
                  <Image
                    alt=""
                    className="hover:scale-110 hover:opacity-70 duration-300"
                    layout="fill"
                    objectFit="cover"
                    src={getCorrectImageLargest(realization.attributes.mainImage.data.attributes.formats)}
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <h5 className="text-lg knowledge-md:text-base font-bold text-neutral800 dark:text-neutral50">
                    {realization.attributes.objectName}
                  </h5>
                  <div>
                    <p className="text-base knowledge-md:text-sm inline font-semibold text-neutral800 dark:text-neutral50">{t('realizations:task')}</p>
                    <span className="text-base knowledge-md:text-sm about-md:font-normal text-neutral800 dark:text-neutral50">{realization.attributes.job}</span>
                  </div>
                  <div>
                    <p className="text-base knowledge-md:text-sm inline font-semibold text-neutral800 dark:text-neutral50">{t('realizations:material')}</p>
                    <span className="text-base knowledge-md:text-sm about-md:font-normal text-neutral800 dark:text-neutral50">{realization.attributes.material}</span>
                  </div>
                  {realization.attributes.space && (
                    <div>
                      <p className="text-base knowledge-md:text-sm inline font-semibold text-neutral800 dark:text-neutral50">{t('realizations:space')}</p>
                      <span className="text-base knowledge-md:text-sm about-md:font-normal text-neutral800 dark:text-neutral50">{realization.attributes.space}</span>
                    </div>
                  )}
                  {realization.attributes.area && (
                    <div>
                      <p className="text-base knowledge-md:text-sm inline font-semibold text-neutral800 dark:text-neutral50">{t('realizations:surface')}</p>
                      <span className="text-base knowledge-md:text-sm about-md:font-normal text-neutral800 dark:text-neutral50">{`${realization.attributes.area} m`}</span>
                      <span className="text-xs about-md:font-normal text-neutral800 dark:text-neutral50 align-super">2</span>
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
  const {
    base64,
  } = await getPlaiceholder('/images/pendulum-knowledge.gif')
  const localization = locale === 'pl' ? 'pl-PL' : 'en'
  const resOurRealizationsAll = await fetchAllRealizations(localization)

  return {
    props: {
      ...(await serverSideTranslations(locale, [
        'navbar',
        'footer',
        'realizations',
        'contact',
        'seo',
        'cookies'
      ])),
      gifBlur: base64,
      ourRealizationsAll: await resOurRealizationsAll.json(),
    },
  }
}

export default Realizations

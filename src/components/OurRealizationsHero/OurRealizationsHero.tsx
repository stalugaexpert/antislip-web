/* eslint-disable @typescript-eslint/no-explicit-any */
import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useTranslation } from 'next-i18next'
import { getCorrectImageSmallest } from 'src/utils/helpers/getCorrectImage'

interface IOurRealizationsHeroProps {
  ourRealizationsAll?: any
}

export const OurRealizationsHero = ({ ourRealizationsAll }: IOurRealizationsHeroProps) => {
  const { t } = useTranslation()

  return (
    <section className="px-[11rem] max-w-screen-2xl mx-auto mb-20 h-fit services-xs:mb-12 recommendations-md:px-32 recommendations-ds:px-16 recommendations-sm:px-10 about-sm:px-6">
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1 }}
        >
          <h5 className="text-amber400 text-base font-semibold mb-6 about-xsm:text-sm">
            {t('realizations:trustSpecialists')}
          </h5>
          <h2 className="font-semibold text-3xl text-neutral800 dark:text-neutral50 mb-9 about-xsm:text-2xl">
            {t('realizations:ourRealizations')}
          </h2>
        </motion.div>
      </AnimatePresence>
      <div>
        <div className="grid grid-cols-3 knowledge-md:grid-cols-2 blog-sm:grid-cols-1 gap-12 blog-sm:gap-6">
          {ourRealizationsAll.data.slice(-2).map((realization: any) => (
            <AnimatePresence key={realization.id}>
              <motion.div
                initial={{ x: -300, opacity: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                whileInView={{ x: 0, opacity: 1 }}
              >
                <div className="duration-300 hover:opacity-70">
                  <div className="relative h-[185px] about-md:h-[20vh] blog-sm:h-[25vh] w-full mb-3 rounded-lg overflow-hidden">
                    <Image
                      alt=""
                      className="hover:scale-110 duration-300"
                      layout="fill"
                      objectFit="cover"
                      src={getCorrectImageSmallest(realization.attributes.mainImage.data.attributes.formats)}
                    />
                  </div>
                  <h5 className="text-base font-bold text-neutral800 dark:text-neutral50">
                    {realization.attributes.objectName}
                  </h5>
                  <div>
                    <p className="text-sm inline font-semibold text-neutral800 dark:text-neutral50">{t('realizations:task')}</p>
                    <span className="text-sm about-md:font-normal text-neutral800 dark:text-neutral50">{realization.attributes.job}</span>
                  </div>
                  <div>
                    <p className="text-sm inline font-semibold text-neutral800 dark:text-neutral50">{t('realizations:material')}</p>
                    <span className="text-sm about-md:font-normal text-neutral800 dark:text-neutral50">{realization.attributes.material}</span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          ))}
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1 }}
            >
              <Link href="/our-realizations">
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
                        {t('realizations:ourAllRealizations')}
                      </span>
                      <span className="text-base about-md:text-sm font-normal text-amber600">
                        {t('realizations:seeMore')}
                      </span>
                    </div>
                  </div>
                </a>
              </Link>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}

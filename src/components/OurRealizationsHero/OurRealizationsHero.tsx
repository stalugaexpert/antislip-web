import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useTranslation } from 'next-i18next'
import { OurRealizationsQuery } from 'src/graphql/generated/graphql'
import { getCorrectImageSmallest } from 'src/utils/helpers/getCorrectImage'

interface IOurRealizationsHeroProps {
  ourRealizationsAll?: OurRealizationsQuery
}

export const OurRealizationsHero = ({
  ourRealizationsAll,
}: IOurRealizationsHeroProps) => {
  const { t } = useTranslation()

  return (
    <section className="mx-auto mb-20 h-fit max-w-screen-2xl px-[11rem] recommendations-md:px-32 recommendations-ds:px-16 recommendations-sm:px-10 services-xs:mb-12 about-sm:px-6">
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1 }}
        >
          <h5 className="mb-6 text-base font-semibold text-amber400 about-xsm:text-sm">
            {t('realizations:trustSpecialists')}
          </h5>
          <h2 className="mb-9 text-3xl font-semibold text-neutral800 dark:text-neutral50 about-xsm:text-2xl">
            {t('realizations:ourRealizations')}
          </h2>
        </motion.div>
      </AnimatePresence>
      <div>
        <div className="grid grid-cols-3 gap-12 knowledge-md:grid-cols-2 blog-sm:grid-cols-1 blog-sm:gap-6">
          {ourRealizationsAll?.ourRealizations?.data
            .slice(0, 2)
            .map((realization) => (
              <AnimatePresence key={realization.id}>
                <motion.div
                  initial={{ x: -300, opacity: 0 }}
                  transition={{ duration: 0.7 }}
                  viewport={{ once: true }}
                  whileInView={{ x: 0, opacity: 1 }}
                >
                  <div className="duration-300 hover:opacity-70">
                    <div className="relative mb-3 h-[185px] w-full overflow-hidden rounded-lg about-md:h-[20vh] blog-sm:h-[25vh]">
                      <Image
                        alt=""
                        className="duration-300 hover:scale-110"
                        layout="fill"
                        objectFit="cover"
                        src={getCorrectImageSmallest(
                          realization.attributes?.mainImage.data?.attributes
                            ?.formats
                        )}
                      />
                    </div>
                    <h5 className="text-base font-bold text-neutral800 dark:text-neutral50">
                      {realization.attributes?.objectName}
                    </h5>
                    <div>
                      <p className="inline text-sm font-semibold text-neutral800 dark:text-neutral50">
                        {t('realizations:task')}
                      </p>
                      <span className="text-sm text-neutral800 dark:text-neutral50 about-md:font-normal">
                        {realization.attributes?.job}
                      </span>
                    </div>
                    <div>
                      <p className="inline text-sm font-semibold text-neutral800 dark:text-neutral50">
                        {t('realizations:material')}
                      </p>
                      <span className="text-sm text-neutral800 dark:text-neutral50 about-md:font-normal">
                        {realization.attributes?.material}
                      </span>
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
                        {t('realizations:ourAllRealizations')}
                      </span>
                      <span className="text-base font-normal text-amber600 about-md:text-sm">
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

import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useTranslation } from 'next-i18next'

import heroImage from '../../../public/images/hero-image.jpg'

export const HeroSection = () => {
  const { t } = useTranslation()

  return (
    <section className="mx-auto mb-16 max-w-screen-2xl px-36 pt-32 navbar-md:pt-24 services-sm:pl-24 services-sm:pr-[8rem] services-xs:mb-12 services-xs:pl-14 about-md:pr-14 about-sm:px-10 about-xsm:px-6">
      <AnimatePresence>
        <motion.div
          initial={{ x: -300, opacity: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          whileInView={{ x: 0, opacity: 1 }}
        >
          <h5 className="mb-6 text-base font-semibold text-amber400 about-md:text-sm">
            {t('hero:technology')}
          </h5>
          <div className="mb-8">
            <h2 className="text-4xl font-semibold text-neutral800 dark:text-neutral50 about-md:text-3xl about-xsm:text-2xl">
              {t('hero:description')}
            </h2>
            <h2 className="text-4xl font-semibold text-neutral800 dark:text-neutral50 about-md:text-3xl about-xsm:text-2xl">
              {t('hero:descriptionBottom')}
            </h2>
          </div>
        </motion.div>
      </AnimatePresence>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1 }}
        >
          <div className="relative h-[31.2rem] w-full about-md:h-[30vh]">
            <Image
              alt={t('hero:imageAlt')}
              layout="fill"
              objectFit="cover"
              placeholder="blur"
              src={heroImage}
            />
            <div className="absolute -right-24 top-2/4 max-w-[25rem] -translate-y-2/4 bg-neutral50 p-10 dark:bg-neutral700 about-md:hidden">
              <p className="mb-4 text-sm font-normal text-neutral700 dark:text-neutral200">
                {t('hero:stats')}
              </p>
              <Link href="/blog">
                <a>
                  <div className="flex items-center gap-2 text-neutral700 duration-300 hover:translate-x-1 hover:opacity-70 dark:text-neutral100">
                    <svg
                      className="h-3 w-3"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={1.5}
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span className="text-xs font-semibold text-neutral700 dark:text-neutral100">
                      {t('hero:button')}
                    </span>
                  </div>
                </a>
              </Link>
            </div>
          </div>
          <div className="hidden max-w-full bg-neutral50 p-6 dark:bg-neutral700 about-md:block">
            <p className="mb-4 text-sm font-normal text-neutral700 dark:text-neutral200">
              {t('hero:stats')}
            </p>
            <Link href="/blog">
              <a>
                <div className="flex items-center gap-2 text-neutral700 duration-300 hover:translate-x-1 hover:opacity-70 dark:text-neutral100">
                  <svg
                    className="h-3 w-3"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="text-xs font-semibold text-neutral700 dark:text-neutral100">
                    {t('hero:button')}
                  </span>
                </div>
              </a>
            </Link>
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  )
}

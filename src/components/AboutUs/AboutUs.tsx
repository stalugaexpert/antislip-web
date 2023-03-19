import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import { useTranslation } from 'next-i18next'

import aboutImage from '../../../public/images/about-image.jpg'

export const AboutUs = () => {
  const { t } = useTranslation()

  const aboutProps = [
    {
      title: t('about:titleFirst'),
      description: t('about:descriptionFirst'),
    },
    {
      title: t('about:titleSecond'),
      description: t('about:descriptionSecond'),
    },
    {
      title: t('about:titleThird'),
      description: t('about:descriptionThird'),
    },
  ]

  return (
    <section className="mx-auto mb-20 max-w-screen-2xl px-[11rem] recommendations-md:px-32 recommendations-ds:px-16 recommendations-sm:px-10 services-xs:mb-12 about-sm:px-6">
      <div>
        <AnimatePresence>
          <motion.div
            initial={{ x: -300, opacity: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            whileInView={{ x: 0, opacity: 1 }}
          >
            <h5 className="mb-6 text-base font-semibold text-amber400 about-xsm:text-sm">
              {t('about:aboutUs')}
            </h5>
            <h2 className="mb-9 text-3xl font-semibold text-neutral800 dark:text-neutral50 about-xsm:text-2xl">
              {t('about:leader')}
            </h2>
          </motion.div>
        </AnimatePresence>
        <div className="flex justify-between about-md:flex-wrap">
          <div className="flex w-2/4 flex-col gap-9 about-md:order-2 about-md:w-full about-md:gap-6">
            {aboutProps.map((section, index) => (
              <AnimatePresence key={index}>
                <motion.div
                  className="flex flex-col items-start gap-5 about-md:gap-2"
                  initial={{ opacity: 0 }}
                  transition={{ duration: 0.7 }}
                  viewport={{ once: true, amount: 0.7 }}
                  whileInView={{ opacity: 1 }}
                >
                  <h4 className="text-xl font-semibold text-neutral800 dark:text-neutral50 about-xsm:text-base">
                    {section.title}
                  </h4>
                  <p className="text-base font-normal text-neutral600 dark:text-neutral200 about-xsm:text-sm">
                    {section.description}
                  </p>
                </motion.div>
              </AnimatePresence>
            ))}
          </div>
          <AnimatePresence>
            <motion.div
              className="relative h-[31.2rem] w-[23.5rem] before:absolute before:top-full before:left-full before:z-10 before:h-48 before:w-48 before:-translate-x-full before:-translate-y-2/4 before:bg-amber400 before:opacity-50 before:blur-[100px] before:content-[''] dark:before:opacity-30 about-md:mb-8 about-md:max-h-[30vh] about-md:w-full about-md:before:hidden"
              initial={{ opacity: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              whileInView={{ opacity: 1 }}
            >
              <Image
                alt={t('about:imageAlt')}
                layout="fill"
                objectFit="cover"
                placeholder="blur"
                src={aboutImage}
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}

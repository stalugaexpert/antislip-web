import { AnimatePresence, motion } from 'framer-motion'
import { useTranslation } from 'next-i18next'

export const OurMission = () => {
  const { t } = useTranslation()

  return (
    <section className="px-[11rem] mb-20 services-xs:mb-12 recommendations-md:px-32 recommendations-ds:px-16 recommendations-sm:px-10 about-sm:px-6 max-w-screen-2xl mx-auto">
      <AnimatePresence>
        <motion.div
          initial={{ x: -300, opacity: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          whileInView={{ x: 0, opacity: 1 }}
        >
          <h2 className="font-semibold text-3xl text-neutral800 dark:text-neutral50 mb-8 about-xsm:text-2xl">
            {t('mission:about')}
          </h2>
          <p className="text-base about-md:text-sm font-normal text-neutral800 dark:text-neutral50 mb-10">
            {t('mission:aboutDescription')}
          </p>
        </motion.div>
      </AnimatePresence>
      <div className="flex flex-col gap-20 mission-sm:gap-10">
        <AnimatePresence>
          <motion.div
            className="flex items-center justify-between gap-12"
            initial={{ opacity: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, amount: 0.7 }}
            whileInView={{ opacity: 1 }}
          >
            <div className="h-28 w-28 mission-sm:hidden">
              <div className="relative h-28 w-28 p-6 bg-neutral200 dark:bg-neutral900 rounded-full">
                <svg
                  className="w-18 h-18"
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
            </div>
            <div className="w-[90%] mission-sm:w-full">
              <div className="flex items-center justify-between mb-4">
                <h5 className="font-semibold text-left text-xl about-md:text-base text-neutral800 dark:text-neutral50">
                  {t('mission:ourMissionItems.first.title')}
                </h5>
                <div className="hidden items-center justify-center mission-sm:flex h-12 w-12 p-2 bg-neutral200 dark:bg-neutral900 rounded-full">
                  <svg
                    className="w-8 h-8"
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
              </div>
              <div className="mb-3">
                <p className="text-base inline about-md:text-sm font-normal text-neutral800 dark:text-neutral50">
                  {t('mission:ourMissionItems.first.descriptionTop')}
                </p>
                <span className="text-base about-md:text-sm font-semibold  text-amber400">
                  {t('mission:ourMissionItems.first.descriptionMiddle')}
                </span>
                <p className="text-base inline about-md:text-sm font-normal text-neutral800 dark:text-neutral50">
                  {t('mission:ourMissionItems.first.descriptionBottom')}
                </p>
              </div>
              <p className="text-base about-md:text-sm font-semibold text-neutral800 dark:text-neutral50">
                {t('mission:ourMissionItems.first.descriptionAdd')}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>

        <AnimatePresence>
          <motion.div
            className="flex items-center justify-between gap-12"
            initial={{ opacity: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, amount: 0.7 }}
            whileInView={{ opacity: 1 }}
          >
            <div className="h-28 w-28 mission-sm:hidden order-2">
              <div className="relative text-neutral50 h-28 w-28 p-6 bg-amber600 rounded-full">
                <svg
                  className="w-18 h-18"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
            <div className="w-[90%] mission-sm:w-full">
              <div className="flex items-center justify-between mb-4">
                <h5 className="font-semibold text-left text-xl about-md:text-base text-neutral800 dark:text-neutral50">
                  {t('mission:ourMissionItems.second.title')}
                </h5>
                <div className="hidden bg-amber600 text-neutral50 items-center justify-center mission-sm:flex h-12 w-12 p-2 rounded-full">
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
              <div className="mb-3">
                <p className="text-base about-md:text-sm font-normal">
                  {t('mission:ourMissionItems.second.descriptionTop')}
                </p>
                <p className="text-base about-md:text-sm font-normal text-neutral800 dark:text-neutral50">
                  {t('mission:ourMissionItems.second.descriptionMiddle')}
                </p>
                <p className="text-base about-md:text-sm font-normal text-neutral800 dark:text-neutral50">
                  {t('mission:ourMissionItems.second.descriptionBottom')}
                </p>
              </div>
              <p className="text-base about-md:text-sm font-semibold text-neutral800 dark:text-neutral50">
                {t('mission:ourMissionItems.second.descriptionAdd')}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>

        <AnimatePresence>
          <motion.div
            className="flex items-center justify-between gap-12"
            initial={{ opacity: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, amount: 0.7 }}
            whileInView={{ opacity: 1 }}
          >
            <div className="h-28 w-28 mission-sm:hidden">
              <div className="relative h-28 w-28 p-6 bg-neutral200 dark:bg-neutral900 rounded-full">
                <svg
                  className="w-18 h-18"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
            <div className="w-[90%] mission-sm:w-full">
              <div className="flex items-center justify-between mb-4">
                <h5 className="font-semibold text-left text-xl about-md:text-base text-neutral800 dark:text-neutral50">
                  {t('mission:ourMissionItems.third.title')}
                </h5>
                <div className="hidden items-center justify-center mission-sm:flex h-12 w-12 p-2 bg-neutral200 dark:bg-neutral900 rounded-full">
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
              <div className="mb-3">
                <p className="text-base inline about-md:text-sm font-normal text-neutral800 dark:text-neutral50">
                  {t('mission:ourMissionItems.third.descriptionTop')}
                </p>
                <span className="text-base about-md:text-sm font-semibold  text-amber400">
                  {t('mission:ourMissionItems.third.descriptionMiddle')}
                </span>
                <p className="text-base inline about-md:text-sm font-normal text-neutral800 dark:text-neutral50">
                  {t('mission:ourMissionItems.third.descriptionBottom')}
                </p>
              </div>
              <p className="text-base about-md:text-sm font-semibold text-neutral800 dark:text-neutral50">
                {t('mission:ourMissionItems.third.descriptionAdd')}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>

        <AnimatePresence>
          <motion.div
            className="flex items-center justify-between gap-12"
            initial={{ opacity: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, amount: 0.7 }}
            whileInView={{ opacity: 1 }}
          >
            <div className="h-28 w-28 mission-sm:hidden order-2">
              <div className="relative text-neutral50 h-28 w-28 p-6 bg-amber600 rounded-full">
                <svg
                  className="w-18 h-18"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
            <div className="w-[90%] mission-sm:w-full">
              <div className="flex items-center justify-between mb-4">
                <h5 className="font-semibold text-left text-xl about-md:text-base text-neutral800 dark:text-neutral50">
                  {t('mission:ourMissionItems.fourth.title')}
                </h5>
                <div className="hidden bg-amber600 text-neutral50 items-center justify-center mission-sm:flex h-12 w-12 p-2 rounded-full">
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
              <div className="mb-3">
                <p className="text-base inline about-md:text-sm font-normal text-neutral800 dark:text-neutral50">
                  {t('mission:ourMissionItems.fourth.descriptionTop')}
                </p>
                <span className="text-base about-md:text-sm font-semibold text-amber400">
                  {t('mission:ourMissionItems.fourth.descriptionMiddle')}
                </span>
              </div>
              <p className="text-base about-md:text-sm font-semibold text-neutral800 dark:text-neutral50">
                {t('mission:ourMissionItems.fourth.descriptionAdd')}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}

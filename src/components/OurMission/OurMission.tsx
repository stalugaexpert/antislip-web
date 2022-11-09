import Image from "next/image"
import { useTranslation } from "next-i18next"

export const OurMission = () => {
  const { t } = useTranslation()

  return (
    <section className="px-[11rem] mb-20 services-xs:mb-12 recommendations-md:px-32 recommendations-ds:px-16 recommendations-sm:px-10 about-sm:px-6 max-w-screen-2xl mx-auto">
      <h2 className="font-semibold text-3xl text-neutral800 dark:text-neutral50 mb-8 about-xsm:text-2xl">{t('mission:about')}</h2>
      <p className='text-base about-md:text-sm font-normal text-neutral800 dark:text-neutral50 mb-10'>{t('mission:aboutDescription')}</p>
      <div className="flex flex-col gap-10">
        <div className="flex items-center justify-between gap-12">
          <div className="h-28 w-28 mission-sm:hidden">
            <div className='relative h-28 w-28 p-6 bg-neutral200 dark:bg-neutral900 rounded-full'>
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
              {/* <Image
                alt=""
                layout="fill"
                objectFit='cover'
                src="/images/cleaning-image-1.png"
              /> */}
            </div>
          </div>
          <div className="w-[90%] mission-sm:w-full">
            <div className="flex items-center justify-between mb-4">
              <h5 className="font-semibold text-left text-xl about-md:text-base text-neutral800 dark:text-neutral50">{t('mission:ourMissionItems.first.title')}</h5>
              <div className='hidden items-center justify-center mission-sm:flex h-12 w-12 p-2 bg-neutral200 dark:bg-neutral900 rounded-full'>
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
              <p className="text-base inline about-md:text-sm font-normal text-neutral800 dark:text-neutral50">{t('mission:ourMissionItems.first.descriptionTop')}</p>
              <span className="text-base about-md:text-sm font-semibold  text-amber400">{t('mission:ourMissionItems.first.descriptionMiddle')}</span>
              <p className="text-base inline about-md:text-sm font-normal text-neutral800 dark:text-neutral50">{t('mission:ourMissionItems.first.descriptionBottom')}</p>
            </div>
            <p className="text-base about-md:text-sm font-semibold text-neutral800 dark:text-neutral50">{t('mission:ourMissionItems.first.descriptionAdd')}</p>
          </div>
        </div>

        <div className="flex items-center justify-between gap-12">
          <div className="h-28 w-28 mission-sm:hidden">
            <div className='relative text-neutral50 h-28 w-28 p-6 bg-amber600 rounded-full'>
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
              {/* <Image
                alt=""
                layout="fill"
                objectFit='cover'
                src="/images/cleaning-image-1.png"
              /> */}
            </div>
          </div>
          <div className="w-[90%] mission-sm:w-full">
            <div className="flex items-center justify-between mb-4">
              <h5 className="font-semibold text-left text-xl about-md:text-base text-neutral800 dark:text-neutral50">{t('mission:ourMissionItems.second.title')}</h5>
              <div className='hidden bg-amber600 text-neutral50 items-center justify-center mission-sm:flex h-12 w-12 p-2 rounded-full'>
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
              <p className="text-base about-md:text-sm font-normal">{t('mission:ourMissionItems.second.descriptionTop')}</p>
              <p className="text-base about-md:text-sm font-normal text-neutral800 dark:text-neutral50">{t('mission:ourMissionItems.second.descriptionMiddle')}</p>
              <p className="text-base about-md:text-sm font-normal text-neutral800 dark:text-neutral50">{t('mission:ourMissionItems.second.descriptionBottom')}</p>
            </div>
            <p className="text-base about-md:text-sm font-semibold text-neutral800 dark:text-neutral50">{t('mission:ourMissionItems.second.descriptionAdd')}</p>
          </div>
        </div>

        <div className="flex items-center justify-between gap-12">
          <div className="h-28 w-28 mission-sm:hidden">
            <div className='relative h-28 w-28 p-6 bg-neutral200 dark:bg-neutral900 rounded-full'>
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
              {/* <Image
                alt=""
                layout="fill"
                objectFit='cover'
                src="/images/cleaning-image-1.png"
              /> */}
            </div>
          </div>
          <div className="w-[90%] mission-sm:w-full">
            <div className="flex items-center justify-between mb-4">
              <h5 className="font-semibold text-left text-xl about-md:text-base text-neutral800 dark:text-neutral50">{t('mission:ourMissionItems.third.title')}</h5>
              <div className='hidden items-center justify-center mission-sm:flex h-12 w-12 p-2 bg-neutral200 dark:bg-neutral900 rounded-full'>
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
              <p className="text-base inline about-md:text-sm font-normal text-neutral800 dark:text-neutral50">{t('mission:ourMissionItems.third.descriptionTop')}</p>
              <span className="text-base about-md:text-sm font-semibold  text-amber400">{t('mission:ourMissionItems.third.descriptionMiddle')}</span>
              <p className="text-base inline about-md:text-sm font-normal text-neutral800 dark:text-neutral50">{t('mission:ourMissionItems.third.descriptionBottom')}</p>
            </div>
            <p className="text-base about-md:text-sm font-semibold text-neutral800 dark:text-neutral50">{t('mission:ourMissionItems.third.descriptionAdd')}</p>
          </div>
        </div>

        <div className="flex items-center justify-between gap-12">
          <div className="h-28 w-28 mission-sm:hidden">
            <div className='relative text-neutral50 h-28 w-28 p-6 bg-amber600 rounded-full'>
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
              {/* <Image
                alt=""
                layout="fill"
                objectFit='cover'
                src="/images/cleaning-image-1.png"
              /> */}
            </div>
          </div>
          <div className="w-[90%] mission-sm:w-full">
            <div className="flex items-center justify-between mb-4">
              <h5 className="font-semibold text-left text-xl about-md:text-base text-neutral800 dark:text-neutral50">{t('mission:ourMissionItems.fourth.title')}</h5>
              <div className='hidden bg-amber600 text-neutral50 items-center justify-center mission-sm:flex h-12 w-12 p-2 rounded-full'>
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
              <p className="text-base inline about-md:text-sm font-normal text-neutral800 dark:text-neutral50">{t('mission:ourMissionItems.fourth.descriptionTop')}</p>
              <span className="text-base about-md:text-sm font-semibold text-amber400">{t('mission:ourMissionItems.fourth.descriptionMiddle')}</span>
            </div>
            <p className="text-base about-md:text-sm font-semibold text-neutral800 dark:text-neutral50">{t('mission:ourMissionItems.fourth.descriptionAdd')}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

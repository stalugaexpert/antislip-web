import { AnimatePresence, motion } from 'framer-motion'
import { useTranslation } from 'next-i18next'
import Slider from 'react-slick'

import {
  IArrowProps,
  SliderHideArrow,
} from '../SliderHideArrow/SliderHideArrow'

const NextArrow = ({ onClick }: IArrowProps) => {
  return (
    <div
      className="absolute -bottom-[3.6rem] right-4 flex h-11 w-11 cursor-pointer items-center justify-center bg-neutral50 text-neutral800 duration-300 hover:translate-y-1 hover:opacity-80 dark:bg-neutral700 dark:text-neutral200 recommendations-sm:-top-[3rem] recommendations-sm:h-8 recommendations-sm:w-8"
      onClick={onClick}
    >
      <svg
        className="h-8 w-8"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
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
  )
}

const settings = {
  arrows: true,
  prevArrow: <SliderHideArrow />,
  nextArrow: <NextArrow />,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  centerMode: true,
  centerPadding: '40px',
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  pauseOnHover: true,
  responsive: [
    {
      breakpoint: 1140,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 840,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
}

export const Recommendations = () => {
  const { t } = useTranslation()

  const recommendationsList = [
    {
      description: t('recommendations:recommendations.test1'),
      name: 'Company name',
    },
    {
      description: t('recommendations:recommendations.test2'),
      name: 'Company name',
    },
    {
      description: t('recommendations:recommendations.test3'),
      name: 'Company name',
    },
    {
      description: t('recommendations:recommendations.test4'),
      name: 'Company name',
    },
    {
      description: t('recommendations:recommendations.test5'),
      name: 'Company name',
    },
    {
      description: t('recommendations:recommendations.test6'),
      name: 'Company name',
    },
    {
      description: t('recommendations:recommendations.test1'),
      name: 'Company name',
    },
  ]

  return (
    <AnimatePresence>
      <motion.section
        className="mb-20 px-16 recommendations-sm:px-10 services-xs:mb-12 about-sm:px-6"
        initial={{ opacity: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true, amount: 0.5 }}
        whileInView={{ opacity: 1 }}
      >
        <div className="max-w-[90.625rem] bg-amber400 py-[4.5rem] pl-24 dark:bg-neutral900 section-min:mx-auto recommendations-mx:pl-12 recommendations-md:pl-6 recommendations-ds:py-6">
          <div className="mb-12 flex items-end justify-between recommendations-ds:mb-6">
            <div>
              <h5 className="text-3xl font-semibold text-neutral900 dark:text-neutral50 recommendations-xsm:text-xl">
                {t('recommendations:aboutUs')}
              </h5>
              <h5 className="text-3xl font-semibold text-neutral900 dark:text-neutral50 recommendations-xsm:text-xl">
                {t('recommendations:clients')}
              </h5>
            </div>
            <h5 className="pr-24 text-sm font-normal text-neutral900 dark:text-neutral200 recommendations-ds:hidden">
              {t('recommendations:aboutNumbers')}
            </h5>
          </div>
          <Slider {...settings}>
            {recommendationsList.map((item, index) => (
              <div
                className="w-full"
                key={index}
              >
                <div className="mx-4 flex flex-col items-center justify-center bg-neutral50 p-6 dark:bg-neutral700 recommendations-xsm:mx-2">
                  <p className="font-base mb-6 font-normal italic text-neutral800 dark:text-neutral200 recommendations-xsm:text-sm">
                    {item.description}
                  </p>
                  <span className="font-base font-semibold text-neutral800 dark:text-neutral400 recommendations-xsm:text-sm">
                    {item.name}
                  </span>
                </div>
              </div>
            ))}
          </Slider>
          <h5 className="mt-6 hidden pr-24 text-sm font-normal text-neutral900 dark:text-neutral200 recommendations-ds:block recommendations-ds:pr-6 recommendations-xsm:text-xs">
            {t('recommendations:aboutNumbers')}
          </h5>
        </div>
      </motion.section>
    </AnimatePresence>
  )
}

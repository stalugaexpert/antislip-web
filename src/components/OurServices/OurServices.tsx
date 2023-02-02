import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useTranslation } from 'next-i18next'
import Slider from 'react-slick'

import { IArrowProps } from '../SliderHideArrow/SliderHideArrow'

const NextArrow = ({ onClick }: IArrowProps) => {
  return (
    <div
      className="absolute top-2/4 -right-14 flex h-11 w-11 -translate-y-1/2 cursor-pointer items-center justify-center bg-neutral50 text-neutral800 duration-300 hover:translate-x-1 hover:opacity-80 dark:bg-neutral700 dark:text-neutral200 services-xs:-right-0 services-xs:-top-[3.5rem] services-xs:h-8 services-xs:w-8"
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

const PreviousArrow = ({ onClick }: IArrowProps) => {
  return (
    <div
      className="absolute top-2/4 -right-14 hidden h-11 w-11 -translate-y-1/2 cursor-pointer items-center justify-center bg-neutral50 text-neutral800 duration-300 hover:-translate-x-1 hover:opacity-80 dark:bg-neutral700 dark:text-neutral200 recommendations-sm:flex services-xs:right-[3rem] services-xs:-top-[3.5rem] services-xs:h-8 services-xs:w-8"
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
          d="M15.75 19.5L8.25 12l7.5-7.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  )
}

const settings = {
  arrows: true,
  prevArrow: <PreviousArrow />,
  nextArrow: <NextArrow />,
  infinite: true,
  speed: 500,
  centerMode: true,
  centerPadding: '40px',
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 2000,
  pauseOnHover: true,
  responsive: [
    {
      breakpoint: 968,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
}

export const OurServices = () => {
  const { t } = useTranslation()

  const servicesProps = [
    {
      title: t('services:antislip'),
      description: t('services:antislipDescription'),
      icon: '/icons/slip.png',
      alt: 'slip icon',
      url: '/antislip',
    },
    {
      title: t('services:pendulum'),
      description: t('services:pendulumDescription'),
      icon: '/icons/pendulum.png',
      alt: 'pendulum icon',
      url: '/friction-measurement',
    },
    {
      title: t('services:sealers'),
      description: t('services:sealersDescription'),
      icon: '/icons/sealer.png',
      alt: 'sealer icon',
      url: '/sealing',
    },
    {
      title: t('services:cleaning'),
      description: t('services:cleaningDescription'),
      icon: '/icons/clean.png',
      alt: 'cleaning icon',
      url: '/cleaning',
    },
  ]

  return (
    <AnimatePresence>
      <motion.section
        className="mx-auto mb-20 max-w-screen-2xl px-56 services-md:px-36 services-sm:px-20 services-xs:mb-12 services-xs:px-14 about-sm:px-10 about-xsm:px-6"
        exit={{
          opacity: 0,
        }}
        initial={{ opacity: 0 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true, amount: 0.6 }}
        whileInView={{ opacity: 1 }}
      >
        <div className="mb-9 flex items-center justify-between">
          <h5 className="text-4xl font-semibold text-neutral800 dark:text-neutral50 services-xs:text-3xl about-xsm:text-2xl">
            {t('services:ourServices')}
          </h5>
          <a
            className="services-xs:hidden"
            href="tel:+48882186624"
          >
            <span className="text-sm font-normal text-neutral600 dark:text-neutral200">
              {t('services:questions')}
            </span>
            <div className="mt-1 flex items-center gap-2">
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="text-sm font-semibold text-neutral600 dark:text-neutral300">
                +48 882 186 624
              </span>
            </div>
          </a>
        </div>
        <Slider {...settings}>
          {servicesProps.map((item, index) => (
            <Link
              className="h-full"
              href={item.url}
              key={index}
            >
              <a>
                <div className="mx-4 bg-neutral100 p-6 dark:bg-neutral700">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-white p-2 dark:bg-neutral100">
                    <div className="relative h-6 w-8">
                      <Image
                        alt={item.alt}
                        layout="fill"
                        objectFit="contain"
                        src={item.icon}
                      />
                    </div>
                  </div>
                  <h2 className="mb-4 h-10 text-sm font-semibold text-neutral700 dark:text-neutral200">
                    {item.title}
                  </h2>
                  <h5 className="text-xs font-normal text-neutral700 line-clamp-3 dark:text-neutral200">
                    {item.description}
                  </h5>
                </div>
              </a>
            </Link>
          ))}
        </Slider>
      </motion.section>
    </AnimatePresence>
  )
}

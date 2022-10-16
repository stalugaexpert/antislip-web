import Image from "next/image"
import { useTranslation } from "next-i18next"
import { useEffect, useState } from "react"
import Slider from "react-slick"

import { IArrowProps, SliderHideArrow } from "../SliderHideArrow/SliderHideArrow"

const NextArrow = ({ onClick }: IArrowProps) => {
  return (
    <div
      className="absolute w-11 h-11 services-xs:w-8 services-xs:h-8 top-2/4 -translate-y-1/2 -right-14 services-xs:-right-0 services-xs:-top-[3.5rem] flex items-center cursor-pointer justify-center text-neutral800 dark:text-neutral200 dark:bg-neutral700 bg-neutral50 hover:translate-x-1 hover:opacity-80 duration-300"
      onClick={onClick}
    >
      <svg
        className="w-8 h-8"
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
      className="absolute w-11 h-11 services-xs:w-8 services-xs:h-8 top-2/4 -translate-y-1/2 -right-14 services-xs:right-[3rem] services-xs:-top-[3.5rem] flex items-center cursor-pointer justify-center text-neutral800 dark:text-neutral200 dark:bg-neutral700 bg-neutral50 hover:-translate-x-1 hover:opacity-80 duration-300"
      onClick={onClick}
    >
      <svg
        className="w-8 h-8"
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

export const OurServices = () => {
  const { t } = useTranslation()

  const [width, setWidth] = useState(0)

  useEffect(() => {
    setWidth(window.innerWidth)
    const handleWindowResize = () => setWidth(window.innerWidth)
    window.addEventListener("resize", handleWindowResize)

    return () => window.removeEventListener("resize", handleWindowResize)
  }, [])

  const centerPaddingRule = width > 968 ? "10px" : width > 775 ? "50px" : width > 710 ? "20px" : width > 630 ? "135px" : width > 590 ? "120px" : width > 528 ? "95px" : width > 488 ? "70px" : width > 418 ? "60px" : width > 386 ? "40px" : "20px"

  const settings = {
    arrows: true,
    prevArrow: width > 996 ? <SliderHideArrow /> : <PreviousArrow />,
    nextArrow: <NextArrow />,
    infinite: true,
    speed: 500,
    centerMode: width > 996 ? false : true,
    centerPadding: centerPaddingRule,
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
        breakpoint: 710,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  const servicesProps = [
    {
      title: t('services:antislip'),
      description: t('services:antislipDescription'),
      icon: "/icons/slip.png",
      alt: "slip icon"
    },
    {
      title: t('services:pendulum'),
      description: t('services:pendulumDescription'),
      icon: "/icons/pendulum.png",
      alt: "pendulum icon"
    },
    {
      title: t('services:sealers'),
      description: t('services:pendulumDescription'),
      icon: "/icons/sealer.png",
      alt: "sealer icon"
    },
    {
      title: t('services:cleaning'),
      description: t('services:pendulumDescription'),
      icon: "/icons/clean.png",
      alt: "cleaning icon"
    }
  ]

  return (
    <section className="p-56 py-16 max-w-screen-2xl mx-auto services-md:px-36 services-sm:px-20 services-xs:px-14 about-sm:px-10 about-xsm:px-6">
      <div className="flex items-center justify-between mb-9">
        <h5 className="font-semibold text-4xl text-neutral800 dark:text-neutral50 services-xs:text-3xl about-xsm:text-2xl">{t('services:ourServices')}</h5>
        <a
          className="services-xs:hidden"
          href="tel:+48882186624"
        >
          <span className="text-sm font-normal text-neutral600 dark:text-neutral200">{t('services:questions')}</span>
          <div className="flex items-center gap-2 mt-1">
            <svg
              className="w-4 h-4"
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
            <span className="text-sm font-semibold text-neutral600 dark:text-neutral300">+48 882 186 624</span>
          </div>
        </a>
      </div>
      <Slider {...settings}>
        { servicesProps.map((item, index) => (
          <div
            className="!w-[17rem] h-[14rem] about-x2sm:!w-[15rem] about-x2sm:!h-[15rem] bg-neutral100 dark:bg-neutral700 p-6"
            key={index}
          >
            <div className="w-12 h-12 mb-4 flex items-center justify-center p-2 rounded-lg bg-white dark:bg-neutral100">
              <Image
                alt={item.alt}
                height="24"
                src={item.icon}
                width="32"
              />
            </div>
            <h2 className="text-sm font-semibold text-neutral700 dark:text-neutral200 mb-4">{item.title}</h2>
            <h5 className="text-xs font-normal text-neutral700 dark:text-neutral200">{item.description}</h5>
          </div>
        ))}
      </Slider>
    </section>
  )
}

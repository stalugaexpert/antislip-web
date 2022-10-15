import { useTranslation } from "next-i18next"
import { CSSProperties, MouseEventHandler, useEffect, useState } from "react"
import Slider from "react-slick"

interface IArrowProps {
  className?: string
  style?: CSSProperties
  onClick?: MouseEventHandler<HTMLDivElement>
}

const SamplePrevArrow = ({ className, style, onClick }: IArrowProps) => {
  return (
    <div
      className={className}
      style={{ ...style, display: "none" }}
      onClick={onClick}
    />
  )
}

const SampleNextArrow = ({ onClick }: IArrowProps) => {
  return (
    <div
      className="absolute w-11 h-11 -bottom-[3.6rem] right-4 flex items-center cursor-pointer justify-center text-neutral800 dark:text-neutral200 dark:bg-neutral700 bg-neutral50 hover:translate-y-1 hover:opacity-80 duration-300 recommendations-sm:w-8 recommendations-sm:h-8 recommendations-sm:-top-[3rem]"
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

export const Recommendations = () => {
  const { t } = useTranslation()
  const [width, setWidth] = useState(0)

  useEffect(() => {
    setWidth(window.innerWidth)
    const handleWindowResize = () => setWidth(window.innerWidth)
    window.addEventListener("resize", handleWindowResize)

    return () => window.removeEventListener("resize", handleWindowResize)
  }, [])

  const centerPaddingRule = width > 1320 ? "100px" : width > 1100 ? "150px" : width > 992 ? "100px" : width > 890 ? "50px" : width > 815 ? "200px" : width > 745 ? "170px" :  width > 660 ? "130px" : width > 600 ? "100px" : width > 500 ? "50px" : width  > 460 ? "70px" : width > 418 ? "50px" : width > 358 ? "20px" : "8px"

  const settings = {
    arrows: true,
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: centerPaddingRule,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1320,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 890,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  const recommendationsList = [
    {
      description: t('recommendations:recommendations.test1'),
      name: "Company name"
    },
    {
      description: t('recommendations:recommendations.test2'),
      name: "Company name"
    },
    {
      description: t('recommendations:recommendations.test3'),
      name: "Company name"
    },
    {
      description: t('recommendations:recommendations.test4'),
      name: "Company name"
    },
    {
      description: t('recommendations:recommendations.test5'),
      name: "Company name"
    },
    {
      description: t('recommendations:recommendations.test6'),
      name: "Company name"
    },
    {
      description: t('recommendations:recommendations.test1'),
      name: "Company name"
    }
  ]
  return (
    <section
      className="m-14 recommendations-sm:m-6 bg-amber400 dark:bg-neutral900 pl-24 recommendations-mx:pl-12 recommendations-md:pl-6 py-[4.5rem] max-w-[90.625rem] section-min:mx-auto recommendations-ds:py-6"
      style={{ marginBottom: "40px" }}
    >
      <div className="flex items-end justify-between mb-12 recommendations-ds:mb-6">
        <div>
          <h5 className="text-3xl recommendations-xsm:text-xl font-semibold text-neutral900 dark:text-neutral50">{t('recommendations:aboutUs')}</h5>
          <h5 className="text-3xl recommendations-xsm:text-xl font-semibold text-neutral900 dark:text-neutral50">{t('recommendations:clients')}</h5>
        </div>
        <h5 className="text-sm font-normal pr-24 text-neutral900 dark:text-neutral200 recommendations-ds:hidden">{t('recommendations:aboutNumbers')}</h5>
      </div>
      <Slider {...settings}>
        {recommendationsList.map((item, index) => (
          <div
            className="!flex items-center justify-center flex-col p-6 bg-neutral50 dark:bg-neutral700 !w-80 recommendations-xsm:!w-60"
            key={index}
          >
            <p className="font-base font-normal italic mb-6 text-neutral800 dark:text-neutral200 recommendations-xsm:text-sm">{item.description}</p>
            <span className="font-semibold font-base text-neutral800 dark:text-neutral400 recommendations-xsm:text-sm">{item.name}</span>
          </div>
        ))}
      </Slider>
      <h5 className="text-sm recommendations-xsm:text-xs hidden mt-6 font-normal pr-24 text-neutral900 dark:text-neutral200 recommendations-ds:block recommendations-ds:pr-6">{t('recommendations:aboutNumbers')}</h5>
    </section>
  )
}

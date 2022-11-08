import Image from "next/image"
import { useTranslation } from "next-i18next"
import Slider from "react-slick"

const settings = {
  arrows: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 2,
  autoplay: true,
  autoplaySpeed: 2000,
  pauseOnHover: true,
  responsive: [
    {
      breakpoint: 1100,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 440,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
}

const companiesLogoList = [
  {
    image: "halfprice-logo.png",
    alt: "halfprice logo"
  },
  {
    image: "ikea-logo.png",
    alt: "ikea logo"
  },
  {
    image: "katowice-logo.png",
    alt: "katowice airport logo"
  },
  {
    image: "leroy-logo.png",
    alt: "leroy merlin logo"
  },
  {
    image: "modlin-logo.png",
    alt: "modlin airport logo"
  },
  {
    image: "logo-arlamow.png",
    alt: "arlamow hotel logo"
  },
  {
    image: "lot-logo.png",
    alt: "lot airlines logo"
  },
  {
    image: "obi-logo.png",
    alt: "obi logo"
  },
  {
    image: "polin-logo.png",
    alt: "polin museum logo"
  },
  {
    image: "tubadzin-logo.png",
    alt: "tubadzin logo"
  },
  {
    image: "waveresort-logo.png",
    alt: "wave resort Międzyzdroje logo"
  }
]

export const TrustedBy = () => {
  const { t } = useTranslation()

  return (
    <section className="px-24 recommendations-sm:px-16 about-sm:px-10 services-xs:mb-12 max-w-screen-2xl mx-auto mb-36">
      <h5 className="text-xl font-semibold text-neutral800 dark:text-neutral50 mb-9 text-center">{t('common:trustedBy')}</h5>
      <Slider {...settings}>
        {companiesLogoList.map((item, index) => (
          <div
            className="relative h-[4.5rem]"
            key={index}
          >
            <Image
              alt={item.alt}
              layout="fill"
              objectFit='contain'
              src={`/companiesIcons/${item.image}`}
            />
          </div>
        ))}
      </Slider>
    </section>
  )
}

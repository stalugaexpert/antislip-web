import Image from "next/image"
import { useTranslation } from "next-i18next"

export const AboutUs = () => {
  const { t } = useTranslation()

  const aboutProps = [
    {
      title: t('about:titleFirst'),
      description:  t('about:descriptionFirst')
    },
    {
      title: t('about:titleSecond'),
      description:  t('about:descriptionSecond')
    },
    {
      title: t('about:titleSecond'),
      description:  t('about:descriptionSecond')
    }
  ]

  return (
    <section className="px-[11rem] mb-20 services-xs:mb-12 recommendations-md:px-32 recommendations-ds:px-16 recommendations-sm:px-10 about-sm:px-6 max-w-screen-2xl mx-auto">
      <div>
        <h5 className="text-amber400 text-base font-semibold mb-6 about-xsm:text-sm">{t('about:aboutUs')}</h5>
        <h2 className="font-semibold text-3xl text-neutral800 dark:text-neutral50 mb-9 about-xsm:text-2xl">{t('about:leader')}</h2>
        <div className="flex justify-between about-md:flex-wrap">
          <div className="flex flex-col gap-9 w-2/4 about-md:w-full about-md:order-2 about-md:gap-6">
            { aboutProps.map((section, index) => (
              <div
                className="flex flex-col items-start gap-5 about-md:gap-2"
                key={index}
              >
                <h4 className="text-neutral800 dark:text-neutral50 text-xl font-semibold about-xsm:text-base">{section.title}</h4>
                <p className="text-neutral600 dark:text-neutral200 text-sm font-normal about-xsm:text-xs">{section.description}</p>
              </div>
            ))}
          </div>
          <div className="relative h-[31.2rem] w-[23.5rem] about-md:mb-8 about-md:w-full about-md:max-h-[30vh] before:content-[''] before:absolute before:h-48 before:w-48 before:bg-amber400 before:z-10 before:top-full before:left-full before:-translate-x-full before:-translate-y-2/4 before:blur-[100px] before:opacity-50 dark:before:opacity-30 about-md:before:hidden">
            <Image
              alt=""
              layout="fill"
              objectFit='cover'
              src="/images/about-image.png"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

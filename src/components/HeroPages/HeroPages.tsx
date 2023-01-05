import cx from 'classnames'
import { AnimatePresence, motion } from 'framer-motion'
import Image, { StaticImageData } from 'next/image'

interface IHeroPagesProps {
  section: string,
  title: string,
  titleIcon?: string,
  titleBottom?: string,
  description?: string,
  image: string | StaticImageData,
  imageSecond?: string | StaticImageData
}

export const HeroPages = ({ section, title, titleIcon = '', titleBottom = '', description = '', image, imageSecond = '' }: IHeroPagesProps) => {
  return (
    <section
      className="px-24 pt-32 navbar-md:pt-24 max-w-screen-2xl mx-auto mb-12 services-xs:mb-12 services-xs:px-14 about-sm:px-10 about-xsm:px-6"
    >
      <div className="flex justify-between mb-8">
        <div className="w-3/4 recommendations-ds:w-[85%]">
          <h5 className="text-base about-md:text-sm font-semibold text-amber400 mb-4">
            {section}
          </h5>
          <div>
            <h2 className="text-4xl about-md:text-3xl about-xsm:text-2xl font-semibold text-neutral800 dark:text-neutral50">
              {title}
            </h2>
            {titleBottom && (
              <h2 className="text-4xl about-md:text-3xl about-xsm:text-2xl font-semibold text-neutral800 dark:text-neutral50">
                {titleBottom}
              </h2>
            )}
            {description && (
              <h2 className="text-lg mt-6 about-xsm:text-base font-normal text-neutral800 dark:text-neutral100">
                {description}
              </h2>
            )}
          </div>
        </div>
        {titleIcon && (
          <div className="p-3 w-[60px] h-[60px] about-md:w-[40px] about-md:h-[40px] about-md:p-2 rounded-md bg-neutral50 dark:bg-neutral200">
            <div className="relative w-full h-full">
              <Image
                alt=""
                layout="fill"
                objectFit="contain"
                src={titleIcon}
              />
            </div>
          </div>
        )}
      </div>
      <div className="relative h-[31.2rem] about-md:h-[30vh] w-full before:content-[''] before:absolute before:h-48 before:w-48 before:bg-amber400 before:z-10 before:top-0 before:left-full before:-translate-x-full before:-translate-y-2/4 before:blur-[100px] before:opacity-50 dark:before:opacity-30">
        <div className="flex gap-8 mission-sm:gap-4">
          <div className={cx('', { 'relative w-1/3 mission-sm:w-2/4 h-[31.2rem] about-md:h-[30vh]': imageSecond })}>
            <Image
              alt=""
              layout="fill"
              objectFit="cover"
              placeholder="blur"
              src={image}
            />
          </div>
          {imageSecond && (
            <div className="relative w-2/3 mission-sm:w-2/4 h-[31.2rem] about-md:h-[30vh] before:content-[''] before:absolute before:h-48 before:w-48 before:bg-amber400 before:z-10 before:top-0 before:left-full before:-translate-x-full before:-translate-y-2/4 before:blur-[100px] before:opacity-50 dark:before:opacity-30">
              <Image
                alt=""
                layout="fill"
                objectFit="cover"
                placeholder="blur"
                src={imageSecond}
              />
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

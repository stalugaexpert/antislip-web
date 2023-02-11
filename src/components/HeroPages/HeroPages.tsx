import cx from 'classnames'
import Image, { StaticImageData } from 'next/image'

interface IHeroPagesProps {
  section: string
  title: string
  titleIcon?: string
  titleBottom?: string
  description?: string
  image: string | StaticImageData
  imageSecond?: string | StaticImageData
}

export const HeroPages = ({
  section,
  title,
  titleIcon = '',
  titleBottom = '',
  description = '',
  image,
  imageSecond = '',
}: IHeroPagesProps) => {
  return (
    <section className="mx-auto mb-12 max-w-screen-2xl px-24 pt-32 navbar-md:pt-24 services-xs:mb-12 services-xs:px-14 about-sm:px-10 about-xsm:px-6">
      <div className="mb-8 flex justify-between">
        <div className="w-3/4 recommendations-ds:w-[85%]">
          <h5 className="mb-4 text-base font-semibold text-amber400 about-md:text-sm">
            {section}
          </h5>
          <div>
            <h2 className="text-4xl font-semibold text-neutral800 dark:text-neutral50 about-md:text-3xl about-xsm:text-2xl">
              {title}
            </h2>
            {titleBottom && (
              <h2 className="text-4xl font-semibold text-neutral800 dark:text-neutral50 about-md:text-3xl about-xsm:text-2xl">
                {titleBottom}
              </h2>
            )}
            {description && (
              <h2 className="mt-6 text-lg font-normal text-neutral800 dark:text-neutral100 about-xsm:text-base">
                {description}
              </h2>
            )}
          </div>
        </div>
        {titleIcon && (
          <div className="h-[60px] w-[60px] rounded-md bg-neutral50 p-3 dark:bg-neutral200 about-md:h-[40px] about-md:w-[40px] about-md:p-2">
            <div className="relative h-full w-full">
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
      <div className="relative h-[31.2rem] w-full before:absolute before:top-0 before:left-full before:z-10 before:h-48 before:w-48 before:-translate-x-full before:-translate-y-2/4 before:bg-amber400 before:opacity-50 before:blur-[100px] before:content-[''] dark:before:opacity-30 about-md:h-[30vh]">
        <div className="flex gap-8 mission-sm:gap-4">
          <div
            className={cx('', {
              'relative h-[31.2rem] w-1/3 about-md:h-[30vh] mission-sm:w-2/4':
                imageSecond,
            })}
          >
            <Image
              alt=""
              layout="fill"
              objectFit="cover"
              placeholder="blur"
              src={image}
            />
          </div>
          {imageSecond && (
            <div className="relative h-[31.2rem] w-2/3 before:absolute before:top-0 before:left-full before:z-10 before:h-48 before:w-48 before:-translate-x-full before:-translate-y-2/4 before:bg-amber400 before:opacity-50 before:blur-[100px] before:content-[''] dark:before:opacity-30 about-md:h-[30vh] mission-sm:w-2/4">
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

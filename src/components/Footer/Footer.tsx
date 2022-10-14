import Image from "next/image"
import Link from "next/link"
import { useTranslation } from 'next-i18next'

export const Footer = () => {
  const { t } = useTranslation()

  return (
    <footer className="p-14 pb-10 footer-md:p-8 bg-neutral800 dark:bg-neutral900 flex flex-col items-start">
      <div className="relative h-[4.375rem] w-[9.5rem] footer-md:h-[3rem] footer-md:w-[6.5625rem]">
        <Image
          alt={t('navbar:logoAlt')}
          layout="fill"
          objectFit='contain'
          src="/icons/logo-dark.png"
        />
      </div>
      <div className="w-full mt-12 grid grid-cols-4 gap-6 footer-md:grid-cols-2 footer-md:gap-y-10 footer-sm:grid-cols-1 footer-sm:gap-y-12">
        <div className="flex flex-col gap-6">
          <h5 className="text-sm text-neutral200 dark:text-neutral400 font-semibold">{t('footer:name')}</h5>
          <h2 className="text-base text-neutral50 dark:text-neutral200 font-normal">{t('footer:description')}</h2>
        </div>
        <div className="flex flex-col gap-6 footer-md:order-3">
          <span className="text-sm text-neutral200 dark:text-neutral400 font-semibold uppercase">{t('footer:contact')}</span>
          <a
            className="text-base text-neutral50 dark:text-neutral200 font-normal duration-300 hover:text-neutral200 dark:hover:text-neutral400 hover:translate-x-1"
            href="mailto:office@e-nubes.com"
          >
            office@e-nubes.com
          </a>
          <a
            className="text-base text-neutral50 dark:text-neutral200 font-normal duration-300 hover:text-neutral200 dark:hover:text-neutral400 hover:translate-x-1"
            href="tel:+48882186624"
          >
            +48 882 186 624
          </a>
          <a
            className="text-base text-neutral50 dark:text-neutral200 font-normal duration-300 hover:text-neutral200 dark:hover:text-neutral400 hover:translate-x-1"
            href="https://g.page/impregnaty-bc?share"
            rel="noreferrer"
            target="_blank"
          >
            <div className="flex flex-col items-start">
              <span>Wierzbowa 22,</span>
              <span>64-930 Dolaszewo</span>
            </div>
          </a>
          <a className="text-base text-neutral50 dark:text-neutral200 font-normal">
            <div className="flex flex-col items-start">
              <span>e-nubes Robert Chmura</span>
              <span>NIP 764-197-46-91</span>
            </div>
          </a>
        </div>
        <div className="flex flex-col gap-6">
          <span className="text-sm text-neutral200 dark:text-neutral400 font-semibold uppercase">{t('footer:menu')}</span>
          <Link href="">
            <a className="text-base text-neutral50 dark:text-neutral200 font-normal duration-300 hover:text-neutral200 dark:hover:text-neutral400 hover:translate-x-1">
              {t('footer:home')}
            </a>
          </Link>
          <Link href="">
            <a className="text-base text-neutral50 dark:text-neutral200 font-normal duration-300 hover:text-neutral200 dark:hover:text-neutral400 hover:translate-x-1">
              {t('footer:knowledge')}
            </a>
          </Link>
          <Link href="">
            <a className="text-base text-neutral50 dark:text-neutral200 font-normal duration-300 hover:text-neutral200 dark:hover:text-neutral400 hover:translate-x-1">
              {t('footer:contact')}
            </a>
          </Link>
        </div>
        <div className="flex flex-col gap-6">
          <span className="text-sm text-neutral200 dark:text-neutral400 font-semibold uppercase">{t('footer:services')}</span>
          <Link href="">
            <a className="text-base text-neutral50 dark:text-neutral200 font-normal duration-300 hover:text-neutral200 dark:hover:text-neutral400 hover:translate-x-1">
              {t('footer:antislip')}
            </a>
          </Link>
          <Link href="">
            <a className="text-base text-neutral50 dark:text-neutral200 font-normal duration-300 hover:text-neutral200 dark:hover:text-neutral400 hover:translate-x-1">
              {t('footer:pendulum')}
            </a>
          </Link>
          <Link href="">
            <a className="text-base text-neutral50 dark:text-neutral200 font-normal duration-300 hover:text-neutral200 dark:hover:text-neutral400 hover:translate-x-1">
              {t('footer:sealers')}
            </a>
          </Link>
          <Link href="">
            <a className="text-base text-neutral50 dark:text-neutral200 font-normal duration-300 hover:text-neutral200 dark:hover:text-neutral400 hover:translate-x-1">
              {t('footer:cleaning')}
            </a>
          </Link>
        </div>
      </div>
      <div className="bg-neutral50 dark:bg-neutral200 w-full h-px my-10" />
      <div className="w-full grid grid-cols-2 items-center footer-md:grid-cols-1 footer-md:gap-y-3">
        <span className="text-xs font-normal text-neutral50 dark:text-neutral200">{t('footer:rights')}</span>
        <div className="flex items-center justify-end gap-9 footer-sm:justify-between">
          <span className="text-xs font-normal text-neutral50 dark:text-neutral200">{t('footer:stayInTouch')}</span>
          <div className="flex items-center justify-center gap-4">
            <a
              className="p-1.5 duration-300 hover:translate-y-0.5 hover:opacity-80"
              href="https://www.facebook.com/enubesimpregnaty"
              rel="noreferrer"
              target="_blank"
            >
              <Image
                alt={t('footer:facebookIcon')}
                height="24"
                src="/icons/facebook-icon.svg"
                width="24"
              />
            </a>
            <a
              className="p-1.5 duration-300 hover:translate-y-0.5 hover:opacity-80"
              href="https://www.instagram.com/impregnatyenubes/"
              rel="noreferrer"
              target="_blank"
            >
              <Image
                alt={t('footer:instagramIcon')}
                height="24"
                src="/icons/instagram-icon.svg"
                width="24"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

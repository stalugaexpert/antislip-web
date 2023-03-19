import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import { useTranslation } from 'next-i18next'
import React from 'react'

import Checkmark from './Checkmark'

interface ISwitchContentProps {
  contentTitle: string
  contentText: string
  contentImage: StaticImageData
  testInfo: string[]
}

export const SwitchContent = ({
  contentTitle,
  contentText,
  contentImage,
  testInfo,
}: ISwitchContentProps) => {
  const { t } = useTranslation('card-switcher')
  return (
    <div className="flex w-full flex-col-reverse overflow-hidden rounded-2xl md:flex-row">
      <div className="flex flex-col justify-between bg-neutral100 px-6 py-6 dark:bg-neutral900 md:w-1/2">
        <span className="mb-3 text-left text-2xl font-bold text-neutral800 dark:text-neutral50 mission-sm:text-base">
          {t(contentTitle)}
        </span>
        <span className="mb-3 whitespace-pre-line text-neutral700 dark:text-neutral200 mission-sm:text-sm">
          {t(contentText)}
        </span>
        <span className="mb-3 text-neutral700 dark:text-neutral200 mission-sm:text-sm">
          {t('researchCarry')}
        </span>
        <ul className="mb-3 mission-sm:text-sm">
          {testInfo.map((item, index) => (
            <li
              className="mb-3 flex text-left text-neutral700 dark:text-neutral200"
              key={index}
            >
              <div className="mr-4 h-6 w-6">
                <Checkmark
                  className="h-6 w-6"
                  fillColor="var(--amber-600)"
                />
              </div>
              {t(item)}
            </li>
          ))}
        </ul>
        <Link href="/contact">
          <a>
            <div className="flex items-center justify-center gap-3 rounded-lg bg-amber600 px-4 py-2.5 text-neutral50 duration-300 hover:translate-y-1 hover:opacity-80 mission-sm:p-2">
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="text-base font-semibold mission-sm:text-sm">
                {t('contactUs')}
              </span>
            </div>
          </a>
        </Link>
      </div>
      <div className="relative md:w-1/2 footer-md:h-[40vh]">
        <Image
          alt="switch-content-image"
          layout="fill"
          objectFit="cover"
          placeholder="blur"
          src={contentImage}
        />
      </div>
    </div>
  )
}

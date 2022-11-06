import Image from 'next/image'
import { useTranslation } from 'next-i18next'
import React from 'react'

import Checkmark from './Checkmark'

interface ISwitchContentProps {
  contentTitle: string
  contentText: string
  contentImage: string
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
    <div className="flex flex-col-reverse w-full md:flex-row">
      <div className="bg-neutral200 dark:bg-neutral900 px-8 py-12 flex flex-col justify-between gap-4 md:w-1/2 md:gap-0">
        <span className="text-2xl font-bold">{t(contentTitle)}</span>
        <span className="whitespace-pre-line max-h-[30vh] min-h-[30vh] overflow-y-auto">
          {t(contentText)}
        </span>
        <span>{t('researchCarry')}</span>
        <ul>
          {testInfo.map((item, index) => (
            <li
              className="flex mb-3"
              key={index}
            >
              <Checkmark
                className="w-6 h-6 mr-4"
                fillColor="var(--amber-600)"
              />
              {t(item)}
            </li>
          ))}
        </ul>
        <button className="p-2 bg-red-500">To nie jest button</button>
      </div>
      <div className="relative h-[50vh] md:w-1/2 md:h-[70vh]">
        <Image
          alt="switch-content-image"
          blurDataURL={contentImage}
          layout="fill"
          objectFit="fill"
          placeholder="blur"
          src={contentImage}
        />
      </div>
    </div>
  )
}

import { AnimatePresence, motion } from 'framer-motion'
import { useTheme } from 'next-themes'
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { ReactI18NextChild, useTranslation } from 'react-i18next'

interface IAccordionBaseProps {
  i: number
  expanded: number | boolean
  setExpanded: Dispatch<SetStateAction<number | false>>
  children: ReactI18NextChild | Iterable<ReactI18NextChild>
  title: string
}

const AccordionBase = ({
  i,
  expanded,
  setExpanded,
  children,
  title,
}: IAccordionBaseProps) => {
  const isOpen = i === expanded
  const { systemTheme, theme } = useTheme()
  const [currentTheme, setCurrentTheme] = useState('light')

  useEffect(() => {
    if (theme && systemTheme) {
      setCurrentTheme(theme === 'system' ? systemTheme : theme)
    }
  }, [theme, systemTheme])

  return (
    <>
      <motion.header
        animate={{
          backgroundColor:
            isOpen && currentTheme === 'dark'
              ? '#374151'
              : !isOpen && currentTheme === 'dark'
              ? '#111827'
              : isOpen && currentTheme !== 'dark'
              ? '#cbd5e1'
              : '#f3f4f6',
        }}
        className="mb-4 w-full cursor-pointer p-4 last:mb-0"
        initial={false}
        onClick={() => setExpanded(isOpen ? false : i)}
      >
        <div className="flex items-center justify-between">
          <span className="text-base text-neutral800 dark:text-neutral50 about-xsm:text-sm">
            {title}
          </span>
          <div className="ml-4">
            <svg
              className="h-8 w-8 about-xsm:h-6 about-xsm:w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.5}
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zm-7.518-.267A8.25 8.25 0 1120.25 10.5M8.288 14.212A5.25 5.25 0 1117.25 10.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </motion.header>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.section
            animate="open"
            exit="collapsed"
            initial="collapsed"
            key="content"
            transition={{ duration: 0.5, ease: [0.04, 0.62, 0.23, 0.98] }}
            variants={{
              open: { opacity: 1, height: 'auto' },
              collapsed: { opacity: 0, height: 0 },
            }}
          >
            {children}
          </motion.section>
        )}
      </AnimatePresence>
    </>
  )
}

export const AccordionMeasurement = () => {
  const { t } = useTranslation()
  // You can set the key number of item to be default open or 'false' for hide all by default.
  const [expanded, setExpanded] = useState<false | number>(false)
  const accordionItems = [
    {
      key: 0,
      title: t('measurement:measurementQuestionsAnswers.first.question'),
      component: (
        <div className="p-4 pt-0 text-justify text-base text-neutral800 dark:text-neutral50 about-xsm:text-sm">
          <p>
            {t('measurement:measurementQuestionsAnswers.first.paragraphFirst')}
          </p>
        </div>
      ),
    },
    {
      key: 1,
      title: t('measurement:measurementQuestionsAnswers.second.question'),
      component: (
        <div className="p-4 pt-0 text-justify text-base text-neutral800 dark:text-neutral50 about-xsm:text-sm">
          <p className="mb-4">
            {t('measurement:measurementQuestionsAnswers.second.paragraphFirst')}
          </p>
          <div className="flex flex-col gap-4 pl-6">
            <p>
              {t(
                'measurement:measurementQuestionsAnswers.second.paragraphSecond'
              )}
            </p>
            <p>
              {t(
                'measurement:measurementQuestionsAnswers.second.paragraphThird'
              )}
            </p>
            <p>
              {t(
                'measurement:measurementQuestionsAnswers.second.paragraphFourth'
              )}
            </p>
            <p>
              {t(
                'measurement:measurementQuestionsAnswers.second.paragraphFifth'
              )}
            </p>
          </div>
        </div>
      ),
    },
    {
      key: 2,
      title: t('measurement:measurementQuestionsAnswers.third.question'),
      component: (
        <div className="p-4 pt-0 text-justify text-base text-neutral800 dark:text-neutral50 about-xsm:text-sm">
          <p>
            {t('measurement:measurementQuestionsAnswers.third.paragraphFirst')}
          </p>
        </div>
      ),
    },
    {
      key: 3,
      title: t('measurement:measurementQuestionsAnswers.fourth.question'),
      component: (
        <div className="p-4 pt-0 text-justify text-base text-neutral800 dark:text-neutral50 about-xsm:text-sm">
          <p>
            {t('measurement:measurementQuestionsAnswers.fourth.paragraphFirst')}
          </p>
        </div>
      ),
    },
    {
      key: 4,
      title: t('measurement:measurementQuestionsAnswers.fifth.question'),
      component: (
        <div className="p-4 pt-0 text-justify text-base text-neutral800 dark:text-neutral50 about-xsm:text-sm">
          <p>
            {t('measurement:measurementQuestionsAnswers.fifth.paragraphFirst')}
          </p>
        </div>
      ),
    },
  ]

  return (
    <React.Fragment>
      {accordionItems.map((item) => (
        <AccordionBase
          expanded={expanded}
          i={item.key}
          key={item.key}
          setExpanded={setExpanded}
          title={item.title}
        >
          {item.component}
        </AccordionBase>
      ))}
    </React.Fragment>
  )
}

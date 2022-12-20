import { AnimatePresence, motion } from "framer-motion"
import { useTheme } from "next-themes"
import React, { Dispatch, SetStateAction, useEffect, useState } from "react"
import { ReactI18NextChild, useTranslation } from "react-i18next"

interface IAccordionBaseProps {
  i: number
  expanded: number | boolean
  setExpanded: Dispatch<SetStateAction<number | false>>
  children: ReactI18NextChild | Iterable<ReactI18NextChild>
  title: string
}

const AccordionBase = ({ i, expanded, setExpanded, children, title }: IAccordionBaseProps) => {
  const isOpen = i === expanded
  const { systemTheme, theme } = useTheme()
  const [currentTheme, setCurrentTheme] = useState('light')

  // useEffect(() => {
  //   if (theme && systemTheme) {
  //     setCurrentTheme(theme === 'system' ? systemTheme : theme)
  //   }
  // }, [theme, systemTheme])

  return (
    <>
      <motion.header
        animate={{ backgroundColor: isOpen && currentTheme === 'dark' ? "#374151" : !isOpen && currentTheme === 'dark' ? "#111827" : isOpen && currentTheme !== 'dark' ? "#cbd5e1" : "#f3f4f6" }}
        className="w-full p-4 mb-4 cursor-pointer last:mb-0"
        initial={false}
        onClick={() => setExpanded(isOpen ? false : i)}
      >
        <div className="flex justify-between items-center">
          <span className="text-neutral800 dark:text-neutral50 text-base about-xsm:text-sm">{title}</span>
          <div className="ml-4">
            <svg
              className="w-8 h-8 about-xsm:w-6 about-xsm:h-6"
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
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 }
            }}
          >
            {children}
          </motion.section>
        )}
      </AnimatePresence>
    </>
  )
}

export const Accordion = () => {
  const { t } = useTranslation()
  // You can set the key number of item to be default open or 'false' for hide all by default.
  const [expanded, setExpanded] = useState<false | number>(false)
  const accordionItems = [
    { key: 0,
      title: t('knowledge:actsFirst.title'),
      component: <div className="p-4 text-justify text-base text-neutral800 dark:text-neutral50 about-xsm:text-sm">
        <p className="mb-2.5">{t('knowledge:actsFirst.firstParagraph')}</p>
        <p className="mb-2.5 italic ">{t('knowledge:actsFirst.secondParagraph')}</p>
        <p className="mb-2.5 italic ">{t('knowledge:actsFirst.thirdParagraph')}</p>
        <p className="italic ">{t('knowledge:actsFirst.fourthParagraph')}</p>
      </div>
    },
    { key: 1,
      title: t('knowledge:actsSecond.title'),
      component: <div className="p-4 text-justify text-base text-neutral800 dark:text-neutral50 about-xsm:text-sm">
        <p className="mb-2.5 italic ">{t('knowledge:actsSecond.firstParagraph')}</p>
        <p className="mb-2.5 italic ">{t('knowledge:actsSecond.secondParagraph')}</p>
        <p className="mb-2.5 italic ">{t('knowledge:actsSecond.thirdParagraph')}</p>
        <p className="">{t('knowledge:actsSecond.fourthParagraph')}</p>
      </div>
    },
    { key: 2,
      title: t('knowledge:actsThird.title'),
      component: <div className="p-4 text-justify text-base text-neutral800 dark:text-neutral50 about-xsm:text-sm">
        <p className="mb-2.5 italic ">{t('knowledge:actsThird.firstParagraph')}</p>
        <p className="mb-2.5 italic ">{t('knowledge:actsThird.secondParagraph')}</p>
      </div>
    },
    { key: 3,
      title: t('knowledge:actsFourth.title'),
      component: <div className="p-4 text-justify text-base text-neutral800 dark:text-neutral50 about-xsm:text-sm">
        <p className="mb-2.5 italic ">{t('knowledge:actsFourth.firstParagraph')}</p>
        <p className="mb-2.5 italic ">{t('knowledge:actsFourth.secondParagraph')}</p>
        <p className="mb-2.5 italic ">{t('knowledge:actsFourth.thirdParagraph')}</p>
      </div>
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

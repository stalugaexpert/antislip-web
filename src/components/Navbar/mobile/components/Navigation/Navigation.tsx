import { motion } from "framer-motion"
import { useTranslation } from "next-i18next"

import { MenuItem } from "../MenuItem"

interface INavigationProps {
  toggle(): void
}

const navigationVariants = {
  open: {
    display: "flex",
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    display: "none",
    transition: { delay: 1, staggerChildren: 0.05, staggerDirection: -1 },
  },
}

export const Navigation = ({ toggle }: INavigationProps) => {
  const { t } = useTranslation()
  const navigationProps = [
    { text: t('navbar:home'), url: "/", highlightItem: true, bold: 'font-bold' },
    { text: t('navbar:servicesList.antislip'), url: "/antislip" },
    { text: t('navbar:servicesList.pendulum'), url: "/friction-measurement" },
    { text: t('navbar:servicesList.sealers'), url: "/sealing" },
    { text: t('navbar:servicesList.cleaning'), url: "/cleaning" },
    { text: t('navbar:shop'), url: "https://e-nubes.com", isExternal: true },
    { text: t('navbar:knowledge'), url: "/knowledge" },
    { text: t('navbar:contact'), url: "/contact" },
  ]

  return (
    <motion.ul
      className="absolute flex flex-col items-start justify-center gap-1.5 top-28 w-full z-50"
      variants={navigationVariants}
    >
      {navigationProps.map((item) => (
        <MenuItem
          bold={item.bold}
          highlightItem={item.highlightItem}
          isExternal={item.isExternal}
          key={item.text}
          text={item.text}
          toggle={toggle}
          url={item.url}
        />
      ))}
    </motion.ul>
  )
}

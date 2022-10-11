import { motion } from "framer-motion"

import { MenuItem } from "../MenuItem"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const Navigation = ({ toggle, t }: {toggle(): void, t: any}) => {
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

  const navigationProps = [
    { text: t('navbar:home'), link: "", highlightItem: true, bold: 'font-bold' },
    { text: t('navbar:servicesList.antislip'), link: "" },
    { text: t('navbar:servicesList.pendulum'), link: "" },
    { text: t('navbar:servicesList.sealers'), link: "" },
    { text: t('navbar:servicesList.cleaning'), link: "" },
    { text: t('navbar:knowledge'), link: "" },
    { text: t('navbar:contact'), link: "" },
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
          key={item.text}
          link={item.link}
          text={item.text}
          toggle={toggle}
        />
      ))}
    </motion.ul>
  )
}

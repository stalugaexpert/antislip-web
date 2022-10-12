import { motion } from "framer-motion"
import Link from "next/link"

interface IMenuItemProps {
  text: string
  link: string
  highlightItem?: boolean
  bold?: string
  toggle(): void
}

const menuItemVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: [0.6, 0.05, -0.01, 0.9],
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      duration: 0.4,
      ease: [0.6, 0.05, -0.01, 0.9],
    },
  },
}

export const MenuItem = ({ text, link, highlightItem = false, bold = '', toggle }: IMenuItemProps) => {
  return (
    <Link href={link}>
      <a>
        <motion.li
          className="relative px-6 py-3"
          variants={menuItemVariants}
          onClick={toggle}
        >
          <span className={`text-lg font-normal text-neutral700 duration-300 dark:text-neutral200 ${bold} hover:text-neutral800 hover:font-bold`}>
            {text}
            {highlightItem && (
              <div className="absolute left-2/4 -translate-x-1/2 right-0 bottom-2 w-3/5 h-1 bg-amber400" />
            )}
          </span>
        </motion.li>
      </a>
    </Link>
  )
}

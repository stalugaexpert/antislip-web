/* eslint-disable react/jsx-no-target-blank */
import { motion } from 'framer-motion'
import Link from 'next/link'

interface IMenuItemProps {
  text: string
  url: string
  highlightItem?: boolean
  bold?: string
  isExternal?: boolean
  toggle(): void
}

const menuItemVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: [0.6, 0.05, 0.0, 0.9],
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      duration: 0.4,
      ease: [0.6, 0.05, 0.0, 0.9],
    },
  },
}

export const MenuItem = ({
  text,
  url,
  highlightItem = false,
  bold = '',
  isExternal = false,
  toggle,
}: IMenuItemProps) => {
  return (
    <Link href={url}>
      <a
        href={url}
        rel={isExternal ? 'noreferrer' : ''}
        target={isExternal ? '_blank' : '_self'}
      >
        <motion.li
          className="relative px-6 py-3"
          variants={menuItemVariants}
          onClick={toggle}
        >
          <span
            className={`text-lg font-normal text-neutral700 duration-300 dark:text-neutral200 ${bold} hover:font-bold hover:text-neutral800`}
          >
            {text}
            {highlightItem && (
              <div className="absolute left-2/4 right-0 bottom-2 h-1 w-3/5 -translate-x-1/2 bg-amber400" />
            )}
          </span>
        </motion.li>
      </a>
    </Link>
  )
}

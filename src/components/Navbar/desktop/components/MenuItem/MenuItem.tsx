/* eslint-disable react/jsx-no-target-blank */
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react'

interface IMenuItemProps {
  text: string
  url: string
  isExternal?: boolean
}

export const MenuItem = ({ text, url, isExternal = false }: IMenuItemProps) => {
  const [isBeingHovered, setIsBeingHovered] = useState(false)

  return (
    <Link href={url}>
      <a
        href={url}
        rel={isExternal ? 'noreferrer' : ''}
        target={isExternal ? '_blank' : '_self'}
      >
        <motion.div
          className={
            'relative py-7 px-4 text-base text-neutral700 duration-300 before:invisible before:block before:h-0 before:overflow-hidden before:font-bold before:content-[attr(title)] hover:font-bold hover:text-neutral800 dark:text-neutral100'
          }
          title={text}
          onHoverEnd={() => setIsBeingHovered(false)}
          onHoverStart={() => setIsBeingHovered(true)}
        >
          <span>
            {text}
            {isBeingHovered && (
              <motion.div
                className="absolute left-0 right-0 bottom-0 h-1 w-full bg-amber400"
                layoutId="underline"
                layout
              />
            )}
          </span>
        </motion.div>
      </a>
    </Link>
  )
}

import { motion } from 'framer-motion'
import { ReactNode, useState } from 'react'

interface IMenuItemDropdownProps {
  text: string
  children: ReactNode
}

const MenuItemVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
}

export const MenuItemDropdown = ({
  text,
  children,
}: IMenuItemDropdownProps) => {
  const [isBeingHovered, setIsBeingHovered] = useState(false)

  return (
    <motion.div
      className={
        'relative w-40 py-7 px-4 text-base text-neutral700 duration-300 hover:font-bold hover:text-neutral800 dark:text-neutral100'
      }
      onHoverEnd={() => setIsBeingHovered(false)}
      onHoverStart={() => setIsBeingHovered(true)}
    >
      <div className="flex items-center justify-center gap-3">
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
        {isBeingHovered ? (
          <svg
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            strokeWidth={2.5}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.5 15.75l7.5-7.5 7.5 7.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        ) : (
          <svg
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            strokeWidth={2.5}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </div>
      {isBeingHovered && (
        <motion.div
          animate="visible"
          className="absolute top-20 -left-1 min-w-max rounded-lg bg-neutral50 p-2 shadow-md dark:bg-neutral900"
          initial="hidden"
          layoutId="menu"
          variants={MenuItemVariants}
        >
          {children}
        </motion.div>
      )}
    </motion.div>
  )
}

import { motion } from "framer-motion"
import { ReactNode, useState } from "react"

interface iMenuItemDropdownProps {
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

export const MenuItemDropdown = ({ text, children }: iMenuItemDropdownProps) => {
  const [isBeingHovered, setIsBeingHovered] = useState(false)

  return (
    <motion.div
      className={`relative py-7 px-4 text-base text-neutral700 dark:text-neutral100 duration-300 hover:text-neutral800 hover:font-bold w-40`}
      onHoverEnd={() => setIsBeingHovered(false)}
      onHoverStart={() => setIsBeingHovered(true)}
    >
      <div className="flex justify-center items-center gap-3">
        <span>
          {text}
          {isBeingHovered && (
            <motion.div
              className="absolute left-0 right-0 bottom-0 w-full h-1 bg-amber400"
              layoutId="underline"
              layout
            />
          )}
        </span>
        {isBeingHovered ? (
          <svg
            className="w-4 h-4"
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
            className="w-4 h-4"
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
          className="absolute shadow-md rounded-lg top-20 -left-1 p-2 bg-neutral50 dark:bg-neutral900 min-w-max"
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

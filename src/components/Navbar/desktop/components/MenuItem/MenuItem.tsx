import { motion } from "framer-motion"
import Link from "next/link"
import { useState } from "react"

interface IMenuItemProps {
  text: string
}

export const MenuItem = ({ text }: IMenuItemProps) => {
  const [isBeingHovered, setIsBeingHovered] = useState(false)

  return (
    <Link href="/test">
      <a>
        <motion.div
          className={`relative py-7 px-4 text-base text-neutral700 dark:text-neutral100 duration-300 hover:text-neutral800 hover:font-bold before:content-[attr(title)] before:font-bold before:overflow-hidden before:invisible before:h-0 before:block`}
          title={text}
          onHoverEnd={() => setIsBeingHovered(false)}
          onHoverStart={() => setIsBeingHovered(true)}
        >
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
        </motion.div>
      </a>
    </Link>
  )
}

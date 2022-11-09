import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

interface IOurServicesProps {
  text: string
  icon: string
  alt: string
  url: string
}

const SubItemVariants = {
  hidden: {
    x: -20,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
  },
}

export const OurServices = ({ text, icon, alt, url }: IOurServicesProps) => {
  return (
    <Link href={url}>
      <a>
        <motion.div
          className="flex justify-left items-center gap-4 p-4 hover:bg-neutral200 dark:hover:bg-neutral800"
          variants={SubItemVariants}
          layout
        >
          <div className="flex items-center justify-center p-1.5 rounded-lg bg-white dark:bg-neutral200">
            <Image
              alt={alt}
              height="20"
              src={icon}
              width="24"
            />
          </div>
          <span className="text-base font-normal text-neutral700 dark:text-neutral200">{text}</span>
        </motion.div>
      </a>
    </Link>
  )
}

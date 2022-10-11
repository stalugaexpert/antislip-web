import { motion, useCycle } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

import { MenuToggle } from "./components/MenuToggle"
import { Navigation } from "./components/Navigation"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const NavbarMobile = ({ t }: any) => {
  const [isOpen, toggleOpen] = useCycle(false, true)

  const sideBarVariants = {
    open: {
      clipPath: `circle(1000px at 90% 45px)`,
      transition: {
        duration: 0.4,
      },
    },
    closed: {
      clipPath: `circle(5px at 93% 45px)`,
      transition: {
        duration: 0.4,
        delay: 0.4,
      },
    },
  }

  return (
    <motion.nav
      animate={isOpen ? "open" : "closed"}
      className="fixed w-full flex items-center justify-between px-3 h-16 shadow-nav bg-white dark:bg-neutral900"
      initial={false}
    >
      <motion.div
        className="absolute top-0 right-0 bottom-0 w-screen h-screen bg-white dark:bg-neutral900"
        variants={sideBarVariants}
      />
      <Link href="">
        <a className="p-3">
          <Image
            alt={t('navbar:logoAlt')}
            height="37"
            src="/logo.png"
            width="81"
          />
        </a>
      </Link>
      <MenuToggle toggle={() => toggleOpen()} />
      <Navigation
        t={t}
        toggle={() => toggleOpen()}
      />
    </motion.nav>
  )
}

import { motion, useCycle } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"
import { useTranslation } from 'next-i18next'
import { useTheme } from "next-themes"
import { scrollToTopHome } from "src/utils/helpers/scrollToTop"

import logoLight from '../../../../public/icons/logo-enubes-orange.png'
import logoDark from '../../../../public/icons/logo-enubes-orange-white.png'
import { ThemeButton } from "../components/ThemeButton"
import { MenuToggle } from "./components/MenuToggle"
import { Navigation } from "./components/Navigation"

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

export const NavbarMobile = () => {
  const { t } = useTranslation()
  const { systemTheme, theme } = useTheme()
  const { asPath } = useRouter()
  const currentTheme = theme === 'system' ? systemTheme : theme
  const [isOpen, toggleOpen] = useCycle(false, true)

  return (
    <motion.nav
      animate={isOpen ? "open" : "closed"}
      className="fixed w-full flex items-center justify-between px-3 h-16 shadow-nav bg-white dark:bg-neutral900 z-20"
      initial={false}
    >
      <motion.div
        className="absolute top-0 right-0 bottom-0 w-screen h-screen bg-white dark:bg-neutral900"
        variants={sideBarVariants}
      />
      <Link href="/">
        <a
          className="p-3"
          onClick={() => scrollToTopHome(asPath)}
        >
          <div className="relative h-10 w-48">
            { currentTheme === 'dark' ? (
              <Image
                alt={t('navbar:logoAlt')}
                layout="fill"
                objectFit='contain'
                src={logoDark}
              />
            ) : (
              <Image
                alt={t('navbar:logoAlt')}
                layout="fill"
                objectFit='contain'
                src={logoLight}
              />
            )}
          </div>
        </a>
      </Link>
      <div className="flex items-center justify-center z-50">
        <ThemeButton />
        <MenuToggle toggle={toggleOpen} />
      </div>
      <Navigation
        toggle={toggleOpen}
      />
    </motion.nav>
  )
}

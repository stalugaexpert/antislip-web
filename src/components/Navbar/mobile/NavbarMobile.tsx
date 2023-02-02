import { motion, useCycle } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'
import { scrollToTopHome } from 'src/utils/helpers/scrollToTop'

import logoLight from '../../../../public/icons/logo-enubes-orange.png'
import logoDark from '../../../../public/icons/logo-enubes-orange-white.png'
import { ThemeButton } from '../components/ThemeButton'
import { MenuToggle } from './components/MenuToggle'
import { Navigation } from './components/Navigation'

const sideBarVariants = {
  open: {
    clipPath: 'circle(1000px at 90% 45px)',
    transition: {
      duration: 0.4,
    },
  },
  closed: {
    clipPath: 'circle(5px at 93% 45px)',
    transition: {
      duration: 0.4,
      delay: 0.4,
    },
  },
}

export const NavbarMobile = () => {
  const { t } = useTranslation()
  const { asPath } = useRouter()
  const [isOpen, toggleOpen] = useCycle(false, true)

  return (
    <motion.nav
      animate={isOpen ? 'open' : 'closed'}
      className="fixed z-20 hidden h-16 w-full items-center justify-between bg-white px-3 shadow-nav dark:bg-neutral900 recommendations-sm:flex"
      initial={false}
    >
      <motion.div
        className="absolute top-0 right-0 bottom-0 h-screen w-screen bg-white dark:bg-neutral900"
        variants={sideBarVariants}
      />
      <Link href="/">
        <a
          className="p-3"
          onClick={() => scrollToTopHome(asPath)}
        >
          <div className="relative h-10 w-48">
            <div className="hidden dark:block">
              <Image
                alt={t('navbar:logoAlt')}
                layout="fill"
                objectFit="contain"
                placeholder="blur"
                src={logoDark}
              />
            </div>
            <div className="block dark:hidden">
              <Image
                alt={t('navbar:logoAlt')}
                layout="fill"
                objectFit="contain"
                placeholder="blur"
                src={logoLight}
              />
            </div>
          </div>
        </a>
      </Link>
      <div className="z-50 flex items-center justify-center">
        <ThemeButton />
        <MenuToggle toggle={toggleOpen} />
      </div>
      <Navigation toggle={toggleOpen} />
    </motion.nav>
  )
}

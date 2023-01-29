import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'
import { scrollToTopHome } from 'src/utils/helpers/scrollToTop'

import logoLight from '../../../../public/icons/logo-enubes-orange.png'
import logoDark from '../../../../public/icons/logo-enubes-orange-white.png'
import { ThemeButton } from '../components/ThemeButton'
import { ContactButton } from './components/ContactButton'
import { MenuItem } from './components/MenuItem'
import { MenuItemDropdown } from './components/MenuItemDropdown'
import { OurServices } from './components/OurServices'

export const NavbarDesktop = () => {
  const { t } = useTranslation()
  const { asPath } = useRouter()

  const servicesProps = [
    {
      text: t('navbar:servicesList.antislip'),
      icon: '/icons/slip.png',
      alt: 'slip icon',
      url: '/antislip',
    },
    {
      text: t('navbar:servicesList.pendulum'),
      icon: '/icons/pendulum.png',
      alt: 'pendulum icon',
      url: '/friction-measurement',
    },
    {
      text: t('navbar:servicesList.sealers'),
      icon: '/icons/sealer.png',
      alt: 'sealer icon',
      url: '/sealing',
    },
    {
      text: t('navbar:servicesList.cleaning'),
      icon: '/icons/clean.png',
      alt: 'cleaning icon',
      url: '/cleaning',
    },
  ]

  return (
    <header className="fixed z-20 w-full bg-white px-10 shadow-nav dark:bg-neutral900 recommendations-sm:hidden">
      <div className="mx-auto flex max-w-screen-2xl items-center justify-between">
        <Link href="/">
          <a
            className="py-3 px-1"
            onClick={() => scrollToTopHome(asPath)}
          >
            <div className="relative h-12 w-48">
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
        <div className="flex items-center justify-center gap-3">
          <MenuItem
            text={t('navbar:home')}
            url="/"
          />
          <MenuItemDropdown text={t('navbar:services')}>
            {servicesProps.map((item) => (
              <OurServices
                alt={item.alt}
                icon={item.icon}
                key={item.text}
                text={item.text}
                url={item.url}
              />
            ))}
          </MenuItemDropdown>
          <MenuItem
            text={t('navbar:shop')}
            url="https://e-nubes.com"
            isExternal
          />
          <MenuItem
            text={t('navbar:knowledge')}
            url="/knowledge"
          />
          <ContactButton text={t('navbar:contact')} />
          <ThemeButton />
        </div>
      </div>
    </header>
  )
}

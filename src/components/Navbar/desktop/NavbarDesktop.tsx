import Image from "next/image"
import Link from "next/link"
import { useTranslation } from 'next-i18next'
import { useTheme } from "next-themes"

import { ThemeButton } from "../components/ThemeButton"
import { ContactButton } from "./components/ContactButton"
import { MenuItem } from "./components/MenuItem"
import { MenuItemDropdown } from "./components/MenuItemDropdown"
import { OurServices } from "./components/OurServices"

export const NavbarDesktop = () => {
  const { t } = useTranslation()
  const { systemTheme, theme } = useTheme()
  const currentTheme = theme === 'system' ? systemTheme : theme

  const servicesProps = [
    {
      text: t('navbar:servicesList.antislip'),
      icon: "/icons/slip.png",
      alt: "slip icon"
    },
    {
      text: t('navbar:servicesList.pendulum'),
      icon: "/icons/pendulum.png",
      alt: "pendulum icon"
    },
    {
      text: t('navbar:servicesList.sealers'),
      icon: "/icons/sealer.png",
      alt: "sealer icon"
    },
    {
      text: t('navbar:servicesList.cleaning'),
      icon: "/icons/clean.png",
      alt: "cleaning icon"
    }
  ]

  return (
    <header className="fixed w-full bg-white dark:bg-neutral900 px-10 shadow-nav z-20">
      <div className="flex items-center justify-between max-w-screen-2xl mx-auto">
        <Link href="">
          <a className="py-3 px-1">
            { currentTheme === 'dark' ? (
              <Image
                alt={t('navbar:logoAlt')}
                height="37"
                src="/icons/logo-dark.png"
                width="81"
              />
            ) : (
              <Image
                alt={t('navbar:logoAlt')}
                height="37"
                src="/icons/logo.png"
                width="81"
              />
            )}
          </a>
        </Link>
        <div className="flex items-center justify-center gap-3">
          <MenuItem text={t('navbar:home')}/>
          <MenuItemDropdown text={t('navbar:services')}>
            {servicesProps.map((item) => (
              <OurServices
                alt={item.alt}
                icon={item.icon}
                key={item.text}
                text={item.text}
              />
            ))}
          </MenuItemDropdown>
          <MenuItem text={t('navbar:knowledge')} />
          <ContactButton text={t('navbar:contact')}/>
          <ThemeButton />
        </div>
      </div>
    </header>
  )
}

import Image from "next/image"
import Link from "next/link"
import { useTheme } from "next-themes"

import { ThemeButton } from "../components/ThemeButton"
import { ContactButton } from "./components/ContactButton"
import { MenuItem } from "./components/MenuItem"
import { MenuItemDropdown } from "./components/MenuItemDropdown"
import { OurServices } from "./components/OurServices"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const NavbarDesktop = ({ t }: any) => {
  const { systemTheme, theme } = useTheme()
  const currentTheme = theme === 'system' ? systemTheme : theme

  const servicesProps = [
    {
      text: t('navbar:servicesList.antislip'),
      icon: "/slip.png",
      alt: "slip icon"
    },
    {
      text: t('navbar:servicesList.pendulum'),
      icon: "/pendulum.png",
      alt: "pendulum icon"
    },
    {
      text: t('navbar:servicesList.sealers'),
      icon: "/sealer.png",
      alt: "sealer icon"
    },
    {
      text: t('navbar:servicesList.cleaning'),
      icon: "/clean.png",
      alt: "cleaning icon"
    }
  ]

  return (
    <header className="fixed w-full bg-white dark:bg-neutral900 px-10 shadow-nav">
      <div className="flex items-center justify-between">
        <Link href="">
          <a className="py-3 px-1">
            { currentTheme === 'dark' ? (
              <Image
                alt={t('navbar:logoAlt')}
                height="37"
                src="/logo-dark.png"
                width="81"
              />
            ) : (
              <Image
                alt={t('navbar:logoAlt')}
                height="37"
                src="/logo.png"
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

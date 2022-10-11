import Image from "next/image"
import Link from "next/link"

import { ContactButton } from "./components/ContactButton"
import { MenuItem } from "./components/MenuItem"
import { MenuItemDropdown } from "./components/MenuItemDropdown"
import { OurServices } from "./components/OurServices"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const NavbarDesktop = ({ t }: any) => {
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
    <header className="fixed w-full bg-white dark:bg-neutral900 px-14 shadow-nav">
      <div className="flex items-center justify-between">
        <Link href="">
          <a>
            <Image
              alt={t('navbar:logoAlt')}
              height="37"
              src="/logo.png"
              width="81"
            />
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
        </div>
      </div>
    </header>
  )
}

import { useEffect, useState } from 'react'

import { NavbarDesktop } from './desktop'
import { NavbarMobile } from './mobile'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const Navbar = ({ t }: any) => {
  const [width, setWidth] = useState(0)
  const breakpoint = 796

  useEffect(() => {
    setWidth(window.innerWidth)
    const handleWindowResize = () => setWidth(window.innerWidth)
    window.addEventListener("resize", handleWindowResize)

    return () => window.removeEventListener("resize", handleWindowResize)
  }, [])

  return (
    width >= breakpoint ? <NavbarDesktop t={t}/> : <NavbarMobile t={t}/>
  )
}

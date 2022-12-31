import { useEffect, useState } from 'react'

import { NavbarDesktop } from './desktop'
import { NavbarMobile } from './mobile'

export const Navbar = () => {
  const [width, setWidth] = useState(0)
  const breakpoint = 986 // was 796

  useEffect(() => {
    setWidth(window.innerWidth)
    const handleWindowResize = () => setWidth(window.innerWidth)
    window.addEventListener("resize", handleWindowResize)

    return () => window.removeEventListener("resize", handleWindowResize)
  }, [])

  return (
    width >= breakpoint ? <NavbarDesktop /> : <NavbarMobile />
  )
}

import { useEffect, useState } from 'react'

import { NavbarDesktop } from './desktop'
import { NavbarMobile } from './mobile'

export const Navbar = () => {
  const [mounted, setMounted] = useState(false)
  const [width, setWidth] = useState(0)
  const breakpoint = 986

  useEffect(() => {
    setMounted(true)
    setWidth(window.innerWidth)
    const handleWindowResize = () => setWidth(window.innerWidth)
    window.addEventListener('resize', handleWindowResize)

    return () => window.removeEventListener('resize', handleWindowResize)
  }, [])

  if (!mounted) {
    return null
  }

  return width >= breakpoint ? <NavbarDesktop /> : <NavbarMobile />
}

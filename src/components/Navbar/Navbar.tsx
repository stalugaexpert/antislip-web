import { useEffect, useState } from 'react'

import { NavbarDesktop } from './desktop'
import { NavbarMobile } from './mobile'

export const Navbar = () => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <>
      <NavbarDesktop />
      <NavbarMobile />
    </>
  )
}

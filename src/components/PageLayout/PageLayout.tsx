import { PropsWithChildren } from "react"

import { Footer } from "../Footer"
import { Navbar } from "../Navbar"

export const PageLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}

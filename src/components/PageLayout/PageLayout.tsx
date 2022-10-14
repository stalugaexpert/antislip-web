import { Footer, Navbar } from "@components"
import { PropsWithChildren } from "react"

export const PageLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}

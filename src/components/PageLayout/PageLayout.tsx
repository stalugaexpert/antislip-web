import { Footer, Navbar } from "@components"
import { PropsWithChildren } from "react"

export const PageLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="bg-neutral50 dark:bg-neutral800">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

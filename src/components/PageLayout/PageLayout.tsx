import { CookiesConsent, Footer, Navbar } from '@components'
import { PropsWithChildren } from 'react'

export const PageLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="bg-white dark:bg-neutral800">
      <Navbar />
      <main>{children}</main>
      <CookiesConsent />
      <Footer />
    </div>
  )
}

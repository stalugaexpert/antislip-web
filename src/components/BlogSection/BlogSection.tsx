import Link from 'next/link'
import { useTranslation } from 'next-i18next'

export const BlogSection = () => {
  const { t } = useTranslation()

  return (
    <section className="px-24 overflow-hidden max-w-screen-2xl mx-auto mb-20 h-fit services-xs:mb-12 services-xs:px-14 about-sm:px-10 mission-sm:px-0 mission-sm:mb-0">
      <div>test</div>
    </section>
  )
}

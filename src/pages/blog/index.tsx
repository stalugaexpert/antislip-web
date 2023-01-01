/* eslint-disable @typescript-eslint/no-explicit-any */
import { PageLayout, Seo } from '@components'
import type { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { fetchAllBlogPosts } from 'src/utils/api/service'
import { getCorrectImageSmallest } from 'src/utils/helpers/getCorrectImage'

const Blog: NextPage = ({ blogPosts }: any) => {
  const { t } = useTranslation()

  return (
    <PageLayout>
      <Seo
        description={t('seo:blog.metaDescription')}
        title={t('seo:blog.title')}
      />
      <section className="px-24 pt-32 navbar-md:pt-24 max-w-screen-2xl mx-auto mb-12 services-xs:mb-12 services-xs:px-14 about-sm:px-10 about-xsm:px-6">
        <div className="mb-12">
          <div className="w-3/4 recommendations-ds:w-[85%] mb-12">
            <h5 className="text-base uppercase about-md:text-sm font-semibold text-amber400 mb-4">
              {t('blog:blog')}
            </h5>
            <h2 className="text-4xl mb-4 about-md:text-3xl about-xsm:text-2xl font-semibold text-neutral800 dark:text-neutral50">
              {t('blog:blogDescription')}
            </h2>
          </div>
          <div className="bg-neutral200 dark:bg-neutral900 w-full flex items-center justify-between p-7 rounded-xl" />
        </div>
        { blogPosts.data && (
          <section>
            <div className="grid grid-cols-3 knowledge-md:grid-cols-2 blog-sm:grid-cols-1 gap-12 blog-sm:gap-6 blog-sm:mb-8">
              {blogPosts.data.map((post: any) => (
                <Link
                  href={`/blog/${post.attributes.slug}`}
                  key={post.id}
                >
                  <a>
                    <div className="duration-300 hover:opacity-70 hover:translate-y-[2px]">
                      <div className="relative h-[185px] about-md:h-[20vh] blog-sm:h-[25vh] w-full mb-4 rounded-lg overflow-hidden">
                        <Image
                          alt=""
                          layout="fill"
                          objectFit="cover"
                          src={getCorrectImageSmallest(post.attributes.postImage.data.attributes.formats)}
                        />
                      </div>
                      <h3 className="text-sm font-semibold text-neutral800 dark:text-neutral100">
                        {post.attributes.title}
                      </h3>
                    </div>
                  </a>
                </Link>
              ))}
            </div>
          </section>
        ) || <p>loading...</p>}
      </section>
    </PageLayout>
  )
}

export async function getStaticProps({ locale }: { locale: string }) {
  const localization = locale === 'pl' ? 'pl-PL' : 'en'
  const res = await fetchAllBlogPosts(localization)

  return {
    props: {
      ...(await serverSideTranslations(locale, [
        'navbar',
        'footer',
        'blog',
        'contact',
        'contact-page',
        'seo'
      ])),
      blogPosts: await res.json()
    },
  }
}

export default Blog

import { PageLayout, Seo } from '@components'
import type { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { BlogPostsQuery } from 'src/graphql/generated/graphql'
import { getCorrectImageSmallest } from 'src/utils/helpers/getCorrectImage'
import { getAllBlogPosts } from 'src/utils/requests/requests'

interface IBlogPageProps {
  blogPostsAll: BlogPostsQuery
}

const Blog: NextPage<IBlogPageProps> = ({ blogPostsAll }) => {
  const { t } = useTranslation()

  return (
    <PageLayout>
      <Seo
        description={t('seo:blog.metaDescription')}
        title={t('seo:blog.title')}
      />
      <section className="mx-auto mb-12 max-w-screen-2xl px-24 pt-32 navbar-md:pt-24 services-xs:mb-12 services-xs:px-14 about-sm:px-10 about-xsm:px-6">
        <div className="mb-12">
          <div className="mb-12 w-3/4 recommendations-ds:w-[85%]">
            <h5 className="mb-4 text-base font-semibold uppercase text-amber400 about-md:text-sm">
              {t('blog:blog')}
            </h5>
            <h2 className="mb-4 text-4xl font-semibold text-neutral800 dark:text-neutral50 about-md:text-3xl about-xsm:text-2xl">
              {t('blog:blogDescription')}
            </h2>
          </div>
          <div className="flex w-full items-center justify-between rounded-xl bg-neutral200 p-7 dark:bg-neutral900" />
        </div>
        {(blogPostsAll.blogs?.data && (
          <section>
            <div className="grid grid-cols-3 gap-12 knowledge-md:grid-cols-2 blog-sm:mb-8 blog-sm:grid-cols-1 blog-sm:gap-6">
              {blogPostsAll.blogs.data.map((post) => (
                <Link
                  href={`/blog/${post.attributes?.slug}`}
                  key={post.id}
                >
                  <a>
                    <div className="duration-300 hover:translate-y-[2px] hover:opacity-70">
                      <div className="relative mb-4 h-[185px] w-full overflow-hidden rounded-lg about-md:h-[20vh] blog-sm:h-[25vh]">
                        <Image
                          alt=""
                          layout="fill"
                          objectFit="cover"
                          src={getCorrectImageSmallest(
                            post.attributes?.postImage.data?.attributes?.formats
                          )}
                        />
                      </div>
                      <h3 className="text-sm font-semibold text-neutral800 dark:text-neutral100">
                        {post.attributes?.title}
                      </h3>
                    </div>
                  </a>
                </Link>
              ))}
            </div>
          </section>
        )) || <p>loading...</p>}
      </section>
    </PageLayout>
  )
}

export async function getStaticProps({ locale }: { locale: string }) {
  const localization = locale === 'pl' ? 'pl-PL' : 'en'

  const blogPostsAll = await getAllBlogPosts(localization)

  return {
    props: {
      ...(await serverSideTranslations(locale, [
        'navbar',
        'footer',
        'blog',
        'contact',
        'contact-page',
        'seo',
      ])),
      blogPostsAll,
    },
  }
}

export default Blog

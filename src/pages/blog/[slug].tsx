import 'moment/locale/pl'

import { BlogSection, PageLayout } from '@components'
import DOMPurify from 'isomorphic-dompurify'
import moment from 'moment'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { BlogPostQuery, BlogPostsQuery } from 'src/graphql/generated/graphql'
import { getCorrectImageLargest } from 'src/utils/helpers/getCorrectImage'
import { getAllBlogPosts, getSingleBlogPost } from 'src/utils/requests/requests'

interface IStaticBlogPostProps {
  locale: string
  params: {
    slug: string
  }
}

interface IBlogPostPageProps {
  blogPost: BlogPostQuery
  blogPostsAll: BlogPostsQuery
}

const BlogPost: NextPage<IBlogPostPageProps> = ({ blogPost, blogPostsAll }) => {
  const { t } = useTranslation()
  moment().localeData()

  return (
    <PageLayout>
      <Head>
        <title>{blogPost.blogs?.data[0].attributes?.SEO.metaTitle}</title>
        <meta
          content={blogPost.blogs?.data[0].attributes?.SEO.metaDescription}
          name="description"
        />
        <meta
          content={blogPost.blogs?.data[0].attributes?.SEO.metaTitle}
          key="title"
          property="og:title"
        />
        <meta
          content="article"
          property="og:type"
        />
        <meta
          content={getCorrectImageLargest(
            blogPost.blogs?.data[0].attributes?.postImage.data?.attributes
              ?.formats
          )}
          property="og:image"
        />
        <meta
          content="Anti-slip"
          property="og:site_name"
        />
        <meta
          content={blogPost.blogs?.data[0].attributes?.author}
          property="article:author"
        />
      </Head>
      <section className="mx-auto mb-12 max-w-screen-2xl px-24 pt-32 navbar-md:pt-24 services-xs:mb-12 services-xs:px-14 about-sm:px-10 about-xsm:px-6">
        <Link href="/blog">
          <a>
            <div className="mb-8 flex items-center gap-4 duration-300 hover:-translate-x-[2px] hover:opacity-70 about-xsm:mb-6">
              <div className="bg-neutral100 p-2 dark:bg-neutral900">
                <svg
                  className="h-6 w-6 about-xsm:h-4 about-xsm:w-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <span className="text-sm text-neutral800 dark:text-neutral300 about-xsm:hidden">
                {t('blog:previousPage')}
              </span>
              <span className="hidden text-sm text-neutral800 dark:text-neutral300 about-xsm:block">
                {t('blog:back')}
              </span>
            </div>
          </a>
        </Link>
        <div className="mb-8 flex justify-between">
          <div className="w-3/4 recommendations-ds:w-[85%]">
            <h5 className="mb-4 text-base font-semibold uppercase text-amber400 about-md:text-sm">
              {t('blog:blog')}
            </h5>
            <h1 className="text-4xl font-semibold text-neutral800 dark:text-neutral50 about-md:text-3xl about-xsm:text-2xl">
              {blogPost.blogs?.data[0].attributes?.title}
            </h1>
          </div>
        </div>
        <div className="relative mb-4 h-[31.2rem] w-full before:absolute before:top-0 before:left-full before:z-10 before:h-48 before:w-48 before:-translate-x-full before:-translate-y-2/4 before:bg-amber400 before:opacity-50 before:blur-[100px] before:content-[''] dark:before:opacity-30 about-md:h-[30vh]">
          <Image
            alt=""
            layout="fill"
            objectFit="cover"
            src={getCorrectImageLargest(
              blogPost.blogs?.data[0].attributes?.postImage.data?.attributes
                ?.formats
            )}
          />
        </div>
        <div className="flex items-center justify-between about-xsm:text-sm">
          <div>
            <span className="inline font-normal text-neutral600 dark:text-neutral300">
              {t('blog:author')}
            </span>
            <span className="inline font-normal italic text-neutral600 dark:text-neutral300">
              {blogPost.blogs?.data[0].attributes?.author}
            </span>
          </div>
          <span className="font-normal text-neutral600 dark:text-neutral300">
            {moment(blogPost.blogs?.data[0].attributes?.publishedAt).format(
              'D MMMM YYYY'
            )}
          </span>
        </div>
      </section>
      <section className="mx-auto mb-12 h-fit max-w-screen-2xl px-56 services-sm:px-36 services-xs:mb-12 about-sm:px-24 about-xsm:px-6">
        <div
          className="ck-content"
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(
              blogPost.blogs?.data[0].attributes?.content as string
            ),
          }}
        />
      </section>
      <section className="mx-auto mb-20 h-fit max-w-screen-2xl px-[11rem] recommendations-md:px-32 recommendations-ds:px-16 recommendations-sm:px-10 services-xs:mb-12 about-sm:px-6">
        {blogPost.blogs?.data[0].attributes?.isFromSmartFloor && (
          <div>
            <p className="mb-3 text-base font-normal text-neutral800 dark:text-neutral50 about-md:text-sm">
              {t('blog:authorSmartfloor')}
            </p>
            <a
              href="https://antyposlizg.pl/"
              rel="noreferrer"
              target="_blank"
            >
              <div className="w-fit bg-neutral500 p-2 pl-3 dark:bg-transparent">
                <div className="relative h-16 w-72 footer-md:h-12 footer-md:w-56">
                  <Image
                    alt={t('blog:authorSmartfloor')}
                    layout="fill"
                    objectFit="contain"
                    src="/companiesIcons/smartfloor-logo.png"
                  />
                </div>
              </div>
            </a>
          </div>
        )}
      </section>
      <BlogSection
        blogPost={blogPost}
        blogPostsAll={blogPostsAll}
        subtitle={t('blog:checkBlog')}
        title={t('blog:wantMore')}
      />
    </PageLayout>
  )
}

export async function getStaticPaths({ locales }: { locales: string[] }) {
  const pathsPrototype = await Promise.all(
    locales.map(async (locale) => {
      const isDefault = locale === 'pl'
      try {
        const blogPostsAll = await getAllBlogPosts(isDefault ? 'pl-PL' : locale)

        return blogPostsAll.blogs?.data.map((post) => {
          return { params: { slug: post.attributes?.slug }, locale: locale }
        })
      } catch (error) {
        throw new Error(error as string)
      }
    })
  )
  const paths = Array.prototype.concat.apply([], pathsPrototype)

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ locale, params }: IStaticBlogPostProps) {
  const localization = locale === 'pl' ? 'pl-PL' : 'en'

  const blogPostsAll = await getAllBlogPosts(localization)

  const blogPost = await getSingleBlogPost(localization, params.slug)

  return {
    props: {
      ...(await serverSideTranslations(locale, ['navbar', 'footer', 'blog'])),
      blogPost,
      blogPostsAll,
    },
  }
}

export default BlogPost

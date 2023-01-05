/* eslint-disable react/no-children-prop */
/* eslint-disable @typescript-eslint/no-explicit-any */
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
import { STRAPI_API_KEY, STRAPI_URL } from 'src/config/config'
import { fetchAllBlogPosts, fetchSingleBlogPost } from 'src/utils/api/service'
import { getCorrectImageLargest } from 'src/utils/helpers/getCorrectImage'

interface IStaticBlogPostProps {
  locale: string,
  params: {
    slug: string,
  }
}

const BlogPost: NextPage = ({ blogPost, blogPostsAll }: any) => {
  const { t } = useTranslation()
  moment().localeData()

  return (
    <PageLayout>
      <Head>
        <title>{blogPost.data[0].attributes.SEO.metaTitle}</title>
        <meta
          content={blogPost.data[0].attributes.SEO.metaDescription}
          name="description"
        />
        <meta
          content={blogPost.data[0].attributes.SEO.metaTitle}
          key="title"
          property="og:title"
        />
        <meta
          content="article"
          property="og:type"
        />
        <meta
          content={getCorrectImageLargest(blogPost.data[0].attributes.postImage.data.attributes.formats)}
          property="og:image"
        />
        <meta
          content="Anti-slip"
          property="og:site_name"
        />
        <meta
          content={blogPost.data[0].attributes.author}
          property="article:author"
        />
      </Head>
      <section className="px-24 pt-32 navbar-md:pt-24 max-w-screen-2xl mx-auto mb-12 services-xs:mb-12 services-xs:px-14 about-sm:px-10 about-xsm:px-6">
        <Link href="/blog">
          <a>
            <div className="flex items-center gap-4 mb-8 about-xsm:mb-6 duration-300 hover:opacity-70 hover:-translate-x-[2px]">
              <div className="p-2 bg-neutral100 dark:bg-neutral900">
                <svg
                  className="w-6 h-6 about-xsm:w-4 about-xsm:h-4"
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
              <span className="text-sm text-neutral800 dark:text-neutral300 about-xsm:hidden">{t('blog:previousPage')}</span>
              <span className="hidden text-sm text-neutral800 dark:text-neutral300 about-xsm:block">{t('blog:back')}</span>
            </div>
          </a>
        </Link>
        <div className="flex justify-between mb-8">
          <div className="w-3/4 recommendations-ds:w-[85%]">
            <h5 className="text-base uppercase about-md:text-sm font-semibold text-amber400 mb-4">
              {t('blog:blog')}
            </h5>
            <h1 className="text-4xl about-md:text-3xl about-xsm:text-2xl font-semibold text-neutral800 dark:text-neutral50">
              {blogPost.data[0].attributes.title}
            </h1>
          </div>
        </div>
        <div className="relative mb-4 h-[31.2rem] about-md:h-[30vh] w-full before:content-[''] before:absolute before:h-48 before:w-48 before:bg-amber400 before:z-10 before:top-0 before:left-full before:-translate-x-full before:-translate-y-2/4 before:blur-[100px] before:opacity-50 dark:before:opacity-30">
          <Image
            alt=""
            layout="fill"
            objectFit="cover"
            src={getCorrectImageLargest(blogPost.data[0].attributes.postImage.data.attributes.formats)}
          />
        </div>
        <div className="flex items-center justify-between about-xsm:text-sm">
          <div>
            <span className="inline font-normal text-neutral600 dark:text-neutral300">{t('blog:author')}</span>
            <span className="inline italic font-normal text-neutral600 dark:text-neutral300">{blogPost.data[0].attributes.author}</span>
          </div>
          <span className="font-normal text-neutral600 dark:text-neutral300">{moment(blogPost.data[0].attributes.publishedAt).format('D MMMM YYYY')}</span>
        </div>
      </section>
      <section className="px-56 max-w-screen-2xl mx-auto mb-12 h-fit services-xs:mb-12 services-sm:px-36 about-sm:px-24 about-xsm:px-6">
        <div
          className="ck-content"
          dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(blogPost.data[0].attributes.content) }}
        />
      </section>
      <section className="px-[11rem] max-w-screen-2xl mx-auto mb-20 h-fit services-xs:mb-12 recommendations-md:px-32 recommendations-ds:px-16 recommendations-sm:px-10 about-sm:px-6">
        {blogPost.data[0].attributes.isFromSmartFloor && (
          <div>
            <p className="text-base about-md:text-sm font-normal text-neutral800 dark:text-neutral50 mb-3">
              {t('blog:authorSmartfloor')}
            </p>
            <a
              href="https://antyposlizg.pl/"
              rel="noreferrer"
              target="_blank"
            >
              <div className="p-2 w-fit pl-3 bg-neutral500 dark:bg-transparent">
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
  //version 1
  const pathsPrototype = await Promise.all(locales.map( async (locale) => {
    const isDefault = locale === 'pl'
    try {
      const res = await fetch(`${STRAPI_URL}/api/blogs${isDefault ? '' : `?locale=${locale}` }`, {
        headers: { Authorization: `Bearer ${STRAPI_API_KEY}` }
      })
      const data = await res.json()
      return data.data.map((post: any) => {
        return { params: { slug: post.attributes.slug }, locale: locale }
      })
    }
    catch(error: any) {
      throw new Error(error)
    }
  }))
  const paths = Array.prototype.concat.apply([], pathsPrototype)

  //version 2
  // const resPl = await fetch(`${STRAPI_URL}/api/blogs`)
  // const dataPl = await resPl.json()
  // const dataDonePl = dataPl.data.map((post: any) => {
  //   return { params: { slug: post.attributes.slug }, locale: 'pl' }
  // })

  // const resEn = await fetch(`${STRAPI_URL}/api/blogs?locale=en`)
  // const dataEn = await resEn.json()
  // const dataDoneEn = dataEn.data.map((post: any) => {
  //   return { params: { slug: post.attributes.slug }, locale: 'en' }
  // })
  // const paths = [...dataDonePl, ...dataDoneEn]

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ locale, params }: IStaticBlogPostProps ) {
  const localization = locale === 'pl' ? 'pl-PL' : 'en'
  const res = await fetchSingleBlogPost(localization, params.slug)
  const resAll = await fetchAllBlogPosts(localization)

  return {
    props: {
      ...(await serverSideTranslations(locale, [
        'navbar',
        'footer',
        'blog',
      ])),
      blogPost: await res.json(),
      blogPostsAll : await resAll.json()
    },
  }
}

export default BlogPost

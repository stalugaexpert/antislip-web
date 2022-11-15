/* eslint-disable react/no-children-prop */
/* eslint-disable @typescript-eslint/no-explicit-any */
import 'moment/locale/pl'

import { PageLayout } from '@components'
import DOMPurify from 'isomorphic-dompurify'
import moment from 'moment'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import ReactMarkdown from 'react-markdown'
import { STRAPI_URL } from 'src/config/config'
import { fetchAllBlogPosts, fetchSingleBlogPost } from 'src/utils/api/service'
import { getCorrectImageLargest, getCorrectImageSmallest } from 'src/utils/helpers/getCorrectImage'

interface IStaticBlogPostProps {
  locale: string,
  params: {
    slug: string,
  }
}

const BlogPost: NextPage = ({ blogPost, blogPostsAll }: any) => {
  const { t } = useTranslation()
  moment().localeData()
  console.log(blogPost)

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
            <div className='flex items-center gap-4 mb-8 about-xsm:mb-6 duration-300 hover:opacity-70 hover:-translate-x-[2px]'>
              <div className='p-2 bg-neutral100 dark:bg-neutral900'>
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
              <span className='text-sm text-neutral800 dark:text-neutral300 about-xsm:hidden'>{t('blog:previousPage')}</span>
              <span className='hidden text-sm text-neutral800 dark:text-neutral300 about-xsm:block'>{t('blog:back')}</span>
            </div>
          </a>
        </Link>
        <div className="flex justify-between mb-8">
          <div className="w-3/4 recommendations-ds:w-[85%]">
            <h5 className="text-base uppercase about-md:text-sm font-semibold text-amber400 mb-4">
              {t('blog:blog')}
            </h5>
            <h2 className="text-4xl about-md:text-3xl about-xsm:text-2xl font-semibold text-neutral800 dark:text-neutral50">
              {blogPost.data[0].attributes.title}
            </h2>
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
        <div className='flex items-center justify-between about-xsm:text-sm'>
          <div>
            <span className='inline font-normal text-neutral600 dark:text-neutral300'>{t('blog:author')}</span>
            <span className='inline italic font-normal text-neutral600 dark:text-neutral300'>{blogPost.data[0].attributes.author}</span>
          </div>
          <span className='font-normal text-neutral600 dark:text-neutral300'>{moment(blogPost.data[0].attributes.publishedAt).format('D MMMM YYYY')}</span>
        </div>
      </section>
      <section className="px-24 max-w-screen-2xl mx-auto mb-12 h-fit services-xs:mb-12 services-xs:px-14 about-sm:px-10 about-xsm:px-6">
        {/* <ReactMarkdown children={blogPost.data[0].attributes.content} /> */}
        <div
          className='ck-content'
          dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(blogPost.data[0].attributes.content) }}
        ></div>
      </section>
      <section className="px-24 max-w-screen-2xl mx-auto mb-12 h-fit services-xs:mb-12 services-xs:px-14 about-sm:px-10 about-xsm:px-6">
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
              <div className='p-2 w-fit pl-3 bg-neutral500 dark:bg-transparent'>
                <div className="relative h-16 w-72 footer-md:h-12 footer-md:w-56">
                  <Image
                    alt={t('blog:authorSmartfloor')}
                    layout="fill"
                    objectFit='contain'
                    src="/companiesIcons/smartfloor-logo.png"
                  />
                </div>
              </div>
            </a>
          </div>
        )}
      </section>
      <section className="px-24 max-w-screen-2xl mx-auto mb-20 h-fit services-xs:mb-12 services-xs:px-14 about-sm:px-10 about-xsm:px-6">
        <h3 className="font-semibold text-left text-xl about-md:text-base text-neutral800 dark:text-neutral50 mb-2">
          {t('blog:wantMore')}
        </h3>
        <h3 className="font-semibold text-left text-xl about-md:text-base text-amber600 mb-8">
          {t('blog:checkBlog')}
        </h3>
        <div className='grid grid-cols-3 knowledge-md:grid-cols-2 blog-sm:grid-cols-1 gap-12 blog-sm:gap-6'>
          {blogPostsAll.data.filter((item: any) => item.id !== blogPost.data[0].id).slice(-2).map((post: any) => (
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
                  <h5 className="text-sm font-semibold about-md:font-normal text-neutral800 dark:text-neutral50">
                    {post.attributes.title}
                  </h5>
                </div>
              </a>
            </Link>
          ))}
          <Link href="/blog">
            <a>
              <div className="flex items-center gap-6 duration-300 hover:opacity-75 hover:translate-x-2">
                <div className="p-3 about-md:p-2 bg-amber600 rounded-full text-neutral50">
                  <svg
                    className="w-8 h-8 about-md:w-6 about-md:h-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={3}
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.25 4.5l7.5 7.5-7.5 7.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-base font-semibold about-md:text-sm text-neutral800 dark:text-neutral50">
                    {t('blog:checkAll')}
                  </span>
                  <span className="text-base about-md:text-sm font-normal text-amber600">
                    {t('blog:readMore')}
                  </span>
                </div>
              </div>
            </a>
          </Link>
        </div>
      </section>
    </PageLayout>
  )
}

export async function getStaticPaths({ locales }: { locales: string[] }) {
  //version 1
  const pathsPrototype = await Promise.all(locales.map( async (locale) => {
    const isDefault = locale === 'pl'
    try {
      const res = await fetch(`${STRAPI_URL}/api/blogs${isDefault ? '' : `?locale=${locale}` }`)
      const data = await res.json()
      return data.data.map((post: any) => {
        return { params: { slug: post.attributes.slug }, locale: locale }
      })
    }
    catch(error: any) {
      console.log(error)
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

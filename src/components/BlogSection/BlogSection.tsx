/* eslint-disable @typescript-eslint/no-explicit-any */
import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useTranslation } from 'next-i18next'
import { getCorrectImageSmallest } from 'src/utils/helpers/getCorrectImage'

interface IBlogSectionProps {
  blogPostsAll: any,
  blogPost?: any,
  title: string,
  subtitle: string,
  isSinglePost?: boolean
}

export const BlogSection = ({ blogPostsAll, blogPost, title, subtitle, isSinglePost = false }: IBlogSectionProps) => {
  const { t } = useTranslation()
  const allBlogPosts = isSinglePost ? blogPostsAll.data.filter((item: any) => item.id !== blogPost.data[0].id) : blogPostsAll

  return (
    <section className="px-[11rem] max-w-screen-2xl mx-auto mb-20 h-fit services-xs:mb-12 recommendations-md:px-32 recommendations-ds:px-16 recommendations-sm:px-10 about-sm:px-6">
      <AnimatePresence>
        <motion.div
          initial={{ x: -300, opacity: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          whileInView={{ x: 0, opacity: 1 }}
        >
          <h3 className="font-semibold text-left text-xl about-md:text-base text-neutral800 dark:text-neutral50 mb-2">
            {title}
          </h3>
          <h3 className="font-semibold text-left text-xl about-md:text-base text-amber600 mb-8">
            {subtitle}
          </h3>
        </motion.div>
      </AnimatePresence>
      <div className="grid grid-cols-3 knowledge-md:grid-cols-2 blog-sm:grid-cols-1 gap-12 blog-sm:gap-6">
        {allBlogPosts.data.slice(-3).map((post: any) => (
          <AnimatePresence key={post.id}>
            <motion.div
              initial={{ x: -300, opacity: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              whileInView={{ x: 0, opacity: 1 }}
            >
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
            </motion.div>
          </AnimatePresence>
        ))}
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1 }}
          >
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
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}

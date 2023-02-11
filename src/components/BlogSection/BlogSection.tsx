import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useTranslation } from 'next-i18next'
import { BlogPostQuery, BlogPostsQuery } from 'src/graphql/generated/graphql'
import { getCorrectImageSmallest } from 'src/utils/helpers/getCorrectImage'

interface IBlogSectionProps {
  blogPostsAll: BlogPostsQuery
  blogPost?: BlogPostQuery
  title: string
  subtitle: string
  isSinglePost?: boolean
}

export const BlogSection = ({
  blogPostsAll,
  title,
  subtitle,
}: IBlogSectionProps) => {
  const { t } = useTranslation()

  return (
    <section className="mx-auto mb-20 h-fit max-w-screen-2xl px-[11rem] recommendations-md:px-32 recommendations-ds:px-16 recommendations-sm:px-10 services-xs:mb-12 about-sm:px-6">
      <AnimatePresence>
        <motion.div
          initial={{ x: -300, opacity: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          whileInView={{ x: 0, opacity: 1 }}
        >
          <h3 className="mb-2 text-left text-xl font-semibold text-neutral800 dark:text-neutral50 about-md:text-base">
            {title}
          </h3>
          <h3 className="mb-8 text-left text-xl font-semibold text-amber600 about-md:text-base">
            {subtitle}
          </h3>
        </motion.div>
      </AnimatePresence>
      <div className="grid grid-cols-3 gap-12 knowledge-md:grid-cols-2 blog-sm:grid-cols-1 blog-sm:gap-6">
        {blogPostsAll.blogs?.data.slice(-3).map((post) => (
          <AnimatePresence key={post.id}>
            <motion.div
              initial={{ x: -300, opacity: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              whileInView={{ x: 0, opacity: 1 }}
            >
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
                    <h5 className="text-sm font-semibold text-neutral800 dark:text-neutral50 about-md:font-normal">
                      {post.attributes?.title}
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
                <div className="flex items-center gap-6 duration-300 hover:translate-x-2 hover:opacity-75">
                  <div className="rounded-full bg-amber600 p-3 text-neutral50 about-md:p-2">
                    <svg
                      className="h-8 w-8 about-md:h-6 about-md:w-6"
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
                    <span className="text-base font-semibold text-neutral800 dark:text-neutral50 about-md:text-sm">
                      {t('blog:checkAll')}
                    </span>
                    <span className="text-base font-normal text-amber600 about-md:text-sm">
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

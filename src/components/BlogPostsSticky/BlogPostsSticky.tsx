import Image from 'next/image'
import Link from 'next/link'
import { useTranslation } from 'next-i18next'
import { BlogPostsQuery } from 'src/graphql/generated/graphql'
import { getCorrectImageSmallest } from 'src/utils/helpers/getCorrectImage'

interface IBlogSectionProps {
  blogPosts: BlogPostsQuery
}

export const BlogPostsSticky = ({ blogPosts }: IBlogSectionProps) => {
  const { t } = useTranslation()

  return (
    <div className="sticky top-[15%] flex h-fit w-1/4 flex-col gap-20 about-md:static about-md:w-full about-md:gap-8">
      <span className="hidden text-xl font-semibold about-md:block about-md:text-base">
        {t('common:readMore')}
      </span>
      {blogPosts.blogs?.data.slice(-2).map((post) => (
        <Link
          href={`/blog/${post.attributes?.slug}`}
          key={post.id}
        >
          <a>
            <div className="flex flex-col gap-4 duration-300 hover:translate-y-[2px] hover:opacity-70">
              <div className="relative h-[153px] w-full about-md:h-[20vh]">
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
      ))}
    </div>
  )
}

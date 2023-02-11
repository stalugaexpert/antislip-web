import request from 'graphql-request'
import { STRAPI_API_KEY, STRAPI_URL_GRAPHQL } from 'src/config/config'
import {
  BlogPostDocument,
  BlogPostsDocument,
  OurRealizationsDocument,
} from 'src/graphql/generated/graphql'

const isProduction = STRAPI_URL_GRAPHQL?.includes('1337') ? false : true

export const getAllBlogPosts = async (localization: string) => {
  const blogPosts = await request(
    STRAPI_URL_GRAPHQL as string,
    BlogPostsDocument,
    { locale: localization },
    isProduction ? { Authorization: `Bearer ${STRAPI_API_KEY}` } : {}
  )
  return blogPosts
}

export const getSingleBlogPost = async (localization: string, slug: string) => {
  const blogPost = await request(
    STRAPI_URL_GRAPHQL as string,
    BlogPostDocument,
    { locale: localization, slug },
    isProduction ? { Authorization: `Bearer ${STRAPI_API_KEY}` } : {}
  )
  return blogPost
}

export const getAllRealizations = async (localization: string) => {
  const realizations = await request(
    STRAPI_URL_GRAPHQL as string,
    OurRealizationsDocument,
    { locale: localization },
    isProduction ? { Authorization: `Bearer ${STRAPI_API_KEY}` } : {}
  )
  return realizations
}

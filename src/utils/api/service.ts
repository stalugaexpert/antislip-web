import { STRAPI_API_KEY, STRAPI_URL } from "src/config/config"

export const fetchAllBlogPosts = async (localization: string) => {
  if (STRAPI_URL?.includes('localhost')) {
    return await fetch(`${STRAPI_URL}/api/blogs?locale=${localization}&populate=*`)
  }
  return await fetch(`${STRAPI_URL}/api/blogs?locale=${localization}&populate=*`, {
    headers: { Authorization: `Bearer ${STRAPI_API_KEY}` }
  })
}

export const fetchSingleBlogPost = async (localization: string, slug: string) => {
  if (STRAPI_URL?.includes('localhost')) {
    return await fetch(`${STRAPI_URL}/api/blogs?filters[slug][$eq]=${slug}&locale=${localization}&populate=*`)
  }
  return await fetch(`${STRAPI_URL}/api/blogs?filters[slug][$eq]=${slug}&locale=${localization}&populate=*`, {
    headers: { Authorization: `Bearer ${STRAPI_API_KEY}` }
  })
}

export const fetchSingleContentData = async (localization: string, endpoint: string) => {
  if (STRAPI_URL?.includes('localhost')) {
    return await fetch(`${STRAPI_URL}/api/${endpoint}?locale=${localization}`)
  }
  return await fetch(`${STRAPI_URL}/api/${endpoint}?locale=${localization}`, {
    headers: { Authorization: `Bearer ${STRAPI_API_KEY}` }
  })
}

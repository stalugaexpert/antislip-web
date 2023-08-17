export const MAIL_ADDRESS = process.env.NEXT_PUBLIC_MAIL_ADDRESS
export const MAIL_PASSWORD = process.env.NEXT_PUBLIC_MAIL_PASSWORD
export const SITE_KEY = process.env.NEXT_PUBLIC_SITE_KEY
export const SITE_SECRET = process.env.NEXT_PUBLIC_SITE_SECRET
export const STRAPI_URL =
  process.env.NEXT_PUBLIC_STRAPI_URL || 'http://127.0.0.1:1337' // change to '||' if want to use production
export const STRAPI_URL_GRAPHQL =
  process.env.STRAPI_URL_GRAPHQL || 'http://127.0.0.1:1337/graphql' // change to '||' if want to use production
export const STRAPI_API_KEY = process.env.NEXT_PUBLIC_STRAPI_API_KEY
export const G_TAG_KEY = process.env.NEXT_PUBLIC_G_TAG_KEY
export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_TRACKING_ID

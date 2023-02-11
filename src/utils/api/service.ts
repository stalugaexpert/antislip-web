import { STRAPI_API_KEY, STRAPI_URL } from 'src/config/config'

export const fetchSingleContentData = async (
  localization: string,
  endpoint: string
) => {
  if (STRAPI_URL?.includes('localhost')) {
    return await fetch(`${STRAPI_URL}/api/${endpoint}?locale=${localization}`)
  }
  return await fetch(`${STRAPI_URL}/api/${endpoint}?locale=${localization}`, {
    headers: { Authorization: `Bearer ${STRAPI_API_KEY}` },
  })
}

export const verifyCaptcha = async (gReCaptchaToken: string) => {
  return await fetch('/api/verifyCaptcha', {
    method: 'POST',
    headers: {
      Accept: 'application/json, text/plain, */*',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      gRecaptchaToken: gReCaptchaToken,
    }),
  })
}

export const sendMail = async (
  endpoint: string,
  email: string,
  name: string,
  phone: string,
  message: string
) => {
  if (STRAPI_URL?.includes('localhost')) {
    return await fetch(`${STRAPI_URL}/api/mail/${endpoint}`, {
      method: 'post',
      body: JSON.stringify({
        email: email,
        name: name,
        phone: phone,
        message: message,
      }),
    })
  }
  return await fetch(`${STRAPI_URL}/api/mail/${endpoint}`, {
    headers: { Authorization: `Bearer ${STRAPI_API_KEY}` },
    method: 'post',
    body: JSON.stringify({
      email: email,
      name: name,
      phone: phone,
      message: message,
    }),
  })
}

/* eslint-disable @typescript-eslint/no-explicit-any */
export const getCorrectImageSmallest = (data: any): string => {
  if (data.small) return data.small.url
  return data.thumbnail.url
}

export const getCorrectImageLargest = (data: any): string => {
  if (data.large) return data.large.url
  else if (data.medium) return data.medium.url
  else if (data.small) return data.small.url
  else return data.thumbnail.url
}

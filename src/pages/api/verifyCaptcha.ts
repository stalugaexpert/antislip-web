/* eslint-disable no-console */
import type { NextApiRequest, NextApiResponse } from 'next'

import { SITE_SECRET } from '../../config/config'

type Data = {
  status: string
  message: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
): void {
  if (req.method === 'POST') {
    try {
      fetch('https://www.google.com/recaptcha/api/siteverify', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `secret=${SITE_SECRET}&response=${req.body.gRecaptchaToken}`,
      })
        .then((reCaptchaRes) => reCaptchaRes.json())
        .then((reCaptchaRes) => {
          console.log(
            reCaptchaRes,
            'Response from Google reCaptcha verification API'
          )
          if (reCaptchaRes?.score > 0.5) {
            res.status(200).json({
              status: 'success',
              message: 'Google ReCaptcha Success',
            })
          } else {
            res.status(200).json({
              status: 'failure',
              message: 'Google ReCaptcha Failure',
            })
          }
        })
    } catch (err) {
      res.status(405).json({
        status: 'failure',
        message: 'Error submitting the enquiry form',
      })
    }
  } else {
    res.status(405)
    res.end()
  }
}

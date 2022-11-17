import type { NextApiRequest, NextApiResponse } from 'next'
import nodemailer from 'nodemailer'
import hbs from 'nodemailer-express-handlebars'
import path from 'path'

import { MAIL_ADDRESS, MAIL_PASSWORD, SITE_SECRET } from '../../config/config'

type Data = {
  status: string
  message: string
}

export default function handler (req: NextApiRequest,
  res: NextApiResponse<Data>): void {

  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: MAIL_ADDRESS,
      pass: MAIL_PASSWORD
    },
    secure: true,
  })

  const handlebarOptions = {
    viewEngine: {
      extName: ".handlebars",
      partialsDir: path.resolve('src/pages/api/templates'),
      defaultLayout: false
    },
    viewPath: path.resolve('src/pages/api/templates'),
    extName: ".handlebars"
  }

  transporter.use('compile', hbs(handlebarOptions as hbs.NodemailerExpressHandlebarsOptions))

  const mailOptions = {
    from: MAIL_ADDRESS,
    to: 'shadooowpl@gmail.com',
    subject: `Nowa wiadomość od ${req.body.name}`,
    template: 'message',
    context: {
      name: req.body.name,
      message: req.body.message,
      email: req.body.email
    },
    attachments: [{
      filename: 'logo-enubes-pl.png',
      path: 'src/pages/api/templates/images/logo-enubes-pl.png',
      cid: 'logo-white'
    }, {
      filename: 'info-image.png',
      path: 'src/pages/api/templates/images/info-image.png',
      cid: 'info-img'
    }, {
      filename: 'footer.png',
      path: 'src/pages/api/templates/images/footer.png',
      cid: 'footer-img'
    }, {
      filename: 'logo-enubes-white.png',
      path: 'src/pages/api/templates/images/logo-enubes-white.png',
      cid: 'logo-white-new'
    }, {
      filename: 'facebook2x.png',
      path: 'src/pages/api/templates/images/facebook2x.png',
      cid: 'facebook-icon'
    }, {
      filename: 'instagram2x.png',
      path: 'src/pages/api/templates/images/instagram2x.png',
      cid: 'instagram-icon'
    }, {
      filename: 'youtube2x.png',
      path: 'src/pages/api/templates/images/youtube2x.png',
      cid: 'youtube-icon'
    }]
  }

  if (req.method === "POST") {
    try {
      fetch("https://www.google.com/recaptcha/api/siteverify", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `secret=${SITE_SECRET}&response=${req.body.gRecaptchaToken}`,
      })
        .then((reCaptchaRes) => reCaptchaRes.json())
        .then((reCaptchaRes) => {
          console.log(
            reCaptchaRes,
            "Response from Google reCaptcha verification API"
          )
          if (reCaptchaRes?.score > 0.5) {
            transporter.sendMail(mailOptions, function (err, info) {
              if(err)
                console.log(err)
              else
                console.log(info, "everything ok")
            })

            res.status(200).json({
              status: "success",
              message: "Google ReCaptcha Success",
            })
          } else {
            res.status(200).json({
              status: "failure",
              message: "Google ReCaptcha Failure",
            })
          }
        })
    } catch (err) {
      res.status(405).json({
        status: "failure",
        message: "Error submitting the enquiry form",
      })
    }
  } else {
    res.status(405)
    res.end()
  }
};

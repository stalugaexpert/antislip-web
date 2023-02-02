import cx from 'classnames'
import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'
import { useTranslation } from 'next-i18next'
import { useState } from 'react'
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3'
import { SubmitHandler, useForm } from 'react-hook-form'
import { sendMail, verifyCaptcha } from 'src/utils/api/service'

interface IShortFormValues {
  name: string
  email: string
  phone: string
  agreement: boolean
}

export const ContactShort = () => {
  const { t } = useTranslation()
  const { executeRecaptcha } = useGoogleReCaptcha()
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<IShortFormValues>()
  const [isLoading, setIsLoading] = useState(false)

  const onSubmit: SubmitHandler<IShortFormValues> = (data) => {
    if (!executeRecaptcha) {
      // eslint-disable-next-line no-console
      console.log('Execute recaptcha not yet available')
      return
    }

    executeRecaptcha('enquiryFormSubmit').then((gReCaptchaToken) => {
      setIsLoading(true)

      verifyCaptcha(gReCaptchaToken)
        .then((res) => res.json())
        .then(async (res) => {
          if (res.status === 'success') {
            sendMail('contact', data.email, data.name, data.phone, '').then(
              (res) => {
                if (res.ok) {
                  setIsLoading(false)
                  reset()
                } else {
                  reset()
                  setIsLoading(false)
                  // eslint-disable-next-line no-console
                  console.log('Problem when sending email occurred')
                }
              }
            )
          }
        })
    })
  }

  return (
    <section
      className="mx-auto mb-20 h-fit max-w-screen-2xl overflow-hidden px-24 services-xs:mb-12 services-xs:px-14 about-sm:px-10 mission-sm:mb-0 mission-sm:px-0"
      id="contact"
    >
      <div className="flex h-[75vh] items-center gap-24 about-md:gap-16 mission-sm:h-full mission-sm:flex-wrap mission-sm:gap-0">
        <AnimatePresence>
          <motion.div
            className="w-2/4 mission-sm:mb-8 mission-sm:w-full mission-sm:px-6"
            initial={{ opacity: 0, x: -200 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, amount: 0.4 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <h5 className="mb-3 text-3xl font-semibold text-neutral900 dark:text-neutral50 about-md:text-xl">
              {t('contact:contactTitle')}
            </h5>
            <h5 className="mb-4 text-3xl font-semibold text-amber400 about-md:text-xl">
              {t('contact:contactTalk')}
            </h5>
            <div className="mb-8 text-justify">
              <p className="inline text-base font-normal text-neutral700 dark:text-neutral200 about-md:text-sm">
                {t('contact:contactDescription')}
              </p>
              <Link href="/contact">
                <a className="inline text-base font-semibold text-amber400 duration-300 hover:opacity-75 about-md:text-sm">
                  {t('contact:contactDescriptionMessage')}
                </a>
              </Link>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="relative mb-8 h-11 w-full max-w-[75%] recommendations-ds:max-w-full">
                <input
                  {...register('name', { required: true, maxLength: 100 })}
                  aria-invalid={errors.name ? 'true' : 'false'}
                  className={cx(
                    'text-blue-gray-700 disabled:bg-blue-gray-50 placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border-blue-gray-200 peer h-full w-full rounded-md border border-neutral100 border-t-transparent bg-neutral100 px-3 py-3 font-sans text-base font-normal outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-solid placeholder-shown:border-neutral200 focus:border-2 focus:border-amber600 focus:border-t-transparent focus:outline-0 disabled:border-0 dark:bg-neutral700 dark:placeholder-shown:border-neutral600 dark:focus:border-amber600 dark:focus:border-t-transparent',
                    {
                      'animate-shake !border-l-rose600 !border-r-rose600 !border-b-rose600 !border-t-rose600 focus:!border-t-transparent dark:!border-t-rose600 dark:focus:!border-t-transparent':
                        errors.name,
                    }
                  )}
                  id="name"
                  name="name"
                  placeholder=" "
                  type="text"
                />
                <label
                  className={cx(
                    'peer-placeholder-shown:text-blue-gray-500 peer-disabled:peer-placeholder-shown:text-blue-gray-500 before:content[] after:content[] text-blue-gray-400 before:border-blue-gray-200 after:border-blue-gray-200 pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:transition-all peer-placeholder-shown:text-base peer-placeholder-shown:leading-[3.5] peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[12px] peer-focus:leading-tight peer-focus:text-amber600 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-amber600 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-amber600 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent',
                    {
                      'after:border-rose600 peer-focus:text-neutral800 peer-focus:before:border-rose600 peer-focus:after:border-rose600 dark:peer-focus:text-neutral50':
                        errors.name,
                    }
                  )}
                  htmlFor="name"
                >
                  {t('contact:name')}
                </label>
                {errors.name?.type === 'required' && (
                  <p
                    className="mt-1 text-sm font-normal text-rose600"
                    role="alert"
                  >
                    {t('contact:fieldRequired')}
                  </p>
                )}
                {errors.name?.type === 'maxLength' && (
                  <p
                    className="mt-1 text-sm font-normal text-rose600"
                    role="alert"
                  >
                    {t('contact:fieldTooLong')}
                  </p>
                )}
              </div>

              <div className="relative mb-8 h-11 w-full max-w-[75%] recommendations-ds:max-w-full">
                <input
                  {...register('email', { required: true, maxLength: 100 })}
                  aria-invalid={errors.email ? 'true' : 'false'}
                  className={cx(
                    'text-blue-gray-700 disabled:bg-blue-gray-50 placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border-blue-gray-200 peer h-full w-full rounded-md border border-neutral100 border-t-transparent bg-neutral100 px-3 py-3 font-sans text-base font-normal outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-solid placeholder-shown:border-neutral200 focus:border-2 focus:border-amber600 focus:border-t-transparent focus:outline-0 disabled:border-0 dark:bg-neutral700 dark:placeholder-shown:border-neutral600 dark:focus:border-amber600 dark:focus:border-t-transparent',
                    {
                      'animate-shake !border-l-rose600 !border-r-rose600 !border-b-rose600 !border-t-rose600 focus:!border-t-transparent dark:!border-t-rose600 dark:focus:!border-t-transparent':
                        errors.email,
                    }
                  )}
                  id="email"
                  name="email"
                  placeholder=" "
                  type="email"
                />
                <label
                  className={cx(
                    'peer-placeholder-shown:text-blue-gray-500 peer-disabled:peer-placeholder-shown:text-blue-gray-500 before:content[] after:content[] text-blue-gray-400 before:border-blue-gray-200 after:border-blue-gray-200 pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:transition-all peer-placeholder-shown:text-base peer-placeholder-shown:leading-[3.5] peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[12px] peer-focus:leading-tight peer-focus:text-amber600 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-amber600 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-amber600 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent',
                    {
                      'after:border-rose600 peer-focus:text-neutral800 peer-focus:before:border-rose600 peer-focus:after:border-rose600 dark:peer-focus:text-neutral50':
                        errors.email,
                    }
                  )}
                  htmlFor="email"
                >
                  {t('contact:email')}
                </label>
                {errors.email?.type === 'required' && (
                  <p
                    className="mt-1 text-sm font-normal text-rose600"
                    role="alert"
                  >
                    {t('contact:fieldRequired')}
                  </p>
                )}
                {errors.email?.type === 'maxLength' && (
                  <p
                    className="mt-1 text-sm font-normal text-rose600"
                    role="alert"
                  >
                    {t('contact:fieldTooLong')}
                  </p>
                )}
              </div>

              <div className="relative mb-8 h-11 w-full max-w-[75%] recommendations-ds:max-w-full">
                <input
                  {...register('phone', { required: true, maxLength: 30 })}
                  aria-invalid={errors.phone ? 'true' : 'false'}
                  className={cx(
                    'text-blue-gray-700 disabled:bg-blue-gray-50 placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border-blue-gray-200 peer h-full w-full rounded-md border border-neutral100 border-t-transparent bg-neutral100 px-3 py-3 font-sans text-base font-normal outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-solid placeholder-shown:border-neutral200 focus:border-2 focus:border-amber600 focus:border-t-transparent focus:outline-0 disabled:border-0 dark:bg-neutral700 dark:placeholder-shown:border-neutral600 dark:focus:border-amber600 dark:focus:border-t-transparent',
                    {
                      'animate-shake !border-l-rose600 !border-r-rose600 !border-b-rose600 !border-t-rose600 focus:!border-t-transparent dark:!border-t-rose600 dark:focus:!border-t-transparent':
                        errors.phone,
                    }
                  )}
                  id="phone"
                  name="phone"
                  placeholder=" "
                  type="tel"
                />
                <label
                  className={cx(
                    'peer-placeholder-shown:text-blue-gray-500 peer-disabled:peer-placeholder-shown:text-blue-gray-500 before:content[] after:content[] text-blue-gray-400 before:border-blue-gray-200 after:border-blue-gray-200 pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:transition-all peer-placeholder-shown:text-base peer-placeholder-shown:leading-[3.5] peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[12px] peer-focus:leading-tight peer-focus:text-amber600 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-amber600 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-amber600 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent',
                    {
                      'after:border-rose600 peer-focus:text-neutral800 peer-focus:before:border-rose600 peer-focus:after:border-rose600 dark:peer-focus:text-neutral50':
                        errors.phone,
                    }
                  )}
                  htmlFor="phone"
                >
                  {t('contact:phone')}
                </label>
                {errors.phone?.type === 'required' && (
                  <p
                    className="mt-1 text-sm font-normal text-rose600"
                    role="alert"
                  >
                    {t('contact:fieldRequired')}
                  </p>
                )}
                {errors.phone?.type === 'maxLength' && (
                  <p
                    className="mt-1 text-sm font-normal text-rose600"
                    role="alert"
                  >
                    {t('contact:fieldTooLong')}
                  </p>
                )}
              </div>

              <div
                className={cx('relative mb-6 flex items-center pb-2', {
                  'animate-shake': errors.agreement,
                })}
              >
                <div className="mr-2">
                  <label className="relative flex w-fit cursor-pointer items-center overflow-hidden rounded-full p-3">
                    <input
                      {...register('agreement', { required: true })}
                      aria-invalid={errors.agreement ? 'true' : 'false'}
                      aria-labelledby="agreement"
                      className={cx(
                        'before:content[] before:bg-blue-gray-500 peer relative h-7 w-7 cursor-pointer appearance-none rounded-md border border-neutral700 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:opacity-0 before:transition-opacity checked:border-amber600 checked:bg-amber600 checked:before:bg-amber600 hover:before:opacity-10 dark:border-neutral300',
                        { '!border-rose600': errors.agreement }
                      )}
                      name="agreement"
                      type="checkbox"
                    />
                    <div className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100">
                      <svg
                        className="h-5 w-5"
                        fill="currentColor"
                        stroke="currentColor"
                        strokeWidth="1"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          clipRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          fillRule="evenodd"
                        ></path>
                      </svg>
                    </div>
                  </label>
                </div>
                <div id="agreement">
                  <span className="inline text-base font-normal text-neutral800 dark:text-neutral50 about-md:text-sm">
                    {t('contact:contactAgreement')}
                  </span>
                  <Link href="/terms-of-service">
                    <a className="inline text-base font-semibold text-amber400 duration-300 hover:opacity-75 about-md:text-sm">
                      {t('contact:contactRegulation')}
                    </a>
                  </Link>
                  <span className="inline text-base font-normal text-neutral800 dark:text-neutral50 about-md:text-sm">
                    {t('contact:contactAgreementMid')}
                  </span>
                  <Link href="/privacy-policy">
                    <a className="inline text-base font-semibold text-amber400 duration-300 hover:opacity-75 about-md:text-sm">
                      {t('contact:contactPrivacy')}
                    </a>
                  </Link>
                  <span className="inline text-base font-normal text-neutral800 dark:text-neutral50 about-md:text-sm">
                    {t('contact:contactAgreementBot')}
                  </span>
                </div>
                {errors.agreement?.type === 'required' && (
                  <p
                    className="absolute -bottom-[12px] left-[12px] text-sm font-normal text-rose600"
                    role="alert"
                  >
                    {t('contact:fieldRequired')}
                  </p>
                )}
              </div>

              <div>
                <input
                  className="block h-0"
                  name="submit"
                  placeholder=" "
                  type="submit"
                  value=""
                />
                <button
                  className="flex w-full cursor-pointer items-center justify-center gap-3 rounded-lg bg-amber600 px-4 py-2.5 text-neutral50 duration-300 hover:translate-y-1 hover:opacity-80 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:opacity-100 mission-sm:p-2"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <svg
                      className="disabled h-5 w-5 animate-spin"
                      stroke="currentColor"
                      strokeWidth={1.5}
                      version="1.1"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g>
                        <g
                          fill="#212121"
                          fillRule="nonzero"
                          id="ic_fluent_spinner_ios_20_regular"
                        >
                          <path d="M10,3 C6.13401,3 3,6.13401 3,10 C3,10.2761 2.77614,10.5 2.5,10.5 C2.22386,10.5 2,10.2761 2,10 C2,5.58172 5.58172,2 10,2 C14.4183,2 18,5.58172 18,10 C18,14.4183 14.4183,18 10,18 C9.72386,18 9.5,17.7761 9.5,17.5 C9.5,17.2239 9.72386,17 10,17 C13.866,17 17,13.866 17,10 C17,6.13401 13.866,3 10,3 Z"></path>
                        </g>
                      </g>
                    </svg>
                  ) : (
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={1.5}
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                  <span className="text-base font-semibold mission-sm:text-sm">
                    {t('contact:send')}
                  </span>
                </button>
              </div>
            </form>
          </motion.div>
        </AnimatePresence>
        <AnimatePresence>
          <motion.div
            className="h-full w-2/4 overflow-hidden rounded-lg mission-sm:h-[30vh] mission-sm:w-full mission-sm:rounded-none"
            initial={{ opacity: 0, x: 200 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, amount: 0.4 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <div className="h-full w-full">
              <iframe
                allowFullScreen={true}
                height="100%"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2392.3876800768903!2d16.66101631600878!3d53.15708297993975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4703e335c2dd1da3%3A0x2d18af77d1cdf187!2se-nubes%20impregnaty!5e0!3m2!1spl!2spl!4v1667830314623!5m2!1spl!2spl"
                title={t('contact:mapsTitle')}
                width="100%"
              ></iframe>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}

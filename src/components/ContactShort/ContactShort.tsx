import cx from 'classnames'
import Link from "next/link"
import { useTranslation } from "next-i18next"
import { useState } from "react"
import { useGoogleReCaptcha } from "react-google-recaptcha-v3"
import { SubmitHandler, useForm } from "react-hook-form"
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
  const { register, reset, handleSubmit, formState: { errors }} = useForm<IShortFormValues>()
  const [isLoading, setIsLoading] = useState(false)

  const onSubmit: SubmitHandler<IShortFormValues> = data => {
    if (!executeRecaptcha) {
      // eslint-disable-next-line no-console
      console.log("Execute recaptcha not yet available")
      return
    }

    executeRecaptcha("enquiryFormSubmit").then((gReCaptchaToken) => {
      setIsLoading(true)

      verifyCaptcha(gReCaptchaToken).then((res) => res.json()).then(async (res) => {
        if (res.status === "success") {
          sendMail("contact", data.email, data.name, data.phone, "").then((res) => {
            if (res.ok) {
              setIsLoading(false)
              reset()
            } else {
              reset()
              setIsLoading(false)
              // eslint-disable-next-line no-console
              console.log('Problem when sending email occured')
            }
          })
        }
      })
    })
  }

  return (
    <section
      className='px-24 max-w-screen-2xl mx-auto mb-20 h-fit services-xs:mb-12 services-xs:px-14 about-sm:px-10 mission-sm:px-0 mission-sm:mb-0'
      id="contact"
    >
      <div className="flex mission-sm:flex-wrap items-center gap-24 about-md:gap-16 mission-sm:gap-0 h-[75vh] mission-sm:h-full">
        <div className="w-2/4 mission-sm:w-full mission-sm:mb-8 mission-sm:px-6">
          <h5 className="text-3xl about-md:text-xl font-semibold text-neutral900 dark:text-neutral50 mb-3">{t('contact:contactTitle')}</h5>
          <h5 className="text-3xl about-md:text-xl font-semibold text-amber400 mb-4">{t('contact:contactTalk')}</h5>
          <div className='mb-8 text-justify'>
            <p className='font-normal inline text-base about-md:text-sm text-neutral700 dark:text-neutral200'>{t('contact:contactDescription')}</p>
            <Link href="/contact">
              <a className='font-semibold inline text-base about-md:text-sm text-amber400 duration-300 hover:opacity-75'>{t('contact:contactDescriptionMessage')}</a>
            </Link>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="relative w-full max-w-[75%] recommendations-ds:max-w-full h-11 mb-8">
              <input
                {...register("name", { required: true, maxLength: 100 })}
                aria-invalid={errors.name ? "true" : "false"}
                className={cx('peer w-full h-full bg-neutral100 border-neutral100 dark:bg-neutral700 text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border border placeholder-shown:border-solid placeholder-shown:border-neutral200 dark:placeholder-shown:border-neutral600 placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 border-t-transparent focus:border-t-transparent dark:focus:border-t-transparent text-sm px-3 py-3 rounded-md border-blue-gray-200 focus:border-amber600 dark:focus:border-amber600', { '!border-l-rose600 !border-r-rose600 !border-b-rose600 !border-t-rose600 dark:!border-t-rose600 dark:focus:!border-t-transparent focus:!border-t-transparent animate-shake': errors.name } )}
                id="name"
                name="name"
                placeholder=" "
                type="text"
              />
              <label
                className={cx('flex w-full h-full select-none pointer-events-none absolute left-0 font-normal peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[4.1] text-blue-gray-400 peer-focus:text-amber600 before:border-blue-gray-200 peer-focus:before:border-amber600 after:border-blue-gray-200 peer-focus:after:border-amber600', { 'peer-focus:after:border-rose600 peer-focus:before:border-rose600 after:border-rose600 peer-focus:text-neutral800 dark:peer-focus:text-neutral50': errors.name } )}
                htmlFor="name"
              >
                {t('contact:name')}
              </label>
              {errors.name?.type === 'required' && (
                <p
                  className="font-normal mt-1 text-sm text-rose600"
                  role="alert"
                >
                  {t('contact:fieldRequired')}
                </p>
              )}
              {errors.name?.type === 'maxLength' && (
                <p
                  className="font-normal mt-1 text-sm text-rose600"
                  role="alert"
                >
                  {t('contact:fieldTooLong')}
                </p>
              )}
            </div>

            <div className="relative w-full max-w-[75%] recommendations-ds:max-w-full h-11 mb-8">
              <input
                {...register("email", { required: true, maxLength: 100 })}
                aria-invalid={errors.email ? "true" : "false"}
                className={cx('peer w-full h-full bg-neutral100 border-neutral100 dark:bg-neutral700 text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border border placeholder-shown:border-solid placeholder-shown:border-neutral200 dark:placeholder-shown:border-neutral600 placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 border-t-transparent focus:border-t-transparent dark:focus:border-t-transparent text-sm px-3 py-3 rounded-md border-blue-gray-200 focus:border-amber600 dark:focus:border-amber600', { '!border-l-rose600 !border-r-rose600 !border-b-rose600 !border-t-rose600 dark:!border-t-rose600 dark:focus:!border-t-transparent focus:!border-t-transparent animate-shake': errors.email } )}
                id="email"
                name="email"
                placeholder=" "
                type="email"
              />
              <label
                className={cx('flex w-full h-full select-none pointer-events-none absolute left-0 font-normal peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[4.1] text-blue-gray-400 peer-focus:text-amber600 before:border-blue-gray-200 peer-focus:before:border-amber600 after:border-blue-gray-200 peer-focus:after:border-amber600', { 'peer-focus:after:border-rose600 peer-focus:before:border-rose600 after:border-rose600 peer-focus:text-neutral800 dark:peer-focus:text-neutral50': errors.email } )}
                htmlFor="email"
              >
                {t('contact:email')}
              </label>
              {errors.email?.type === 'required' && (
                <p
                  className="font-normal mt-1 text-sm text-rose600"
                  role="alert"
                >
                  {t('contact:fieldRequired')}
                </p>
              )}
              {errors.email?.type === 'maxLength' && (
                <p
                  className="font-normal mt-1 text-sm text-rose600"
                  role="alert"
                >
                  {t('contact:fieldTooLong')}
                </p>
              )}
            </div>

            <div className="relative w-full max-w-[75%] recommendations-ds:max-w-full h-11 mb-8">
              <input
                {...register("phone", { required: true, maxLength: 30 })}
                aria-invalid={errors.phone ? "true" : "false"}
                className={cx('peer w-full h-full bg-neutral100 border-neutral100 dark:bg-neutral700 text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border border placeholder-shown:border-solid placeholder-shown:border-neutral200 dark:placeholder-shown:border-neutral600 placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 border-t-transparent focus:border-t-transparent dark:focus:border-t-transparent text-sm px-3 py-3 rounded-md border-blue-gray-200 focus:border-amber600 dark:focus:border-amber600', { '!border-l-rose600 !border-r-rose600 !border-b-rose600 !border-t-rose600 dark:!border-t-rose600 dark:focus:!border-t-transparent focus:!border-t-transparent animate-shake': errors.phone } )}
                id="phone"
                name="phone"
                placeholder=" "
                type="tel"
              />
              <label
                className={cx('flex w-full h-full select-none pointer-events-none absolute left-0 font-normal peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[4.1] text-blue-gray-400 peer-focus:text-amber600 before:border-blue-gray-200 peer-focus:before:border-amber600 after:border-blue-gray-200 peer-focus:after:border-amber600', { 'peer-focus:after:border-rose600 peer-focus:before:border-rose600 after:border-rose600 peer-focus:text-neutral800 dark:peer-focus:text-neutral50': errors.phone } )}
                htmlFor="phone"
              >
                {t('contact:phone')}
              </label>
              {errors.phone?.type === 'required' && (
                <p
                  className="font-normal mt-1 text-sm text-rose600"
                  role="alert"
                >
                  {t('contact:fieldRequired')}
                </p>
              )}
              {errors.phone?.type === 'maxLength' && (
                <p
                  className="font-normal mt-1 text-sm text-rose600"
                  role="alert"
                >
                  {t('contact:fieldTooLong')}
                </p>
              )}
            </div>

            <div className={cx('flex relative items-center mb-6 pb-2', { 'animate-shake': errors.agreement })}>
              <div className="mr-2">
                <label className="relative w-fit overflow-hidden flex items-center cursor-pointer p-3 rounded-full" >
                  <input
                    {...register("agreement", { required: true })}
                    aria-invalid={errors.agreement ? "true" : "false"}
                    aria-labelledby="agreement"
                    className={cx('peer relative appearance-none w-7 h-7 border rounded-md border-neutral700 dark:border-neutral300 cursor-pointer transition-all before:content[] before:block before:bg-blue-gray-500 before:w-12 before:h-12 before:rounded-full before:absolute before:top-2/4 before:left-2/4 before:-translate-y-2/4 before:-translate-x-2/4 before:opacity-0 hover:before:opacity-10 before:transition-opacity checked:bg-amber600 checked:border-amber600 checked:before:bg-amber600', { '!border-rose600': errors.agreement })}
                    name="agreement"
                    type="checkbox"
                  />
                  <div className="text-white absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 pointer-events-none opacity-0 peer-checked:opacity-100 transition-opacity">
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
                <span className='text-base about-md:text-sm font-normal text-neutral800 dark:text-neutral50 inline'>{t('contact:contactAgreement')}</span>
                <Link href="/terms-of-service">
                  <a className='font-semibold inline text-base about-md:text-sm text-amber400 duration-300 hover:opacity-75'>{t('contact:contactRegulation')}</a>
                </Link>
                <span className='text-base about-md:text-sm font-normal text-neutral800 dark:text-neutral50 inline'>{t('contact:contactAgreementMid')}</span>
                <Link href="/privacy-policy">
                  <a className='font-semibold inline text-base about-md:text-sm text-amber400 duration-300 hover:opacity-75'>{t('contact:contactPrivacy')}</a>
                </Link>
                <span className='text-base about-md:text-sm font-normal text-neutral800 dark:text-neutral50 inline'>{t('contact:contactAgreementBot')}</span>
              </div>
              {errors.agreement?.type === 'required' && (
                <p
                  className="absolute font-normal -bottom-[12px] left-[12px] text-sm text-rose600"
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
                className="flex w-full cursor-pointer justify-center items-center gap-3 bg-amber600 px-4 py-2.5 mission-sm:p-2 rounded-lg text-neutral50 duration-300 hover:opacity-80 hover:translate-y-1 disabled:hover:opacity-100 disabled:hover:translate-y-0 disabled:cursor-not-allowed"
                disabled={isLoading}
              >
                { isLoading ? (
                  <svg
                    className="w-5 h-5 animate-spin disabled"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    version="1.1"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g >
                      <g
                        fill="#212121"
                        fillRule="nonzero"
                        id="ic_fluent_spinner_ios_20_regular"
                      >
                        <path
                          d="M10,3 C6.13401,3 3,6.13401 3,10 C3,10.2761 2.77614,10.5 2.5,10.5 C2.22386,10.5 2,10.2761 2,10 C2,5.58172 5.58172,2 10,2 C14.4183,2 18,5.58172 18,10 C18,14.4183 14.4183,18 10,18 C9.72386,18 9.5,17.7761 9.5,17.5 C9.5,17.2239 9.72386,17 10,17 C13.866,17 17,13.866 17,10 C17,6.13401 13.866,3 10,3 Z"
                        ></path>
                      </g>
                    </g>
                  </svg>
                ) : (
                  <svg
                    className="w-6 h-6"
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
                <span className="text-base font-semibold mission-sm:text-sm">{t('contact:send')}</span>
              </button>
            </div>
          </form>
        </div>
        <div className="w-2/4 mission-sm:w-full h-full mission-sm:h-[30vh] overflow-hidden rounded-lg mission-sm:rounded-none">
          <div className="w-full h-full">
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
        </div>
      </div>
    </section>
  )
}

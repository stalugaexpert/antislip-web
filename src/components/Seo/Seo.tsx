import Head from "next/head"

// const DOMAIN = "https://www.anti-slip.io"
// const DEFAULT_OG_IMAGE = ""

export const Seo = ({
  title = "Technika antypoślizgowa, impregnacja, doczyszczanie",
  description = "Jim Raptis works on the intersection between user interface design and frontend development. He's passionate about design, coding, SaaS, and indie hacking.",
  siteName = "Anti-slip",
  // canonical = DOMAIN,
  // ogImage = DEFAULT_OG_IMAGE,
  ogType = "website",
  // twitterHandle = "@sample_username",
}) => {
  return (
    <Head>
      <title key="title">{`${title} | ${siteName}`}</title>
      <meta
        content={description}
        name="description"
      />
      <meta
        content={ogType}
        key="og_type"
        property="og:type"
      />
      <meta
        content={title}
        key="og_title"
        property="og:title"
      />
      <meta
        content={description}
        key="og_description"
        property="og:description"
      />
      <meta
        content={siteName}
        key="og_site_name"
        property="og:site_name"
      />
      {/* <meta
        content="en_IE"
        key="og_locale"
        property="og:locale"
      />
      <meta
        content={siteName}
        key="og_site_name"
        property="og:site_name"
      />
      <meta
        content={canonical ?? DOMAIN}
        key="og_url"
        property="og:url"
      />
      <meta
        content={ogImage ?? DEFAULT_OG_IMAGE}
        key="og_image"
        property="og:image"
      />
      <meta
        content={`${title} | ${siteName}`}
        key="og_image:alt"
        property="og:image:alt"
      />
      <meta
        content="1200"
        key="og_image:width"
        property="og:image:width"
      />
      <meta
        content="630"
        key="og_image:height"
        property="og:image:height"
      />

      <meta
        content="index,follow"
        name="robots"
      />

      <meta
        content="summary_large_image"
        key="twitter:card"
        name="twitter:card"
      />
      <meta
        content={twitterHandle}
        key="twitter:site"
        name="twitter:site"
      />
      <meta
        content={twitterHandle}
        key="twitter:creator"
        name="twitter:creator"
      />
      <meta
        content={title}
        key="twitter:title"
        property="twitter:title"
      />
      <meta
        content={description}
        key="twitter:description"
        property="twitter:description"
      />
      <link
        href={canonical ?? DOMAIN}
        rel="canonical"
      />
      <link
        href="/favicon.ico"
        rel="shortcut icon"
      /> */}
    </Head>
  )
}

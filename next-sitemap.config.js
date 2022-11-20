/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://anti-slip.io',
  generateRobotsTxt: true,
  exclude: ['/en', '/en/*'], // (optional)
  alternateRefs: [
    {
      href: 'https://anti-slip.io',
      hreflang: 'pl',
    },
    {
      href: 'https://anti-slip.io/en',
      hreflang: 'en',
    },
  ],
}

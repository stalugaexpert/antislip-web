/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://anti-slip.io',
  generateRobotsTxt: true,
  transform: async (config, path) => {
    if (path.includes('en/blog/')) {
      return {
        loc: path,
        changefreq: config.changefreq,
        priority: config.priority,
        lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
        alternateRefs: [{ href: 'https://anti-slip.io/en',
          hreflang: 'en', }] ?? [],
      }
    }

    if (path.includes('blog/')) {
      return {
        loc: path,
        changefreq: config.changefreq,
        priority: config.priority,
        lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
        alternateRefs: [{ href: 'https://anti-slip.io',
          hreflang: 'pl', }] ?? [],
      }
    }

    if (path.includes('/en')) {
      return null
    }

    return {
      loc: path,
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      alternateRefs: [
        {
          href: 'https://anti-slip.io',
          hreflang: 'pl',
        },
        {
          href: 'https://anti-slip.io/en',
          hreflang: 'en',
        }
      ],
    }
  },
}

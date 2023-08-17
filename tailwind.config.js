/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      animation: {
        shake: 'shake 0.82s cubic-bezier(.36, .07, .19, .97) both',
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
      keyframes: {
        shake: {
          '10%, 90%': {
            transform: 'translate3d(-1px, 0, 0)',
          },
          '20%, 80%': {
            transform: 'translate3d(2px, 0, 0)',
          },
          '30%, 50%, 70%': {
            transform: 'translate3d(-4px, 0, 0)',
          },
          '40%, 60%': {
            transform: 'translate3d(4px, 0, 0)',
          },
        },
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
      },
      colors: {
        neutral900: 'var(--neutral-900)',
        neutral800: 'var(--neutral-800)',
        neutral700: 'var(--neutral-700)',
        neutral600: 'var(--neutral-600)',
        neutral500: 'var(--neutral-500)',
        neutral400: 'var(--neutral-400)',
        neutral300: 'var(--neutral-300)',
        neutral200: 'var(--neutral-200)',
        neutral100: 'var(--neutral-100)',
        neutral50: 'var(--neutral-50)',
        rose600: 'var(--rose-600)',
        rose400: 'var(--rose-400)',
        rose50: 'var(--rose-50)',
        amber600: 'var(--amber-600)',
        amber400: 'var(--amber-400)',
        amber100: 'var(--amber-100)',
        teal600: 'var(--teal-600)',
        teal400: 'var(--teal-400)',
        teal50: 'var(--teal-50)',
      },
      boxShadow: {
        nav: '0px 4px 16px rgba(15, 23, 42, 0.04)',
      },
      screens: {
        'footer-md': { max: '768px' },
        'footer-sm': { max: '525px' },
        'navbar-md': { max: '796px' },
        'section-min': { min: '1500px' },
        'recommendations-mx': { max: '1400px' },
        'recommendations-md': { max: '1350px' },
        'recommendations-ds': { max: '1200px' },
        'recommendations-sm': { max: '992px' },
        'recommendations-xsm': { max: '500px' },
        'services-md': { max: '1300px' },
        'services-sm': { max: '1130px' },
        'services-xs': { max: '996px' },
        'about-md': { max: '856px' },
        'about-sm': { max: '750px' },
        'about-xsm': { max: '600px' },
        'about-x2sm': { max: '465px' },
        'knowledge-md': { max: '900px' },
        'knowledge-sm': { max: '540px' },
        'knowledge-xsm': { max: '486px' },
        'cardItems-md': { max: '1288px' },
        'mission-sm': { max: '620px' },
        'contact-sm': { max: '560px' },
        'blog-sm': { max: '510px' },
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp'), require('tailwindcss-animate')],
}

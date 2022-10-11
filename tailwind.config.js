/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
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
        'nav': '0px 4px 16px rgba(15, 23, 42, 0.04)'
      }
    },
  },
  plugins: [],
}

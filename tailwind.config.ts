import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#093d91',
      },
      fontFamily: {
        'rubik': ['var(--font-rubik)', 'sans-serif'],
        'rubik-dirt': ['var(--font-rubik-dirt)', 'sans-serif'],
        'rubik-maze': ['var(--font-rubik-maze)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config

import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        brand: '#6C5CE7',
        'brand-light': '#A29BFE',
      },
    },
  },
  plugins: [],
}
export default config

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
        'ocean-blue': '#4BB4DE',
        'sand': '#F7E9C3',
        'coral': '#FF8C69',
        'navy': '#235789',
        'bg-light': '#FFF9F2',
        'sunset': '#FF7B54',
        'seafoam': '#A8E6CF',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      boxShadow: {
        'soft': '0 2px 10px rgba(0, 0, 0, 0.05)',
        'soft-lg': '0 4px 20px rgba(0, 0, 0, 0.08)',
      },
    },
  },
  plugins: [],
}
export default config

import type { Config } from 'tailwindcss'

export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      primary: {
        DEFAULT: '#3643BB',
        foreground: '#FFFFFF',
      },
      secondary: {
        DEFAULT: '#FFFFFFF',
        foreground: '#687380ff',
      },
      danger: {
        DEFAULT: '#D52630',
        foreground: '#FFFFFF',
      },
      accent: {
        DEFAULT: '#d0d4d8ff',
        foreground: '#FFFFFF',
      },
    },
    extend: {}
  },
  plugins: [],
} satisfies Config

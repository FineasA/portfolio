import type { Config } from 'tailwindcss'

export default {
  darkMode: 'class',
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#4A6741', // Sage green
          light: '#7C9473',
          dark: '#2C3E2D',
        },
        accent: {
          DEFAULT: '#A4AC86', // Muted olive
          light: '#B9C0A1',
          dark: '#8B916E',
        },
        highlight: {
          DEFAULT: '#C8B6A6', // Warm taupe
          light: '#DED0C4',
          dark: '#A89787',
        },
        background: {
          DEFAULT: '#FAFAF9', // Soft white
          light: '#FFFFFF',
          dark: '#1C1917', // Soft black
        },
        wood: {
          DEFAULT: '#8B7355', // Natural wood brown
          light: '#A68B6C',
          dark: '#6F5B44',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
} satisfies Config 
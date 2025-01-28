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
        primary: '#FFA500', // Change primary to RuneScape gold
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
          DEFAULT: '#382F1F',
          dark: '#1F1A11'
        },
        wood: {
          DEFAULT: '#8B7355', // Natural wood brown
          light: '#A68B6C',
          dark: '#6F5B44',
        },
        // RuneScape inspired colors
        'rs-brown': '#382F1F',
        'rs-gold': '#FFA500',
        'rs-chat': '#FFFF00',
        'rs-examine': '#00FFFF',
        'rs-interface': '#5A4634',
        'rs-interface-dark': '#2E2424',
        'rs-interface-light': '#6F5643',
        'rs-scroll': '#C8B189',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
        'runescape': ['RuneScape', 'RuneScape UF', 'Arial', 'sans-serif']
      },
      borderWidth: {
        '3': '3px',
      },
      boxShadow: {
        'rs': '2px 2px 0 rgba(0, 0, 0, 0.5)',
        'rs-inner': 'inset 2px 2px 0 rgba(0, 0, 0, 0.5)',
      }
    },
  },
  plugins: [],
} satisfies Config 
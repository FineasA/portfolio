// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    '@tresjs/nuxt',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode'
  ],

  tres: {
    devtools: true,
  },

  colorMode: {
    classSuffix: '',
    preference: 'dark'
  },

  app: {
    head: {
      title: 'Fineas - Portfolio',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Fineas - Personal Portfolio Website' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    },
    pageTransition: { name: 'page', mode: 'out-in' }
  },

  build: {
    transpile: ['three']
  },

  // Error handling configuration
  error: {
    statusCode: 404,
    message: "Sorry, we couldn't find the page you're looking for."
  },

  compatibilityDate: '2025-01-28'
})
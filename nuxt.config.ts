// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: [
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxt/test-utils',
    '@nuxt/ui'
  ],

  content: {
    preview: {
      api: 'https://api.nuxt.studio',
      gitInfo: {
        name: 'beatfolio',
        owner: 'Emmanuel Van Dick',
        url: 'https://github.com/emmanuel-vandyk/beatfolio.git'
      }
    }
  }
})
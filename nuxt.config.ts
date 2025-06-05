// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  css: ['~/assets/styles/main.css'],
  // devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    '@vueuse/nuxt',
    '@nuxt/ui',
    '@nuxt/image'
  ],

  app: {
    head: {
      title: 'FPT Play - Xem phim, truyền hình và thể thao trực tuyến',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'FPT Play - Nền tảng giải trí trực tuyến hàng đầu Việt Nam' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  },

  runtimeConfig: {
    public: {
      tmdbImageBaseUrl: 'https://image.tmdb.org/t/p',
      tmdbApiBaseUrl: process.env.NUXT_PUBLIC_TMDB_API_BASE_URL,
      tmdbApiKey: process.env.NUXT_PUBLIC_TMDB_API_KEY
    }
  },
})

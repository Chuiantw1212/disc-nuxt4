// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [
    '@nuxt/image',
    '@pinia/nuxt',
    '@element-plus/nuxt',
    '@nuxtjs/google-fonts',
    '@nuxt/devtools',
  ],
  googleFonts: {
    families: {
      'Noto Sans TC': [300, 400, 500, 600, 700],
    },
    display: 'swap',  // prevents invisible text while loading
    preload: true,    // adds <link rel="preload">
  },
  css: ['~/assets/main.css', '~/assets/tailwind.css']
})
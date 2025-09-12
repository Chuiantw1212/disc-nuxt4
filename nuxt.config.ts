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
  css: ['~/assets/main.css', '~/assets/tailwind.css'],
  ssr: false,
  // // 1) 預設所有頁面都預渲染
  // routeRules: {
  //   '/**': { prerender: true },
  //   // 也可以針對某些頁面關閉或改成 ISR 等混合模式
  //   // '/some/runtime/page': { prerender: false }
  // },

  // // 2) 預渲染爬蟲與補充動態路由
  // nitro: {
  //   prerender: {
  //     crawlLinks: true,                 // 會從站內連結自動找可到達的頁面
  //     routes: ['/quiz/1', '/quiz/2'],   // 無法被爬到的動態頁，手動列出
  //     // ignore: ['/admin']             // 不想輸出的路由
  //   }
  // },
})
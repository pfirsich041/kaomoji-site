// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  ssr: true, // もしくはfalseでもOK（静的ならどちらでも可）
  nitro: {
    preset: 'netlify'
  },
  build: {
    transpile: []
  },
  app: {
    head: {
      title: 'sns cutie archive | SNSにコピペで使える★',
      meta: [
        { name: 'description', content: 'SNSへの投稿に使える可愛い顔文字です。クリックでコピーできます★' },
        { name: 'keywords', content: '顔文字, かわいい, kaomoji, SNS, コピペ, オタク, 推し活' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { charset: 'utf-8' },
        { name: 'google-site-verification', content: 'ov4P4Tog9TXs9ZSuiOHFRueHs25thXs13l7wf5C7jQk' },
        // OGP設定
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'sns cutie archive' },
        { property: 'og:url', content: 'https://kawaiikaomoji.netlify.app/' },
      ]
    }
  },
  modules: [
    '@nuxtjs/tailwindcss',
    ['nuxt-gtag', { id: 'G-QS8RYCF5L7' }],
    '@nuxt/content',
  ],
  css:[
    'github-markdown-css/github-markdown-light.css',
    './app/assets/css/style.css',
  ]
})

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
      title: 'かわいい顔文字コレクション',
      meta: [
        { name: 'description', content: 'SNSへの投稿に使えるかわいい顔文字です。クリックでコピーできます★' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { charset: 'utf-8' },
        // OGP設定
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'かわいい顔文字コレクション' },
        { property: 'og:url', content: 'https://kawaiikaomoji.netlify.app/' },
      ]
    }
  },
})

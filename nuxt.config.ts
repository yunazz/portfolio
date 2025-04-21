// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxt/image', '@nuxt/eslint', '@nuxt/icon'],
  css: [
    '~/assets/css/reset.css',
    '~/assets/css/common.css',
    '~/assets/css/main.css',
  ],
  plugins: ['~/plugins/observe-visibility.js'],
});

export default defineNuxtConfig({
  ssr: true,
  srcDir: 'src',
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/image-edge',
    '@nuxt/content'
  ],
  content: {
    highlight: {
      preload: ['vue', 'ts', 'rust'],
      theme: {
        dark: 'github-dark',
        default: 'github-light',
      }
    }
  }
})

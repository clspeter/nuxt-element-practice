// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ['@element-plus/nuxt', '@nuxtjs/color-mode', '@nuxtjs/tailwindcss'],
    css: ["@/assets/scss/index.scss"],
    colorMode: {
        preference: 'light',
    },
})  

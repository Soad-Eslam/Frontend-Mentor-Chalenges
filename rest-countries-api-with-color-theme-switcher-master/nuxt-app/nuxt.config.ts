const sharedFieldStyles = {
  base: 'dark:text-white bg-white dark:bg-blue-900 bg-gray-400 rounded',
  ring: 'focus:ring-2 focus:ring-blue-500'
}
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/ui'],
  css: ["~/assets/css/main.css"],
   ui: {
    input: {
      ...sharedFieldStyles,
      placeholder: 'text-black dark:text-white'
    },

    selectMenu: {
      ...sharedFieldStyles
    }
  }

})
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
  head: {
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'logofavIcon.png' }
    ]
  }
},
  devtools: { enabled: true },
  css: ["~/assets/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ["@nuxt/image", "@tresjs/nuxt", "@vueuse/motion/nuxt"],
  tres: {
    devtools: true,
  },

  runtimeConfig: {
    public: {
      motion: {
        directives: {
          "pop-bottom": {
            initial: {
              scale: 0,
              opacity: 0,
              y: 100,
            },
            visible: {
              scale: 1,
              opacity: 1,
              y: 0,
            },
          },
        },
      },
    },
  },
});

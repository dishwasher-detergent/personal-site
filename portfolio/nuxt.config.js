export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Kenneth Bass",
    htmlAttrs: {
      lang: "en"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    link: [{ rel: "preconnect", href: "https://fonts.googleapis.com" }],
    link: [{ rel: "preconnect", href: "https://fonts.gstatic.com" }],
    link: [{ rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap" }]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["~/assets/main.css"],
  pageTransition: "my-page",

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ["@/plugins/supabase.client.js", "~/plugins/imagekit.js","~/plugins/boringAvatars.js",{ src: '~/plugins/notifications-client', ssr: false }],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,
  target: 'static',

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ["@nuxtjs/tailwindcss", "nuxt-animejs"],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["@nuxt/content", "@nuxtjs/axios", "@nuxtjs/auth-next", "@nuxtjs/dotenv"],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  axios: {
    baseURL: process.env.NUXT_WEBSITE
  },

  auth: {
    strategies: {
      supabase: {
        scheme: '~/schemes/supabaseScheme'
        /* ... */
      }
    }
  },

  image: {
    imagekit: {
      baseURL: "https://ik.imagekit.io/kennethbass/"
    }
  },

  env: {
    private_api: process.env.NUXT_IMAGEKIT_PRIVATE,
    public_api: process.env.NUXT_IMAGEKIT_PUBLIC,
    imageKit_endpoint: process.env.NUXT_IMAGEKIT_ENDPOINT
  }
};

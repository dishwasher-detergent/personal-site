export default {
  ssr: false,

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
    link: [{ rel: "preconnect", href: "https://fonts.googleapis.com" }],
    link: [{ rel: "preconnect", href: "https://fonts.gstatic.com" }],
    link: [
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap"
      }
    ]
  },

  css: ["~/assets/main.css"],
  pageTransition: "my-page",

  plugins: [
    "@/plugins/supabase.client.js",
    "~/plugins/imagekit.js",
    "~/plugins/boringAvatars.js",
    { src: "~/plugins/notifications-client", ssr: false }
  ],

  components: true,
  target: "static",

  buildModules: ["@nuxtjs/tailwindcss", "nuxt-animejs",'nuxt-gsap-module','@nuxtjs/device'],

  modules: [
    "@nuxt/content",
    "@nuxtjs/axios",
    "@nuxtjs/auth-next",
    "@nuxtjs/dotenv"
  ],

  build: {},

  axios: {
    baseURL: process.env.NUXT_WEBSITE
  },

  auth: {
    strategies: {
      supabase: {
        scheme: "~/schemes/supabaseScheme"
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
  },

  gsap: {
    extraPlugins: {
      scrollTo: true,
      scrollTrigger: true
    }
  },
};

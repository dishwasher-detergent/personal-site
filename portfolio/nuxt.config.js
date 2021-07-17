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

  "nuxt-social-meta": {
    url: "kennethbass.com",
    title: "Portfolio for Kenneth Bass",
    site_name: "Kenneth Bass",
    description: "Portfolio for Kenneth Bass",
    img: "~/static/favicon.png",
    img_size: { width: "512", height: "512" },
    locale: "en_US",
    theme_color: "#ffffff"
  },

  plugins: [
    "@/plugins/supabase.client.js",
    "~/plugins/imagekit.js",
    "~/plugins/boringAvatars.js",
    { src: "~/plugins/notifications-client", ssr: false }
  ],

  components: true,
  target: "static",

  buildModules: ["@nuxtjs/tailwindcss", "nuxt-animejs"],

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

  "rfg-icon": {
    static: true,
    staticPath: "/_favicons/",
    masterPicture: "static/icon.png",
    rfg: {
      masterPicture: "TODO: Path to your master picture",
      iconsPath: "/",
      design: {
        ios: {
          pictureAspect: "noChange",
          assets: {
            ios6AndPriorIcons: false,
            ios7AndLaterIcons: false,
            precomposedIcons: false,
            declareOnlyDefaultIcon: true
          }
        },
        desktopBrowser: {
          design: "raw"
        },
        windows: {
          pictureAspect: "noChange",
          backgroundColor: "#2d89ef",
          onConflict: "override",
          assets: {
            windows80Ie10Tile: false,
            windows10Ie11EdgeTiles: {
              small: false,
              medium: true,
              big: false,
              rectangle: false
            }
          }
        },
        androidChrome: {
          pictureAspect: "noChange",
          themeColor: "#ffffff",
          manifest: {
            display: "standalone",
            orientation: "notSet",
            onConflict: "override",
            declared: true
          },
          assets: {
            legacyIcon: false,
            lowResolutionIcons: false
          }
        },
        safariPinnedTab: {
          pictureAspect: "blackAndWhite",
          threshold: 68.75,
          themeColor: "#5bbad5"
        }
      },
      settings: {
        scalingAlgorithm: "Mitchell",
        errorOnImageTooSmall: false,
        readmeFile: false,
        htmlCodeFile: false,
        usePathAsIs: false
      }
    }
  }
};

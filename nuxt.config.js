import colors from 'vuetify/es5/util/colors'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - WikiLeetcode',
    title: 'WikiLeetcode',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['codemirror/lib/codemirror.css',
    'codemirror/theme/base16-dark.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/markdownParser.js',
    { src: '~plugins/codemirror.js', ssr: false }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify'
  ],
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/auth',
    '@nuxtjs/toast',
  ],
  auth: {
    redirect: {
      login: '/login',
      logout: '/login',
      callback: '',
      home: '/'
    },
    strategies: {
      local: {
        endpoints: {
          login: { url: '/login/', method: 'post', },
          logout: { url: '/logout/', method: 'get' },
          user: false

        },
      },
      token: {
        type: 'Token',
        property: 'token',
        name: 'Authorization',
        maxAge: 1800,
        global: true,
        required: true,
        prefix: '_token.',
        expirationPrefix: '_token_expiration.'
      },
      },

    },

    // Axios module configuration: https://go.nuxtjs.dev/config-axios
    axios: {
      baseURL: 'http://localhost:8000/',
    },


  toast: {
    position: 'top-right',
    register: [ // Register custom toasts
      {
        name: 'Login',
        message: 'Logged In successfully',
        options: {
          theme: 'toasted-primary',
          duration: 4000,
          keepOnHover:true,
        }
      }
    ]
  },
    publicRuntimeConfig: {
      axios: {
        browserBaseURL: process.env.BROWSER_BASE_URL
      }
    },
    privateRuntimeConfig: {
      axios: {
        baseURL: 'http://localhost:8000/'
      }
    },

    // PWA module configuration: https://go.nuxtjs.dev/pwa
    pwa: {
      manifest: {
        lang: 'en'
      }
    },

    // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
    vuetify: {
      customVariables: ['~/assets/variables.scss'],
      treeShake: true,
      theme: {
        dark: false,
        themes: {
          dark: {
            primary: colors.blue.darken2,
            accent: colors.grey.darken3,
            secondary: colors.amber.darken3,
            info: colors.teal.lighten1,
            warning: colors.amber.base,
            error: colors.deepOrange.accent4,
            success: colors.green.accent3,
            main: colors.teal.accent3
          }
        }
      }
    },

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
      transpile: /@highlightjs.*/, // transpile ESM modules within all fullcalendar packages
      standalone: true,
    }
}

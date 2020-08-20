import { Configuration } from '@nuxt/types/config';
import theme from './client/utils/theme';
import themeApp from './client/utils/theme';

const isDev = !(process.env.NODE_ENV === 'production');


const config: Partial<Configuration> = {
  telemetry: false,
  srcDir: 'client/',
  server: {
    port: 8080,
  },
  mode: 'universal',
  dev: isDev,

  /*
   ** Headers of the page
   */
  head: {
    title: 'Signati',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'description' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons',
      },
    ],
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/composition-api.ts',
    '~/plugins/api-client.ts',
    '~/plugins/logger.ts',
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxt/typescript-build',
    'nuxt-typed-vuex',
    '@nuxtjs/vuetify',
  ],
  // @ts-ignore
  vuetify: {
    ...themeApp,
  },
  /*
  ** Nuxt.js modules
  */
  modules: [],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    },
    transpile: [
      /typed-vuex/,
    ],
  },
  babel: {
    babelrc: false,
    cacheDirectory: undefined,
    presets: ['@nuxt/babel-preset-app'],
  },
};

export default config;

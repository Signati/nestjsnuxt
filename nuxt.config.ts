import { Configuration } from '@nuxt/types/config';
import { colors } from 'vuetify/lib';

const config: Configuration = {
  telemetry: false,
  srcDir: 'client/',
  server: {
    port: 8080,
  },
  mode: 'universal',
  /*
  ** Headers of the page
  */

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
    '@nuxtjs/vuetify',
  ],

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
  },
};

export default config;

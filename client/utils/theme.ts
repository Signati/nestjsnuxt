import { GlobalVuetifyPreset } from 'vuetify/types/services/presets';

const themeApp: GlobalVuetifyPreset = {
  theme: {
    // @ts-ignore
    themes: {
      light: {
        primary: '#2196f3',
        secondary: '#e91e63',
        accent: '#5e04af',
        error: '#f44336',
        warning: '#c32017',
        info: '#2196f3',
        success: '#4caf50',

        // error: colors.red.base,
      },
    },
  },
};
export default themeApp;

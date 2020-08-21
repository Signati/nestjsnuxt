import { GlobalVuetifyPreset } from 'vuetify/types/services/presets';

const themeApp: GlobalVuetifyPreset = {
  theme: {
    // @ts-ignore
    themes: {
      light: {
        primary: '#8e23ec',
        secondary: '#093CB2',
        accent: '#F6F9FC',
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

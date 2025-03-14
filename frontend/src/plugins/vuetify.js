import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import { theme } from '@/config/theme';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: theme,
  },
});

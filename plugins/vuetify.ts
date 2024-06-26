import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import { createVuetify } from "vuetify";

export default defineNuxtPlugin((nuxt) => {
  const vuetify = createVuetify({
    ssr: false,
    components,
    directives,
  });
  nuxt.vueApp.use(vuetify);
});

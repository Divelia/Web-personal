import axios from "axios";
export default defineNuxtPlugin((nuxtApp) => {
  const defaultUrl = "https://admin.jairmanrique.com";

  let api = axios.create({
    baseUrl: defaultUrl,
    headers: {
      common: {},
    },
  });
return {
    provide: {
      api: api,
    },
  };
});
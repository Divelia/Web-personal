import axios from "axios";
export default defineNuxtPlugin((nuxtApp) => {
  const defaultUrl = "https://admin.jairmanrique.com/api/v1";

  let api = axios.create({
    baseURL: defaultUrl,
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
import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
import { API_URL, API_KEY } from "@/common/config";
const ApiService = {
  init() {
    Vue.use(VueAxios, axios);
    Vue.axios.defaults.baseURL = `http://${API_URL}`;
  },

  query(resource, params) {
    console.log(resource);
    console.log(params);
    return Vue.axios.get(resource, params).catch(error => {
      throw new Error(`[WW] ApiService ${error}`);
    });
  },

  get(resource, slug = "") {
    return Vue.axios.get(`${resource}/${slug}`).catch(error => {
      throw new Error(`[WW] ApiService ${error}`);
    });
  }
};

export default ApiService;

export const WeatherService = {
  query(params) {
    console.log(params);
    return ApiService.query("weather", {
      params: { ...params, appid: API_KEY }
    });
  }
};

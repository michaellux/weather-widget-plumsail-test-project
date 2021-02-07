import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import { Vue2Storage } from "vue2-storage";
import UUID from "vue-uuid";
import ApiService from "./common/api.service";
import vueCustomElement from "vue-custom-element";
import "document-register-element/build/document-register-element";

Vue.use(vueCustomElement);

Vue.use(Vue2Storage, {
  prefix: "app_",
  driver: "local",
  ttl: 60 * 60 * 24 * 1000 // 24 часа
});

Vue.use(UUID);

ApiService.init();

Vue.config.productionTip = false;

App.store = store;
App.router = router;
App.vuetify = vuetify;
Vue.customElement("weather-widget", App);

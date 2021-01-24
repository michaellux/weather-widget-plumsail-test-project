import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import { Vue2Storage } from "vue2-storage";
import UUID from "vue-uuid";
import ApiService from "./common/api.service";

Vue.use(Vue2Storage, {
  prefix: "app_",
  driver: "local",
  ttl: 60 * 60 * 24 * 1000 // 24 часа
});

Vue.use(UUID);

ApiService.init();

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");

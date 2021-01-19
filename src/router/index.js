import Vue from "vue";
import VueRouter from "vue-router";
import Weather from "../views/Weather.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Weather",
    component: Weather
  },
  {
    path: "/settings",
    name: "Settings",
    component: () =>
      import(/* webpackChunkName: "settings" */ "../views/Settings.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;

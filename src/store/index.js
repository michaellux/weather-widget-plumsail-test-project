import Vue from "vue";
import Vuex from "vuex";
import app from "./modules/app";
import locations from "./modules/locations";
import createPersistedState from "vuex-persistedstate";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    app,
    locations
  },
  plugins: [createPersistedState()]
});

export default {
  namespaced: true,
  state: {
    view: "Settings"
  },
  getters: {},
  mutations: {
    changeView(state, name) {
      state.view = name;
    }
  },
  actions: {}
};

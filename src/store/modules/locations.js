import { uuid } from "vue-uuid";

export default {
  namespaced: true,
  state: {
    cities: []
  },
  getters: {
    allCities: state => {
      return state.cities;
    },
    citiesCount: state => {
      return state.cities.length;
    }
  },
  mutations: {
    addCity(state, name) {
      state.cities = [...state.cities, { name, id: uuid.v1() }];
    },
    removeCity(state, id) {
      state.cities = state.cities.filter(city => city.id !== id);
    }
  },
  actions: {}
};

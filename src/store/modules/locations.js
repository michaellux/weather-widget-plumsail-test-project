import { uuid } from "vue-uuid";
import { WeatherService } from "../../common/api.service";
import { FETCH_WEATHER } from "../actions.type";
import { FETCH_START, FETCH_END } from "../mutations.type";
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
    },
    [FETCH_START](state) {
      state.isLoading = true;
    },
    [FETCH_END](state, res) {
      state.isLoading = false;
      let city = state.cities.find(
        city => city.name === `${res.name}, ${res.sys.country}`
      );

      console.log(city);
      console.log("FETCH END");
      console.log(res);
      console.log(res.main);
      console.log(res.main.temp);
      console.log(city);
      city.main = {
        temp: res.main.temp,
        icon: res.weather[0]["icon"]
      };
      city.details = {
        feels: res.main.feels_like,
        description: res.weather[0].description
      };
      city.pro = {
        wind: res.wind.speed,
        pressure: res.main.pressure,
        humidity: res.main.humidity,
        visibility: res.visibility
      };
      console.log(city.pro);
      console.log(city.main);
      console.log(city.details);
      console.log(city.main.temp);
      console.log(city.main.icon);
    }
  },
  actions: {
    [FETCH_WEATHER]: {
      root: true,
      handler({ commit }, params) {
        commit(FETCH_START);
        return WeatherService.query(params)
          .then(({ data }) => {
            commit(FETCH_END, data);
          })
          .catch(error => {
            throw new Error(error);
          });
      }
    }
  }
};

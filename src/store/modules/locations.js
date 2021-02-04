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
    },
    getLoadStatus: state => {
      return state.isLoading;
    }
  },
  mutations: {
    addCity(state, city) {
      state.cities = [...state.cities, { ...city, id: uuid.v1() }];
    },
    removeCity(state, id) {
      state.cities = state.cities.filter(city => city.id !== id);
    },
    [FETCH_START](state) {
      state.isLoading = true;
    },
    [FETCH_END](state, res) {
      state.isLoading = false;
      console.log("CITY");
      let city = state.cities.find(city => {
        return (
          city.coord.lon.toFixed(4) == res.lon &&
          city.coord.lat.toFixed(4) == res.lat
        );
      });
      console.log("CITY__END");
      console.log(city);
      console.log(res);
      console.log(res.current.temp);
      console.log(city);
      city.weather.main = {
        temp: res.current.temp,
        icon: res.current.weather[0]["icon"]
      };
      city.weather.details = {
        feels: res.current.feels_like,
        description: res.current.weather[0].description
      };
      city.weather.pro = {
        wind: {
          deg: res.current.wind_deg,
          speed: res.current.wind_speed
        },
        pressure: res.current.pressure,
        humidity: res.current.humidity,
        visibility: res.current.visibility,
        dewPoint: res.current.dew_point
      };
      console.log(city.weather.main);
      console.log(city.weather.pro);
      console.log(city.weather.details);
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

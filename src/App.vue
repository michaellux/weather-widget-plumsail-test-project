<template>
  <v-app app id="app">
    <v-main>
      <v-tabs color="deep-gray accent-4" grow>
        <v-tab>Weather</v-tab>
        <v-tab>Settings</v-tab>
        <v-tab-item v-for="view in views" :key="view">
          <component v-bind:is="view" />
        </v-tab-item>
      </v-tabs>
    </v-main>
  </v-app>
</template>

<script>
import cityList from "./data/city.list.json";
export default {
  data() {
    return {
      views: [
        () => import("./views/" + "Weather"),
        () => import("./views/" + "Settings")
      ],
      locationTimeout: null
    };
  },
  name: "App",
  created() {
    if (this.$store.getters["locations/citiesCount"] === 0) {
      this.promptUserSpecifyCity();
    }
  },
  computed: {
    view() {
      return () => import("./views/" + this.$store.state.app.view);
    }
  },
  methods: {
    promptUserSpecifyCity() {
      if (navigator.geolocation) {
        this.locationTimeout = setTimeout(this.showMessageAboutBrowser, 10000);
        navigator.geolocation.getCurrentPosition(
          this.executeOnSuccess,
          this.executeOnFailureOrRefusal
        );
      } else {
        this.showMessageAboutBrowser();
      }
    },
    executeOnSuccess(position) {
      clearTimeout(this.locationTimeout);
      const userCoordPosition = this.getUserCoords(position);
      console.log(userCoordPosition);
      this.addUserLocationCity(userCoordPosition);
    },
    getUserCoords(position) {
      const userLat = position.coords.latitude;
      const userLon = position.coords.longitude;
      return { userLat, userLon };
    },
    addDefaultCity() {
      this.$store.commit(
        "locations/addCity",
        this.convertCityFromList(this.getCityByIdFromCityList(524894)),
        { root: true }
      );
    },
    showMessagesAboutError(error) {
      clearTimeout(this.locationTimeout);
      if (error.code == 1) console.warn("Местоположение не определено");
      if (error.code == 2) console.warn("Сеть не активна");
      if (error.code == 3) console.warn("Превышено время ожидания");
    },
    addUserLocationCity(coords) {
      this.$store.commit("locations/addCity", this.createCity(coords), {
        root: true
      });
    },
    executeOnFailureOrRefusal(error) {
      this.showMessagesAboutError(error);
      this.addDefaultCity();
    },
    showMessageAboutBrowser() {
      alert("Возможно ваш браузер не поддерживает геолокацию.");
    },
    getCityByIdFromCityList(id) {
      return cityList.find(city => city.id === id);
    },
    convertCityFromList(cityFromList) {
      return {
        order: 0,
        maininfo: {
          city_id: cityFromList.id,
          name: cityFromList.name,
          country: cityFromList.country
        },
        coord: cityFromList.coord,
        weather: {
          main: null,
          details: null,
          pro: null
        }
      };
    },
    createCity(coords) {
      return {
        order: 0,
        maininfo: {
          city_id: null,
          name: "Your location",
          country: "Your country"
        },
        coord: {
          lon: coords.userLon,
          lat: coords.userLat
        },
        weather: {
          main: null,
          details: null,
          pro: null
        }
      };
    }
  }
};
</script>

<style>
.v-tabs,
.v-tabs-items {
  height: 100%;
}
</style>

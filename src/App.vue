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
      ]
    };
  },
  name: "App",
  created() {
    if (this.$store.getters["locations/citiesCount"] === 0) {
      this.$store.commit(
        "locations/addCity",
        this.convertCityFromList(this.getCityByIdFromCityList(524894)),
        { root: true }
      );
    }
  },
  computed: {
    view() {
      return () => import("./views/" + this.$store.state.app.view);
    }
  },
  methods: {
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

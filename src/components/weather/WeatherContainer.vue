<template>
  <v-container>
    <div class="d-flex align-center justify-space-between">
      <h1 class="text-h1 mt-12 mb-12">{{ title }}</h1>
    </div>
    <v-row class="d-flex flex-wrap flex-start">
      <v-col
        v-for="city in cities"
        :key="city.id"
        cols="12"
        xl="3"
        lg="4"
        md="6"
        sm="6"
        xs="12"
      >
        <weather-card
          v-bind:name="city.maininfo.name"
          v-bind:coord="city.coord"
          v-bind:id="city.id"
          v-bind:main="city.weather.main"
          v-bind:details="city.weather.details"
          v-bind:pro="city.weather.pro"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import WeatherCard from "@/components/weather/WeatherCard.vue";
export default {
  data: function() {
    return {
      title: "Weather"
    };
  },
  computed: {
    cities() {
      return this.$store.getters["locations/allCities"];
    },
    count() {
      return this.$store.getters["locations/citiesCount"];
    }
  },
  components: { WeatherCard },
  name: "WeatherContainer",
  props: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>

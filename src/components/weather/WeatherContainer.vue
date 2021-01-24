<template>
  <v-container>
    <div class="d-flex align-items-center justify-space-between">
      <h1 class="text-h1 mt-12 mb-12">{{ title }}</h1>
    </div>
    <v-row class="d-flex flex-wrap justify-space-between">
      <v-col
        v-for="n in 3"
        :key="n"
        cols="12"
        xl="3"
        lg="4"
        md="6"
        sm="4"
        xs="12"
      >
        <weather-card />
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
  components: { WeatherCard },
  name: "WeatherContainer",
  props: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>

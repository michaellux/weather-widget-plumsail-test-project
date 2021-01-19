<template>
  <div class="container">
    <p>WeatherContainer for WeatherCard</p>
    <weather-card />
  </div>
</template>

<script>
import WeatherCard from "@/components/weather/WeatherCard.vue";

export default {
  components: { WeatherCard },
  name: "WeatherContainer",
  props: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>

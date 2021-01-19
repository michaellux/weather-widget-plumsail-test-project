<template>
  <weather-container />
</template>

<script>
// @ is an alias to /src
import WeatherContainer from "@/components/weather/WeatherContainer.vue";

export default {
  name: "Weather",
  components: {
    WeatherContainer
  }
};
</script>

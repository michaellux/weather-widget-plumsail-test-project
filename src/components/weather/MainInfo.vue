<template>
  <div class="d-flex flex-wrap">
    <v-img
      max-height="150"
      max-width="250"
      :src="info.icon | createSrc"
    ></v-img>
    <span class="text-h2 font-weight-medium align-self-center">
      {{ info.temp | round }}
    </span>
  </div>
</template>

<script>
export default {
  name: "MainInfo",
  props: ["info"],
  filters: {
    round: function(value) {
      return `${Math.round(value)}°C`;
    },
    createSrc: function(value) {
      return `http://openweathermap.org/img/wn/${value}@2x.png`;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>

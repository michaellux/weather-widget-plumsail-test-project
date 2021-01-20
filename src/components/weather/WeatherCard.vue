<template>
  <v-card outlined class="pa-6">
    <City />
    <MainInfo />
    <DetailInfo />
    <ProInfo />
  </v-card>
</template>

<script>
import City from "./City.vue";
import MainInfo from "./MainInfo.vue";
import DetailInfo from "./DetailInfo.vue";
import ProInfo from "./ProInfo.vue";
export default {
  name: "WeatherCard",
  props: {},
  components: {
    City,
    MainInfo,
    DetailInfo,
    ProInfo
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>

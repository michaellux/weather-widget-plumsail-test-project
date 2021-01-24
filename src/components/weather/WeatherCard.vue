<template>
  <v-card outlined class="pa-6">
    <City :name="name" />
    <MainInfo :info="main" />
    <DetailsInfo :info="details" />
    <ProInfo :info="pro" />
  </v-card>
</template>

<script>
import City from "./City.vue";
import MainInfo from "./MainInfo.vue";
import DetailsInfo from "./DetailsInfo.vue";
import ProInfo from "./ProInfo.vue";
import { FETCH_WEATHER } from "../../store/actions.type";
export default {
  name: "WeatherCard",
  props: ["name", "id", "main", "details", "pro"],
  components: {
    City,
    MainInfo,
    DetailsInfo,
    ProInfo
  },
  mounted() {
    this.fetchWeather();
  },
  computed: {},
  methods: {
    fetchWeather() {
      this.$store.dispatch(FETCH_WEATHER, { q: this.name, units: "metric" });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>

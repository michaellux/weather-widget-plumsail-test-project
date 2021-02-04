<template>
  <v-card v-if="!getLoadStatus" outlined class="card pa-6">
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
  props: ["name", "id", "coord", "main", "details", "pro"],
  components: {
    City,
    MainInfo,
    DetailsInfo,
    ProInfo
  },
  mounted() {
    this.fetchWeather();
  },
  computed: {
    getLoadStatus() {
      return this.$store.getters["locations/getLoadStatus"];
    }
  },
  methods: {
    fetchWeather() {
      this.$store.dispatch(FETCH_WEATHER, {
        lat: this.coord.lat,
        lon: this.coord.lon,
        units: "metric"
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.v-sheet.v-card {
  height: 100%;
}
</style>

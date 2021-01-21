<template>
  <v-list two-line class="mb-12">
    <v-list-item class="pa-0">
      <v-row class="d-flex flex-wrap justify-start">
        <v-col
          v-for="city in cities"
          :key="city.id"
          cols="12"
          xl="3"
          lg="4"
          md="6"
          sm="4"
          xs="12"
        >
          <city-item
            v-on:remove-item="removeCity"
            v-bind:name="city.name"
            v-bind:id="city.id"
          />
        </v-col>
      </v-row>
    </v-list-item>
  </v-list>
</template>

<script>
import CityItem from "./CityItem.vue";

export default {
  name: "AllCitiesList",
  props: {},
  components: {
    CityItem
  },
  methods: {
    removeCity: function(id) {
      this.$store.commit("locations/removeCity", id, { root: true });
    }
  },
  computed: {
    cities() {
      return this.$store.getters["locations/allCities"];
    },
    count() {
      return this.$store.getters["locations/citiesCount"];
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>

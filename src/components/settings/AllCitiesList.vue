<template>
  <v-list two-line class="mb-12">
    <v-list-item class="pa-0">
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
          <city-item />
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
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>

<template>
  <v-container>
    <div class="d-flex align-center justify-space-between">
      <h1 class="text-h1 mt-12 mb-12">{{ title }}</h1>
      <v-btn icon>
        <v-icon large color="grey darken-2"> mdi-close </v-icon>
      </v-btn>
    </div>
    <AllCitiesList />
    <AddLocation />
  </v-container>
</template>

<script>
import AllCitiesList from "./AllCitiesList.vue";
import AddLocation from "./AddLocation.vue";

export default {
  data: function() {
    return {
      title: "Settings"
    };
  },
  components: {
    AllCitiesList,
    AddLocation
  },
  name: "SettingsContainer",
  props: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>

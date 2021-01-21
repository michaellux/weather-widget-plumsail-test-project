<template>
  <v-sheet class="pa-12 d-flex" color="grey lighten-3">
    <v-list-item-action>
      <v-btn icon>
        <v-icon color="grey lighten-1">mdi-menu</v-icon>
      </v-btn>
    </v-list-item-action>
    <v-list-item-content>
      <v-list-item-title
        class="text-h4 font-weight-light"
        v-text="name"
      ></v-list-item-title>
    </v-list-item-content>
    <v-list-item-action>
      <v-btn icon v-on:click="$emit('remove-item', id)">
        <v-icon color="grey lighten-1">mdi-delete-outline</v-icon>
      </v-btn>
    </v-list-item-action>
  </v-sheet>
</template>

<script>
export default {
  data: function() {
    return {
      city: "[City name]"
    };
  },
  name: "CityItem",
  props: ["name", "id"]
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>

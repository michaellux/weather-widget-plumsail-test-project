<template>
  <div class="addLocationBlock d-flex flex-wrap align-center">
    <h2 class="addLocationBlock__title text-h4 font-weight-regular">
      {{ title }}
    </h2>

    <v-text-field
      v-model="text"
      class="addLocationBlock__field"
      color="primary"
    >
      <template v-slot:append>
        <v-btn icon @click="addCity">
          <v-icon color="grey darken-2">mdi-plus</v-icon>
        </v-btn>
      </template>
    </v-text-field>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      title: "Add location:",
      text: ""
    };
  },
  name: "CityItem",
  props: {},
  methods: {
    addCity() {
      this.$store.commit("locations/addCity", this.text, { root: true });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.addLocationBlock__title {
  margin-right: 2rem;
}
</style>

<template>
  <v-list two-line class="mb-12">
    <v-list-item class="pa-0">
      <v-row class="d-flex flex-wrap justify-start">
        <draggable
          class="v-col__container"
          :list="cities"
          :move="checkMove"
          ghost-class="ghost"
          @start="dragging = true"
          @end="updateItemOrder"
        >
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
              class="cityCard"
              v-on:remove-item="removeCity"
              v-bind:name="city.maininfo.name"
              v-bind:id="city.id"
            />
          </v-col>
        </draggable>
      </v-row>
    </v-list-item>
  </v-list>
</template>

<script>
import CityItem from "./CityItem.vue";
import draggable from "vuedraggable";

export default {
  name: "AllCitiesList",
  props: {},
  components: {
    CityItem,
    draggable
  },
  data: function() {
    return {
      draggableElement: null
    };
  },
  methods: {
    removeCity: function(id) {
      this.$store.commit("locations/removeCity", id, { root: true });
    },
    checkMove: function(e) {
      console.log(e);
      console.log(e.draggedContext);
      this.draggableElement = e.draggedContext.element;
      window.console.log("Future index: " + e.draggedContext.futureIndex);
    },
    updateItemOrder: function(e) {
      console.log(e);
      this.$store.commit(
        "locations/swapCitiesPosition",
        {
          id: this.draggableElement.id,
          oldPosition: e.oldIndex,
          newPosition: e.newIndex
        },
        {
          root: true
        }
      );
      console.log("Drag ended");
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
<style lang="scss" scoped>
.v-col__container {
  display: contents;
}
</style>

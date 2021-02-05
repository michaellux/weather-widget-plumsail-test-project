<template>
  <div class="addLocationBlock d-flex flex-wrap align-center">
    <h2 class="addLocationBlock__title text-h4 font-weight-regular">
      {{ title }}
    </h2>

    <v-autocomplete
      v-model="text"
      class="addLocationBlock__select"
      color="primary"
      :items="cities"
    >
      <template v-slot:append>
        <v-btn icon @click="addCity">
          <v-icon color="grey darken-2">mdi-plus</v-icon>
        </v-btn>
      </template>
    </v-autocomplete>
  </div>
</template>

<script>
import cityList from "../../data/city.list.json";

export default {
  data: function() {
    return {
      title: "Add location:",
      text: "",
      cities: cityList.map(item => `${item.name}, ${item.country}`)
    };
  },
  name: "CityItem",
  props: {},
  methods: {
    getCityFromList(value) {
      const [city, country] = value.split(",");
      const targetCity = cityList.find(item => {
        return item.name == city.trim() && item.country == country.trim();
      });

      return targetCity;
    },
    convertCityFromList(cityFromList) {
      return {
        order: this.$store.getters["locations/citiesCount"],
        maininfo: {
          city_id: cityFromList.id,
          name: cityFromList.name,
          country: cityFromList.country
        },
        coord: cityFromList.coord,
        weather: {
          main: null,
          details: null,
          pro: null
        }
      };
    },
    addCity() {
      console.log(this.text);
      this.$store.commit(
        "locations/addCity",
        this.convertCityFromList(this.getCityFromList(this.text)),
        { root: true }
      );
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.addLocationBlock__select {
  margin: 0 20vw 0 2rem;
}
</style>

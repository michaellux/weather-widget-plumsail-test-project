<template>
  <div class="d-flex font-weight-light flex-wrap">
    <v-col class="pl-0">
      <div class="wind mb-3">
        <span>
          <v-icon
            class="mr-1"
            v-bind:style="{ transform: wind }"
            large
            color="blue-grey lighten-4"
          >
            mdi-arrow-up-thin-circle-outline
          </v-icon>
          {{ info.wind.speed | giveLookWind }}
          {{ windDirection }}
        </span>
      </div>
      <div class="pressure mb-3">
        <span>
          <v-icon class="mr-1" large color="blue-grey lighten-4">
            mdi-gauge
          </v-icon>
          {{ info.pressure | giveLookPressure }}
        </span>
      </div>
    </v-col>
    <v-col class="pl-0">
      <div class="humidity mb-3">
        <span>
          <v-icon class="mr-1" large color="blue-grey lighten-4">
            mdi-water-outline
          </v-icon>
          {{ info.humidity | giveLookHumidity }}
        </span>
      </div>
      <div class="dewPoint mb-3">
        <span>
          <v-icon class="mr-1" large color="blue-grey lighten-4">
            mdi-grass
          </v-icon>
          {{ info.dewPoint | giveLookDewPoint }}
        </span>
      </div>
      <div class="visibility mb-3">
        <span>
          <v-icon class="mr-1" large color="blue-grey lighten-4">
            mdi-eye-outline
          </v-icon>
          {{ info.visibility | giveLookVisibility }}
        </span>
      </div>
    </v-col>
  </div>
</template>

<script>
import lodash from "lodash";

export default {
  name: "ProInfo",
  props: ["info"],
  data: function() {
    return {
      deg: this.info.wind.deg,
      wind: `rotate(${this.info.wind.deg}deg)`
    };
  },
  computed: {
    windDirection: function() {
      if (lodash.inRange(this.deg, 11, 33)) {
        return "NNE";
      } else if (lodash.inRange(this.deg, 33, 56)) {
        return "NE";
      } else if (lodash.inRange(this.deg, 56, 78)) {
        return "ENE";
      } else if (lodash.inRange(this.deg, 78, 101)) {
        return "E";
      } else if (lodash.inRange(this.deg, 101, 123)) {
        return "ESE";
      } else if (lodash.inRange(this.deg, 123, 146)) {
        return "SE";
      } else if (lodash.inRange(this.deg, 146, 168)) {
        return "SSE";
      } else if (lodash.inRange(this.deg, 168, 191)) {
        return "SSE";
      } else if (lodash.inRange(this.deg, 191, 213)) {
        return "SSW";
      } else if (lodash.inRange(this.deg, 213, 236)) {
        return "SW";
      } else if (lodash.inRange(this.deg, 236, 258)) {
        return "WSW";
      } else if (lodash.inRange(this.deg, 258, 281)) {
        return "W";
      } else if (lodash.inRange(this.deg, 281, 303)) {
        return "WNW";
      } else if (lodash.inRange(this.deg, 303, 326)) {
        return "NW";
      } else if (lodash.inRange(this.deg, 326, 348)) {
        return "NNW";
      } else {
        return "N";
      }
    }
  },
  filters: {
    giveLookWind: function(value) {
      return `${value.toFixed(1)}m/s`;
    },
    giveLookPressure: function(value) {
      return `${value}hPa`;
    },
    giveLookHumidity: function(value) {
      return `Humidity: ${value}%`;
    },
    giveLookDewPoint: function(value) {
      return `Dew point: ${value}°C`;
    },
    giveLookVisibility: function(value) {
      return `Visibility: ${(value / 1000).toFixed(1)}km`;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.v-icon {
  float: left;
}
</style>

<template>
  <p class="d-flex font-weight-light mb-6">
    <span class="mr-6">
      {{ info.wind | giveLookWind }}
    </span>
    <span class="mr-6">
      {{ info.pressure | giveLookPressure }}
    </span>
    <span class="mr-6">
      {{ info.humidity | giveLookHumidity }}
    </span>
    <span class="mr-6">
      {{ info.visibility | giveLookVisibility }}
    </span>
  </p>
</template>

<script>
export default {
  name: "ProInfo",
  props: ["info"],
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
    giveLookVisibility: function(value) {
      return `Visibility: ${(value / 1000).toFixed(1)}km`;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>

<template>
  <h2 class="text-h4 font-weight-light d-block mb-6">
    {{ name }}
  </h2>
</template>

<script>
export default {
  name: "City",
  props: ["name", "id"]
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>

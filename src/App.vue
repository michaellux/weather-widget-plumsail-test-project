<template>
  <v-app app id="app">
    <v-main>
      <keep-alive>
        <component :is="view"></component>
      </keep-alive>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",
  computed: {
    view() {
      return () => import("./views/" + this.$store.state.app.view);
    }
  }
};
</script>

<style></style>

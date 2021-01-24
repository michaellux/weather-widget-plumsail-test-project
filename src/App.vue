<template>
  <v-app app id="app">
    <v-main>
      <v-tabs color="deep-gray accent-4" grow>
        <v-tab>Weather</v-tab>
        <v-tab>Settings</v-tab>
        <v-tab-item v-for="view in views" :key="view">
          <component v-bind:is="view" />
        </v-tab-item>
      </v-tabs>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      views: [
        () => import("./views/" + "Weather"),
        () => import("./views/" + "Settings")
      ]
    };
  },
  name: "App",
  computed: {
    view() {
      return () => import("./views/" + this.$store.state.app.view);
    }
  }
};
</script>

<style></style>

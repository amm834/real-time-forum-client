<template>
  <v-app>
    <v-main>
      <app-tool-bar></app-tool-bar>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>
<script>
import AppToolBar from "./components/AppToolBar.vue";

export default {
  components: {AppToolBar},
  created() {
    if (User.isLoggedIn()) {
      this.$store.commit('setLoggedIn', true)
    }
  }
}
</script>
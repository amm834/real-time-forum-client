<template>
  <div>
    <v-toolbar
        dark
        prominent
    >
      <!--      <v-app-bar-nav-icon></v-app-bar-nav-icon>-->

      <v-toolbar-title>
        <router-link :to="{name:'home'}" class="text-decoration-none text-black">WDE</router-link>
      </v-toolbar-title>

      <v-spacer></v-spacer>
      <v-btn link :to="{name:'forum'}">Forum</v-btn>
      <v-btn
          link
          :to="{name:'categories'}"
      >Categories
      </v-btn>
      <template v-if="isLoggedIn">
        <v-btn link :to="{name:'questions.ask'}">Ask Question</v-btn>
        <v-btn link :to="{name:'logout'}">Logout</v-btn>
      </template>
      <v-btn link :to="{name:'login'}" v-else>Login</v-btn>
    </v-toolbar>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "AppToolBar",
  computed: {
    ...mapGetters(['isLoggedIn'])
  }
}
</script>
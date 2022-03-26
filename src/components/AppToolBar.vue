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
      <v-btn>Forum</v-btn>
      <v-btn>Ask Question</v-btn>
      <v-btn>Category</v-btn>
      <v-btn link :to="{name:'login'}">Login</v-btn>
    </v-toolbar>
  </div>
</template>

<script>
export default {
  name: "AppToolBar"
}
</script>
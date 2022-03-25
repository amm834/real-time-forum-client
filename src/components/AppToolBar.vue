<template>
  <div>
    <v-toolbar
        dark
        prominent
        src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
    >
      <!--      <v-app-bar-nav-icon></v-app-bar-nav-icon>-->

      <v-toolbar-title>
        Web Dev Env
      </v-toolbar-title>

      <v-spacer></v-spacer>
      <v-btn>Forum</v-btn>
      <v-btn>Ask Question</v-btn>
      <v-btn>Category</v-btn>
      <router-link :to="{name:'login'}" class="v-btn">
        <v-btn>Login</v-btn>
      </router-link>
    </v-toolbar>
  </div>
</template>

<script>
export default {
  name: "AppToolBar"
}
</script>
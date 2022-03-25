<template>
  <div>
    <v-toolbar
        dark
        prominent
        src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
    >
      <!--      <v-app-bar-nav-icon></v-app-bar-nav-icon>-->

      <v-toolbar-title>WDE</v-toolbar-title>

      <v-spacer></v-spacer>
      <v-btn>Forum</v-btn>
      <v-btn>Ask Question</v-btn>
      <v-btn>Category</v-btn>
      <v-btn>Login</v-btn>
    </v-toolbar>
  </div>
</template>

<script>
export default {
  name: "AppToolBar"
}
</script>
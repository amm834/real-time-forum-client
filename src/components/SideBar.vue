<template>
  <v-card
      class="mx-auto"
      max-width="300"
  >
    <v-list density="compact">
      <v-list-subheader>Categories</v-list-subheader>
      <v-list-item
          v-for="(category ,i) in categories"
          :key="i"
          :value="category.name"
          active-color="primary"
      >

        <v-list-item-title v-text="category.name"></v-list-item-title>
      </v-list-item>
    </v-list>
  </v-card>
</template>
<script>
import {mapGetters} from "vuex";

export default {
  name: "SideBar",

  data() {
    return {}
  },
  mounted() {
    this.$store.dispatch('getAllCategories')
  },
  computed: {
    ...mapGetters(['categories'])
  }
}
</script>
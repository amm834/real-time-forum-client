<template>

</template>

<script>
export default {
  name: "Logout",
  created() {
    User.logout()
    this.$store.commit('setLoggedIn', false)
    this.$router.push({name: 'forum'})
  }
}
</script>

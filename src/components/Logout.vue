<template>

</template>

<script>
export default {
  name: "Logout",
  mounted() {
    User.logout()
    location.href = '/forum'
  }
}
</script>

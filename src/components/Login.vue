<template>
  <v-container>
    <v-row justify="center">
      <v-col md="8">
        <h1 class="text-center my-3 font-weight-medium">Login</h1>
        <v-form @submit.prevent="login">
          <v-text-field
              label="Email"
              type="email"
              v-model="form.email"
              requied
          ></v-text-field>
          <v-text-field
              label="Password"
              type="password"
              v-model="form.password"
              required
          ></v-text-field>
          <v-btn color="primary" link :to="{name:'register'}" class="mx-3">Register</v-btn>
          <v-btn color="success" type="submit">Login</v-btn>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>


<script>
import {mapGetters} from 'vuex'

export default {
  name: "Login",
  data() {
    return {
      errors: null,
      form: {
        email: null,
        password: null
      },
    }
  },
  created() {
    if (this.isLoggedIn) {
      return this.$router.push({name: 'forum'})
    }
  },
  methods: {
    async login() {
      try {
        const response = await User.login(this.form)
        this.$store.commit('setLoggedIn', true)
        await this.$router.push({name: 'forum'})
      } catch (e) {
        this.errors = e.response.data.errors;
      }
    }
  },
  computed: {
    ...mapGetters(['isLoggedIn'])
  }
}
</script>

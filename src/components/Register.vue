<template>
  <v-container>
    <v-row justify="center">
      <v-col md="8">
        <h1 class="text-center my-3 font-weight-medium">Register</h1>
        <v-form @submit.prevent="register">
          <v-text-field
              label="Fullname"
              type="text"
              v-model="form.name"
              :error-messages="errors?.name"
              requied
          ></v-text-field>
          <v-text-field
              label="Email"
              type="email"
              v-model="form.email"
              :error-messages="errors?.email"
              requied
          ></v-text-field>
          <v-text-field
              label="Password"
              type="password"
              v-model="form.password"
              :error-messages="errors?.password"
              required
          ></v-text-field>

          <v-text-field
              label="Confirm Password"
              type="password"
              v-model="form.password_confirmation"
              :error-messages="errors?.password?.toString().includes('confirmation') ? errors.password[0] : ''"
              required
          ></v-text-field>


          <v-btn color="primary" link :to="{name:'login'}" class="mx-3">Login</v-btn>
          <v-btn color="success" type="submit">Register</v-btn>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>


<script>
import {mapGetters} from "vuex";

export default {
  name: "Register",
  data() {
    return {
      form: {
        name: null,
        email: null,
        password: null,
        password_confirmation: null
      },
      errors: null,
    }
  },
  created() {
    if (this.isLoggedIn){
      return this.$router.push({name:'forum'})
    }
  },
  methods: {
    async register() {
      try {
        const response = await User.register(this.form)
        if (response.status === 200) {
          await this.$router.push({name: 'forum'})
        }
      } catch (e) {
        this.errors = e.response.data.errors
      }
    }
  },
  computed: {
    ...mapGetters(['isLoggedIn'])
  }
}
</script>

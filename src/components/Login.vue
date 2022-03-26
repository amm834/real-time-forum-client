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
          <v-btn color="success" type="submit">Login</v-btn>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>


<script>
import axios from "axios";

export default {
  name: "Login",
  data() {
    return {
      form: {
        email: null,
        password: null
      }
    }
  },
  methods: {
    async login() {
      try {
        const response = await axios.post('/api/auth/login', this.form)
        console.log(response.data)
      } catch (e) {
        console.log(e.response.data)
      }
    }
  }
}
</script>

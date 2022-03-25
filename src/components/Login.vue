<template>
  <v-container>
    <v-row justify="center">
      <v-col md="8">
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
    login() {
      axios.get('/sanctum/csrf-cookie')
          .then(res => {
            console.log(res)
            axios.post('/api/auth/login', this.form)
          })
    }
  }
}
</script>

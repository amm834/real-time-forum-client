<template>
  <div>
    <v-container fluid>
      <v-row>
        <v-col md="8" sm="12">
          <question :questions="questions"></question>
        </v-col>
        <v-col md="4">
          Hi
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Question from "./Question.vue";
import axios from "axios";

export default {
  name: "Forum",
  components: {Question},
  async created() {
    try {
      const response = await axios.get('/api/questions')
      this.questions = response.data.data
      console.log(this.questions)
    } catch (e) {
      this.errors = e.response.data
    }
  },
  data() {
    return {
      questions: [],
      errors: null
    }
  }
}
</script>

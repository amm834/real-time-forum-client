<template>
  <div>
    <v-container fluid>
      <v-row>
        <v-col md="8" sm="12">
          <question :questions="questions"></question>
        </v-col>
        <v-col
            class="hidden-sm-and-down"
            md="4"
        >
          <side-bar></side-bar>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import axios from "axios";
import Question from "./Question.vue";
import SideBar from "./SideBar.vue";

export default {
  name: "Forum",
  components: {SideBar, Question},
  async created() {
    try {
      const response = await axios.get('/api/questions')
      this.questions = response.data.data
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

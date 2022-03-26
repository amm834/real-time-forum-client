<template>
  <div>
    {{ question.title }}
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "SingleQuestion",
  data() {
    return {
      question: Object,
    }
  },
  created() {
    this.getQuestion()
  },
  methods: {
    async getQuestion() {
      try {
        const slug = this.$route.params.slug
        const response = await axios.get(`/api/questions/${slug}`)
        this.question = response.data.data
      } catch (e) {
        console.log(e.response)
      }
    }
  }
}
</script>

<style scoped>

</style>
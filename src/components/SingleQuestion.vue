<template>
  <div>
    <v-container>
      <v-card elevation="2" class="mb-3 v-container">
        <v-card-header>
          <div>
            <v-card-title>
              {{ question.title }}
            </v-card-title>
            <v-card-subtitle>
              <v-icon class="mx-2">mdi-clock</v-icon>
              {{ question.created_at }} | By {{ question.name }}
            </v-card-subtitle>
          </div>
          <v-spacer></v-spacer>
          <v-btn color="purple">5 replies</v-btn>
        </v-card-header>

        <markdown
            :source="question.body"
            :linkify="true"
            :html="true"
            class="rounded"
        />
        <v-card-actions class="mt-3 d-flex justify-end" v-if="isActionable">
          <v-btn color="success" link
                 :to="{
            name:'questions.edit',
            params:{
              slug:question.slug
            }
          }"

          >
            <v-icon left>
              mdi-pencil
            </v-icon>
            Edit
          </v-btn>
          <v-btn color="red"
                 @click="deleteQuestion(question.slug)"
          >
            <v-icon left>
              mdi-delete
            </v-icon>
            Delete
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-container>
  </div>

</template>

<script>
import axios from "axios";
import Markdown from "vue3-markdown-it";

export default {
  name: "SingleQuestion",
  components: {
    Markdown
  },
  data() {
    return {
      question: {},
      isActionable: false
    }
  },
  mounted() {
    this.getQuestion()
  },
  methods: {
    async getQuestion() {
      try {
        const slug = this.$route.params.slug
        const response = await axios.get(`/api/questions/${slug}`)
        this.question = response.data.data
        const auth = User.isAuthUser(this.question.user_id)
        if (auth) {
          this.isActionable = true;
        }
      } catch (e) {
        console.log(e.response)
      }
    },
    async deleteQuestion(slug) {
      try {
        const response = await axios.delete(`/api/questions/${slug}`)
        if (response.status === 204) {
          await this.$router.push({name: 'forum'})
        }
      } catch (e) {
        console.log(e.response)
      }
    }
  },
}
</script>

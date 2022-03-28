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
          <v-btn color="purple">{{ replies.length }} replies</v-btn>
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


      <!--   replies-->
      <v-card v-for="reply in replies" :key="reply.id" class="mb-3"
              outlined
      >
        <v-card-header>
          <v-card-subtitle class="mt-3">
            {{ reply.name }}
            |
            {{ reply.created_at }}
          </v-card-subtitle>
        </v-card-header>
        <v-card-text>
          {{ reply.reply }}
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn icon color="red">
            <v-icon>mdi-heart</v-icon>
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
      isActionable: false,
      replies: []
    }
  },
  async mounted() {
    await this.getQuestion()
    await this.getAllReplies()
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
    },
    async getAllReplies() {
      try {
        const slug = this.question.slug ?? null;
        console.log(slug)
        const res = await axios.get(`/api/questions/${slug}/replies`)
        if (res.status === 200) {
          this.replies = res.data.data
        }
      } catch (e) {
        console.log(e)
      }
    }
  },
}
</script>

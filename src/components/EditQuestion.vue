<template>
  <v-container>
    <v-form
        @submit.prevent="editQuestion"
    >
      <v-text-field
          label="Title"
          type="text"
          v-model="form.title"
          :error-messages="errors?.title"
      ></v-text-field>


      <v-card class="v-container">
        <div class="text-end mb-3">
          <v-btn class="mx-3" color="success" @click="toggleEditMode('edit')">
            <v-icon left>
              mdi-pencil
            </v-icon>
            Edit
          </v-btn>
          <v-btn class="mx-3" color="primary" @click="toggleEditMode('preview')">
            <v-icon left>mdi-eye</v-icon>
            Preview
          </v-btn>
        </div>
        <v-textarea
            label="Question"
            placeholder="You can write in markdown"
            v-model="form.body"
            v-if="tab === 'edit'"
            :error-messages="errors?.body"
        ></v-textarea>
        <markdown
            :source="form.body"
            :linkify="true"
            :html="true"
            class="rounded"
            v-else-if="tab === 'preview'"
        />
      </v-card>
      <v-btn type="submit" class="mt-3" color="success">Post Question</v-btn>
    </v-form>


  </v-container>
</template>

<script>
import axios from "axios";
import Markdown from 'vue3-markdown-it'

export default {
  name: "EditQuestion",
  components: {
    Markdown
  },

  data() {
    return {
      errors: null,
      form: {
        title: null,
        category_id: null,
        body: null
      },
      tab: 'edit',
      showMenu: false
    }
  },
  created() {
    this.getSingleQuestion()
  },
  methods: {
    toggleEditMode(tab) {
      this.tab = tab
    },
    toggleShowMenu() {
      this.showMenu = !this.showMenu
    },
    onMenuSelection(id) {
      this.form.category_id = id;
      this.toggleShowMenu()
    },
    async getSingleQuestion() {
      try {
        const slug = this.$route.params.slug
        const response = await axios.get(`/api/questions/${slug}`)
        this.form = response.data.data
      } catch (e) {
        this.errors = e.response.data.errors;
      }
    },
    async editQuestion() {
      try {
        const slug = this.$route.params.slug
        const response = await axios.put(`/api/questions/${slug}`, this.form)
        if (response.status === 202) {
          await this.$router.back()
        }
      } catch (e) {
        this.errors = e.response.data.errors
      }
    }
  }
}
</script>
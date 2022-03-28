<template>
  <v-container>
    <v-form
        @submit.prevent="replyQuestion"
    >
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
            label="Reply"
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
      <v-btn type="submit" class="mt-3" color="success">
        Reply
      </v-btn>
    </v-form>


  </v-container>
</template>

<script>
import Markdown from 'vue3-markdown-it'
import axios from "axios";

export default {
  name: "ReplyQuestion",
  components: {
    Markdown
  },
  props: ['slug'],
  data() {
    return {
      errors: null,
      form: {
        body: null,
      },
      tab: 'edit',
    }
  },
  emits:['reply'],
  methods: {
    toggleEditMode(tab) {
      this.tab = tab
    },
    async replyQuestion() {
      try {
        const res = await axios.post(`/api/questions/${this.slug}/replies`, this.form)
        if (res.status === 201) {
          this.$emit('reply')
        }
      } catch (error) {
        console.log(error.response)
      }
    }
  }
}
</script>
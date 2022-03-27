<template>
  <v-container>
    <v-form
        @submit.prevent="askQuestion"
    >
      <v-text-field
          label="Title"
          type="text"
          v-model="form.title"
          :error-messages="errors?.title"
      ></v-text-field>

      <!--    category-->
      <div class="mb-3">
        <v-btn
            color="primary"
            block
            class="mb-2"
            @click="toggleShowMenu"
        >
          Choose Category
        </v-btn>
        <div class="text-red" v-if="errors?.category_id">{{ errors?.category_id[0] }}</div>
        <v-card
            class="mx-auto"
            v-if="showMenu"
        >
          <v-list density="compact">
            <v-list-item
                v-for="(category, i) in categories"
                :key="i"
                :value="category.name"
                active-color="primary"
                @click="onMenuSelection(category.id)"
            >
              <v-list-item-title v-text="category.name"></v-list-item-title>
            </v-list-item>
          </v-list>
        </v-card>
      </div>

      <!--    end category-->

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
  name: "AskQuestion",
  components: {
    Markdown
  },
  data() {
    return {
      errors: null,
      categories: [],
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
    this.getAllCategories()
  },
  methods: {
    async getAllCategories() {
      try {
        const response = await axios.get('/api/categories')
        this.categories = response.data.data
      } catch (error) {
        this.errors = error.response.data.errors
      }
    },
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
    async askQuestion() {
      try {
        const response = await axios.post('/api/questions', this.form)
        if (response.status === 201) {
          await this.$router.push({name: 'forum'})
        }
      } catch (e) {
        this.errors = e.response.data.errors
      }
    }
  }
}
</script>
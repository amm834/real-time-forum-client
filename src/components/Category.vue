<template>
  <v-container>

    <v-form
    >
      <v-text-field
          type="text"
          label="Category Name"
          v-model="form.name"
          :error-messages="errors?.name"
      ></v-text-field>
      <div class="d-flex justify-end">
        <v-btn
            color="primary"
            class="mt-3"
            variant="contained"
            @click="createCategory"
            v-if="!isEditing"
        >
          <v-icon left>
            mdi-content-save
          </v-icon>
          Save
        </v-btn>
        <v-btn
            color="primary"
            class="mt-3"
            variant="contained"
            @click="updateCategory"
            v-else
        >
          <v-icon left>
            mdi-content-save
          </v-icon>
          Update
        </v-btn>
      </div>

    </v-form>

    <!--    cats-->
    <v-card
        class="mx-auto mt-4 d-block"
    >
      <v-list density="compact">
        <v-list-subheader>Categories</v-list-subheader>
        <v-list-item
            v-for="(category ,i) in categories"
            :key="i"
            :value="category.name"
        >

          <v-list-item-title>
          <span class="mx-3">
              <v-btn flat color="info" variant="text"
                     @click="editCategory(category)"
              >
                <v-icon left>mdi-pencil</v-icon>
                Edit</v-btn>
            <v-btn flat color="error" variant="text" @click="deleteCategory(category.slug)">
                <v-icon left>mdi-delete</v-icon>
                Delete</v-btn>
          </span>
            {{ category.name }}
          </v-list-item-title>

        </v-list-item>
      </v-list>
    </v-card>

  </v-container>
</template>

<script>
import axios from "axios";
import {mapGetters} from "vuex";

export default {
  name: "Category",
  data() {
    return {
      form: {
        name
      },
      errors: null,
      isEditing: false,
      slug: null
    }
  },
  mounted() {
    this.$store.dispatch('getAllCategories')
  },
  methods: {
    async createCategory() {
      try {
        const response = await axios.post('/api/categories', this.form);
        if (response.status === 201) {
          await this.$router.back();
        }
      } catch (e) {
        this.errors = e.response.data.errors
      }
    },
    async deleteCategory(slug) {
      try {
        const response = await axios.delete(`/api/categories/${slug}`);
        if (response.status === 204) {
          this.$store.dispatch('getAllCategories')
        }
      } catch (e) {

      }
    },

    async editCategory(cat) {
      this.form = cat;
      this.isEditing = true
      this.slug = cat.slug
    },
    async updateCategory() {
      try {
        const res = await axios.put(`/api/categories/${this.slug}`, this.form)
        if (res.status === 200) {
          this.$store.dispatch('getAllCategories')
          this.form.name = ''
          this.isEditing = false
        }
      } catch (error) {
        console.log(error.response)
      }
    }
  }, computed: {
    ...mapGetters(['categories'])
  }
}
</script>

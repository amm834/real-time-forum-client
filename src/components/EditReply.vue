<template>
  <div>
    <v-text-field :source="source"></v-text-field>
    <v-btn color="success">Edit</v-btn>
    <v-btn color="black">Cancel</v-btn>
  </div>
</template>

<script>
export default {
  name: "EditReply",
  props: ['source'],
  emits: ['cancel-edit'],
  methods: {
    updateQuestion() {

    },
    cancelEdit() {
      this.$emit('cancel-edit')
    }
  }
}
</script>

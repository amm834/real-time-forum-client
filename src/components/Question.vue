<template>
  <div>
    <v-card elevation="2" v-for="question in questions" :key="question.slug" class="mb-3">
      <v-card-header>
        <v-card-title>
          <v-btn link :to="{
            name:'questions',
            params:{
              slug:question.slug
            }
          }" :flat="true">
            {{ question.title }}
          </v-btn>
        </v-card-title>
      </v-card-header>
      <v-card-subtitle>
        <v-icon class="mx-2">mdi-clock</v-icon>
        {{ question.created_at }} | By {{question.name}}
      </v-card-subtitle>
      <v-card-text> {{ question.body }}</v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "Question",
  props: ['questions']
}
</script>

<style scoped>

</style>
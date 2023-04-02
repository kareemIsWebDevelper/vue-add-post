<template>
  <div class="card">
    <div class="card-body">
      <h4 class="card-title">{{ post.title }}</h4>
      <p>{{ post.content }}</p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  post: Object
})
</script>

<style scoped>
.card {
  max-width: 370px;
  height: min-content;
  margin:0 auto 20px auto;
  margin-top: 30px;
}
</style>
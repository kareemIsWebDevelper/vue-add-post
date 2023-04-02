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
  width: 370px;
  height: 250px;
  margin:0 auto 20px auto;
  margin-top: 30px;
}
</style>
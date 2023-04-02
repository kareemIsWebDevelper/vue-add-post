<template>
  <div v-for="post in PostStore.myPosts" :key="post.title">
    <PostCard :post="post"/>
  </div>

  <div>
    <div class="p-3 d-flex justify-content-around bg-white">
      <div style="display:flex; gap: 20px;">
      <RouterLink to="/">Home</RouterLink>/
      <RouterLink to="/about">New Post ?</RouterLink>
    </div>
    <p>
      (c) Copyrights 2023 - kareem khaled
    </p>
  </div>
</div>
</template>

<script setup>
import PostCard from "../components/PostCard.vue";
import { usePostStore } from '../stores/counter';
const PostStore = usePostStore();
</script>
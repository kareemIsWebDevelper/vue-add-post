<template>
  <div v-for="post in PostStore.myPosts" :key="post.title">
    <PostCard :post="post"/>
  </div>
  <div style="margin-top: 200px;">
    <div class="p-3 d-flex justify-content-around bg-white" id="footer">
      <div style="display:flex; gap: 20px;">
      <div class="router-link">
        <RouterLink to="/">Home</RouterLink>/
        <RouterLink to="/about">New Post ?</RouterLink>
      </div>
    </div>
    <p>
      (c) Copyrights 2023 - <br> kareem khaled
    </p>
  </div>
  </div>
</template>

<script setup>
import PostCard from "../components/PostCard.vue";
import { usePostStore } from '../stores/counter';
const PostStore = usePostStore();
</script>
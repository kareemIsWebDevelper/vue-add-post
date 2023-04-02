<template>
  <div class="card">
    <div class="card-body">
      <legend><h1 class="text-center bg-light">Create Post</h1></legend>
      <label>Title:</label>
      <input type="text" v-model="title">
      <label>Content:</label>
      <textarea v-model="content" ></textarea>
    </div>
    <button @click="createPost" >Publish</button>
  </div>

  <div style="margin-top: 60px;">
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
import { usePostStore } from '../stores/counter';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
const PostStore = usePostStore();
const title = ref("");
const content = ref("");
const router = useRouter();
const createPost = () => {
PostStore.myPosts.push({
  title: title.value,
  content: content.value
});
router.push("/");
};
</script> 
<style scoped>
  .card-body {
    display: grid;
  }
  .card {
    width: 350px;
    margin: 100px auto auto auto;
  }
  textarea {
    height: 150px;
  }

  button {
    background-color: darkblue;
    color: white;
    padding: 10px;
    border-radius: 10px;
  }
</style>
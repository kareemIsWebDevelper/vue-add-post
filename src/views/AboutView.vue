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

  <div>
    <Footer />
  </div>
</template>

<script setup>
import { usePostStore } from '../stores/counter';
import Footer from '../components/Footer.vue';
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
router.push("/home");
};
</script> 
<style scoped>
  .card-body {
    display: grid;
  }
  .card {
    width: 350px;
    margin: 50px auto auto auto;
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
  button:hover {
   opacity: .5;
  }
</style>
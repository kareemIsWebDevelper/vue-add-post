<template>
  <header>
    <nav class="navbar navbar-expand-sm nav-bar-sticky bg-light">
      <div class="container-fluid">
        <div style="margin-left: 20px;">
          <RouterLink class="link rounded" to="/home">B</RouterLink>
        </div>
        <div class="nav nav-tabs" style="margin-right: 20px;">
          <RouterLink class="nav-link active rounded" to="/">New Post</RouterLink>
        </div>
      </div>
    </nav>
  </header>
  
  <RouterView />

  
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Footer from './components/Footer.vue';

</script>

<style scoped>

</style>

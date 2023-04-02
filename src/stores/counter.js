import { ref, computed, onMounted, reactive, watch } from 'vue'
import { useLocalStorage } from '@vueuse/core';
import { defineStore } from 'pinia';
import db from "../firebase/init";
import { query, collection, getDocs } from "firebase/firestore";

export const usePostStore = defineStore('counter', () => {
const myPosts = reactive(useLocalStorage("vueUsemyPosts", []));


// const ReversedPosts = computed(()=> [...myPosts].reverse());

return { myPosts };

// async function getPosts() {
//   const q = query(collection(db, "posts"));
//   const querySnap = await getDocs(q);
//   querySnap.forEach((doc) => {
//     posts.push(doc.data());
//   });
// };

// onMounted(() => {
//   getPosts();
// });

});

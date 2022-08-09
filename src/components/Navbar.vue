<script setup>
import SearchBarVue from './SearchBar.vue';
</script>

<template>
  <div class="flex items-center gap-2 p-2 bg-white/80
            backdrop-blur-md shadow-md w-full
            fixed top-0 left-0 right-0 z-10">
   <router-link to="/" class="h-full hover:bg-gray-400 uppercase font-semibold rounded-lg p-4"><button > <font-awesome-icon icon="fa-solid fa-home" /> Home</button></router-link> 
    <i class="fa-solid fa-house"></i>
    <SearchBarVue></SearchBarVue>
  </div>
    
</template>

<style>

</style>
<script setup>
import { reactive, ref } from "@vue/reactivity";
import { watch } from "@vue/runtime-core";
import User from "../utils/User";
import { debounce } from 'lodash'
const searchQuery = ref()
const searchResponse = reactive({})

watch(searchQuery, debounce(async (currentQuery) => {
    if (currentQuery.length < 3) {
        searchResponse.value = {}
        return
    }
    searchResponse.value = await User.searchUser(currentQuery)
}, 500))
</script>


<template>
    <div>
    
        <form class="relative mx-auto">
    
            <font-awesome-icon class="absolute inset-y-0 my-auto mx-auto ml-4 transition-all duration-500" icon="fa-solid fa-magnifying-glass" />
    
            <input v-model="searchQuery" type="search" class="peer cursor-pointer relative z-10 h-12 w-12 rounded-full border bg-transparent pl-12 outline-none transition-all duration-500 focus:cursor-text focus:border-blue-300 focus:w-full" />
    
        </form>

        <div v-if="searchResponse.value?.total_count" class="bg-white/95
            backdrop-blur-lg shadow-md absolute mt-5 w-max p-4 rounded-lg">
        <div>{{searchResponse.value?.total_count}} results</div>
        <div v-for="(user, index) in searchResponse.value.items" :key="index">
          <a class="flex items-center bg-slate-200 p-2 hover:bg-slate-300 hover:cursor-pointer rounded-lg gap-2 my-4" :href="`/user/${user.login}`"> <img class="w-12 h-12 rounded-full" :src="user.avatar_url">
           <h2 class="font-semibold">{{user.login}}</h2>
          </a>
        </div>
        
        </div>
    
    </div>
</template>


<style>

</style>
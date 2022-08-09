<script setup>
import { ref, onMounted, reactive } from 'vue'
import user from "../utils/User"

const users = reactive({})


async function getUsers() {
    users.value = await user.index()
}

onMounted(() => {
    getUsers()
})
</script>

<template>
    <main class="grid grid-cols-3 gap-4 place-items-center m-4 mt-24">
      <div v-for="user in users.value" v-bind:key="user.id" class="bg-gray-200 w-full h-full p-4 rounded-lg hover:bg-gray-400 hover:cursor-pointer">
      <router-link :to="`/user/${user.login}`">
           <div class="flex items-center gap-2">
            <img class="w-12 h-12 rounded-full" :src="user.avatar_url" />
            <h2 class="font-bold uppercase">{{user.login}}</h2>
           </div>
      </router-link>
        </div>
    </main>
</template>

<script setup>
import { reactive, ref } from "@vue/reactivity";
import { useRoute } from 'vue-router'
import { onMounted } from "@vue/runtime-core";
import User from "../utils/User";


const user = ref()
const route = useRoute()


async function getUser(username) {
    let response = await User.show(username)
    let userRepos = await User.fetchRepos(username)
    if (response.message) return
    user.value = response
    user.value.repos = userRepos
    console.log(user.value)
}

onMounted(() => {
    getUser(route.params.username)
})
</script>





<template>
    <div  v-if="user" class="bg-gradient-to-tr from-orange-500 to-cyan-400 h-96">
    </div>
    <div v-if="user" class="bg-gray-200 m-4 p-4 rounded-lg">
        <div class="lg:flex lg:items-start lg:flex-row justify-between"><img :src="user.avatar_url" :alt="user.name" class="lg:absolute inset-x-0 shadow-xl bg-white w-60 h-60 mx-auto -mt-40 rounded-full" />
            <div class="my-4 lg:my-0">
                <h1 class="text-xl font-semibold">
                    {{user.name}}
                </h1>
                <h2 class="text-md">
                    @{{user.login}}
                </h2>
            </div>
            <div class="flex justify-center gap-4 text-center">
                <div>
                    Following
                    <div class="font-semibold">{{user.following}}</div>
                </div>
                <div>
                    Followers
                    <div class="font-semibold"> {{user.followers}}</div>
                </div>
                <div>
                    Public Repos.
                    <div class="font-semibold">{{user.public_repos}}</div>
                </div>
            </div>
        </div>
        <div class="mt-40 flex flex-col gap-2">
            <div v-if="user.company" class="flex gap-2 bg-gray-300 p-4 rounded-lg  items-center">
                <font-awesome-icon class="text-xl" icon="fa-solid fa-briefcase" /> {{user.company}}
            </div>
            <div v-if="user.location" class="flex gap-2 bg-gray-300 p-4 rounded-lg items-center">
                <font-awesome-icon class="text-xl" icon="fa-solid fa-map-pin" /> {{user.location}}
            </div>
            <div v-if="user.bio" class="flex gap-2 bg-gray-300 p-4 rounded-lg items-center">
                <font-awesome-icon icon="fa-solid fa-quote-right" /> {{user.bio}}
            </div>
            <div>
                <h1 class="text-xl font-bold mt-4">Repositories</h1>
                <div v-for="repo in user.repos" :key="repo.id">
                    <div class="bg-gray-300 p-4 my-2 grid gap-2 rounded-lg">
                        <div class="flex justify-between">
                            <h1 class="font-semibold">{{repo.name}}</h1>
                            <div class="flex gap-2 text-center">
                                <div>{{repo.forks}}
                                    <font-awesome-icon icon="fa-solid fa-code-fork" class="mx-1" />
                                </div>
                                <div class="hover:bg-gray-400 hover:cursor-pointer rounded-lg ">
                                   <a :href="repo.clone_url"> <font-awesome-icon icon="fa-solid fa-clone" class="p-1" /> </a>
                                </div>
                            </div>
                        </div>
                        <div class="flex gap-2">
                            <div v-if="repo.language" class=" bg-blue-300 text-xs rounded-xl uppercase font-semibold w-max p-2">
                                {{repo.language}}
                            </div>
                             <div  v-if="repo.visibility" class=" bg-blue-300 text-xs rounded-xl uppercase font-semibold w-max p-2">
                                {{repo.visibility}}
                            </div>
                            <div v-if="repo.watchers" class="flex gap-1 items-center bg-blue-300 text-xs rounded-xl uppercase font-semibold w-max p-2">
                               <font-awesome-icon icon="fa-solid fa-eye"/> {{repo.watchers}}
                            </div>
                            <div v-if="repo.open_issues" class="flex gap-1 items-center bg-blue-300 text-xs rounded-xl uppercase font-semibold w-max p-2">
                               <font-awesome-icon icon="fa-solid fa-bug"/> {{repo.open_issues}}
                            </div>
                        </div>
                    </div>
                </div>
                <div v-if="!user.repos.length">
                    No Repos for this user
                </div>
            </div>
        </div>
    </div>
</template>

<style>

</style>

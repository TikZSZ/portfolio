<script setup>
import { useStore } from "@/store";
import { storeToRefs } from "pinia";
import { useRoute, useRouter } from "vue-router";

const route = useRoute()
const router = useRouter()
const store = useStore()

const { isMobile, theme,isLoggedIn } = storeToRefs(store);

const themes = [
  "🌝  light",
  "🌚  dark",
  "🧁  cupcake",
  "🐝  bumblebee",
  "✳️  Emerald",
  "🏢  Corporate",
  "🌃  synthwave",
  "👴  retro",
  "🤖  cyberpunk",
  "🌸  valentine",
  "🎃  halloween",
  "🌷  garden",
  "🌲  forest",
  "🐟  aqua",
  "👓  lofi",
  "🖍  pastel",
  "🧚‍♀️  fantasy",
  "📝  Wireframe",
  "🏴  black",
  "💎  luxury",
  "🧛‍♂️  dracula",
];

const logOut =async ()=>{
  await store.logOut(route,router)
  console.log(route,router);
}

</script>

<template>
  <div
    class="navbar mb-2 shadow-lg bg-neutral text-neutral-content rounded-box"
  >
    <div class="flex-1 px-2 mx-2">
      <router-link :to="{name:'Home'}">
        <span class="text-lg font-bold">
        Aditya
        </span>
      </router-link>   
    </div>
    <!-- NavBar elements -->
    <div v-if="!isMobile">
      <div class="flex-none px-2 mx-2 sm:flex">
        <div class="flex items-stretch">
          <router-link :to="{name:'Home'}" class="btn btn-ghost btn-sm rounded-btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              class="inline-block w-5 mr-2 stroke-current"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              ></path>
            </svg>
            Home
          </router-link>
          <router-link :to="{path:'/blog/1'}" class="btn btn-ghost btn-sm rounded-btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              class="inline-block w-5 mr-2 stroke-current"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
              ></path>
            </svg>
            Blog
          </router-link>
          <router-link v-if="isLoggedIn" :to="{name:'Dashboard'}" class="btn btn-ghost btn-sm rounded-btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              class="inline-block w-5 mr-2 stroke-current"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
              ></path>
            </svg>
            Dashboard
          </router-link>
          <router-link v-if="!isLoggedIn" :to="{name:'Login'}" class="btn btn-ghost btn-sm rounded-btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              class="inline-block w-5 mr-2 stroke-current"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
              ></path>
            </svg>
            Login
          </router-link>
          <router-link v-if="!isLoggedIn" :to="{name:'SignUp'}" class="btn btn-ghost btn-sm rounded-btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              class="inline-block w-5 mr-2 stroke-current"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
              ></path>
            </svg>
            SignUp
          </router-link>
          <button @click="logOut" v-if="isLoggedIn" class="btn btn-ghost btn-sm rounded-btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              class="inline-block w-5 mr-2 stroke-current"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
              ></path>
            </svg>
            Logout
          </button>
          <!-- Theme Chooser -->
          <div class="dropdown dropdown-end">
            <div tabindex="0" class=" -mt-2 normal-case btn-ghost btn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                class="inline-block w-6 h-6 stroke-current md:mr-2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                ></path>
              </svg>
              <span class="hidden md:inline">
                Change Theme
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1792 1792"
                class="inline-block w-4 h-4 ml-1 fill-current"
              >
                <path
                  d="M1395 736q0 13-10 23l-466 466q-10 10-23 10t-23-10l-466-466q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l393 393 393-393q10-10 23-10t23 10l50 50q10 10 10 23z"
                ></path>
              </svg>
            </div>
            <div
              class="mt-16 overflow-y-auto shadow-2xl top-px dropdown-content h-96 w-52 rounded-b-box bg-base-200 text-base-content"
            >
              <ul class="p-4 menu compact">
                <li v-for="th in themes" :key="th">
                  <a
                    tabindex="0"
                    @click="theme = th.substring(4)"
                    :class="{
                      'bg-primary': theme === th.substring(4) ? true : false,
                    }"
                    >{{ th }}</a
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>



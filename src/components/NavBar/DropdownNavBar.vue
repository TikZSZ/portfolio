<template>
  <div class="bg-base-200 py-2 rounded-box my-1 fixed bottom-0 left-0">
    <!-- NavBar DropDown -->
    <div class="dropdown ml-10 dropdown-top text-white">
      <div tabindex="0" class="normal-case">
        <button class="btn btn-square btn-primary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            class="inline-block w-6 h-6 stroke-current"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>
      <div
        class="mt-16 overflow-y-auto shadow-2xl top-px dropdown-content w-52 bg-base-200 text-base-content rounded-box"
      >
        <ul class="p-4  compact">
          <li>
            <router-link
              to="/"
              tabindex="0"
              class="btn btn-primary bg-sm btn-sm "
            >
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
          </li>
          <li>
            <router-link
              to="/blog"
              tabindex="0"
              class="btn btn-primary btn-sm "
            >
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
          </li>
          <li v-if="isLoggedIn">
            <router-link
              to="/dashboard"
              tabindex="0"
              class="btn btn-primary btn-sm "
            >
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
          </li>
          <li v-if="!isLoggedIn">
            <router-link
              to="/login"
              tabindex="0"
              class="btn btn-primary btn-sm "
            >
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
          </li>
          <li v-if="!isLoggedIn">
            <router-link
              to="/signup"
              tabindex="0"
              class="btn btn-primary btn-sm "
            >
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
          </li>
          <li v-if="isLoggedIn">
            <button
              tabindex="0"
              class="btn btn-primary btn-sm "
              @click="logOut"
            >
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
          </li>
        </ul>
      </div>
    </div>
    <!-- Change Color DropDowm -->
    <div class="dropdown dropdown-top ml-16">
      <div tabindex="0" class="ml-3  mx-10 normal-case btn-ghost btn">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          class="inline-block w-6 text-primary h-6 stroke-current md:mr-2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
          ></path>
        </svg>
        <span class="md:inline text-primary">
          Change Theme
        </span>
      </div>
      <div
        class="mt-16 overflow-y-auto shadow-2xl top-px dropdown-content w-52 rounded-b-box bg-base-200 text-base-content"
      >
        <ul class="p-4 menu compact">
          <li v-for="th in themes" :key="th">
            <a
              tabindex="0"
              :class="{
                'bg-primary': store.theme === th.substring(4) ? true : false,
              }"
              @click="store.theme = th.substring(4)"
              >{{ th }}</a
            >
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { useStore } from "@/store";
import { storeToRefs } from "pinia";
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      themes: [
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
      ],
      themee: "",
    };
  },
  setup() {
    const { isLoggedIn } = storeToRefs(useStore());
    const store = useStore();
    return {
      store: store,
      isLoggedIn: isLoggedIn,
    };
  },
  methods: {
    logOut(){
      this.store.logOut(this.$route,this.$router)
    }
  }
});


</script>

<template>
  <div class="bg-[#fafaf9] min-h-screen text-zinc-800 flex flex-col font-sans selection:bg-zinc-200 selection:text-zinc-900">
    <Navbar />
    <main class="flex-grow w-full max-w-4xl mx-auto px-4 sm:px-6 py-6 md:py-10">
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Navbar from "./components/NavBar/Navbar.vue";
import Footer from "./components/Footer.vue";
import { useStore } from "./store";

export default defineComponent({
  name: "App",
  components: {
    Navbar,
    Footer,
  },
  setup() {
    const store = useStore();
    return { store };
  },
  mounted() {
    if (typeof window !== "undefined") {
      window.addEventListener("resize", () => {
        this.setMobile(window.innerWidth);
      });
      this.setMobile(window.innerWidth);
    }
  },
  methods: {
    setMobile(size: number) {
      if (size > 850) {
        this.store.isMobile = false;
      } else {
        this.store.isMobile = true;
      }
    },
  },
});
</script>

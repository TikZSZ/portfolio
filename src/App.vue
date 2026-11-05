<template>
  <div class="bg-[#0b0d12] min-h-screen text-zinc-200 flex flex-col font-sans selection:bg-zinc-800 selection:text-white">
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
  async created() {
    window.addEventListener("resize", () => {
      this.setMobile(window.innerWidth);
    });
    this.setMobile(window.innerWidth);
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

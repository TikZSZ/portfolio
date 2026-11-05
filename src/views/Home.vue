<template>
  <div class="space-y-4">
    <HomeHero />
    <FlagshipEngines />
    <Contributions />
    <Portfolio />
    <Experience />
    <TechStack />
    <AcademyFellowship />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HomeHero from "@/components/Home/HomeHero.vue";
import FlagshipEngines from "@/components/Home/FlagshipEngines.vue";
import Contributions from "@/components/Home/Contributions.vue";
import Portfolio from "@/components/Home/Portfolio.vue";
import Experience from "@/components/Home/Experience.vue";
import TechStack from "@/components/Home/TechStack.vue";
import AcademyFellowship from "@/components/Home/AcademyFellowship.vue";

export default defineComponent({
  name: "Home",
  components: {
    HomeHero,
    FlagshipEngines,
    Contributions,
    Portfolio,
    Experience,
    TechStack,
    AcademyFellowship,
  },
});
</script>

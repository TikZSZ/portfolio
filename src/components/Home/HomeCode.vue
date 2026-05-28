<template>
  <transition name="fade" :appear="true">
    <div class="mockup-code mt-36 bg-neutral text-neutral-content shadow-2xl hover:shadow-primary/20 transition-all duration-500 border border-neutral-focus mx-auto w-11/12 md:w-3/4 lg:w-1/2">
      <pre data-prefix="$" key="code1" class="text-primary-content"><code>bun init TikZSZ</code></pre>
      <pre v-if="show1" data-prefix=">" class="text-warning" key="code2"><code>installing...</code></pre>
      <pre v-if="show2" data-prefix=">" class="text-success" key="code3"><code>Done!</code></pre>
    </div>
  </transition>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "HomeCode",
  props: {
    show1: Boolean,
    show2: Boolean,
  },
});
</script>

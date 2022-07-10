<template>
  <transition name="fade" :appear="true">
    <div class="mockup-code mt-36 bg-primary mx-64">
      <pre data-prefix="$" key="code1">
    <code style="margin-left:-30px;"  >yarn init TikZSZ</code>
  </pre>
      <pre v-if="show1" data-prefix=">" class="text-warning" key="code2">
    <code style="margin-left:-35px;" >installing...</code>
  </pre>
      <pre v-if="show2" data-prefix=">" class="text-success" key="code3">
    <code style="margin-left:-30px;" >Done!</code>
  </pre>
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

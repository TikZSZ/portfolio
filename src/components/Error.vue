<template>
  <div class="h-16 rounded-t-box p-5 " :class="'h-16 rounded-t-box p-5 '+variant+ ' '+style" v-if="show">
      <p class=" text-base-content">{{textMsg}}</p>
  </div>
</template>

<script setup lang="ts">

interface Props {
  variant:string,
  show:boolean,
  textMsg:string,
  style?:string
}
  const props = defineProps<Props>()

</script>
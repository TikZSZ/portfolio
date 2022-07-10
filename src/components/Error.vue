<template>
  <div class="h-16 rounded-t-box p-5 " :class="'h-16 rounded-t-box p-5 '+variant+ ' '+style" v-if="show">
      <p class=" text-base-content">{{textMsg}}</p>
  </div>
</template>

<script setup>

  const props = defineProps({
    variant:String,
    show:String,
    textMsg:String,
    style:{type:String,default:''}
  })

</script>
<template>
  <div class="mt-8 py-3 bg-base-100  px-5 sm:px-10 text-base-content rounded-xl" @click="click">
    <div class="col-start-1 col-span-2 md:col-start-1 md:col-span-8 md:mr-5">
      <h5 class="mb-2 text-2xl">{{post.name}}</h5>
      <p class="text-sm  md:text-sm lg:text-lg">{{post.description}}</p>
      <slot ></slot>
    </div>
  </div>
</template>

<script lang="ts">import { Post } from "@/interface/Post";
import { defineComponent, PropType } from "vue";
//<button class="btn btn-primary mt-4 md:my-auto  col-start-1  md:col-start-9 md:col-span-1" @click="click">{{type}}</button>
export default defineComponent({
  props:{
    post:{
      type:Object as PropType<Post>,
      required:true
    },
    postIndex:{
      type:Number,
      required:true
    },
    postClick:Function,
    type:{
      type:String,
      default:'Edit'
    }
  },
  emits:{
    selectPost:(index:number)=>true
  },
  methods:{
    click(e:any){
      this.postClick!()
    }
  }
})
</script>
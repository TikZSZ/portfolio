<template>
  <PostVue v-for="(post, index) in posts"
    :post="post"
    :postIndex="index"
    :type="'Read'"
    :postClick="()=>postClick(index)"
  >
  <div class="mt-3 ml-1 mb-3">
      <div class="avatar float-left mt-2">
        <div class="rounded-full">
          <div v-html="post.user.avatar" class="text-xl "></div>
        </div>
      </div> 
      <div class="ml-12 mt-1  ">
        <p class="text-base-content -my-1 ml-2 mb-1 text-xl">{{post.user.name}}</p>
        <p class="ml-2">{{new Date(post.dateCreated).toUTCString()}}</p>  
      </div>
  </div>
  </PostVue>
  <button class="btn btn-primary mt-5 " @click="fetchMore" v-if="!allFetched" >Show More</button>
  <div v-else class="h-10 rounded-xl m-auto mt-8 text-primary-content  text-center bg-primary">
    <p class="pt-2 font-semibold ">
      No more posts left to show
    </p>
  </div>
</template>


<script lang="ts">
import { defineComponent  } from "vue";
import PostVue from "../Post.vue";
import {PostWithAuthor} from "@/interface/Post"
import { mapStores } from "pinia";
import { useStore } from "@/store";
import { postApi } from "@/api/postApi";

export default  defineComponent({
  props:{
    isOwner:{
      type:Boolean,
    }
  },
  data(){
    return{
      posts:[] as PostWithAuthor[],
      fetched:0,
      allFetched:false
    }
  },
  components:{
    PostVue
  },
  async mounted(){
    console.log("hey");
    
    await this.fetchPosts()
  },
  async beforeRouteUpdate(){
    await this.fetchPosts()
  },
  computed:{
    ...mapStores(useStore)
  },
  methods:{
    postClick(index:number){
      const post = this.posts[index]
      this.mainStore.temporaryPost = post
      this.$router.push(`/post/${post.contentId}`)
    },
    async fetchPosts() {
      const { data } = await postApi.get<PostWithAuthor[]>(
        `/posts?isOwner=${this.isOwner}`
      );
      this.posts = data;
      this.fetched = data.length
    },
    async fetchMore(){
      if(this.allFetched){
        return
      }
      const { data } = await postApi.get<PostWithAuthor[]>(
        `/posts?isOwner=${this.isOwner}&skip=${this.fetched}`
      );
      if(data.length !== 0){
        this.fetched = this.fetched + data.length
        this.posts.push(...data)
        return
      }
      this.allFetched = true
    }
  }
})

</script>
<template>
  <div class="mx-4 my-2 md:mx-36  xl:mx-96 lg:my-10" v-if="post">
    <h1 class="ml-2 text-6xl mb-5 md:text-8xl text-base-content">{{post.name}}</h1>
    <p class="ml-2 mt-5 md:mt-10  font-thin text-base-content text-sm sm:text-lg italic ">{{post.description}}</p>
    <div class="mt-5 ml-1 ">
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
    <div class="text-base-content  font-serif leading-loose dp " v-html="content" >
    </div>
  </div>
</template>


<script lang="ts">
import { postApi } from "@/api/postApi";
import { useStore } from "@/store";
import { mapStores } from "pinia";
import { defineComponent } from "vue";
import { PostWithAuthor } from "@/interface/Post";

interface ContentWithPost {
  content:string,
  post:PostWithAuthor,
}


export default defineComponent({
  props:{
    contentId:String
  },
  data(){
    return{
      content:'',
      avatarr:'',
      post:null as PostWithAuthor|null
    }
  },
  async created(){
    
  },
  async beforeRouteEnter(to,from,next){
    const mainStore = useStore();
    let post:PostWithAuthor
    let content:string
    // console.log(this.contentId,this.mainStore.temporaryPost?.contentId);
    if(mainStore.temporaryPost !== null){
      const {data} = await postApi.get<{id:number,content:string}>(`/content/${mainStore.temporaryPost.contentId}`)
      content = data.content
      post = mainStore.temporaryPost
    }else{
      const {data} = await postApi.get<ContentWithPost>(`/contentWithPost/${to.params.contentId}`)
      content = data.content
      post = data.post
    }
    
    next((vm:any) => {
      vm.$data.content = content;
      vm.$data.post = post;
    })
  },
  computed:{
    ...mapStores(useStore)
  },
  beforeUnmount(){
    this.mainStore.temporaryPost = null
  }
})
</script>

<style>

.dp p{
  margin: 5px;
  line-height: 32px;
  margin-bottom:50px;
  margin-top:2em;
  font-weight: 400;
  font-size:1.413rem;
}

@media only screen and (max-width: 600px) {
  .dp p{
    font-size: 1rem;
    line-height: 26px;
    margin-bottom:33px;
  }
}

.dp code {
  margin: 10px;
  background-color: fff;
  color: black;
}

.dp h1,h2,h3,h4{
  margin: 15px 5px 20px 5px;
}

</style>
<template>
  <div class=" px-5 md:px-10 bg-base-300 pt-3 text-primary">
    <TabMenuVue
      class="my-5"
      :currentTab="currentTab"
      b1="Edit Post"
      b2="Create Post"
      @changeTab="changeTab"
    />
    <div >
      <div v-if="currentTab===1">
        <PostVue
            v-for="(post, index) in posts"
            :post="post"
            :postIndex="index"
            :postClick="()=>selectPost(index)"
        />
        <EditBlogVue
          v-if="selectedPost"
          :post="selectedPost"
          @postMetadataUpdated="postMetadataUpdated"
        />
        <div v-else="" class="alert alert-info">
          <div class="flex-1">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="h-20 w-20  md:w-12 md:h-12 lg:w-6 lg:h-6 mx-2 stroke-current">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>                          
            </svg> 
            <label>You haven't posted anything yet! Once u have made posts they will appear here for editing. Get started by visting Create Post</label>
          </div>
        </div>
      </div>
      <div v-else>    
        <CreateBlogVue v-if="currentTab===2" @postAdded="postAdded" @changeTab="changeTab" />
      </div>     
    </div>
    
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import axios from "axios";
import PostVue from "@/components/Post.vue";
import TabMenuVue from "@/components/Blog/TabMenu.vue";
import EditBlogVue from "@/components/Dashboard/EditBlog.vue";
import { Post } from "@/interface/Post";
import CreateBlogVue from "@/components/Dashboard/CreateBlog.vue";
import {baseUrl} from "@/baseUrl"
import { useStore } from "@/store";
export default defineComponent({
  name: "Dashboard",
  components: {
    PostVue,
    TabMenuVue,
    EditBlogVue,
    CreateBlogVue
  },
  data() {
    return {
      posts: [] as Post[],
      currentTab: 1,
      selectedPost: null as Post | null,
    };
  },
  async created() {
    if(this.posts.length === 0){
      const { data } = await axios.get<Post[]>(`${baseUrl}/blog/userPosts`,{withCredentials:true});
      this.posts = data as [];
      this.selectedPost = this.posts[0];
      console.log(data);
    }
  },
  methods: {
    changeTab(newSelection: number) {
      this.currentTab = newSelection;
      if(newSelection === 1){
        this.selectPost(0)
      }
    },
    selectPost(index: number) {
      this.selectedPost = this.posts[index];
      this.currentTab = 1
      document.getElementById('content')?.scrollIntoView()
    },
    postAdded(post:Post){
      this.posts.unshift(post)
    },
    postMetadataUpdated(id: string, partialPost:Partial<Post>) {
      console.log(id,partialPost);
      
      this.posts.map((post, index) => {
        if (post.id === id) {
          this.posts[index] = { ...this.posts[index],...partialPost  };
        }
      });
    },
    selectLatestPost(){
      this.selectedPost = this.posts[0]
      this.currentTab = 1
    }
  },
  async beforeRouteEnter(to,from,next){
    const store = useStore()
    await store.checkLogin()
    store.isLoggedIn?next():next({name:'Home'})
  }
});
</script>

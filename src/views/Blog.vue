<template>
  <div class="px-3 md:px-10 relative">
    <TabMenu
      :currentTab="currentSelection"
      @changeTab="changeTab"
      b1="Aditya's Blogs"
      b2="Other People's blogs"
      
    />
    <router-view v-slot="{ Component, route }">
      <keep-alive>
        <component
          :is="Component"
          :key="route.path" 
        />
      </keep-alive>
    </router-view>
  </div>
</template>

<script lang="ts">
import BlogPostsVue from "@/components/Blog/BlogPosts.vue";
import TabMenu from "@/components/Blog/TabMenu.vue";
import PostVue from "@/components/Post.vue";
import EditorVue from "@/components/Editor.vue";
import { PostWithAuthor } from "@/interface/Post";
import { defineComponent } from "vue";

export default defineComponent({
  name: "Blog",
  components: {
    TabMenu,
    EditorVue,
    PostVue,
    BlogPostsVue,
  },
  data() {
    return {
      currentSelection:null as null|number,
      currentPath: 'aditya',
      adityaPosts: null as PostWithAuthor[] | null,
      otherPosts: null as PostWithAuthor[] | null,
      isOtherFetched:false
    };
  },
  async created() {
    console.log(this.$route,this.$route.path.slice(6));
    const upperPath = this.$route.path.slice(6)
    let currentTab:number
    if(upperPath=='2'){
      currentTab = 2
    }else if(upperPath=='1'){
      currentTab = 1
    }else{
      currentTab = 1
    }
    //const currentTab = this.$route.path.slice(6)!==""?"1":this.$route.path.slice(6)
    this.currentSelection = currentTab
  },
  methods: {
    changeTab(tabIndex: number) {
      this.currentSelection = tabIndex;
    }
  },
  watch: {
    async currentSelection(value) {
      this.$router.push(`/blog/${value}`);
    },
  },
});
</script>

<style></style>

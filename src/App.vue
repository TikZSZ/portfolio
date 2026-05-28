<template>
  <div :data-theme="store.theme" class="bg-base-300 min-h-screen flex flex-col">
    <div class="flex-grow w-full max-w-[1600px] mx-auto pb-10 px-4">
      <Navbar></Navbar>
      <router-view />
    </div>
    <div :data-theme="store.theme" class="bg-neutral">
      <DropDown></DropDown>
    </div>
    <div class="w-full bg-neutral">
      <div class="max-w-[1600px] mx-auto px-4">
        <Footer />
      </div>
    </div>
    <div class="hidden bordered"></div>
  </div>
</template>

<script lang="ts">import axios from "axios";
import { defineComponent } from "vue-demi";
import DropDown from "./components/NavBar/DropdownNavBar.vue";
import Footer from "./components/Footer.vue";
import Navbar from "./components/NavBar/Navbar.vue"
import { useStore } from "./store";

export default defineComponent({
  setup(){
    const store = useStore()
    return{ 
      store
    }
  },
  components:{
    Navbar,
    Footer,
    DropDown
  },
  async created(){    
    window.addEventListener('resize',(e)=>{
      this.setMobile(window.innerWidth)
    })
    this.setMobile(window.innerWidth)
    await this.store.checkLogin() 
  },
  methods:{
    setMobile(size:number){
      if(size > 850){
        this.store.isMobile=false
      }else{
        this.store.isMobile=true
      }
    }
  }
})
</script>

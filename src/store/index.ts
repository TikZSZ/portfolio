import axios from "axios";
import { defineStore } from "pinia";
import {userApi} from "@/api/userApi"
import { RouteLocationNormalizedLoaded, Router } from "vue-router";
import { PostWithAuthor } from "@/interface/Post";


export const useStore= defineStore("main",{
  state:()=>({
    isMobile:false,
    theme:'forest',
    content:'',
    isLoggedIn:false,
    userName:null as null|string,
    temporaryPost:null as null|PostWithAuthor
  }),
  actions: {
    async checkLogin(){
      const {data} = await userApi.get<{id:number,isOwner:boolean}|boolean>(`/currentUser`)      
      if(!data) this.isLoggedIn = false
      if(data) this.isLoggedIn = true
    },

    async signUp(value: { name:string,email: string; password: string },router:Router){
      const {data} = await userApi.post<{id:number,isOwner:boolean,name:string}>(`/createUser`,{
        data:{
          name:value.name,
          email:value.email,
          password:value.password
        }
      })
      this.userName = data.name
      this.isLoggedIn = true
      router.push('/')
    },

    async logIn(value: { email: string; password: string },router:Router){
      const {data} = await userApi.post<{id:number,isOwner:boolean,name:string}>(`/loginUser`,{
        data:{
          email:value.email,
          password:value.password
        }
      })
      this.userName = data.name
      this.isLoggedIn = true
      router.push('/')
    },
    
    async logOut(route:RouteLocationNormalizedLoaded,router:Router){
      const response = await userApi.get(`/logoutUser`, {
      });
      this.$patch({ isLoggedIn: false, userName: null });
      if(route.name === 'Dashboard') router.push({path:'/'})
    },
  }
});

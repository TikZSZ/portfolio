import { useStore } from '../store';
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue';
import SignUp from '../views/SignUp.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    alias:"/home"
  },
  {
    path:'/blog',
    name:'Blog',
    component:()=>import('@/views/Blog.vue'),
    children:[
      {
        name:'Aditya',
        path:'1',
        component:()=>import('@/components/Blog/BlogPosts.vue'),
        props:{isOwner:true}
      },
      {
        name:'Other',
        path:'2',
        component:()=>import('@/components/Blog/BlogPosts.vue'),
        props:{isOwner:false},
      }
    ]
  },
  {
    path:'/dashboard',
    name:"Dashboard",
    component:()=>import('@/views/Dashboard.vue'),
    meta:{
      requiresAuth:true
    }
  },
  {
    path:'/post/:contentId',
    name:"Post",
    component:()=>import('@/views/ReadPost.vue'),
    props:(route)=>({
      contentId:route.params.contentId,
    })
  },
  {
    path:'/login',
    name:"Login",
    component:()=>import('@/views/Login.vue')
  },
  {
    path:'/signup',
    name:"SignUp",
    component:SignUp
  },
  {
    path:'/:catchAll(.*)*',
    redirect:{name:'Home'}
  },
  

];

const router = createRouter({
  history: createWebHistory(import.meta.url),
  routes,
});

router.beforeEach((to,from,next)=>{

  // const isLoggedIn = useStore().$state.isLoggedIn
  
  // if(!to.matched.some((route)=>route.meta.requiresAuth)){
  //   window.scrollTo({top:0})
  //   next()
  //   return 
  // }
  
  // if(isLoggedIn){
  //   window.scrollTo({top:0})
  //   next()
  //   return
  // }
  //next({name:'Home'})
  window.scrollTo({top:0})
  next()
})
export default router;

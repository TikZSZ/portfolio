import u from"./BlogPosts.c8ab0ce2.js";import{_ as p,E as h}from"./Editor.f38d5f1b.js";import{P as m}from"./Post.9f83cc6d.js";import{_ as d,d as _,c as b,a as n,w as f,r as a,o,b as r,e as g,K as T}from"./index.22295eb8.js";import"./postApi.5e326f0e.js";const $=_({name:"Blog",components:{TabMenu:p,EditorVue:h,PostVue:m,BlogPostsVue:u},data(){return{currentSelection:null,currentPath:"aditya",adityaPosts:null,otherPosts:null,isOtherFetched:!1}},async created(){console.log(this.$route,this.$route.path.slice(6));const e=this.$route.path.slice(6);let t;e=="2"?t=2:(e=="1",t=1),this.currentSelection=t},methods:{changeTab(e){this.currentSelection=e}},watch:{async currentSelection(e){this.$router.push(`/blog/${e}`)}}}),v={class:"px-3 md:px-10 relative"};function P(e,t,y,B,C,w){const s=a("TabMenu"),c=a("router-view");return o(),b("div",v,[n(s,{currentTab:e.currentSelection,onChangeTab:e.changeTab,b1:"Aditya's Blogs",b2:"Other People's blogs"},null,8,["currentTab","onChangeTab"]),n(c,null,{default:f(({Component:l,route:i})=>[(o(),r(T,null,[(o(),r(g(l),{key:i.path}))],1024))]),_:1})])}var M=d($,[["render",P]]);export{M as default};

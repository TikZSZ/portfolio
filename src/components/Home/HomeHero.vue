<template>
  <div class="hero"  key="viewArea">
    <div class="flex-col hero-content lg:flex-row-reverse">
      <img
        src="https://picsum.photos/id/1005/600/600"
        class="max-h-full rounded-lg shadow-2xl"
      />
      <div class="text-neutral-content">
        <h1 class="mb-5 text-5xl font-bold ">
          Hi there
        </h1>
        <p class="mb-5 font-medium text-lg">
          My name is Aditya
          <a class="link" href="https://github.com/tikzsz">(TikZSZ)</a>, a full stack dev and this is my portfolio and blog site, blogging is open to anyone and everyone. 
        </p>
        <router-link :to="{name:'SignUp'}" class="btn btn-primary">Get Started</router-link>
      </div>
    </div>
  </div>
</template>


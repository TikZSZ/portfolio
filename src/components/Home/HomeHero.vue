<template>
  <div class="hero min-h-[50vh] md:min-h-[60vh] flex items-center justify-center py-10" key="viewArea">
    <div class="hero-content flex-col md:flex-row text-center md:text-left transition-all w-full px-0 gap-12 md:gap-20">
      <div class="avatar shrink-0 mb-8 md:mb-0">
        <div class="w-40 h-40 md:w-56 md:h-56 rounded-full ring ring-primary ring-offset-base-100 ring-offset-4 shadow-2xl">
          <img src="/aditya.jpg" class="object-cover object-center" alt="Aditya" />
        </div>
      </div>
      <div class="text-neutral-content w-full flex flex-col items-center md:items-start">
        <div class="badge badge-primary badge-outline mb-6 px-4 py-3 text-sm md:text-base tracking-wide uppercase font-semibold">
          Founder & CEO @ ClyrisAI
        </div>
        <h1 class="mb-6 text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-tight text-primary-content">
          Aditya <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">(TikZSZ)</span>
        </h1>
        <p class="mb-10 font-light text-xl md:text-2xl opacity-90 max-w-2xl leading-relaxed">
          Self-taught engineer. CTO at 19. I've built everything from distributed microservices and decentralized mail to selective disclosure cryptographic certificates. Currently revolutionizing engineering hiring at <a href="https://clyrisai.com" target="_blank" class="link link-primary font-medium hover:text-primary-focus transition-colors">ClyrisAI</a>.
        </p>
        <div class="flex gap-4">
          <a href="https://github.com/TikZSZ" target="_blank" class="btn btn-primary btn-lg px-8">GitHub</a>
          <!-- <router-link :to="{name:'SignUp'}" class="btn btn-outline btn-lg text-neutral-content hover:bg-neutral-focus">Read My Blog</router-link> -->
        </div>
      </div>
    </div>
  </div>
</template>


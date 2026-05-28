<template>
  <div class="px-0 mt-5 mb-20">
    <div class="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-6">
      <a v-for="(tech, index) in technologies" :key="index" :href="tech.url" target="_blank"
         class="group flex flex-col items-center justify-center p-6 bg-neutral rounded-xl border border-neutral-focus hover:shadow-xl hover:-translate-y-1 hover:border-primary/50 transition-all duration-300">
        <img :src="tech.icon" :alt="tech.name" class="w-12 h-12 md:w-16 md:h-16 object-contain group-hover:scale-110 transition-transform duration-300 filter grayscale group-hover:grayscale-0">
        <span class="mt-4 text-sm font-medium text-neutral-content opacity-0 group-hover:opacity-100 transition-opacity duration-300">{{tech.name}}</span>
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
const technologies = [
  { name: 'TypeScript', url: 'https://www.typescriptlang.org/', icon: 'https://cdn.svgporn.com/logos/typescript.svg' },
  { name: 'Node.js', url: 'https://nodejs.org', icon: 'https://cdn.svgporn.com/logos/nodejs.svg' },
  { name: 'Express', url: 'https://expressjs.com/', icon: 'https://cdn.svgporn.com/logos/express.svg' },
  { name: 'NestJS', url: 'https://nestjs.com', icon: 'https://cdn.svgporn.com/logos/nestjs.svg' },
  { name: 'React', url: 'https://reactjs.org', icon: 'https://cdn.svgporn.com/logos/react.svg' },
  { name: 'Next.js', url: 'https://nextjs.org', icon: 'https://cdn.svgporn.com/logos/nextjs-icon.svg' },
  { name: 'Vue 3', url: 'https://v3.vuejs.org/', icon: 'https://cdn.svgporn.com/logos/vue.svg' },
  { name: 'Nuxt', url: 'https://nuxtjs.org/', icon: 'https://cdn.svgporn.com/logos/nuxt.svg' },
  { name: 'Tailwind CSS', url: 'https://tailwindcss.com/', icon: 'https://cdn.svgporn.com/logos/tailwindcss-icon.svg' },
  { name: 'PostgreSQL', url: 'https://www.postgresql.org/', icon: 'https://cdn.svgporn.com/logos/postgresql.svg' },
  { name: 'MongoDB', url: 'https://www.mongodb.com/', icon: 'https://cdn.svgporn.com/logos/mongodb.svg' },
  { name: 'Redis', url: 'https://redis.io', icon: 'https://cdn.svgporn.com/logos/redis.svg' },
  { name: 'Docker', url: 'https://docker.com', icon: 'https://cdn.svgporn.com/logos/docker-icon.svg' },
  { name: 'Kubernetes', url: 'https://kubernetes.io', icon: 'https://cdn.svgporn.com/logos/kubernetes.svg' },
  { name: 'Firebase', url: 'https://firebase.google.com', icon: 'https://cdn.svgporn.com/logos/firebase.svg' },
  { name: 'Vercel', url: 'https://vercel.com', icon: 'https://cdn.svgporn.com/logos/vercel-icon.svg' }
];
</script>
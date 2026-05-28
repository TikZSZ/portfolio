<template>
  <div class="mt-10 px-0 mb-20">
    <h1 class="text-center font-mono text-4xl my-10 text-neutral-content">
      Open Source Contributions
    </h1>
    <div class="flex flex-col gap-6">
      <div class="card w-full shadow-lg bg-neutral text-neutral-content border border-neutral-focus hover:border-primary/30 transition-all duration-300" v-for="pr in pullRequests" :key="pr.link">
        <div class="card-body md:px-12 py-6 flex flex-col md:flex-row items-start md:items-center justify-between">
          <div>
            <h2 class="card-title font-sans font-semibold text-primary-content text-xl">{{ pr.title }}</h2>
            <p class="font-light text-md text-base-content opacity-80 mt-1">{{ pr.repo }}</p>
          </div>
          <div class="mt-4 md:mt-0 flex-shrink-0">
            <a :href="pr.link" target="_blank" class="btn btn-outline btn-sm hover:bg-primary hover:text-primary-content">View PR</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const pullRequests = [
  {
    title: "[BFCL] Adds support for parallel inference and batching",
    repo: "ShishirPatil/gorilla",
    link: "https://github.com/ShishirPatil/gorilla/pull/498"
  },
  {
    title: "[Bugfix] [Frontend] vLLM api_server.py when using with prompt_token_ids causes error.",
    repo: "vllm-project/vllm",
    link: "https://github.com/vllm-project/vllm/pull/5187"
  }
];
</script>

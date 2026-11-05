<template>
  <section id="upstream" class="py-12 border-b border-zinc-200/80">
    <div class="mb-8">
      <div class="flex items-center gap-2 font-mono text-xs text-emerald-700 uppercase tracking-widest font-semibold">
        <span>Tier 02</span>
        <span>/</span>
        <span>Upstream & Open Source</span>
      </div>
      <h2 class="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-950 mt-1">
        Upstream AI Infrastructure & Developer Tooling
      </h2>
      <p class="text-zinc-600 text-sm mt-2 max-w-2xl font-light">
        Authoring architecture improvements and PRs across frontier LLM evaluation frameworks, inference servers, and published developer packages.
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <!-- Berkeley Gorilla / BFCL -->
      <div class="p-6 rounded-2xl bg-white border border-zinc-200/90 shadow-[0_1px_3px_rgba(0,0,0,0.04)] hover:border-zinc-300 transition-all flex flex-col justify-between">
        <div>
          <div class="flex items-center justify-between font-mono text-xs text-zinc-500 mb-2.5">
            <span class="text-emerald-700 font-medium">ShishirPatil / gorilla (BFCL)</span>
            <span class="px-2 py-0.5 rounded bg-zinc-100 text-zinc-700 border border-zinc-200/60 font-semibold">PR #498</span>
          </div>
          <h3 class="text-base sm:text-lg font-semibold text-zinc-950">
            Parallel Inference & Async Batching for Berkeley Function Calling Leaderboard
          </h3>
          <p class="text-zinc-600 text-xs sm:text-sm mt-2 leading-relaxed font-light">
            Engineered parallel inference orchestration and async batching for BFCL, cutting benchmark execution time by <strong class="text-zinc-900 font-medium">4x or more</strong>. Implemented async file writes with <code class="text-xs px-1 py-0.5 rounded bg-zinc-100 border border-zinc-200 text-zinc-800 font-mono">aiofiles</code>, thread-pool execution via <code class="text-xs px-1 py-0.5 rounded bg-zinc-100 border border-zinc-200 text-zinc-800 font-mono">loop.run_in_executor</code>, and placeholder-based interrupted run recovery. Validated on an <strong class="text-zinc-900 font-medium">RTX 4090 running LLaMA 8B on vLLM</strong>.
          </p>
        </div>
        <div class="mt-5 pt-3.5 border-t border-zinc-100 flex items-center justify-between text-xs font-mono">
          <span class="text-zinc-400">Benchmark Infrastructure</span>
          <a href="https://github.com/ShishirPatil/gorilla/pull/498" target="_blank" rel="noopener noreferrer" class="text-zinc-800 hover:text-black flex items-center gap-1 transition-colors font-medium">
            <span>View PR & Review</span>
            <span>↗</span>
          </a>
        </div>
      </div>

      <!-- vLLM -->
      <div class="p-6 rounded-2xl bg-white border border-zinc-200/90 shadow-[0_1px_3px_rgba(0,0,0,0.04)] hover:border-zinc-300 transition-all flex flex-col justify-between">
        <div>
          <div class="flex items-center justify-between font-mono text-xs text-zinc-500 mb-2.5">
            <span class="text-emerald-700 font-medium">vllm-project / vllm</span>
            <span class="px-2 py-0.5 rounded bg-zinc-100 text-zinc-700 border border-zinc-200/60 font-semibold">PR #5187</span>
          </div>
          <h3 class="text-base sm:text-lg font-semibold text-zinc-950">
            Frontend API Server Token ID Handling Proposal
          </h3>
          <p class="text-zinc-600 text-xs sm:text-sm mt-2 leading-relaxed font-light">
            Diagnosed an unhandled failure point in vLLM's high-throughput <code class="text-xs px-1 py-0.5 rounded bg-zinc-100 border border-zinc-200 text-zinc-800 font-mono">api_server.py</code> when requests were submitted with pre-tokenized <strong class="text-zinc-900 font-medium"><code class="text-xs px-1 py-0.5 rounded bg-zinc-100 border border-zinc-200 text-zinc-800 font-mono">prompt_token_ids</code></strong> rather than raw strings. Authored patch and participated in architecture handoffs with core maintainers.
          </p>
        </div>
        <div class="mt-5 pt-3.5 border-t border-zinc-100 flex items-center justify-between text-xs font-mono">
          <span class="text-zinc-400">Inference Core</span>
          <a href="https://github.com/vllm-project/vllm/pull/5187" target="_blank" rel="noopener noreferrer" class="text-zinc-800 hover:text-black flex items-center gap-1 transition-colors font-medium">
            <span>View PR</span>
            <span>↗</span>
          </a>
        </div>
      </div>

      <!-- @clyrisai/gitresolve -->
      <div class="p-6 rounded-2xl bg-white border border-zinc-200/90 shadow-[0_1px_3px_rgba(0,0,0,0.04)] hover:border-zinc-300 transition-all flex flex-col justify-between">
        <div>
          <div class="flex items-center justify-between font-mono text-xs text-zinc-500 mb-2.5">
            <span class="text-emerald-700 font-medium">NPM Package · Published Tool</span>
            <span class="px-2 py-0.5 rounded bg-zinc-100 text-zinc-700 border border-zinc-200/60 font-semibold">v1.x Active</span>
          </div>
          <h3 class="text-base sm:text-lg font-semibold text-zinc-950">
            @clyrisai/gitresolve
          </h3>
          <p class="text-zinc-600 text-xs sm:text-sm mt-2 leading-relaxed font-light">
            Engineered an automated resolver capable of parsing raw resumes, portfolio links, and personal domains to <strong class="text-zinc-900 font-medium">discover and aggregate an engineer's distributed open-source footprint</strong> across multiple identities and organizations.
          </p>
        </div>
        <div class="mt-5 pt-3.5 border-t border-zinc-100 flex items-center justify-between text-xs font-mono">
          <a href="https://www.npmjs.com/package/@clyrisai/gitresolve" target="_blank" rel="noopener noreferrer" class="text-zinc-800 hover:text-black flex items-center gap-1 transition-colors font-medium">
            <span>npm package</span>
            <span>↗</span>
          </a>
          <a href="https://github.com/clyrisai/gitresolve" target="_blank" rel="noopener noreferrer" class="text-zinc-800 hover:text-black flex items-center gap-1 transition-colors font-medium">
            <span>github repo</span>
            <span>↗</span>
          </a>
        </div>
      </div>

      <!-- Hedera Mirror Node Wrapper -->
      <div class="p-6 rounded-2xl bg-white border border-zinc-200/90 shadow-[0_1px_3px_rgba(0,0,0,0.04)] hover:border-zinc-300 transition-all flex flex-col justify-between">
        <div>
          <div class="flex items-center justify-between font-mono text-xs text-zinc-500 mb-2.5">
            <span class="text-emerald-700 font-medium">Production Library</span>
            <span class="px-2 py-0.5 rounded bg-zinc-100 text-zinc-700 border border-zinc-200/60 font-semibold">5+ Years Active</span>
          </div>
          <h3 class="text-base sm:text-lg font-semibold text-zinc-950">
            ts-hedera-mirror-node-wrapper
          </h3>
          <p class="text-zinc-600 text-xs sm:text-sm mt-2 leading-relaxed font-light">
            Architected and maintained a type-safe TypeScript client library for querying Hedera Hashgraph mirror nodes. <strong class="text-zinc-900 font-medium">Five years after initial release</strong>, it remains actively relied upon by developers throughout the ecosystem.
          </p>
        </div>
        <div class="mt-5 pt-3.5 border-t border-zinc-100 flex items-center justify-between text-xs font-mono">
          <span class="text-zinc-400">Ecosystem Maintenance</span>
          <a href="https://github.com/TikZSZ/ts-hedera-mirror-node-wrapper/" target="_blank" rel="noopener noreferrer" class="text-zinc-800 hover:text-black flex items-center gap-1 transition-colors font-medium">
            <span>github repo</span>
            <span>↗</span>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>

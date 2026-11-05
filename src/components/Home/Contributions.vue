<template>
  <section id="upstream" class="py-12 border-b border-zinc-800/60">
    <div class="mb-8">
      <div class="flex items-center gap-2 font-mono text-xs text-emerald-400 uppercase tracking-widest">
        <span>Tier 02</span>
        <span>/</span>
        <span>Upstream & Open Source</span>
      </div>
      <h2 class="text-2xl sm:text-3xl font-bold tracking-tight text-white mt-1">
        Upstream AI Infrastructure & Developer Tooling
      </h2>
      <p class="text-zinc-400 text-sm mt-2 max-w-2xl font-light">
        Direct code contributions merged into industry-standard LLM inference infrastructure, benchmarking frameworks, and published developer packages.
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <!-- vLLM -->
      <div class="p-5 rounded-xl bg-zinc-900/40 border border-zinc-800/80 hover:border-zinc-700/80 transition-all flex flex-col justify-between">
        <div>
          <div class="flex items-center justify-between font-mono text-xs text-zinc-500 mb-2">
            <span class="text-emerald-400 font-medium">vllm-project / vllm</span>
            <span>Merged PR #5187</span>
          </div>
          <h3 class="text-base sm:text-lg font-semibold text-white">
            Frontend API Server Token ID Handling Fix
          </h3>
          <p class="text-zinc-400 text-xs sm:text-sm mt-2 leading-relaxed font-light">
            Diagnosed and patched a critical crash in vLLM's high-throughput <code class="text-xs px-1 py-0.5 rounded bg-zinc-800 text-zinc-300">api_server.py</code> when requests were submitted directly with pre-tokenized <code class="text-xs px-1 py-0.5 rounded bg-zinc-800 text-zinc-300">prompt_token_ids</code> rather than raw text strings.
          </p>
        </div>
        <div class="mt-4 pt-3 border-t border-zinc-800/60 flex items-center justify-between text-xs font-mono">
          <span class="text-zinc-500">Core Inference Infrastructure</span>
          <a href="https://github.com/vllm-project/vllm/pull/5187" target="_blank" rel="noopener noreferrer" class="text-zinc-300 hover:text-white flex items-center gap-1 transition-colors">
            <span>View PR</span>
            <span>↗</span>
          </a>
        </div>
      </div>

      <!-- Berkeley Gorilla / BFCL -->
      <div class="p-5 rounded-xl bg-zinc-900/40 border border-zinc-800/80 hover:border-zinc-700/80 transition-all flex flex-col justify-between">
        <div>
          <div class="flex items-center justify-between font-mono text-xs text-zinc-500 mb-2">
            <span class="text-emerald-400 font-medium">ShishirPatil / gorilla (BFCL)</span>
            <span>Merged PR #498</span>
          </div>
          <h3 class="text-base sm:text-lg font-semibold text-white">
            Parallel Inference & Batching for Berkeley Function Calling Leaderboard
          </h3>
          <p class="text-zinc-400 text-xs sm:text-sm mt-2 leading-relaxed font-light">
            Architected parallel inference orchestration and batching support for the Berkeley Function Calling Leaderboard (BFCL), dramatically accelerating evaluation runs across leading frontier and open-weight tool-use models.
          </p>
        </div>
        <div class="mt-4 pt-3 border-t border-zinc-800/60 flex items-center justify-between text-xs font-mono">
          <span class="text-zinc-500">Benchmark Infrastructure</span>
          <a href="https://github.com/ShishirPatil/gorilla/pull/498" target="_blank" rel="noopener noreferrer" class="text-zinc-300 hover:text-white flex items-center gap-1 transition-colors">
            <span>View PR</span>
            <span>↗</span>
          </a>
        </div>
      </div>

      <!-- @clyrisai/gitresolve -->
      <div class="p-5 rounded-xl bg-zinc-900/40 border border-zinc-800/80 hover:border-zinc-700/80 transition-all flex flex-col justify-between">
        <div>
          <div class="flex items-center justify-between font-mono text-xs text-zinc-500 mb-2">
            <span class="text-emerald-400 font-medium">NPM Package · Published Tool</span>
            <span>v1.x Active</span>
          </div>
          <h3 class="text-base sm:text-lg font-semibold text-white">
            @clyrisai/gitresolve
          </h3>
          <p class="text-zinc-400 text-xs sm:text-sm mt-2 leading-relaxed font-light">
            Engineered an automated resolver capable of parsing raw resumes, portfolio links, and personal domains to discover and aggregate an engineer's distributed open-source footprint across multiple identities and organizations.
          </p>
        </div>
        <div class="mt-4 pt-3 border-t border-zinc-800/60 flex items-center justify-between text-xs font-mono">
          <a href="https://www.npmjs.com/package/@clyrisai/gitresolve" target="_blank" rel="noopener noreferrer" class="text-zinc-300 hover:text-white flex items-center gap-1 transition-colors">
            <span>npm package</span>
            <span>↗</span>
          </a>
          <a href="https://github.com/clyrisai/gitresolve" target="_blank" rel="noopener noreferrer" class="text-zinc-300 hover:text-white flex items-center gap-1 transition-colors">
            <span>github repo</span>
            <span>↗</span>
          </a>
        </div>
      </div>

      <!-- Hedera Mirror Node Wrapper -->
      <div class="p-5 rounded-xl bg-zinc-900/40 border border-zinc-800/80 hover:border-zinc-700/80 transition-all flex flex-col justify-between">
        <div>
          <div class="flex items-center justify-between font-mono text-xs text-zinc-500 mb-2">
            <span class="text-emerald-400 font-medium">Production Library</span>
            <span>Maintained for 5+ Years</span>
          </div>
          <h3 class="text-base sm:text-lg font-semibold text-white">
            ts-hedera-mirror-node-wrapper
          </h3>
          <p class="text-zinc-400 text-xs sm:text-sm mt-2 leading-relaxed font-light">
            Architected and maintained a type-safe TypeScript client library for querying Hedera Hashgraph mirror nodes. 5 years after initial release, it remains actively relied upon by developers throughout the ecosystem.
          </p>
        </div>
        <div class="mt-4 pt-3 border-t border-zinc-800/60 flex items-center justify-between text-xs font-mono">
          <span class="text-zinc-500">Long-Term Maintenance</span>
          <a href="https://github.com/TikZSZ/ts-hedera-mirror-node-wrapper/" target="_blank" rel="noopener noreferrer" class="text-zinc-300 hover:text-white flex items-center gap-1 transition-colors">
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

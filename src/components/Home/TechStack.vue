<template>
  <section id="stack" class="py-12 border-b border-zinc-200/80">
    <div class="mb-8">
      <div class="flex items-center gap-2 font-mono text-xs text-zinc-500 uppercase tracking-widest font-semibold">
        <span>Competencies</span>
        <span>/</span>
        <span>Systems & Tooling</span>
      </div>
      <h2 class="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-950 mt-1">
        Technical Architecture & Stack
      </h2>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 font-mono text-xs">
      <!-- AI & Inference Systems -->
      <div class="p-5 rounded-2xl bg-white border border-zinc-200/90 shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
        <div class="text-emerald-700 font-semibold text-xs tracking-wider uppercase mb-3">
          AI & Inference
        </div>
        <ul class="space-y-1.5 text-zinc-700 font-light">
          <li>vLLM (Serving & Kernels)</li>
          <li>PyTorch</li>
          <li>Gorilla BFCL (Tool Calling)</li>
          <li>AST & Semantic Parsing</li>
          <li>Exa Semantic Search</li>
          <li>Agent Memory Architectures</li>
        </ul>
      </div>

      <!-- Distributed Systems & Queues -->
      <div class="p-5 rounded-2xl bg-white border border-zinc-200/90 shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
        <div class="text-emerald-700 font-semibold text-xs tracking-wider uppercase mb-3">
          Distributed Systems
        </div>
        <ul class="space-y-1.5 text-zinc-700 font-light">
          <li>NATS Streaming</li>
          <li>Redis (Ephemeral Locks/Cache)</li>
          <li>Docker & Kubernetes</li>
          <li>GCP Cloud Run / Compute</li>
          <li>Cron Orchestrators</li>
          <li>Distributed State Sync</li>
        </ul>
      </div>

      <!-- Databases & Backend -->
      <div class="p-5 rounded-2xl bg-white border border-zinc-200/90 shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
        <div class="text-emerald-700 font-semibold text-xs tracking-wider uppercase mb-3">
          Backend & Storage
        </div>
        <ul class="space-y-1.5 text-zinc-700 font-light">
          <li>TypeScript & Node.js</li>
          <li>Python</li>
          <li>PostgreSQL & Prisma</li>
          <li>MongoDB</li>
          <li>NestJS & Express</li>
          <li>REST & Webhook Streams</li>
        </ul>
      </div>

      <!-- Consensus & Cryptography -->
      <div class="p-5 rounded-2xl bg-white border border-zinc-200/90 shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
        <div class="text-emerald-700 font-semibold text-xs tracking-wider uppercase mb-3">
          Consensus & Web3
        </div>
        <ul class="space-y-1.5 text-zinc-700 font-light">
          <li>Hedera Hashgraph SDK</li>
          <li>Mirror Node Infrastructure</li>
          <li>Decentralized ID (DID / VC)</li>
          <li>Zero-Trust Client Encryption</li>
          <li>Asymmetric Key Escrow</li>
          <li>Smart Contract Integration</li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>

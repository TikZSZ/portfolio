<template>
  <div class="space-y-12">
    <!-- TIER 03: Competitive Hackathon Wins -->
    <section id="hackathons" class="py-12 border-b border-zinc-200/80">
      <div class="mb-8">
        <div class="flex items-center gap-2 font-mono text-xs text-emerald-700 uppercase tracking-widest font-semibold">
          <span>Tier 03</span>
          <span>/</span>
          <span>Rapid Execution</span>
        </div>
        <h2 class="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-950 mt-1">
          Competitive Hackathon Wins & Protocols ($50K+ Won)
        </h2>
        <p class="text-zinc-600 text-sm mt-2 max-w-2xl font-light">
          Built under intense 24-72 hour constraints across <strong class="text-zinc-900 font-medium">5+ competitive hackathons</strong> (Hedera HelloFuture, Hedera India, VideoFS, LibLogin). Evaluated and awarded by enterprise judges for novel cryptographic architectures, zero-trust protocols, and agentic interfaces.
        </p>
      </div>

      <div class="space-y-5">
        <div
          v-for="proj in hackathonProjects"
          :key="proj.title"
          class="p-6 rounded-2xl bg-white border border-zinc-200/90 shadow-[0_1px_3px_rgba(0,0,0,0.04)] hover:border-zinc-300 transition-all"
        >
          <div class="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 pb-3 border-b border-zinc-100">
            <div>
              <div class="flex items-center gap-2 font-mono text-xs">
                <span class="px-2 py-0.5 rounded font-medium" :class="proj.badgeClass">{{ proj.award }}</span>
                <span class="text-zinc-300">•</span>
                <span class="text-zinc-500">{{ proj.context }}</span>
              </div>
              <h3 class="text-lg sm:text-xl font-bold text-zinc-950 mt-1.5">{{ proj.title }}</h3>
            </div>
            <div class="flex flex-wrap items-center gap-4 text-xs font-mono pt-1 sm:pt-0">
              <a v-if="proj.demo" :href="proj.demo" target="_blank" rel="noopener noreferrer" class="text-zinc-700 hover:text-black flex items-center gap-1 transition-colors font-medium">
                <span>Demo</span>
                <span>↗</span>
              </a>
              <a v-if="proj.github" :href="proj.github" target="_blank" rel="noopener noreferrer" class="text-zinc-700 hover:text-black flex items-center gap-1 transition-colors font-medium">
                <span>GitHub</span>
                <span>↗</span>
              </a>
              <a v-if="proj.githubFrontend" :href="proj.githubFrontend" target="_blank" rel="noopener noreferrer" class="text-zinc-700 hover:text-black flex items-center gap-1 transition-colors font-medium">
                <span>Frontend</span>
                <span>↗</span>
              </a>
              <a v-if="proj.githubBackend" :href="proj.githubBackend" target="_blank" rel="noopener noreferrer" class="text-zinc-700 hover:text-black flex items-center gap-1 transition-colors font-medium">
                <span>Backend</span>
                <span>↗</span>
              </a>
              <a v-if="proj.press" :href="proj.press" target="_blank" rel="noopener noreferrer" class="text-emerald-700 hover:text-emerald-900 flex items-center gap-1 transition-colors font-medium">
                <span>Press</span>
                <span>↗</span>
              </a>
            </div>
          </div>

          <p class="mt-3.5 text-sm text-zinc-700 leading-relaxed font-light" v-html="proj.description"></p>

          <div class="mt-4 flex flex-wrap gap-2 text-xs font-mono text-zinc-600">
            <span v-for="tag in proj.tags" :key="tag" class="px-2 py-0.5 rounded-md bg-zinc-100 border border-zinc-200/80 text-zinc-700">
              {{ tag }}
            </span>
          </div>
        </div>
      </div>
    </section>

    <!-- TIER 04: Systems Architecture Spotlight -->
    <section id="systems" class="py-12 border-b border-zinc-200/80">
      <div class="mb-8">
        <div class="flex items-center gap-2 font-mono text-xs text-zinc-500 uppercase tracking-widest font-semibold">
          <span>Tier 04</span>
          <span>/</span>
          <span>Distributed Systems</span>
        </div>
        <h2 class="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-950 mt-1">
          Systems Architecture & Microservices
        </h2>
        <p class="text-zinc-600 text-sm mt-2 max-w-2xl font-light">
          Production patterns in high-concurrency event buses, ephemeral distributed locks, and fault-tolerant state orchestration.
        </p>
      </div>

      <div class="p-6 rounded-2xl bg-white border border-zinc-200/90 shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-zinc-100">
          <div>
            <div class="flex items-center gap-2 font-mono text-xs text-zinc-500">
              <span class="text-emerald-700 font-medium">Event-Driven Architecture</span>
              <span>•</span>
              <span>Concurrency & Locking</span>
            </div>
            <h3 class="text-lg font-bold text-zinc-950 mt-1">Distributed Microservices Ticketing Engine</h3>
          </div>
          <div class="flex items-center gap-4 text-xs font-mono">
            <a href="https://github.com/TikZSZ/microservices-ticket-app" target="_blank" rel="noopener noreferrer" class="text-zinc-800 hover:text-black flex items-center gap-1 font-medium">
              <span>View Source</span>
              <span>↗</span>
            </a>
          </div>
        </div>
        <p class="mt-3.5 text-sm text-zinc-700 leading-relaxed font-light">
          Architected a distributed event-driven ticketing cluster resolving race conditions during peak booking windows. Features <strong class="text-zinc-900 font-medium">ephemeral ticket reservation locks in Redis</strong>, <strong class="text-zinc-900 font-medium">at-least-once message delivery via NATS Streaming</strong>, and cross-service <strong class="text-zinc-900 font-medium">optimistic concurrency control</strong>.
        </p>
        <div class="mt-4 flex flex-wrap gap-2 text-xs font-mono text-zinc-600">
          <span class="px-2 py-0.5 rounded-md bg-zinc-100 border border-zinc-200 text-zinc-700 font-medium">NATS Streaming</span>
          <span class="px-2 py-0.5 rounded-md bg-zinc-100 border border-zinc-200 text-zinc-700 font-medium">Redis Ephemeral Locks</span>
          <span class="px-2 py-0.5 rounded-md bg-zinc-100 border border-zinc-200 text-zinc-700">Docker / K8s</span>
          <span class="px-2 py-0.5 rounded-md bg-zinc-100 border border-zinc-200 text-zinc-700">NestJS</span>
          <span class="px-2 py-0.5 rounded-md bg-zinc-100 border border-zinc-200 text-zinc-700">MongoDB</span>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const hackathonProjects = [
  {
    title: "Hedera Chat: Natural Language Agent for Distributed Ledgers",
    award: "1st Prize Winner · AI Track",
    badgeClass: "bg-amber-50 text-amber-800 border border-amber-200 font-semibold",
    context: "Hedera HelloFuture Hackathon",
    description: "Architected an autonomous conversational agent translating plain English user intent into cryptographic <strong class='text-zinc-900 font-medium'>Hedera Hashgraph transactions</strong>, token transfers, and smart contract execution. Built to eliminate the friction of Web3 RPC endpoints for both developers and non-technical users.",
    tags: ["LLM Agents", "Hedera Hashgraph", "Consensus Service", "TypeScript", "Next.js"],
    demo: "https://hedera-ai.vercel.app/",
    github: "https://github.com/TikZSZ/hedera-chat",
    press: "https://hedera.com/blog/these-are-the-winners-of-the-2024-hellofuture-hackathon/"
  },
  {
    title: "dMail: Zero-Trust End-to-End Encrypted Decentralized Mail",
    award: "1st Prize Winner",
    badgeClass: "bg-amber-50 text-amber-800 border border-amber-200 font-semibold",
    context: "Hedera India Hackathon",
    description: "Designed a <strong class='text-zinc-900 font-medium'>zero-trust cryptographic mail protocol</strong> powered entirely by client-side asymmetric encryption over Hedera Hashgraph. Completely <strong class='text-zinc-900 font-medium'>decouples user identity and personal metadata from message transport</strong>, ensuring absolute communication privacy.",
    tags: ["Zero-Trust", "Asymmetric Cryptography", "Distributed Ledger", "Vue.js", "NestJS"],
    demo: "https://dmaill.vercel.app",
    githubFrontend: "https://github.com/TikZSZ/defi-email-frontend",
    githubBackend: "https://github.com/TikZSZ/defi-email-backend",
    press: "https://www.dqindia.com/three-innovative-distributed-ledger-based-solutions-top-hedera-india-hackathon"
  },
  {
    title: "HiD: Decentralized Identity & Selective Disclosure Credentials",
    award: "2nd Prize Winner · Data Track",
    badgeClass: "bg-zinc-100 text-zinc-700 border border-zinc-200 font-semibold",
    context: "Hedera HelloFuture Hackathon 2.0",
    description: "Designed a self-sovereign <strong class='text-zinc-900 font-medium'>Decentralized Identity (DID)</strong> and <strong class='text-zinc-900 font-medium'>Verifiable Credentials (VC)</strong> infrastructure on Hedera. Allows individuals to prove specific identity claims (e.g. age, accredited status) through cryptographic proofs without disclosing raw personal data.",
    tags: ["DID / VC", "Cryptographic Signatures", "Hedera SDK", "Privacy Engineering"],
    demo: "https://hedera-id.vercel.app",
    github: "https://github.com/TikZSZ/HiD",
    press: "https://hedera.com/blog/these-are-the-winners-of-the-hellofuture-hackathon-2-0/"
  },
  {
    title: "Factura: Zero-Trust Cryptographic B2B Invoicing Protocol",
    award: "Hackathon Winner",
    badgeClass: "bg-zinc-100 text-zinc-700 border border-zinc-200 font-semibold",
    context: "Hedera India Hackathon (Extra Build)",
    description: "Built on-the-fly during extra remaining time at the Hedera India Hackathon. Provides <strong class='text-zinc-900 font-medium'>immutable buyer-seller escrow agreements</strong>, automated payment triggers, and transparent audit trails using cryptographic consensus.",
    tags: ["B2B Settlement", "Escrow HApp", "NestJS", "Vue.js"],
    demo: "https://facturaa.vercel.app",
    githubFrontend: "https://github.com/TikZSZ/factura-frontend",
    githubBackend: "https://github.com/TikZSZ/factura-backend"
  }
];
</script>

<template>
  <div class="space-y-16">
    <!-- TIER 03: Competitive Hackathon Wins -->
    <section id="hackathons" class="py-12 border-b border-zinc-800/60">
      <div class="mb-8">
        <div class="flex items-center gap-2 font-mono text-xs text-emerald-400 uppercase tracking-widest">
          <span>Tier 03</span>
          <span>/</span>
          <span>Rapid Execution</span>
        </div>
        <h2 class="text-2xl sm:text-3xl font-bold tracking-tight text-white mt-1">
          Competitive Hackathon Wins & Research Prototypes
        </h2>
        <p class="text-zinc-400 text-sm mt-2 max-w-2xl font-light">
          Built under intense 24-72 hour constraints. Evaluated and awarded by enterprise judges for novel cryptographic architectures, zero-trust protocols, and agentic UX.
        </p>
      </div>

      <div class="space-y-6">
        <div
          v-for="proj in hackathonProjects"
          :key="proj.title"
          class="p-6 rounded-xl bg-zinc-900/40 border border-zinc-800/80 hover:border-zinc-700/80 transition-all"
        >
          <div class="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 pb-3 border-b border-zinc-800/60">
            <div>
              <div class="flex items-center gap-2 font-mono text-xs">
                <span class="px-2 py-0.5 rounded font-medium" :class="proj.badgeClass">{{ proj.award }}</span>
                <span class="text-zinc-500">•</span>
                <span class="text-zinc-400">{{ proj.context }}</span>
              </div>
              <h3 class="text-lg sm:text-xl font-bold text-white mt-1.5">{{ proj.title }}</h3>
            </div>
            <div class="flex flex-wrap items-center gap-4 text-xs font-mono pt-1 sm:pt-0">
              <a v-if="proj.demo" :href="proj.demo" target="_blank" rel="noopener noreferrer" class="text-zinc-300 hover:text-white flex items-center gap-1 transition-colors">
                <span>Demo</span>
                <span>↗</span>
              </a>
              <a v-if="proj.github" :href="proj.github" target="_blank" rel="noopener noreferrer" class="text-zinc-300 hover:text-white flex items-center gap-1 transition-colors">
                <span>GitHub</span>
                <span>↗</span>
              </a>
              <a v-if="proj.githubFrontend" :href="proj.githubFrontend" target="_blank" rel="noopener noreferrer" class="text-zinc-300 hover:text-white flex items-center gap-1 transition-colors">
                <span>Frontend</span>
                <span>↗</span>
              </a>
              <a v-if="proj.githubBackend" :href="proj.githubBackend" target="_blank" rel="noopener noreferrer" class="text-zinc-300 hover:text-white flex items-center gap-1 transition-colors">
                <span>Backend</span>
                <span>↗</span>
              </a>
              <a v-if="proj.press" :href="proj.press" target="_blank" rel="noopener noreferrer" class="text-emerald-400 hover:text-emerald-300 flex items-center gap-1 transition-colors">
                <span>Press</span>
                <span>↗</span>
              </a>
            </div>
          </div>

          <p class="mt-4 text-sm text-zinc-300 leading-relaxed font-light">
            {{ proj.description }}
          </p>

          <div class="mt-4 flex flex-wrap gap-2 text-xs font-mono text-zinc-400">
            <span v-for="tag in proj.tags" :key="tag" class="px-2 py-0.5 rounded bg-zinc-800/80 border border-zinc-700/40 text-zinc-300">
              {{ tag }}
            </span>
          </div>
        </div>
      </div>
    </section>

    <!-- TIER 04: Systems & Engineering Prototypes -->
    <section id="systems" class="py-12 border-b border-zinc-800/60">
      <div class="mb-8">
        <div class="flex items-center gap-2 font-mono text-xs text-zinc-400 uppercase tracking-widest">
          <span>Tier 04</span>
          <span>/</span>
          <span>Distributed Systems</span>
        </div>
        <h2 class="text-2xl sm:text-3xl font-bold tracking-tight text-white mt-1">
          Systems Engineering & Deep Architecture
        </h2>
        <p class="text-zinc-400 text-sm mt-2 max-w-2xl font-light">
          Explorations in high-concurrency event buses, state synchronization, and NLP cognitive aids.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div
          v-for="sys in systemsProjects"
          :key="sys.title"
          class="p-5 rounded-xl bg-zinc-900/30 border border-zinc-800/80 hover:border-zinc-700/80 transition-all flex flex-col justify-between"
        >
          <div>
            <div class="flex items-center justify-between text-xs font-mono text-zinc-500 mb-2">
              <span class="text-zinc-400">{{ sys.category }}</span>
              <span>{{ sys.meta }}</span>
            </div>
            <h3 class="text-base font-semibold text-white">{{ sys.title }}</h3>
            <p class="text-xs sm:text-sm text-zinc-400 mt-2 leading-relaxed font-light">
              {{ sys.description }}
            </p>
          </div>
          <div class="mt-4 pt-3 border-t border-zinc-800/60 flex items-center justify-between text-xs font-mono">
            <div class="flex gap-1.5 text-zinc-500">
              <span v-for="t in sys.tags" :key="t" class="px-1.5 py-0.5 rounded bg-zinc-800/60 text-zinc-400">{{ t }}</span>
            </div>
            <div class="flex gap-3">
              <a v-if="sys.demo" :href="sys.demo" target="_blank" rel="noopener noreferrer" class="text-zinc-300 hover:text-white">Demo ↗</a>
              <a v-if="sys.github" :href="sys.github" target="_blank" rel="noopener noreferrer" class="text-zinc-300 hover:text-white">GitHub ↗</a>
            </div>
          </div>
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
    badgeClass: "bg-amber-950/40 text-amber-300 border border-amber-800/40",
    context: "Hedera HelloFuture Hackathon",
    description: "Architected an autonomous conversational agent translating plain English user intent into cryptographic Hedera Hashgraph transactions, token transfers, and smart contract execution. Built to eliminate the friction of Web3 RPC endpoints for both developers and non-technical users.",
    tags: ["LLM Agents", "Hedera Hashgraph", "Consensus Service", "TypeScript", "Next.js"],
    demo: "https://hedera-ai.vercel.app/",
    github: "https://github.com/TikZSZ/hedera-chat",
    press: "https://hedera.com/blog/these-are-the-winners-of-the-2024-hellofuture-hackathon/"
  },
  {
    title: "dMail: Zero-Trust End-to-End Encrypted Decentralized Mail",
    award: "1st Prize Winner",
    badgeClass: "bg-amber-950/40 text-amber-300 border border-amber-800/40",
    context: "Hedera India Hackathon",
    description: "Designed a zero-trust cryptographic mail protocol powered entirely by client-side asymmetric encryption over Hedera Hashgraph. Completely decouples user identity and personal metadata from message transport, ensuring absolute communication privacy.",
    tags: ["Zero-Trust", "Asymmetric Cryptography", "Distributed Ledger", "Vue.js", "NestJS"],
    demo: "https://dmaill.vercel.app",
    githubFrontend: "https://github.com/TikZSZ/defi-email-frontend",
    githubBackend: "https://github.com/TikZSZ/defi-email-backend",
    press: "https://www.dqindia.com/three-innovative-distributed-ledger-based-solutions-top-hedera-india-hackathon"
  },
  {
    title: "HiD: Decentralized Identity & Selective Disclosure Credentials",
    award: "2nd Prize Winner · Data Track",
    badgeClass: "bg-zinc-800 text-zinc-300 border border-zinc-700/60",
    context: "Hedera HelloFuture Hackathon 2.0",
    description: "Designed a self-sovereign Decentralized Identity (DID) and Verifiable Credentials (VC) infrastructure on Hedera. Allows individuals to prove specific identity claims (e.g., age, accredited status) through cryptographic proofs without disclosing raw personal data.",
    tags: ["DID / VC", "Cryptographic Signatures", "Hedera SDK", "Privacy Engineering"],
    demo: "https://hedera-id.vercel.app",
    github: "https://github.com/TikZSZ/HiD",
    press: "https://hedera.com/blog/these-are-the-winners-of-the-hellofuture-hackathon-2-0/"
  },
  {
    title: "Factura: Zero-Trust Cryptographic B2B Invoicing Protocol",
    award: "Hackathon Winner",
    badgeClass: "bg-zinc-800 text-zinc-300 border border-zinc-700/60",
    context: "Hedera India Hackathon (Extra Build)",
    description: "Built on-the-fly during extra remaining time at the Hedera India Hackathon. Provides immutable buyer-seller escrow agreements, automated payment triggers, and transparent audit trails using cryptographic consensus.",
    tags: ["B2B Settlement", "Escrow HApp", "NestJS", "Vue.js"],
    demo: "https://facturaa.vercel.app",
    githubFrontend: "https://github.com/TikZSZ/factura-frontend",
    githubBackend: "https://github.com/TikZSZ/factura-backend"
  }
];

const systemsProjects = [
  {
    title: "Distributed Microservices Ticketing Engine",
    category: "Distributed Systems Architecture",
    meta: "Production Patterns",
    description: "Event-driven microservices architecture implementing distributed concurrency control, ephemeral ticket locking, and at-least-once delivery semantics using NATS Streaming, Redis, MongoDB, and Kubernetes.",
    tags: ["NATS Streaming", "Redis Locks", "Docker/K8s", "NestJS"],
    github: "https://github.com/TikZSZ/microservices-ticket-app"
  },
  {
    title: "Jargon Free: NLP Cognitive Simplifier",
    category: "Natural Language Processing",
    meta: "Accessibility Engine",
    description: "Content-simplification tool scanning dense research and technical writing to automatically detect and deconstruct unnecessary jargon using Wikipedia knowledge graphs and contextual embeddings.",
    tags: ["React", "TypeScript", "NLP Graph API"],
    demo: "https://jargon-free.netlify.app/",
    github: "https://github.com/TikZSZ/jargon-free"
  },
  {
    title: "Real-Time Synchronized Media Streaming Prototype",
    category: "High-Concurrency State Sync",
    meta: "Scalable Architecture",
    description: "Spotify-like streaming system handling multi-file concurrent upload pipelines, real-time database state replication, and responsive playback state management.",
    tags: ["Vue.js", "Firebase", "TypeScript"],
    demo: "https://music-app-iota.vercel.app/",
    github: "https://github.com/TikZSZ/music-app"
  }
];
</script>

<template>
  <section id="experience" class="py-12 border-b border-zinc-800/60">
    <div class="mb-8">
      <div class="flex items-center gap-2 font-mono text-xs text-zinc-400 uppercase tracking-widest">
        <span>Timeline</span>
        <span>/</span>
        <span>Operational Track Record</span>
      </div>
      <h2 class="text-2xl sm:text-3xl font-bold tracking-tight text-white mt-1">
        Experience & Proven Agency
      </h2>
      <p class="text-zinc-400 text-sm mt-2 max-w-2xl font-light">
        Taking responsibility early: from leading physical business automation at 19 to engineering autonomous AI systems.
      </p>
    </div>

    <div class="space-y-8">
      <!-- ClyrisAI -->
      <div class="p-6 rounded-xl bg-zinc-900/30 border border-zinc-800/80">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-zinc-800/60">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-lg bg-zinc-800 p-2 flex items-center justify-center shrink-0 border border-zinc-700/60">
              <img src="/clyris_logo.png" alt="ClyrisAI" class="max-w-full max-h-full object-contain filter invert opacity-90" />
            </div>
            <div>
              <h3 class="text-lg font-bold text-white">Founder & CEO</h3>
              <div class="font-mono text-xs text-zinc-400">ClyrisAI · Systems Intelligence</div>
            </div>
          </div>
          <div class="font-mono text-xs text-zinc-400">
            Oct 2025 — Present · San Francisco / Remote
          </div>
        </div>

        <div class="mt-4 space-y-2 text-sm text-zinc-300 font-light leading-relaxed">
          <p>
            Architected Clyris to eliminate superficial resume screening and LeetCode puzzles from technical hiring. Shifted evaluation loops directly to automated decision reviews of candidates' own production repositories.
          </p>
          <ul class="list-disc list-inside space-y-1.5 text-zinc-400 text-xs sm:text-sm pl-1">
            <li>
              <strong class="text-zinc-200 font-medium">Core Intelligence Engine:</strong> Developed automated AST parsers and reality check algorithms that separate authentic systems builders from tutorial clones, cutting senior engineering interview hours by 50%+.
            </li>
            <li>
              <strong class="text-zinc-200 font-medium">Autonomous RevOps & Growth Engine:</strong> Architected a 4-region timezone-compensated dispatch sequencer (US_East, US_West, India, EMEA), multi-layer SMTP waterfall enrichment, and an AI-native CRM that autonomously drives enterprise inbound and outbound pipelines.
            </li>
            <li>
              <strong class="text-zinc-200 font-medium">Open Source Resolution:</strong> Built and published <code class="font-mono text-xs px-1 py-0.5 rounded bg-zinc-800 text-zinc-300">@clyrisai/gitresolve</code> on npm, mapping candidate profiles directly to verifiable upstream git footprints.
            </li>
          </ul>
        </div>

        <div class="mt-4 pt-3 border-t border-zinc-800/60 flex items-center gap-4 text-xs font-mono text-zinc-400">
          <a href="https://clyrisai.com" target="_blank" rel="noopener noreferrer" class="hover:text-white transition-colors">clyrisai.com ↗</a>
          <a href="https://x.com/clyrisai" target="_blank" rel="noopener noreferrer" class="hover:text-white transition-colors">x.com/clyrisai ↗</a>
          <a href="https://linkedin.com/company/clyrisai" target="_blank" rel="noopener noreferrer" class="hover:text-white transition-colors">linkedin/company/clyrisai ↗</a>
        </div>
      </div>

      <!-- JhattCut -->
      <div class="p-6 rounded-xl bg-zinc-900/30 border border-zinc-800/80">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-zinc-800/60">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-lg bg-zinc-800 p-2 flex items-center justify-center shrink-0 border border-zinc-700/60">
              <img src="/jhattcut_logo.png" alt="JhattCut" class="max-w-full max-h-full object-contain filter invert opacity-90" />
            </div>
            <div>
              <h3 class="text-lg font-bold text-white">Co-Founder & CTO</h3>
              <div class="font-mono text-xs text-zinc-400">JhattCut · Salon ERP & High-Concurrency Scheduling</div>
            </div>
          </div>
          <div class="font-mono text-xs text-zinc-400">
            Jan 2022 — Jun 2023 · Delhi, India
          </div>
        </div>

        <div class="mt-4 space-y-2 text-sm text-zinc-300 font-light leading-relaxed">
          <p>
            Co-founded and served as CTO at age 19. Scaled cloud-based operational scheduling and management software to over 30 physical salons across Delhi during the COVID-era recovery.
          </p>
          <ul class="list-disc list-inside space-y-1.5 text-zinc-400 text-xs sm:text-sm pl-1">
            <li>
              <strong class="text-zinc-200 font-medium">Microservices Backend:</strong> Designed and deployed an event-driven backend in Node.js (NestJS, Express), NATS messaging, and MongoDB for low-latency scheduling and real-time seat allocation.
            </li>
            <li>
              <strong class="text-zinc-200 font-medium">Cloud Infrastructure:</strong> Containerized microservices using Docker on Google Cloud Platform (GCP) with automated CI/CD pipelines, zero-downtime rolling deploys, and Redis caching.
            </li>
            <li>
              <strong class="text-zinc-200 font-medium">Team Leadership:</strong> Led an engineering team of 5 developers, managing sprint cycles, architecture specifications, and rapid iterations from prototype to production adoption.
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>

<template>
  <section id="experience" class="py-12 border-b border-zinc-200/80">
    <div class="mb-8">
      <div class="flex items-center gap-2 font-mono text-xs text-zinc-500 uppercase tracking-widest font-semibold">
        <span>Timeline</span>
        <span>/</span>
        <span>Operational Track Record</span>
      </div>
      <h2 class="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-950 mt-1">
        Experience & Proven Agency
      </h2>
      <p class="text-zinc-600 text-sm mt-2 max-w-2xl font-light">
        Taking full ownership early: from scaling physical salon software at 19 to engineering distributed code intelligence systems.
      </p>
    </div>

    <div class="space-y-6">
      <!-- ClyrisAI -->
      <div class="p-6 sm:p-8 rounded-2xl bg-white border border-zinc-200/90 shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-zinc-100">
          <div class="flex items-center gap-3.5">
            <div class="w-11 h-11 rounded-xl bg-zinc-100 p-2 flex items-center justify-center shrink-0 border border-zinc-200/80">
              <img src="/clyris_logo.png" alt="ClyrisAI" class="max-w-full max-h-full object-contain" />
            </div>
            <div>
              <h3 class="text-lg font-bold text-zinc-950">Founder & CEO</h3>
              <div class="font-mono text-xs text-zinc-500">ClyrisAI · Automated Code Intelligence & RevOps</div>
            </div>
          </div>
          <div class="font-mono text-xs text-zinc-500">
            Oct 2025 - Present · India / Remote (Building for Global Teams)
          </div>
        </div>

        <div class="mt-4 space-y-3 text-sm text-zinc-700 font-light leading-relaxed">
          <p>
            Bootstrapped and architected the complete technology and distribution stack for Clyris, leading systems engineering from initial prototype to production scale.
          </p>
          <ul class="list-disc list-inside space-y-2 text-zinc-600 text-xs sm:text-sm pl-1">
            <li>
              <strong class="text-zinc-900 font-medium">Distributed Saga & Ingestion Pipeline:</strong> Engineered an asynchronous, multi-stage ingestion system processing multi-repo candidate submissions. Implemented an event-driven architecture with saga-like reconciliation loops, background job queues, and idempotent execution to guarantee fault-tolerant recovery without losing state or burning duplicate LLM tokens.
            </li>
            <li>
              <strong class="text-zinc-900 font-medium">Inference Cost Engineering (2.3x Reduction):</strong> Built an internal agentic benchmarking harness to evaluate frontier reasoning models on cost and latency. Benchmarked and migrated deep evaluation stages to Google Cloud Vertex AI (Gemini 3.8 Flash with thinking tokens), slashing inference costs by <strong class="text-zinc-900 font-medium">2.3x</strong> while maintaining evaluation parity with manual senior staff audits.
            </li>
            <li>
              <strong class="text-zinc-900 font-medium">Autonomous RevOps & AI-Native CRM:</strong> Replaced expensive commercial sales stacks ($3,000+/mo across Clay, Apollo, and Salesforce) by engineering custom revenue infrastructure: scrapers continuously monitoring <strong class="text-zinc-900 font-medium">59,185+ live hiring signals</strong> directly at source, low-cost <strong class="text-zinc-900 font-medium">Exa semantic enrichment</strong>, a <strong class="text-zinc-900 font-medium">Master-to-Child campaign synchronizer</strong> coordinating 4 regional cloud fleets (AWS, GCP, OVH, DigitalOcean), and an <strong class="text-zinc-900 font-medium">AI-native CRM memory brain</strong> resolving contacts and objection tracking from unstructured LinkedIn DMs and email webhooks.
            </li>
            <li>
              <strong class="text-zinc-900 font-medium">Open-Source Registry Contribution:</strong> Authored and published <code class="font-mono text-xs px-1.5 py-0.5 rounded bg-zinc-100 border border-zinc-200 text-zinc-800">@clyrisai/gitresolve</code> on npm, mapping candidate profiles and unstructured resumes directly to verifiable GitHub footprints and AST trees.
            </li>
          </ul>
        </div>

        <div class="mt-5 pt-3.5 border-t border-zinc-100 flex items-center gap-4 text-xs font-mono text-zinc-600">
          <a href="https://clyrisai.com" target="_blank" rel="noopener noreferrer" class="hover:text-black transition-colors font-medium">clyrisai.com ↗</a>
          <a href="https://clyrisai.com/demo?p=portfolio" target="_blank" rel="noopener noreferrer" class="hover:text-black transition-colors font-medium">interactive demo ↗</a>
          <a href="https://x.com/clyrisai" target="_blank" rel="noopener noreferrer" class="hover:text-black transition-colors font-medium">x.com/clyrisai ↗</a>
          <a href="https://linkedin.com/company/clyrisai" target="_blank" rel="noopener noreferrer" class="hover:text-black transition-colors font-medium">linkedin/company/clyrisai ↗</a>
        </div>
      </div>

      <!-- JhattCut -->
      <div class="p-6 sm:p-8 rounded-2xl bg-white border border-zinc-200/90 shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-zinc-100">
          <div class="flex items-center gap-3.5">
            <div class="w-11 h-11 rounded-xl bg-zinc-100 p-2 flex items-center justify-center shrink-0 border border-zinc-200/80">
              <img src="/jhattcut_logo.png" alt="JhattCut" class="max-w-full max-h-full object-contain" />
            </div>
            <div>
              <h3 class="text-lg font-bold text-zinc-950">Co-Founder & CTO</h3>
              <div class="font-mono text-xs text-zinc-500">JhattCut · Salon ERP & High-Concurrency Scheduling</div>
            </div>
          </div>
          <div class="font-mono text-xs text-zinc-500">
            Jan 2022 - Jun 2023 (1 yr 6 mos) · Delhi, India
          </div>
        </div>

        <div class="mt-4 space-y-2.5 text-sm text-zinc-700 font-light leading-relaxed">
          <p>
            Co-founded and led the engineering team for a COVID-era salon booking application adopted by over 30 salons in Delhi. Role evolved from initial prototype to architecting and scaling a production-ready, multi-tenant system.
          </p>
          <ul class="list-disc list-inside space-y-1.5 text-zinc-600 text-xs sm:text-sm pl-1">
            <li>
              <strong class="text-zinc-900 font-medium">Microservices Backend:</strong> Architected and implemented a microservices-based backend using Node.js (NestJS, Express), NATS messaging, and MongoDB to handle core business logic, real-time booking slots, and transaction handling.
            </li>
            <li>
              <strong class="text-zinc-900 font-medium">Cloud Infrastructure:</strong> Designed and managed cloud infrastructure on GCP, utilizing Docker for containerization and implementing CI/CD pipelines for automated zero-downtime deployments.
            </li>
            <li>
              <strong class="text-zinc-900 font-medium">High Performance & Caching:</strong> Implemented data management strategies with PostgreSQL and Redis caching for low latency, maximum seat availability, and concurrency protection during booking spikes.
            </li>
            <li>
              <strong class="text-zinc-900 font-medium">Engineering Leadership:</strong> Led a team of developers, overseeing the full product development lifecycle from concept to launch and subsequent operational iterations.
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>

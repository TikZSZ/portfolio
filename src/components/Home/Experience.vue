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
            Every resume for modern software roles looks indistinguishable, while coding tests lose signal to AI. Engineering teams rarely have 30 minutes before every call to audit an applicant's repos. We built an automated engine that audits candidate codebases in bulk, ranks the top 5% by actual architectural depth, and writes a targeted 5-minute technical stress-test for live interview calls.
          </p>
          <ul class="list-disc list-inside space-y-2 text-zinc-600 text-xs sm:text-sm pl-1">
            <li>
              <strong class="text-zinc-900 font-medium">Reality Check & Claim Validation:</strong> Inspects AST structures and git commits to separate real systems from tutorial clones. Flagged hidden shortcuts (e.g. catching an applicant whose "async backend" was secretly hardcoded to a mock toggle with client-side sleep timers).
            </li>
            <li>
              <strong class="text-zinc-900 font-medium">Resumable Distributed Pipeline:</strong> Engineered a multi-stage ingestion system processing multiple repositories per candidate. Implemented an event-driven architecture with saga-like reconciliation loops, async job queues, and idempotent execution for fault tolerance.
            </li>
            <li>
              <strong class="text-zinc-900 font-medium">Autonomous RevOps & Growth Engine:</strong> Architected a 24/7 outbound distribution pipeline with real-time intent signal detection (59k+ hiring signals), multi-provider SMTP waterfall verification, and a 4-region timezone-compensated sequencer (US East, US West, India, EMEA).
            </li>
            <li>
              <strong class="text-zinc-900 font-medium">Open Source Resolution:</strong> Authored and published <code class="font-mono text-xs px-1.5 py-0.5 rounded bg-zinc-100 border border-zinc-200 text-zinc-800">@clyrisai/gitresolve</code> on npm, mapping candidate profiles and resumes directly to verifiable GitHub footprints.
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

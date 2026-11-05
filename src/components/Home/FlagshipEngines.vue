<template>
  <section id="flagships" class="py-12 border-b border-zinc-800/60">
    <div class="mb-8">
      <div class="flex items-center gap-2 font-mono text-xs text-emerald-400 uppercase tracking-widest">
        <span>Tier 01</span>
        <span>/</span>
        <span>Flagship Systems</span>
      </div>
      <h2 class="text-2xl sm:text-3xl font-bold tracking-tight text-white mt-1">
        Ventures & Autonomous Production Engines
      </h2>
      <p class="text-zinc-400 text-sm mt-2 max-w-2xl font-light">
        Primary focus over the past year: architecting deep code evaluation intelligence and scaling autonomous distribution infrastructure from zero to production.
      </p>
    </div>

    <div class="space-y-12">
      <!-- ENGINE 01: Clyris AI Core Evaluation Engine -->
      <article class="p-6 sm:p-8 rounded-xl bg-zinc-900/40 border border-zinc-800/80 hover:border-zinc-700/80 transition-all">
        <div class="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-5 border-b border-zinc-800/60">
          <div>
            <div class="flex items-center gap-2.5 font-mono text-xs">
              <span class="px-2 py-0.5 rounded bg-zinc-800 text-zinc-300 font-medium">Core Product</span>
              <span class="text-zinc-500">•</span>
              <span class="text-zinc-400">Deep Code Intelligence</span>
            </div>
            <h3 class="text-xl sm:text-2xl font-bold text-white mt-1.5 flex items-center gap-2">
              Clyris AI: Proof-of-Work Code Evaluation Engine
            </h3>
          </div>
          <div class="flex items-center gap-3 text-xs font-mono">
            <a href="https://clyrisai.com" target="_blank" rel="noopener noreferrer" class="px-3 py-1.5 rounded bg-zinc-800 hover:bg-zinc-700 text-zinc-200 transition-colors flex items-center gap-1.5">
              <span>clyrisai.com</span>
              <span>↗</span>
            </a>
            <a href="/videos/clyris_ai.mp4" target="_blank" class="px-3 py-1.5 rounded bg-emerald-950/40 border border-emerald-800/40 text-emerald-300 hover:bg-emerald-900/40 transition-colors flex items-center gap-1.5">
              <span>Raw Video</span>
              <span>↓</span>
            </a>
          </div>
        </div>

        <div class="mt-5 space-y-4 text-sm text-zinc-300 leading-relaxed font-light">
          <p>
            <strong class="text-zinc-100 font-medium">The Problem:</strong> Engineering hiring is structurally broken. Resume screening is easily gamed with AI embellishments, while algorithmic LeetCode puzzles measure memorization instead of genuine architectural judgment, production readiness, and failure-mode handling.
          </p>
          <p>
            <strong class="text-zinc-100 font-medium">The Solution:</strong> Clyris shifts technical interviews from arbitrary quizzes to structured decision reviews of the candidate's actual production repositories. It automates candidate repository discovery via <code class="font-mono text-xs px-1.5 py-0.5 rounded bg-zinc-800 text-zinc-300">@clyrisai/gitresolve</code>, parses syntax trees (ASTs), inspects git blame timelines, and produces deep candidate evaluation dossiers.
          </p>
        </div>

        <!-- Technical Deep-Dive Grid -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-3 my-6 font-mono text-xs">
          <div class="p-3.5 rounded bg-black/40 border border-zinc-800/60">
            <div class="text-emerald-400 font-medium">Reality Check Engine</div>
            <div class="text-zinc-400 font-sans mt-1.5 text-xs leading-normal font-light">
              Distinguishes authentic production systems from superficial tutorial clones. Detects missing operational layers (unhandled error boundaries, incomplete payment gateways, mocked stubs).
            </div>
          </div>
          <div class="p-3.5 rounded bg-black/40 border border-zinc-800/60">
            <div class="text-emerald-400 font-medium">Claim Validation</div>
            <div class="text-zinc-400 font-sans mt-1.5 text-xs leading-normal font-light">
              Cross-verifies claims on resumes and READMEs against actual git commits, author timestamps, and cyclomatic complexity across microservices.
            </div>
          </div>
          <div class="p-3.5 rounded bg-black/40 border border-zinc-800/60">
            <div class="text-emerald-400 font-medium">Code-Derived Probes</div>
            <div class="text-zinc-400 font-sans mt-1.5 text-xs leading-normal font-light">
              Generates line-anchored interview probes (e.g. NATS streaming idempotency, Redis cache invalidation race conditions) with "Listen For" criteria & fast-fail probes.
            </div>
          </div>
        </div>

        <!-- Embedded Video Player (Cropped 1080p stream, no browser/taskbar) -->
        <div class="mt-6 rounded-lg overflow-hidden border border-zinc-800 bg-black">
          <div class="px-4 py-2 bg-zinc-900/80 border-b border-zinc-800 flex items-center justify-between text-xs font-mono text-zinc-400">
            <div class="flex items-center gap-2">
              <span class="w-2 h-2 rounded-full bg-emerald-400"></span>
              <span>Platform Demo Showcase (3m 38s) · Direct Code Evaluation Walkthrough</span>
            </div>
            <span class="hidden sm:inline text-zinc-500">1080p Clean Capture</span>
          </div>
          <div class="relative aspect-[16/9] w-full bg-black">
            <video
              controls
              preload="metadata"
              poster="/posters/clyris_ai_dossier.jpg"
              class="w-full h-full object-contain"
            >
              <source src="/videos/clyris_ai.mp4" type="video/mp4" />
              Your browser does not support HTML5 video playback.
            </video>
          </div>
          <div class="p-3.5 bg-zinc-950/60 border-t border-zinc-800/60 text-xs font-mono text-zinc-500 flex flex-wrap items-center justify-between gap-2">
            <div>Key Chapters: 0:24 Candidate Batches → 1:03 Reality Check & Claim Validation → 2:10 Line-Anchored Probes → 3:12 Executive Dossier</div>
            <div class="text-zinc-400">Impact: 50%+ reduction in engineering interview loops</div>
          </div>
        </div>
      </article>

      <!-- ENGINE 02: Clyris Autonomous RevOps & Outreach CRM -->
      <article class="p-6 sm:p-8 rounded-xl bg-zinc-900/40 border border-zinc-800/80 hover:border-zinc-700/80 transition-all">
        <div class="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-5 border-b border-zinc-800/60">
          <div>
            <div class="flex items-center gap-2.5 font-mono text-xs">
              <span class="px-2 py-0.5 rounded bg-emerald-950/60 text-emerald-400 font-medium border border-emerald-800/40">Growth & Distribution Engine</span>
              <span class="text-zinc-500">•</span>
              <span class="text-zinc-400">Revenue Infrastructure</span>
            </div>
            <h3 class="text-xl sm:text-2xl font-bold text-white mt-1.5 flex items-center gap-2">
              Autonomous RevOps Engine & AI-Native CRM
            </h3>
          </div>
          <div class="flex items-center gap-3 text-xs font-mono">
            <span class="px-3 py-1.5 rounded bg-zinc-800 text-zinc-400">Internal Revenue Engine</span>
            <a href="/videos/clyris_outreach_crm.mp4" target="_blank" class="px-3 py-1.5 rounded bg-emerald-950/40 border border-emerald-800/40 text-emerald-300 hover:bg-emerald-900/40 transition-colors flex items-center gap-1.5">
              <span>Raw Video</span>
              <span>↓</span>
            </a>
          </div>
        </div>

        <div class="mt-5 space-y-4 text-sm text-zinc-300 leading-relaxed font-light">
          <p>
            <strong class="text-zinc-100 font-medium">The Problem:</strong> Scaling B2B enterprise distribution requires constant prospecting, signal monitoring, contact waterfall verification, and SDR orchestration. Manual outreach teams are slow, expensive, and trigger spam filters with uncoordinated batch blasts.
          </p>
          <p>
            <strong class="text-zinc-100 font-medium">The Solution:</strong> Built a 24/7 autonomous revenue and outbound distribution pipeline that powers Clyris customer acquisition (architected as a standalone enterprise product). The system discovers hiring signals in real time, executes multi-layer SMTP waterfall verification, dispatches across 4 timezone fleets, and synchronizes with an AI-native CRM memory brain.
          </p>
        </div>

        <!-- Technical Deep-Dive Grid -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-3 my-6 font-mono text-xs">
          <div class="p-3.5 rounded bg-black/40 border border-zinc-800/60">
            <div class="text-emerald-400 font-medium">Job Signals Playground</div>
            <div class="text-zinc-400 font-sans mt-1.5 text-xs leading-normal font-light">
              Continuous ingestion of 59,000+ intent hiring signals and 4,600+ companies discovered via automated cloud scrapers and Exa-powered decision-maker resolution.
            </div>
          </div>
          <div class="p-3.5 rounded bg-black/40 border border-zinc-800/60">
            <div class="text-emerald-400 font-medium">Timezone-Compensated Sequencer</div>
            <div class="text-zinc-400 font-sans mt-1.5 text-xs leading-normal font-light">
              Multi-regional execution fleets across 4 endpoints (US_East, US_West, India, EMEA) with morning/noon staggered schedules to maximize open rates and protect deliverability.
            </div>
          </div>
          <div class="p-3.5 rounded bg-black/40 border border-zinc-800/60">
            <div class="text-emerald-400 font-medium">AI CRM & Memory Brain</div>
            <div class="text-zinc-400 font-sans mt-1.5 text-xs leading-normal font-light">
              Smartlead webhook stream, persistent memory for objection tracking, and an autonomous task agent auto-drafting contextual replies and maintaining the kanban pipeline.
            </div>
          </div>
        </div>

        <!-- Embedded Video Player -->
        <div class="mt-6 rounded-lg overflow-hidden border border-zinc-800 bg-black">
          <div class="px-4 py-2 bg-zinc-900/80 border-b border-zinc-800 flex items-center justify-between text-xs font-mono text-zinc-400">
            <div class="flex items-center gap-2">
              <span class="w-2 h-2 rounded-full bg-emerald-400"></span>
              <span>RevOps Architecture Showcase (2m 16s) · Full Pipeline Execution</span>
            </div>
            <span class="hidden sm:inline text-zinc-500">Autonomous Execution</span>
          </div>
          <div class="relative aspect-[16/9] w-full bg-black">
            <video
              controls
              preload="metadata"
              poster="/posters/outreach_crm_campaigns.jpg"
              class="w-full h-full object-contain"
            >
              <source src="/videos/clyris_outreach_crm.mp4" type="video/mp4" />
              Your browser does not support HTML5 video playback.
            </video>
          </div>
          <div class="p-3.5 bg-zinc-950/60 border-t border-zinc-800/60 text-xs font-mono text-zinc-500 flex flex-wrap items-center justify-between gap-2">
            <div>Key Chapters: 0:10 Signal Ingestion & 4-Region Fleets → 0:52 Cloud Automation & Waterfall → 1:21 Focus & AI Memory Ingest → 2:09 Pipeline Kanban</div>
            <div class="text-zinc-400">Status: In active production; generating enterprise pipeline</div>
          </div>
        </div>
      </article>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>

<template>
  <section id="flagships" class="py-12 border-b border-zinc-200/80">
    <div class="mb-8">
      <div class="flex items-center gap-2 font-mono text-xs text-emerald-700 uppercase tracking-widest font-semibold">
        <span>Tier 01</span>
        <span>/</span>
        <span>Flagship Systems</span>
      </div>
      <h2 class="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-950 mt-1">
        Ventures & Autonomous Production Engines
      </h2>
      <p class="text-zinc-600 text-sm mt-2 max-w-2xl font-light">
        Primary focus over the past year: architecting deep code evaluation intelligence and scaling autonomous distribution infrastructure from zero to production.
      </p>
    </div>

    <div class="space-y-10">
      <!-- ENGINE 01: Clyris AI Core Evaluation Engine -->
      <article class="p-6 sm:p-8 rounded-2xl bg-white border border-zinc-200/90 shadow-[0_1px_3px_rgba(0,0,0,0.04)] hover:border-zinc-300 transition-all">
        <div class="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-5 border-b border-zinc-100">
          <div>
            <div class="flex items-center gap-2.5 font-mono text-xs">
              <span class="px-2 py-0.5 rounded bg-zinc-100 text-zinc-700 font-medium border border-zinc-200/60">Core Product</span>
              <span class="text-zinc-300">•</span>
              <span class="text-zinc-500">Deep Code Intelligence</span>
            </div>
            <h3 class="text-xl sm:text-2xl font-bold text-zinc-950 mt-1.5">
              Clyris AI: Proof-of-Work Code Evaluation Engine
            </h3>
          </div>
          <div class="flex items-center gap-3 text-xs font-mono">
            <a href="https://clyrisai.com" target="_blank" rel="noopener noreferrer" class="px-3 py-1.5 rounded-lg bg-zinc-100 hover:bg-zinc-200 text-zinc-800 transition-colors flex items-center gap-1.5 border border-zinc-200/60">
              <span>clyrisai.com</span>
              <span>↗</span>
            </a>
            <a
              href="https://clyrisai.com/demo?p=portfolio"
              target="_blank"
              rel="noopener noreferrer"
              class="px-3.5 py-1.5 rounded-lg bg-emerald-50 border border-emerald-300 text-emerald-800 hover:bg-emerald-100 transition-colors flex items-center gap-1.5 font-medium"
            >
              <span>View Interactive Demo</span>
              <span>↗</span>
            </a>
          </div>
        </div>

        <div class="mt-5 space-y-3.5 text-sm text-zinc-700 leading-relaxed font-light">
          <p>
            <strong class="text-zinc-900 font-medium">The Problem:</strong> Resumes for modern engineering roles look indistinguishable, and standard coding puzzles test memorization over real engineering judgment. Senior technical interviewers lose hours manually reviewing candidate take-homes and GitHub profiles before calls.
          </p>
          <p>
            <strong class="text-zinc-900 font-medium">The Solution:</strong> Clyris <strong class="text-zinc-900 font-medium">traces applicant GitHub repos in bulk</strong>, separates tutorial clones from authentic architecture, and writes a targeted <strong class="text-zinc-900 font-medium">5-minute live technical interview script</strong> for hiring teams. Employs <strong class="text-zinc-900 font-medium">tree-sitter AST parsing</strong>, an <strong class="text-zinc-900 font-medium">LLM-as-a-Judge scoring pipeline</strong> (utilizing reasoning models via Google Cloud Vertex AI), and an internal <strong class="text-zinc-900 font-medium">agentic benchmarking harness</strong> to select optimal cost-to-performance inference models.
          </p>
        </div>

        <!-- Technical Deep-Dive Grid -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-3 my-6 font-mono text-xs">
          <div class="p-3.5 rounded-xl bg-zinc-50/70 border border-zinc-200/80">
            <div class="text-emerald-700 font-medium">Reality Check Engine</div>
            <div class="text-zinc-600 font-sans mt-1.5 text-xs leading-normal font-light">
              Detects <strong class="text-zinc-900 font-medium">tutorial clones vs authentic production systems</strong> using AST structure analysis. Catches shortcuts like candidates faking an async backend with <code class="text-[11px] px-1 py-0.5 rounded bg-zinc-200/70 text-zinc-800">USE_MOCK = true</code> toggles and client sleep timers.
            </div>
          </div>
          <div class="p-3.5 rounded-xl bg-zinc-50/70 border border-zinc-200/80">
            <div class="text-emerald-700 font-medium">Tree-Sitter AST & LLM Judge</div>
            <div class="text-zinc-600 font-sans mt-1.5 text-xs leading-normal font-light">
              Sequential chunking pipeline powered by native <strong class="text-zinc-900 font-medium">tree-sitter bindings</strong> and multi-stage <strong class="text-zinc-900 font-medium">LLM-as-a-Judge</strong> synthesis (Gemini 3.8 Flash on Vertex AI with thinking tokens, delivering 2.3x cost efficiency).
            </div>
          </div>
          <div class="p-3.5 rounded-xl bg-zinc-50/70 border border-zinc-200/80">
            <div class="text-emerald-700 font-medium">5-Min Live Interview Script</div>
            <div class="text-zinc-600 font-sans mt-1.5 text-xs leading-normal font-light">
              Writes targeted interview questions <strong class="text-zinc-900 font-medium">anchored to specific code lines</strong> in the candidate's repository (event bus failure points, idempotency, caching races) with explicit <strong class="text-zinc-900 font-medium">fast-fail probes</strong>.
            </div>
          </div>
        </div>

        <!-- Static High-Res Product Screenshot -->
        <a
          href="https://clyrisai.com/demo?p=portfolio"
          target="_blank"
          rel="noopener noreferrer"
          class="group block relative rounded-xl overflow-hidden border border-zinc-200 bg-zinc-900 shadow-sm hover:shadow-md transition-all"
        >
          <img
            src="/posters/clyris_ai_dossier.jpg"
            alt="Clyris AI Code Evaluation Platform Dossier"
            class="w-full aspect-[16/9] object-cover object-top opacity-95 group-hover:opacity-100 transition-all duration-300"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent flex items-end justify-between p-4 sm:p-5">
            <div class="text-white">
              <div class="flex items-center gap-2 text-xs font-mono text-emerald-300">
                <span class="w-2 h-2 rounded-full bg-emerald-400"></span>
                <span>clyrisai.com/demo?p=portfolio</span>
              </div>
              <div class="font-medium text-sm sm:text-base mt-0.5">Explore Interactive Candidate Dossier & Code Traces</div>
            </div>
            <span class="px-3 py-1.5 rounded-lg bg-white/95 text-zinc-950 font-mono text-xs font-medium shadow group-hover:bg-white flex items-center gap-1.5">
              <span>Open Walkthrough</span>
              <span>↗</span>
            </span>
          </div>
        </a>
      </article>

      <!-- ENGINE 02: Clyris Autonomous RevOps & Outreach CRM -->
      <article class="p-6 sm:p-8 rounded-2xl bg-white border border-zinc-200/90 shadow-[0_1px_3px_rgba(0,0,0,0.04)] hover:border-zinc-300 transition-all">
        <div class="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-5 border-b border-zinc-100">
          <div>
            <div class="flex items-center gap-2.5 font-mono text-xs">
              <span class="px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 font-medium border border-emerald-200/80">Growth & Distribution Engine</span>
              <span class="text-zinc-300">•</span>
              <span class="text-zinc-500">Revenue Infrastructure</span>
            </div>
            <h3 class="text-xl sm:text-2xl font-bold text-zinc-950 mt-1.5">
              Autonomous RevOps Engine & AI-Native CRM
            </h3>
          </div>
          <div class="flex items-center gap-3 text-xs font-mono">
            <span class="px-3 py-1.5 rounded-lg bg-zinc-100 text-zinc-600 border border-zinc-200/60">Internal Revenue Engine</span>
          </div>
        </div>

        <div class="mt-5 space-y-3.5 text-sm text-zinc-700 leading-relaxed font-light">
          <p>
            <strong class="text-zinc-900 font-medium">The Problem:</strong> Scaling B2B enterprise distribution requires constant prospecting, signal monitoring, contact waterfall verification, and SDR orchestration. Manual outreach teams are slow, expensive, and trigger spam filters with uncoordinated batch blasts.
          </p>
          <p>
            <strong class="text-zinc-900 font-medium">The Solution:</strong> Built a 24/7 autonomous revenue and outbound distribution pipeline that powers Clyris customer acquisition (architected for potential standalone enterprise spinout). Discovers hiring signals in real time, executes multi-layer SMTP waterfall verification, dispatches across <strong class="text-zinc-900 font-medium">4 timezone fleets</strong>, and synchronizes with an <strong class="text-zinc-900 font-medium">AI-native CRM memory brain</strong>.
          </p>
        </div>

        <!-- Technical Deep-Dive Grid -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-3 my-6 font-mono text-xs">
          <div class="p-3.5 rounded-xl bg-zinc-50/70 border border-zinc-200/80">
            <div class="text-emerald-700 font-medium">Job Signals Playground</div>
            <div class="text-zinc-600 font-sans mt-1.5 text-xs leading-normal font-light">
              Continuous ingestion of <strong class="text-zinc-900 font-medium">59,000+ intent hiring signals</strong> and 4,600+ companies discovered via automated cloud scrapers and Exa-powered decision-maker resolution.
            </div>
          </div>
          <div class="p-3.5 rounded-xl bg-zinc-50/70 border border-zinc-200/80">
            <div class="text-emerald-700 font-medium">Timezone Sequencer</div>
            <div class="text-zinc-600 font-sans mt-1.5 text-xs leading-normal font-light">
              Multi-regional execution fleets across <strong class="text-zinc-900 font-medium">4 endpoints (US East, US West, India, EMEA)</strong> with morning/noon staggered schedules to maximize open rates and protect deliverability.
            </div>
          </div>
          <div class="p-3.5 rounded-xl bg-zinc-50/70 border border-zinc-200/80">
            <div class="text-emerald-700 font-medium">AI CRM & Memory Brain</div>
            <div class="text-zinc-600 font-sans mt-1.5 text-xs leading-normal font-light">
              Smartlead webhook stream, <strong class="text-zinc-900 font-medium">persistent memory for objection tracking</strong>, and an autonomous task agent auto-drafting contextual replies and maintaining the kanban pipeline.
            </div>
          </div>
        </div>

        <!-- Static High-Res Product Screenshot -->
        <div class="relative rounded-xl overflow-hidden border border-zinc-200 bg-zinc-900 shadow-sm">
          <img
            src="/posters/outreach_crm_campaigns.jpg"
            alt="Clyris Autonomous RevOps Multi-Region Dispatch Architecture"
            class="w-full aspect-[16/9] object-cover object-top opacity-95"
          />
          <div class="p-3.5 bg-zinc-900/90 border-t border-zinc-800 text-xs font-mono text-zinc-300 flex flex-wrap items-center justify-between gap-2">
            <div class="flex items-center gap-2">
              <span class="w-2 h-2 rounded-full bg-emerald-400"></span>
              <span>4-Region Autonomous Dispatch (US East, US West, India, EMEA)</span>
            </div>
            <span class="text-zinc-400">Status: Active Production Infrastructure</span>
          </div>
        </div>
      </article>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>

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
              Clyris AI: Autonomous Proof-of-Work Code Auditing & Live Interview Engine
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
            <strong class="text-zinc-900 font-medium">The Technical Reality:</strong> Resumes and portfolio claims have lost signal to AI boilerplate, while standard coding puzzles test memorization over real engineering judgment. Senior technical interviewers lose hours before calls attempting to manually audit complex GitHub repositories, or enter calls unprepared to test architectural depth.
          </p>
          <p>
            <strong class="text-zinc-900 font-medium">AST-Level Auditing & Live Probes:</strong> Clyris <strong class="text-zinc-900 font-medium">parses applicant repositories in bulk down to the AST</strong>. It differentiates authentic production architectures from popular 40-hour tutorial clones and validates claims made in resumes against actual commit histories. Rather than a vague numerical score, it generates a <strong class="text-zinc-900 font-medium">targeted 5-minute live technical interview script</strong>: extracting exact code snippets with subtle race conditions, unhandled failure windows, and providing the interviewer with <strong class="text-zinc-900 font-medium">fast-fail probes and red-flag rubrics</strong>.
          </p>
        </div>

        <!-- Technical Deep-Dive Grid -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-3 my-6 font-mono text-xs">
          <div class="p-3.5 rounded-xl bg-zinc-50/70 border border-zinc-200/80">
            <div class="text-emerald-700 font-medium">Reality Check & Claim Auditing</div>
            <div class="text-zinc-600 font-sans mt-1.5 text-xs leading-normal font-light">
              Inspects AST structure to identify <strong class="text-zinc-900 font-medium">tutorial clones vs genuine systems</strong>. Uncovers deceptive shortcuts: caught an applicant claiming an async backend whose entire API was secretly wired to a <code class="text-[11px] px-1 py-0.5 rounded bg-zinc-200/70 text-zinc-800">USE_MOCK = true</code> toggle with client-side sleep timers.
            </div>
          </div>
          <div class="p-3.5 rounded-xl bg-zinc-50/70 border border-zinc-200/80">
            <div class="text-emerald-700 font-medium">Tree-Sitter AST & Vertex AI Judge</div>
            <div class="text-zinc-600 font-sans mt-1.5 text-xs leading-normal font-light">
              Native <strong class="text-zinc-900 font-medium">Tree-sitter bindings</strong> chunk codebases by scope. Orchestrates an <strong class="text-zinc-900 font-medium">LLM-as-a-Judge pipeline</strong> on Google Cloud Vertex AI (Gemini 3.8 Flash with thinking tokens), achieving <strong class="text-zinc-900 font-medium">2.3x cost efficiency</strong> while matching manual senior staff evaluations.
            </div>
          </div>
          <div class="p-3.5 rounded-xl bg-zinc-50/70 border border-zinc-200/80">
            <div class="text-emerald-700 font-medium">Live Code Probes & Fast-Fails</div>
            <div class="text-zinc-600 font-sans mt-1.5 text-xs leading-normal font-light">
              Pins exact code lines (e.g. NATS listener acknowledging before Redis persistence) with <strong class="text-zinc-900 font-medium">interviewer briefings</strong>: what signals to listen for, and explicit <strong class="text-zinc-900 font-medium">fast-fail traps</strong> (e.g. failing to explain the <code class="text-[11px] px-1 py-0.5 rounded bg-zinc-200/70 text-zinc-800">version</code> concurrency key).
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
            src="/posters/clyris_interview_probes.jpg"
            alt="Clyris AI Live Interview Probes and Code Evidence Engine"
            class="w-full aspect-[16/9] object-cover object-top opacity-95 group-hover:opacity-100 transition-all duration-300"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end justify-between p-4 sm:p-5">
            <div class="text-white">
              <div class="flex items-center gap-2 text-xs font-mono text-emerald-300">
                <span class="w-2 h-2 rounded-full bg-emerald-400"></span>
                <span>Live Dossier Artifact: Code-Derived Interview Questions</span>
              </div>
              <div class="font-medium text-sm sm:text-base mt-0.5">Explore Interactive Candidate Dossier, AST Traces & Live Interview Probes</div>
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
            <strong class="text-zinc-900 font-medium">The Distribution Challenge:</strong> Running cross-regional outbound across international timezones is fundamentally unsupported by standard sales software. Commercial platforms (Clay, Apollo) charge thousands in markups on stale databases, while traditional CRMs (Salesforce, HubSpot) require tedious manual logging, fail to capture context from LinkedIn DMs, and turn sales execution into slow administrative overhead.
          </p>
          <p>
            <strong class="text-zinc-900 font-medium">The Bespoke Revenue Stack:</strong> Architected a 24/7 autonomous distribution engine powering Clyris customer acquisition from zero. Ingests <strong class="text-zinc-900 font-medium">59,185+ live hiring intent signals directly from source job boards</strong>, enriches decision-makers at rock-bottom cost using <strong class="text-zinc-900 font-medium">Exa semantic search</strong>, and runs multi-layer <strong class="text-zinc-900 font-medium">SMTP waterfall hygiene</strong>. Dispatches via a custom <strong class="text-zinc-900 font-medium">Master-to-Child campaign sequencer</strong> across 4 regional cloud fleets, wired directly into an <strong class="text-zinc-900 font-medium">AI-native CRM memory brain</strong>.
          </p>
        </div>

        <!-- Technical Deep-Dive Grid -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-3 my-6 font-mono text-xs">
          <div class="p-3.5 rounded-xl bg-zinc-50/70 border border-zinc-200/80">
            <div class="text-emerald-700 font-medium">Source Sourcing & Exa Enrichment</div>
            <div class="text-zinc-600 font-sans mt-1.5 text-xs leading-normal font-light">
              Continuous scrapers monitor <strong class="text-zinc-900 font-medium">4,670+ hiring companies and 59k+ signals</strong> directly at source. Resolves engineering leadership dynamically via Exa semantic queries, avoiding thousands in monthly SaaS subscriptions.
            </div>
          </div>
          <div class="p-3.5 rounded-xl bg-zinc-50/70 border border-zinc-200/80">
            <div class="text-emerald-700 font-medium">Master-to-Child Regional Sync</div>
            <div class="text-zinc-600 font-sans mt-1.5 text-xs leading-normal font-light">
              A single Master Campaign synchronizes state down to <strong class="text-zinc-900 font-medium">4 regional child fleets (US East on AWS, US West on GCP, Europe on OVH, India on DO)</strong> with staggered morning/noon sending windows to protect deliverability.
            </div>
          </div>
          <div class="p-3.5 rounded-xl bg-zinc-50/70 border border-zinc-200/80">
            <div class="text-emerald-700 font-medium">AI CRM & Memory Brain</div>
            <div class="text-zinc-600 font-sans mt-1.5 text-xs leading-normal font-light">
              Built out of founder sales warfare: ingests <strong class="text-zinc-900 font-medium">unstructured dumps (LinkedIn DMs, email webhooks)</strong>. Auto-resolves contacts, logs persistent <strong class="text-zinc-900 font-medium">objection memories</strong>, drafts contextual replies, and auto-clears pipeline tasks.
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

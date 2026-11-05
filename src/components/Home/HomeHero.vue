<template>
  <section id="overview" class="pt-6 pb-12 border-b border-zinc-200/80">
    <div class="flex flex-col-reverse md:flex-row items-start justify-between gap-8 md:gap-12">
      <div class="flex-1 space-y-5">
        <div>
          <div class="flex items-center gap-2 mb-2 font-mono text-xs text-zinc-500">
            <span>Systems & AI Engineer</span>
            <span>/</span>
            <span class="text-zinc-700 font-medium">Founder @ ClyrisAI</span>
          </div>
          <h1 class="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-950">
            Aditya <span class="text-zinc-400 font-mono text-xl sm:text-2xl font-normal">(TikZSZ)</span>
          </h1>
        </div>

        <p class="text-zinc-700 text-base sm:text-lg leading-relaxed font-light">
          <strong class="text-zinc-950 font-medium">Systems engineer and founder.</strong> <strong class="text-zinc-950 font-medium">Co-founder and CTO at 19</strong>, architecting and scaling a microservices-backed platform adopted across <strong class="text-zinc-950 font-medium">30+ physical salons</strong> in Delhi. Winner of <strong class="text-zinc-950 font-medium">$50K+ across 5+ competitive hackathons</strong> in distributed systems and AI. Contributor to upstream inference and benchmarking frameworks (<a href="#upstream" class="text-zinc-900 underline decoration-zinc-400 hover:decoration-zinc-800 underline-offset-4 font-medium">vLLM</a>, <a href="#upstream" class="text-zinc-900 underline decoration-zinc-400 hover:decoration-zinc-800 underline-offset-4 font-medium">Berkeley Gorilla</a>).
        </p>

        <p class="text-zinc-600 text-sm sm:text-base leading-relaxed font-light">
          Currently building <strong class="text-zinc-950 font-medium">Clyris</strong>: an automated code intelligence engine that <strong class="text-zinc-900 font-medium">traces applicant GitHub repos in bulk</strong>, <strong class="text-zinc-900 font-medium">separates tutorial clones from real architecture</strong>, and writes targeted <strong class="text-zinc-900 font-medium">5-minute live technical interview scripts</strong> for hiring teams. Recently, my main focus has shifted toward distribution and sales: building an autonomous <strong class="text-zinc-900 font-medium">4-region outbound engine</strong> and <strong class="text-zinc-900 font-medium">AI-native CRM</strong> to track 59k+ hiring signals and scale customer acquisition hands-free.
        </p>

        <!-- Proof-of-work highlights strip -->
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 text-xs font-mono">
          <div class="p-3 rounded-lg bg-white border border-zinc-200/80 shadow-[0_1px_2px_rgba(0,0,0,0.03)]">
            <div class="text-zinc-400">Flagship</div>
            <div class="text-zinc-900 font-semibold mt-0.5">Clyris AI & RevOps</div>
          </div>
          <div class="p-3 rounded-lg bg-white border border-zinc-200/80 shadow-[0_1px_2px_rgba(0,0,0,0.03)]">
            <div class="text-zinc-400">Hackathons</div>
            <div class="text-zinc-900 font-semibold mt-0.5">$50K+ Won (5+ Wins)</div>
          </div>
          <div class="p-3 rounded-lg bg-white border border-zinc-200/80 shadow-[0_1px_2px_rgba(0,0,0,0.03)]">
            <div class="text-zinc-400">Upstream OSS</div>
            <div class="text-zinc-900 font-semibold mt-0.5">vLLM & Gorilla PRs</div>
          </div>
          <div class="p-3 rounded-lg bg-white border border-zinc-200/80 shadow-[0_1px_2px_rgba(0,0,0,0.03)]">
            <div class="text-zinc-400">Track Record</div>
            <div class="text-zinc-900 font-semibold mt-0.5">CTO at 19, 5yr OSS</div>
          </div>
        </div>

        <div class="flex flex-wrap items-center gap-4 pt-1 text-xs font-mono text-zinc-500">
          <a href="https://github.com/TikZSZ" target="_blank" rel="noopener noreferrer" class="flex items-center gap-1.5 hover:text-zinc-900 transition-colors">
            <span>github.com/TikZSZ</span>
            <span>↗</span>
          </a>
          <a href="https://x.com/TikZSZ" target="_blank" rel="noopener noreferrer" class="flex items-center gap-1.5 hover:text-zinc-900 transition-colors">
            <span>x.com/TikZSZ</span>
            <span>↗</span>
          </a>
          <a href="https://linkedin.com/in/TikZSZ" target="_blank" rel="noopener noreferrer" class="flex items-center gap-1.5 hover:text-zinc-900 transition-colors">
            <span>linkedin/in/TikZSZ</span>
            <span>↗</span>
          </a>
          <a href="mailto:additya@clyrisai.com" class="flex items-center gap-1.5 hover:text-zinc-900 transition-colors">
            <span>additya@clyrisai.com</span>
            <span>↗</span>
          </a>
        </div>
      </div>

      <div class="shrink-0">
        <div class="w-28 h-28 sm:w-32 sm:h-32 rounded-xl overflow-hidden border border-zinc-200 shadow-sm bg-zinc-100">
          <img src="/headshot.jpg" alt="Aditya" class="w-full h-full object-cover object-top filter grayscale contrast-[1.08] brightness-[0.98]" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>

<template>
  <section id="overview" class="pt-6 pb-12 border-b border-zinc-800/60">
    <div class="flex flex-col-reverse md:flex-row items-start justify-between gap-8 md:gap-12">
      <div class="flex-1 space-y-5">
        <div>
          <div class="flex items-center gap-2 mb-2 font-mono text-xs text-zinc-400">
            <span>Systems & AI Engineer</span>
            <span>/</span>
            <span class="text-zinc-300">Founder @ ClyrisAI</span>
          </div>
          <h1 class="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Aditya <span class="text-zinc-500 font-mono text-xl sm:text-2xl font-normal">(TikZSZ)</span>
          </h1>
        </div>

        <p class="text-zinc-300 text-base sm:text-lg leading-relaxed font-light">
          Self-taught systems engineer and builder. Started as CTO of a deployed startup at 19, architecting microservices adopted across 30+ physical businesses in Delhi. 3x competitive hackathon winner across AI and distributed consensus. Contributor to upstream inference systems (<a href="#upstream" class="text-zinc-100 underline decoration-zinc-600 hover:decoration-zinc-300 underline-offset-4">vLLM</a>, <a href="#upstream" class="text-zinc-100 underline decoration-zinc-600 hover:decoration-zinc-300 underline-offset-4">Berkeley Gorilla</a>).
        </p>

        <p class="text-zinc-400 text-sm sm:text-base leading-relaxed font-light">
          Currently building <strong class="text-zinc-200 font-medium">Clyris</strong>: shifting engineering hiring from leetcode puzzles and gamed resumes to <em class="text-zinc-200">proof-of-work decision reviews</em> of candidates' actual production repositories—powered by an autonomous multi-region RevOps and distribution engine.
        </p>

        <!-- Proof-of-work highlights strip -->
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 text-xs font-mono">
          <div class="p-2.5 rounded bg-zinc-900/60 border border-zinc-800/80">
            <div class="text-zinc-500">Flagship</div>
            <div class="text-zinc-200 font-semibold mt-0.5">Clyris AI & RevOps</div>
          </div>
          <div class="p-2.5 rounded bg-zinc-900/60 border border-zinc-800/80">
            <div class="text-zinc-500">Hackathons</div>
            <div class="text-zinc-200 font-semibold mt-0.5">3x Prize Winner</div>
          </div>
          <div class="p-2.5 rounded bg-zinc-900/60 border border-zinc-800/80">
            <div class="text-zinc-500">Upstream OSS</div>
            <div class="text-zinc-200 font-semibold mt-0.5">vLLM & Gorilla PRs</div>
          </div>
          <div class="p-2.5 rounded bg-zinc-900/60 border border-zinc-800/80">
            <div class="text-zinc-500">Track Record</div>
            <div class="text-zinc-200 font-semibold mt-0.5">CTO at 19 · 5yr OSS</div>
          </div>
        </div>

        <div class="flex items-center gap-4 pt-1 text-xs font-mono text-zinc-400">
          <a href="https://github.com/TikZSZ" target="_blank" rel="noopener noreferrer" class="flex items-center gap-1.5 hover:text-white transition-colors">
            <span>github.com/TikZSZ</span>
            <span>↗</span>
          </a>
          <a href="https://x.com/TikZSZ" target="_blank" rel="noopener noreferrer" class="flex items-center gap-1.5 hover:text-white transition-colors">
            <span>x.com/TikZSZ</span>
            <span>↗</span>
          </a>
          <a href="https://linkedin.com/in/TikZSZ" target="_blank" rel="noopener noreferrer" class="flex items-center gap-1.5 hover:text-white transition-colors">
            <span>linkedin/in/TikZSZ</span>
            <span>↗</span>
          </a>
          <a href="mailto:repackergame@gmail.com" class="flex items-center gap-1.5 hover:text-white transition-colors">
            <span>repackergame@gmail.com</span>
            <span>↗</span>
          </a>
        </div>
      </div>

      <div class="shrink-0">
        <div class="w-28 h-28 sm:w-32 sm:h-32 rounded-xl overflow-hidden border border-zinc-700/80 shadow-2xl bg-zinc-900 ring-1 ring-zinc-700/50">
          <img src="/headshot.jpg" alt="Aditya" class="w-full h-full object-cover object-top" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>

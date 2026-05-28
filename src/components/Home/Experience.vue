<template>
  <div class="mt-16 px-0">
    <h1 class="text-center font-mono text-4xl my-10 text-neutral-content">
      Experience
    </h1>
    <div class="flex flex-col gap-10">
      <div class="card shadow-xl bg-neutral text-neutral-content border border-neutral-focus">
        <div class="card-body md:px-12 py-10">
          <div class="flex flex-col md:flex-row justify-between mb-6">
            <div class="flex items-center gap-6">
              <div class="w-16 h-16 bg-base-100 rounded-xl p-2 flex items-center justify-center shrink-0">
                <img src="/clyris_logo.png" alt="ClyrisAI Logo" class="max-w-full max-h-full object-contain filter grayscale invert" />
              </div>
              <div>
                <h2 class="card-title font-sans font-bold text-primary-content text-3xl">Founder & CEO</h2>
                <h3 class="text-xl font-medium mt-1">ClyrisAI</h3>
                <div class="flex gap-4 mt-2">
                  <a href="https://clyrisai.com" target="_blank" class="text-sm opacity-70 hover:opacity-100 hover:text-primary transition-all flex items-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" /></svg>
                    Website
                  </a>
                  <a href="https://x.com/clyrisai" target="_blank" class="text-sm opacity-70 hover:opacity-100 hover:text-primary transition-all flex items-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                    X
                  </a>
                  <a href="https://linkedin.com/company/clyrisai" target="_blank" class="text-sm opacity-70 hover:opacity-100 hover:text-primary transition-all flex items-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
            <div class="mt-4 md:mt-0 text-left md:text-right text-lg opacity-80 flex items-center">
              <p>Oct 2025 - Present</p>
            </div>
          </div>
          <p class="font-light text-lg mb-4 opacity-90 leading-relaxed max-w-5xl">
            Clyris helps engineering teams stop losing time to resume screening and interview loops.
            We shift interviews from arbitrary testing to decision reviews of the candidate's own code, revealing genuine judgment, ownership, and real production experience. By surfacing the strongest builders early, senior engineering time is protected, and interview loops often drop by 50%+. Hiring doesn't need more interviews; it needs better signal.
          </p>
          <div class="mt-4 flex gap-3 flex-wrap">
            <span class="badge badge-primary badge-outline">PyTorch</span>
            <span class="badge badge-primary badge-outline">Full-Stack Development</span>
            <span class="badge badge-primary badge-outline">AI Agents</span>
          </div>
        </div>
      </div>

      <div class="card shadow-xl bg-neutral text-neutral-content border border-neutral-focus">
        <div class="card-body md:px-12 py-10">
          <div class="flex flex-col md:flex-row justify-between mb-6">
            <div class="flex items-center gap-6">
              <div class="w-16 h-16 bg-base-100 rounded-xl p-2 flex items-center justify-center shrink-0">
                <img src="/jhattcut_logo.png" alt="JhattCut Logo" class="max-w-full max-h-full object-contain filter grayscale invert" />
              </div>
              <div>
                <h2 class="card-title font-sans font-bold text-primary-content text-3xl">Co-Founder & CTO</h2>
                <h3 class="text-xl font-medium mt-1">JhattCut</h3>
              </div>
            </div>
            <div class="mt-4 md:mt-0 text-left md:text-right text-lg opacity-80 flex flex-col justify-center">
              <p>Jan 2022 - Jun 2023</p>
              <p>India</p>
            </div>
          </div>
          <p class="font-light text-lg mb-6 opacity-90 leading-relaxed max-w-5xl">
            Co-founded and led the engineering team for a high-growth startup, developing a COVID-era salon booking app adopted by over 30 salons in Delhi. My role evolved from initial prototype to architecting and scaling a production-ready system.
          </p>
          <ul class="list-disc list-inside font-light text-lg opacity-90 leading-relaxed space-y-2">
            <li>Architected and implemented a microservices-based backend using Node.js (NestJS, Express), NATS messaging, and MongoDB to handle core business logic.</li>
            <li>Designed and managed cloud infrastructure on GCP, utilizing Docker for containerization and implementing robust CI/CD pipelines for automated deployments.</li>
            <li>Led a team of developers, overseeing the full product development lifecycle from concept to launch and subsequent iterations.</li>
            <li>Implemented advanced data management strategies using PostgreSQL and Redis for caching, ensuring high performance, low latency, and maximum availability.</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

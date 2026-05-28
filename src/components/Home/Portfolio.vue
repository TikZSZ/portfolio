<template>
    <div class="flex flex-col px-0 mt-5 gap-12">
      <div class="card w-full shadow-xl bg-neutral text-neutral-content border border-neutral-focus transition-all duration-500 hover:shadow-primary/20 hover:-translate-y-1"
      v-for="({title,content,link,github,githubFrontend,githubBackend,publication},index) in projects" :key="index">
        <div class="card-body md:px-12 py-10">
          <h2 class="card-title font-sans font-bold text-primary-content text-4xl tracking-tight mb-4">{{title}}</h2>
          <p class="font-light text-lg mb-8 opacity-90 leading-relaxed max-w-5xl">
            {{content}}
          </p>
          <div class="flex flex-wrap gap-6 mt-4">
            <a v-if="link" :href="link" target="_blank" class="flex items-center gap-2 text-sm font-semibold opacity-70 hover:opacity-100 hover:text-primary transition-all uppercase tracking-wide">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
              Demo
            </a>
            <a v-if="github" :href="github" target="_blank" class="flex items-center gap-2 text-sm font-semibold opacity-70 hover:opacity-100 hover:text-primary transition-all uppercase tracking-wide">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              GitHub
            </a>
            <a v-if="githubFrontend" :href="githubFrontend" target="_blank" class="flex items-center gap-2 text-sm font-semibold opacity-70 hover:opacity-100 hover:text-primary transition-all uppercase tracking-wide">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              Frontend
            </a>
            <a v-if="githubBackend" :href="githubBackend" target="_blank" class="flex items-center gap-2 text-sm font-semibold opacity-70 hover:opacity-100 hover:text-primary transition-all uppercase tracking-wide">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              Backend
            </a>
            <a v-if="publication" :href="publication" target="_blank" class="flex items-center gap-2 text-sm font-semibold opacity-70 hover:opacity-100 hover:text-accent transition-all uppercase tracking-wide">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2.5 2.5 0 00-2.5-2.5H15M9 11l3 3L22 4" /></svg>
              Press / Article
            </a>
          </div>
        </div>
      </div>
    </div>
</template>

<script setup lang="ts">

const projects = [
        { 
          title:'Hedera Chat 🏆🥇',
          content:"🌟 1st Prize AI Track Winner at Hedera HelloFuture Hackathon. Engineered an innovative AI-driven conversational interface for the Hedera network. By leveraging advanced language models to abstract away complex blockchain interactions, this project democratizes access to Web3 infrastructure and creates a frictionless experience for both developers and non-technical users.",
          link:"https://hedera-ai.vercel.app/",
          github:"https://github.com/TikZSZ/hedera-chat",
          publication:"https://hedera.com/blog/these-are-the-winners-of-the-2024-hellofuture-hackathon/"
        },
        { 
          title:'HiD 🚀🏅',
          content:"🏆 2nd Prize Data Track Winner at Hedera HelloFuture Hackathon 2.0. Designed and built a robust Decentralized Identity (DID) and Verifiable Credentials (VC) platform leveraging the Hedera Hashgraph. This platform sets a new standard for self-sovereign identity, prioritizing maximum security, privacy, and seamless integration into modern decentralized ecosystems.",
          link:"https://hedera-id.vercel.app",
          github:"https://github.com/TikZSZ/HiD",
          publication:"https://hedera.com/blog/these-are-the-winners-of-the-hellofuture-hackathon-2-0/"
        },
        { 
          title:'dMail. 🛡️🏆',
          content:"🥇 1st Prize Winner at Hedera India Hackathon. Created a zero-trust, decentralized email infrastructure built for the Hedera Hackathon. Powered entirely by end-to-end encryption over the Hedera Hashgraph, this protocol ensures absolute user privacy by entirely decoupling personal metadata from message transmission.",
          link:"https://dmaill.vercel.app",
          githubFrontend:"https://github.com/TikZSZ/defi-email-frontend",
          githubBackend:"https://github.com/TikZSZ/defi-email-backend",
          publication:"https://www.dqindia.com/three-innovative-distributed-ledger-based-solutions-top-hedera-india-hackathon"
        },
        { 
          title:'factura. 💼🏅',
          content:"🏆 Hedera Hackathon Prize Winner. I had some extra time during the Hedera India Hackathon, so I built and submitted this second application! It's a sophisticated 'Zero Trust' blockchain invoicing application (HApp) for secure buyer-seller transactions, ensuring immutable transaction records and transparent financial trails using Hedera, VueJS, and NestJS.",
          link:"https://facturaa.vercel.app",
          githubFrontend:"https://github.com/TikZSZ/factura-frontend",
          githubBackend:"https://github.com/TikZSZ/factura-backend"
        },
        { 
          title:'@clyrisai/gitresolve',
          content:"Architected and deployed a powerful utility capable of resolving URLs, resumes, and portfolios into a comprehensive mapping of a candidate's open-source footprint. This system automates the tedious process of repository discovery and drastically improves the efficiency of evaluating developer contributions at scale.",
          link:"https://www.npmjs.com/package/@clyrisai/gitresolve",
          github:"https://github.com/clyrisai/gitresolve"
        },
        { 
          title:'Microservice Ticketing App 🎟️',
          content:"Architected a robust, highly-available distributed ticketing system. Successfully implemented critical microservices patterns including distributed event streaming, ephemeral ticket locking, and high-concurrency handling using NATS Streaming, Redis, MongoDB, and NestJS.",
          link:"",
          github:"https://github.com/TikZSZ/microservices-ticket-app"
        },
        { 
          title:'Music App',
          content:"Developed a highly scalable, Spotify-like streaming architecture. This platform supports high-concurrency multi-file uploads and offers centralized dashboard management, effectively demonstrating complex state management and real-time database synchronization using VueJS, Firebase, and TypeScript.",
          link:"https://music-app-iota.vercel.app/",
          github:"https://github.com/TikZSZ/music-app"
        },
        { 
          title:'Jargon Free',
          content:"Engineered an intelligent content-simplification engine that scans text and utilizes Wikipedia APIs to automatically filter out unnecessary jargon. This React and TypeScript application improves digital accessibility and cognitive load management for complex reading material.",
          link:"https://jargon-free.netlify.app/",
          github:"https://github.com/TikZSZ/jargon-free"
        },
        { 
          title:'Hedera Mirror Node Wrapper 📦',
          content:"Built and currently maintaining a mission-critical Hedera Mirror Node Wrapper. Five years after its initial release, it remains actively adopted and relied upon by developers throughout the broader Hedera ecosystem.",
          link:"",
          github:"https://github.com/TikZSZ/ts-hedera-mirror-node-wrapper/"
        }
      ]
</script>

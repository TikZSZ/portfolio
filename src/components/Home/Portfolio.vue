<template>
    <div class="flex flex-col px-0 mt-5 gap-12">
      <div class="card w-full shadow-xl bg-neutral text-neutral-content border border-neutral-focus transition-all duration-500 hover:shadow-primary/20 hover:-translate-y-1"
      v-for="({title,content,link,github,publication},index) in projects" :key="index">
        <div class="card-body md:px-12 py-10">
          <h2 class="card-title font-sans font-bold text-primary-content text-4xl tracking-tight mb-4">{{title}}</h2>
          <p class="font-light text-lg mb-8 opacity-90 leading-relaxed max-w-5xl">
            {{content}}
          </p>
          <div class="card-actions justify-start mt-auto flex-wrap gap-3">
            <a v-if="link" :href="link" target="_blank" class="btn btn-primary" >Live Deployment</a>
            <a v-if="github" :href="github" target="_blank" class="btn btn-outline text-neutral-content" >Source Code</a>
            <a v-if="publication" :href="publication" target="_blank" class="btn btn-accent btn-outline" >Press / Article</a>
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
          github:"https://github.com/TikZSZ/dmail",
          publication:"https://www.dqindia.com/three-innovative-distributed-ledger-based-solutions-top-hedera-india-hackathon"
        },
        { 
          title:'factura. 💼🏅',
          content:"🏆 Hedera Hackathon Prize Winner. I had some extra time during the Hedera India Hackathon, so I built and submitted this second application! It's a sophisticated 'Zero Trust' blockchain invoicing application (HApp) for secure buyer-seller transactions, ensuring immutable transaction records and transparent financial trails using Hedera, VueJS, and NestJS.",
          link:"https://facturaa.vercel.app",
          github:"https://github.com/TikZSZ/factura"
        },
        { 
          title:'@clyrisai/gitresolve',
          content:"Architected and deployed a powerful utility capable of resolving URLs, resumes, and portfolios into a comprehensive mapping of a candidate's open-source footprint. This system automates the tedious process of repository discovery and drastically improves the efficiency of evaluating developer contributions at scale.",
          link:"https://gitresolve.vercel.app/",
          github:"https://github.com/TikZSZ/gitresolve"
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

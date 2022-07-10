<template>
    <div class="grid sm-grid-cols-1 px-3 md:px-10 md:mx-10 mt-5  md:grid-cols-2   lg:grid-cols-3 gap-10  ">
      <div class="card order-first mb-10  shadow-sm bg-secondary md:bg-secondary-focus text-accent-content"
      v-for="({image,title,content,link},index) in images">
        <figure>
          <img :src="image" />
          <div class="card-body ">
            <h2 class="card-title font-serif text-base-300 text-2xl ">{{title}}</h2>
            <p class="font-light text-lg">
              {{content}}
            </p>
            <div class="card-actions ">
              <a :href="link" class="btn" >More info</a>
            </div>
          </div>
        </figure>
      </div>
    </div>
</template>

<script setup>

const images = [
        { image:"https://imgix.cosmicjs.com/168ba7a0-313d-11ec-a228-8ba7563f6297-portfolio.png",
          title:'Portfolio Site',
          content:"My portfolio site, which supports blogging. Made to showcase my skills and document my journey to everything software and web3. Built with VueJS, Typescript and NestJS.",
          link:"/"
        },
        { image:"https://imgix.cosmicjs.com/14fe77f0-313d-11ec-96cf-654f0d745df3-music.png",
          title:'Music App',
          content:"Spotify like music app, that supports uploading multiple music at same time also allows management from one centralized dashboard. Built with VueJS, Firebase and Typescript.",
          link:"https://music-app-iota.vercel.app/"
        },
        { image:"https://imgix.cosmicjs.com/319f08c0-6f22-11ec-8245-d9998a66fe08-dmail.png",
          title:'dMail.',
          content:`dMail "decentralized email", its secure email powered by hedera hashgraph involving zero use of personal information that could be used to trace users with end to end encryption and all data being stored on decentralized network. A project i made for hedera hackathon. Built with VueJs, NestJs and Tailwind CSS`,
          link:"https://dmaill.vercel.app"
        },
        { image:"https://imgix.cosmicjs.com/59e8d1c0-6852-11ec-9a64-73e60d601d04-factura.png",
          title:'factura.',
          content:`factura (Invoice for English) is a "Zero Trust" invoice creation HApp for buyers and sellers alike, A project i made for hedera hackathon built on top of Hedera Hashgraph with VueJS, NestJS and Typescript`,
          link:"https://facturaa.vercel.app"
        },
        { image:"https://imgix.cosmicjs.com/16ed0180-313d-11ec-a228-8ba7563f6297-jargon.png",
          title:'Jargon Free',
          content:"Jargon Free is meant to remove jargon from content. It works by scanning images for important words and using the one and only wikipedia to bring the content. Built with React and Typescript.",
          link:"https://jargon-free.netlify.app/"
        },
        { image:"https://imgix.cosmicjs.com/159364f0-313d-11ec-96cf-654f0d745df3-microservice.png",
          title:'Microservice Ticketing App',
          content:"A microservices ticket's app, supports ticket creation, buy/sell, expiration window of tickets, price lock when ticket in purchase built purely for purpose of learning distributed computing. Built with Nats-Streaming, ExpressJS, MongoDB, Redis and NestJs.",
          link:"https://github.com/TikZSZ/microservices-ticket-app"
        },
        { image:"https://imgix.cosmicjs.com/146ce650-313d-11ec-96cf-654f0d745df3-blog.png",
          title:'Daily Journal',
          content:"My first ever server-side rendered app, supports post creation/deletion and server-side rendering. Made with ExpressJS and MongoDB.",
          link:"https://myy-blogg.herokuapp.com/"
        },
        { image:"https://imgix.cosmicjs.com/13ab1cf0-313d-11ec-a228-8ba7563f6297-mail.png",
          title:'Newsletter',
          content:"My personal newsletter made with ExpressKs, Mailchimp.",
          link:"https://salty-sierra-54897.herokuapp.com/?"
        }
      ]
</script>

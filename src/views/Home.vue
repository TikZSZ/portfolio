<template>
  <!-- <button @click="show = !show" color="text-white">Yo</button> -->
  <transition-group name="fade">
    <div v-if="!store.isMobile && !show" @click="init()" key="codeArea">
      <HomeCode :show1="show1" :show2="show2" />
      <div v-if="!show1" class="alert text-center alert-info mt-5 mx-auto  w-2/3 lg:w-1/2">
        <div class="flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            class="w-6 h-6 mx-2 stroke-current"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
          <label>Click/Touch on yarn init to start installation</label>
        </div>
      </div>
    </div>
    <div v-if="show || store.isMobile" class="transition-all">
      <HomeHero />
      <h1 class="text-center font-mono text-4xl my-10  text-neutral-content">
        Portfolio
      </h1>
      <Portfolio />
      <h1 class="text-center text-4xl my-10 font-mono text-neutral-content">
        TechStack
      </h1>
      <TechStack />
    </div>
  </transition-group>
</template>

<script lang="ts">
import { useStore } from "@/store";
import { defineComponent } from "vue";
import HomeCode from "@/components/Home/HomeCode.vue";
import HomeHero from "@/components/Home/HomeHero.vue";
import Portfolio from "@/components/Home/Portfolio.vue";
import TechStack from "@/components/Home/TechStack.vue";

export default defineComponent({
  name: "Home",
  components: {
    HomeCode,
    HomeHero,
    Portfolio,
    TechStack,
  },
  data() {
    return {
      show: false,
      show1: false,
      show2: false,
    };
  },
  setup() {
    return {
      store: useStore(),
    };
  },
  methods: {
    init() {
      this.show1 = true;
      setTimeout(() => {
        this.show2 = true;
        setTimeout(() => {
          this.show = true;
        }, 800);
      }, 800);
    },
  },
});
</script>

<style>
.fade-enter-active {
  animation: fadeIn 1.5s;
  -webkit-animation: fadeIn 1.5s;
  -moz-animation: fadeIn 1.5s;
  -o-animation: fadeIn 1.5s;
  -ms-animation: fadeIn 1.5s;
}
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@-moz-keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@-webkit-keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@-o-keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@-ms-keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.fade-enter-leave {
  animation: fadeOut 1.5s;
  -webkit-animation: fadeIn 1.5s;
  -moz-animation: fadeIn 1.5s;
  -o-animation: fadeIn 1.5s;
  -ms-animation: fadeIn 1.5s;
}
@keyframes fadeOut {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

@-moz-keyframes fadeOut {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

@-webkit-keyframes fadeOut {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

@-o-keyframes fadeOut {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

@-ms-keyframes fadeOut {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>

<template>
  <div class="mx-auto">
    <div class="py-4 artboard artboard-demo bg-base-200">
      <ul
        class="menu items-stretch px-3 shadow-lg bg-base-100 horizontal rounded-box"
      >
        <li :class="{bordered:currentTab===1&&true}">
          <a  @click="$emit('changeTab',1)">
            {{b1}}
          </a>
        </li>
        <li :class="{bordered:currentTab===2&&true}">
          <a @click="$emit('changeTab',2)">
           {{b2}}
          </a>
        </li>
        <!-- <li>
          <span>
            With a span
          </span>
        </li>
        <li>
          <a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              class="inline-block w-6 h-6 mr-2 stroke-current"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              ></path>
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              ></path>
            </svg>
            With icon
          </a>
        </li> -->
      </ul>
    </div>
  </div>
</template>

<script setup>
const props=defineProps(['currentTab','b1','b2'])
const emit = defineEmits(['changeTab'])
</script>
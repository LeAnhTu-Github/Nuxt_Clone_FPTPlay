<template>
  <div class="relative w-screen h-screen flex justify-center items-center">
    <div class="absolute inset-0 bg-cover bg-center bg-no-repeat bg-[url(/images/bg-login.png)] opacity-10"></div>
    <div class="absolute top-2 left-1/2 -translate-x-1/2">
      <img src="/images/logo.png" alt="logo" class="w-[220px] h-[90px]">
    </div>
    <NuxtLink to="/" class="absolute top-8 right-8">
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="16" fill="white" fill-opacity="0.5"></circle>
        <mask id="mask0_594_50065" maskUnits="userSpaceOnUse" x="4" y="4" width="24" height="24"
          style="mask-type: alpha;">
          <rect x="4" y="4" width="24" height="24" fill="#D9D9D9"></rect>
        </mask>
        <g mask="url(#mask0_594_50065)">
          <path
            d="M15.9998 17.4008L11.0998 22.3008C10.9165 22.4841 10.6831 22.5758 10.3998 22.5758C10.1165 22.5758 9.88314 22.4841 9.6998 22.3008C9.51647 22.1174 9.4248 21.8841 9.4248 21.6008C9.4248 21.3174 9.51647 21.0841 9.6998 20.9008L14.5998 16.0008L9.6998 11.1008C9.51647 10.9174 9.4248 10.6841 9.4248 10.4008C9.4248 10.1174 9.51647 9.88411 9.6998 9.70078C9.88314 9.51745 10.1165 9.42578 10.3998 9.42578C10.6831 9.42578 10.9165 9.51745 11.0998 9.70078L15.9998 14.6008L20.8998 9.70078C21.0831 9.51745 21.3165 9.42578 21.5998 9.42578C21.8831 9.42578 22.1165 9.51745 22.2998 9.70078C22.4831 9.88411 22.5748 10.1174 22.5748 10.4008C22.5748 10.6841 22.4831 10.9174 22.2998 11.1008L17.3998 16.0008L22.2998 20.9008C22.4831 21.0841 22.5748 21.3174 22.5748 21.6008C22.5748 21.8841 22.4831 22.1174 22.2998 22.3008C22.1165 22.4841 21.8831 22.5758 21.5998 22.5758C21.3165 22.5758 21.0831 22.4841 20.8998 22.3008L15.9998 17.4008Z"
            fill="#1C1B1F"></path>
        </g>
      </svg>
    </NuxtLink>
    <div class="relative z-10 flex justify-center items-center">
      <ModalLogin />
    </div>
  </div>
</template>

<script setup>

definePageMeta({
  layout: false
})
import ModalLogin from '~/components/mod/ModalLogin.vue';
</script>
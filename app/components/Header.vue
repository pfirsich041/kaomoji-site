<template>
    <header class="text-gray-600 body-font bg-white">
  <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-between">
    <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <img class="w-10 h-10" src="/images/Logo.png" alt="">
      <span class="ml-3 text-xl">sns cutie archive</span>
    </a>
    <NuxtLink to="/">
      <button class="inline-flex items-center bg-pink-500 text-white border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 rounded-full text-s mt-4 md:mt-0">
          顔文字一覧
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
      </button>
    </NuxtLink>
  </div>
</header>
</template>
<script setup lang="ts">
</script>
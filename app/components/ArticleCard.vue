<template>
  <section class="text-gray-600 body-font rounded-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer group">
  <div class="container mx-auto">
    <div class="">
      <NuxtLink :to="path">
        <div class=" h-80 bg-white border-2 border-pink-200 border-opacity-60 rounded-2xl overflow-hidden">
          <img class="lg:h-48 md:h-36 w-full object-cover object-center group-hover:scale-110 duration-500" :src="image" alt="blog">
          <div class="p-6">
            <h2 class="tracking-widest text-xs title-font font-medium text-pink-400 mb-1">CATEGORY</h2>
            <h1 class="title-font text-lg font-medium text-gray-900 mb-3">{{title}}</h1>
          </div>
        </div>
      </NuxtLink>
    </div>
  </div>
</section>
</template>

<script setup lang="ts">

interface Props{
  title?: string;
  image?: string;
  path: string;
  date?: string;
}

withDefaults(defineProps<Props>(),{
  title: "no title",
  image: "",
  date: "",
})

</script>

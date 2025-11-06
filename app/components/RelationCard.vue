<template>
    <section class="text-gray-600 body-font">
    <div class="container mx-auto">
      <div class="">
        <NuxtLink :to="path">
          <div class="w-full h-full border-2 border-pink-200 border-opacity-60 rounded-2xl overflow-hidden">
            <div class="p-6">
              <h2 class="tracking-widest text-xs title-font font-medium text-pink-400 mb-1">CATEGORY</h2>
              <h1 class="title-font text-md font-medium text-gray-900 mb-3">{{title}}</h1>
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
    path: string;
    date?: string;
  }
  
  withDefaults(defineProps<Props>(),{
    title: "no title",
    date: "",
  })
  
  </script>
  
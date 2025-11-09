<template>
  <div class="bg-pink-50 text-gray-600">
    <Header></Header>
    <main class="container mx-auto">
      <div class="lg:grid lg:grid-cols-12 gap-10 my-10">
        <div class="col-span-12 lg:col-span-8 space-y-6">
          <NuxtLink class="text-pink-500" to="/notes">←記事一覧に戻る</NuxtLink>
          <article class="border-2 border-pink-200 rounded-2xl overflow-hidden markdown-body bg-white">
            <div v-if="page">
              <div class="relative w-full aspect-[16/9]">
                <img class="w-full h-auto object-cover" :src="page.meta.thumbnail" alt="">
              </div>
              <div class="p-8">
                <h2>{{ page.title }}</h2>
                {{ page.meta.date }}
                <div class="flex gap-2 my-4">
                  <button class="bg-pink-500 hover:bg-pink-600 text-white text-xs rounded-full px-2 py-1" v-for="tag in page.meta.tags">
                  #{{ tag }}
                </button>
                </div>
                <ContentRenderer :value="page" />
              </div>
            </div>
            <p v-else>該当する記事がありません。</p>
          </article>
        </div>
        <div class="col-span-12 lg:col-span-4 hidden lg:block">
          <SideBar></SideBar> 
        </div>
      </div>
    </main>
    <Footer></Footer>
    </div>
</template>
<script setup lang="ts">
import { useRoute } from 'vue-router'
const route = useRoute()

const { data: page } = await useAsyncData('docs',() =>
  queryCollection('docs').path(route.path).first()
)
</script>
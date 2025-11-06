<template>
    <Header></Header>
    <main class="flex gap-8 px-8 py-9 justify-center container mx-auto">
      <div class="flex flex-col gap-8">
        <NuxtLink class="text-pink-500" to="/notes">←記事一覧に戻る</NuxtLink>
        <article class="border-2 border-pink-200 rounded-2xl p-8 overflow-hidden markdown-body">
          <div v-if="page">
            <div>
              <h2>{{ page.title }}</h2>
            </div>
            <ContentRenderer :value="page" />
          </div>
          <p v-else>該当する記事がありません。</p>
        </article>
      </div>
      <SideBar></SideBar> 
    </main>
</template>
<script setup lang="ts">
import { useRoute } from 'vue-router'
const route = useRoute()

const { data: page } = await useAsyncData('docs',() =>
  queryCollection('docs').path(route.path).first()
)
</script>
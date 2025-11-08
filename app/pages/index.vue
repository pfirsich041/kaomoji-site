<template>
    <div class="bg-pink-50 text-gray-600">
    <Header></Header>
    <div class="container mx-auto">
    <div class=" h-80 overflow-hidden relative my-8">
        <div class="flex flex-col justify-center items-center">
            <p class="text-xs">\ クリックでコピーしてそのまま使える！ /</p>
            <h2 class="text-xl">顔文字ライブラリ</h2>
        </div>
        <Library></Library>
        <button class="bg-pink-400 hover:bg-pink-500 text-white rounded-full absolute bottom-4 left-1/2 -translate-x-1/2 px-6 py-2">
            <NuxtLink to="/library">もっとみる</NuxtLink>
        </button>
    </div>
    <div class="my-8">
        <h2 class="flex justify-center text-xl">記事</h2>
        <div class="grid grid-cols-3 gap-8 my-8">
            <ArticleCard
                v-for="item in page"
                :key="item.id"
                :image="item.meta.thumbnail"
                :date = "item.meta.date"
                :category = "item.meta.tags"
                :title="item.title"
                :path="item.path"
            ></ArticleCard>
        </div>
        <div class="flex justify-center">
            <button class="bg-pink-400 hover:bg-pink-500 text-white rounded-full px-6 py-2">
                <NuxtLink to="/notes">もっとみる</NuxtLink>
            </button>
        </div>
    </div>
    
    </div>
    <Footer></Footer>
    </div>
</template>
<script setup lang="ts">
const { data: page } = await useAsyncData('all-notes',() =>
    queryCollection('docs').limit(3).all()
)
</script>
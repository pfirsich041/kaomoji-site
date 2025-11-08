<template>
    <aside >
        <div class="space-y-6 flex flex-col">
            <card class="p-6 bg-white border-pink-200 rounded-2xl">
                <div>
                    <h3 class="mb-2 text-gray-800">もっと顔文字を探す</h3>
                    <div class="flex justify-center h-20 items-center text-xs">
                        サイト内の顔文字が全て見られるライブラリ<br>
                        すぐにコピペできます♡
                    </div>
                    <NuxtLink to="/library">
                    <button class="w-full h-10 bg-pink-500 hover:bg-pink-600 text-white rounded-full">ライブラリをみる</button>
                    </NuxtLink>
                </div>
            </card>
        </div>
    </aside>
</template>
<script setup lang="ts">
const { data: page } = await useAsyncData('all-notes',() =>
    queryCollection('docs').all()
)
</script>
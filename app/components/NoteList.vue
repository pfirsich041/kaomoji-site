<template>
    <div>
        <h2>記事一覧</h2>
        <ContentRenderer v-if="page" :value="page" />
        <ul>
            <li v-for="item in page" :key = "item.id">
                <NuxtLink :to="item.path">{{ item.title }}</NuxtLink>
            </li>
        </ul>
    </div>

</template>

<script setup lang="ts">
const { data: page } = await useAsyncData('all-notes',() =>
    queryCollection('docs').all()
)

</script>

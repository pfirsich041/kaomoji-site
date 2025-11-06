<template>
    <div>
        <ContentRenderer v-if="page" :value="page" />
        <div class="flex flex-wrap gap-8 container mx-auto justify-center">
                <ArticleCard
                    v-for="item in page"
                    :key="item.id"
                    :title="item.title"
                    :path="item.path"
                ></ArticleCard>
        </div>
    </div>

</template>

<script setup lang="ts">
const { data: page } = await useAsyncData('all-notes',() =>
    queryCollection('docs').all()
)

</script>

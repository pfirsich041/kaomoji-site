<template>
    <div class="container">
        <ContentRenderer v-if="page" :value="page" />
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
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
    </div>

</template>

<script setup lang="ts">
const { data: page } = await useAsyncData('all-notes',() =>
    queryCollection('docs').all()
)

</script>

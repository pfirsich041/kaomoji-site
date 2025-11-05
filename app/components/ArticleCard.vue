<template>
    <article class="article-card">
        <NuxtLink :to="`/articles/${article._path.split('/').pop()}`">
            <div class="body">
                <p class="meta">
                    {{ article.date }}
                </p>
                <h2 class="title">
                    {{ article.title }}
                </h2>
                <p class="desc">
                    {{ article.description }}
                </p>
                <div>
                    <span v-for="tag in article.tags" :key="tag" class="tag">{{ tag }}</span>
                </div>
            </div>
        </NuxtLink>
    </article>
</template>

<script setup lang="ts">
defineProps({
  article: { type: Object, required: true }
})
</script>

<style scoped>
.article-card {
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.05);
  overflow: hidden;
  transition: transform 0.2s ease;
  margin-bottom: 24px;
}
.article-card:hover { transform: translateY(-2px); }
.thumb { width: 100%; height: 200px; object-fit: cover; }
.body { padding: 20px 24px; }
.meta { color: #888; font-size: 13px; }
.title { font-size: 20px; color: #333; margin: 8px 0; }
.desc { font-size: 15px; color: #666; }
.tag {
  background: #ffe6ef; color: #ff80aa;
  border-radius: 12px; padding: 3px 8px;
  font-size: 12px; margin-right: 6px;
}
</style>
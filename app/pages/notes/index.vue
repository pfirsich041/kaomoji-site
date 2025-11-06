<template>
    <Header></Header>
    <div class="flex justify-center">
        <h2 class="container flex justify-center text-2xl my-10">記事一覧</h2>
    </div> 
    <NoteList></NoteList> 
</template>

<script setup lang = "ts">
    import Header from '~/components/Header.vue';
    import NoteList from '~/components/NoteList.vue';
</script>

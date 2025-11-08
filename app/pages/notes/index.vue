<template>
    <div class="bg-pink-50 text-gray-600">
        <Header></Header>
        <div class="flex justify-center">
            <h2 class="container flex justify-center text-2xl my-10">記事一覧</h2>
        </div>
        <div class="container mx-auto">
            <div class="grid lg:grid-cols-12 gap-10">
                <div class="col-span-12 lg:col-span-8">
                    <NoteList></NoteList>
                </div>
                <div class="col-span-12 lg:col-span-4 hidden lg:block">
                    <NotesSideBar></NotesSideBar>
                </div>
            </div>
        </div> 
        <Footer></Footer>
    </div>
</template>

<script setup lang = "ts">
    import Header from '~/components/Header.vue';
    import NoteList from '~/components/NoteList.vue';
import NotesSideBar from '~/components/NotesSideBar.vue';
</script>

<template>
    <div class="min-h-screen bg-gradient-to-b from-pink-50 to-pink-100 p-6">
      <header>
        <h1 class="text-3xl font-bold text-center mb-6">かわいい顔文字コレクションᴖ ᴈ ᴖ</h1>
        <p>SNSへの投稿に使える可愛い顔文字です´ᴗ ·̫ ᴗ`<br>
          クリックでコピーできます⊂( ᴖ ̫ᴖ)⊃ ⊂(ᴖ ̫ᴖ )⊃</p>
      </header>
      <main>
        <div class="flex gap-2 justify-center mb-4 controls">
        <button
          v-for="cat in categories"
          :key="cat"
          @click="currentFilter = cat"
          class="px-4 py-1 rounded-full border border-pink-400"
          :class="currentFilter === cat ? 'bg-pink-200' : ''"
        >
          {{ cat }}
        </button>
        </div>
    
        <div class="flex flex-wrap gap-3 justify-center container">
          <button
            v-for="k in filteredKaomoji"
            :key="k.text"
            class="bg-white rounded-2xl shadow px-4 py-2 hover:bg-pink-50 cursor-pointer kaomoji"
            @click="copyKaomoji(k.text)"
          >
            {{ k.text }}
          </button>
        </div>
        <div id="toast" class="toast"> コピー完了ᴖ ̫ᴖ </div>
      </main>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, computed } from 'vue'
  import kaomojiData from '../../public/kaomoji.json'

  interface Kaomoji {
    text: string
    categories: string[]
  }

  const data = kaomojiData as Kaomoji[]
  
  const currentFilter = ref<string>('すべて')
  const categories = computed<string[]>(() => {
  const uniqueCategories = new Set<string>()
    kaomojiData.forEach(k => k.categories.forEach(c => uniqueCategories.add(c)))
    return ['すべて', ...Array.from(uniqueCategories)]
  })

  const filteredKaomoji = computed<Kaomoji[]>(() => {
  if (currentFilter.value === 'すべて') return kaomojiData
  return kaomojiData.filter(k => k.categories.includes(currentFilter.value))
  })
  
  function copyKaomoji(text: string) {
    navigator.clipboard.writeText(text).then(() => {
    showToast();
  });
  }

  function showToast() {
  const toast = document.getElementById("toast");
  toast?.classList.add("show");
  setTimeout(() => {
    toast?.classList.remove("show");
  }, 2000); // 2秒後に消える
}
  </script>
  
  <style scoped>
  body {
    font-family: "Noto Sans JP", sans-serif;
  }

  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

header{
    padding: 20px;
    height: 80px;
    background-color: #fefefe;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

h1{
    font-size: 18px;
}

header p{
    font-size: 10px;
}

main{
    padding: 20px;
}


.controls { 
    position: sticky;
    top: 20px;
    margin: 20px 0;
    text-align: center; 
    display: flex;
    gap: 4px;
    flex-wrap: wrap;
    justify-content: center;
}

.container{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

.kaomoji {
color: #000;
margin: 5px;
padding: 5px 15px;
border: 1px solid #ddd;
border-radius: 30px;
display: flex;
flex-direction: column;
align-items: center;
}
.kaomoji span{
    padding: 20px 0;
}

button {
padding: 5px 10px;
border: 2px solid #FF8FAB;
background: #fefefe;
color: #FF8FAB;
border-radius: 30px;
cursor: pointer;
}

button:hover { 
    background: #FF8FAB; 
    color: white;
}
.hidden { display: none; }

.toast {
    position: fixed;
    bottom: 20px;
    right: 20px;
    background: #FF8FAB;
    color: #fff;
    padding: 10px 10px;
    border-radius: 6px;
    opacity: 0;
    transition: opacity 0.5s;
    pointer-events: none;
  }
  .toast.show {
    opacity: 1;
  }

  </style>
  
<template>
    <span 
      @click="copyToClipboard" 
      class="cursor-pointer hover:text-pink-500"
      :title="copied ? 'コピーしました！' : 'クリックしてコピー'"
    >
      <slot />
    </span>
    <div id="toast" class="toast"> コピー完了ᴖ ̫ᴖ </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const props = defineProps({
    text: {
      type: String,
      required: true
    }
  });
  
  const copied = ref(false);

  function showToast() {
    const toast = document.getElementById("toast");
    toast?.classList.add("show");
    setTimeout(() => {
        toast?.classList.remove("show");
    }, 2000); // 2秒後に消える
}
  
  const copyToClipboard = async () => {
    try {
      // propsで受け取ったテキストをクリップボードに書き込む
      await navigator.clipboard.writeText(props.text);
      
      // コピー成功時のフィードバック
      copied.value = true;
      showToast();
      
    } catch (err) {
      console.error('コピーに失敗しました:', err);
    }
  };

  </script>
  
  <style scoped>
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
let kaomojiData = [];
let currentFilter = "all";

async function loadKaomoji() {
  try {
    const res = await fetch('kaomoji.json');
    kaomojiData = await res.json(); // グローバル変数に代入

    // カテゴリ一覧を抽出
    const categories = new Set();
    kaomojiData.forEach(km => categories.add(km.category));

    // フィルタボタン生成
    const controls = document.getElementById('controls');
    ["all", ...categories].forEach(cat => {
      const btn = document.createElement('button');
      btn.textContent = cat;
      btn.className = "filter" + (cat === "all" ? " active" : "");
      btn.onclick = () => setFilter(cat);
      controls.appendChild(btn);
    });

    renderKaomoji();
  } catch (err) {
    console.error("JSON読み込み失敗:", err);
  }
}

function setFilter(category) {
  currentFilter = category;
  document.querySelectorAll("button.filter").forEach(b => {
    b.classList.toggle("active", b.textContent === category);
  });
  renderKaomoji();
}

function renderKaomoji() {
  const container = document.getElementById('container');
  container.innerHTML = "";
  kaomojiData
    .filter(km => currentFilter === "all" || km.category === currentFilter)
    .forEach(km => {
      const span = document.createElement('button');
      span.className = 'kaomoji';
      span.textContent = km.text;
      span.onclick = () => copyKaomoji(km.text);
      container.appendChild(span);
    });
}

function copyKaomoji(text) {
  navigator.clipboard.writeText(text).then(() => {
    showToast();
  });
}

loadKaomoji();

function showToast() {
  const toast = document.getElementById("toast");
  toast.classList.add("show");
  setTimeout(() => {
    toast.classList.remove("show");
  }, 2000); // 2秒後に消える
}
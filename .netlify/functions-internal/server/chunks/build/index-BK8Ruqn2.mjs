import { ref, computed, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderClass, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'vue-router';

const kaomojiData = [
  {
    text: "T_T",
    category: "sad"
  },
  {
    text: "ʚ̴̶̷̆_ʚ̴̶̷̆",
    category: "happy"
  },
  {
    text: "(ﾐ･｡･ﾐ)♡",
    category: "face"
  },
  {
    text: "^ෆ ̫ෆ^",
    category: "cute"
  },
  {
    text: "♡^⩌  ̫ ⩌^♡",
    category: "cute"
  },
  {
    text: "ᐡ• ·̫ •̥ᐡᰔᩚ",
    category: "sad"
  },
  {
    text: "(T_T)🌀",
    category: "sad"
  },
  {
    text: "T＿TT＿T💘",
    category: "sad"
  },
  {
    text: "^> ̫<^🫵🏻",
    category: "playful"
  },
  {
    text: "(  > ·̫ <)👍🏻🌟",
    category: "playful"
  },
  {
    text: "₍ᐡ• ̫•ᐡ₎",
    category: "cute"
  },
  {
    text: "T_T",
    category: "sad"
  },
  {
    text: "(＞＜)👍🏻⭐️",
    category: "playful"
  },
  {
    text: "＞ᵕ＜🎵💕",
    category: "happy"
  },
  {
    text: "ˆ ⩌ ˆ",
    category: "cute"
  },
  {
    text: "◔̯◔",
    category: "face"
  },
  {
    text: "๑꒪⌓꒪๑",
    category: "face"
  },
  {
    text: "✘ᴗ✘",
    category: "sad"
  },
  {
    text: "ʚ̴̶̷̆ ̯ʚ̴̶̷̆",
    category: "sad"
  },
  {
    text: "๑˃̶᷄‧̫ ˂̶᷅๑",
    category: "sad"
  },
  {
    text: "• ᴗ •̥",
    category: "sad"
  },
  {
    text: "๑ゝᴗම๑",
    category: "happy"
  },
  {
    text: "`↼´˵",
    category: "funny"
  },
  {
    text: "ꯁ.̮ꯁ",
    category: "face"
  },
  {
    text: "˃̶͈◡˂̶͈",
    category: "cute"
  },
  {
    text: "ෆ˙ᵕ˙ෆ",
    category: "cute"
  },
  {
    text: "•́ε•̀",
    category: "angry"
  },
  {
    text: "♡ᜊ♡",
    category: "cute"
  },
  {
    text: "｡·͜·｡",
    category: "face"
  },
  {
    text: "✪‿✪",
    category: "happy"
  },
  {
    text: "⸝⸝• ̫•⸝⸝",
    category: "cute"
  },
  {
    text: "･̀Ⱉ･́",
    category: "angry"
  },
  {
    text: ">⤙<",
    category: "funny"
  },
  {
    text: "˃̣̣̣̣̣̣︿˂̣̣̣̣̣̣",
    category: "sad"
  },
  {
    text: "ᵒ̴̶̷̤࿀ᵒ̴̶̷̤",
    category: "face"
  },
  {
    text: "ᵔ ᗢ ᵔ",
    category: "cute"
  },
  {
    text: "˵⚈ε⚈˵",
    category: "funny"
  },
  {
    text: "ᵘ ᵕ ᵘ",
    category: "happy"
  },
  {
    text: "╹̆▿╹̆",
    category: "happy"
  },
  {
    text: "Ꙭ̮",
    category: "funny"
  },
  {
    text: "𓂂ɞ̴̶̷ ₃ ɞ̴̶̷𓂂",
    category: "cute"
  },
  {
    text: "•ᴗ•ू ",
    category: "cute"
  },
  {
    text: "˃̵⌓˂̵",
    category: "sad"
  },
  {
    text: "⸝⸝𖦹ࡇ𖦹⸝⸝",
    category: "cute"
  },
  {
    text: "˃̵﹏˂̵",
    category: "sad"
  },
  {
    text: "ŏ̥̥̥̥םŏ̥̥̥̥",
    category: "sad"
  },
  {
    text: "〃● ₃●",
    category: "funny"
  },
  {
    text: "⸝⸝ʚ̴̶̷̆_ʚ̴̶̷̆⸝⸝",
    category: "happy"
  },
  {
    text: "´ᴗ ·̫ ᴗ`",
    category: "face"
  },
  {
    text: "₍ᐢ> ̫<ᐢ₎",
    category: "happy"
  },
  {
    text: "ᐡ ᴗ  ̫ ᴗ ᐡ",
    category: "face"
  },
  {
    text: "ᐡ⸝⸝⊃ ·̫ <⸝⸝ᐡ",
    category: "happy"
  },
  {
    text: "ᐢ⸝⸝ Ⅰ ⩊ Ⅰ ⸝⸝ᐡ",
    category: "face"
  },
  {
    text: "꒰˘⸝⸝ Ⅰ ⩊ Ⅰ ⸝⸝ ˘꒱੭",
    category: "face"
  },
  {
    text: "₍ˆ ̳ ,  ̫ , ̳ˆ₎",
    category: "face"
  },
  {
    text: "₍ᐢ≍ ·̫ ≍ᐢ₎",
    category: "happy"
  },
  {
    text: "₍ᐢ>𖥦<ᐢ₎",
    category: "happy"
  },
  {
    text: "꒰ᐢ⸝⸝× ·̫ ×⸝⸝ᐢ꒱",
    category: "happy"
  },
  {
    text: "o(TωT)o",
    category: "happy"
  },
  {
    text: "⊂( i ꒳ i )⊃",
    category: "happy"
  },
  {
    text: "ᐡ ߹𖥦߹ ᐡ",
    category: "happy"
  },
  {
    text: "ᐡ⸝⸝＞ω＜⸝⸝ᐡ",
    category: "happy"
  },
  {
    text: "ᴖ ̫ᴖ",
    category: "happy"
  },
  {
    text: "( ơ  ̫ ơ )",
    category: "face"
  },
  {
    text: "(ﾐ･｡･ﾐ)♡",
    category: "face"
  },
  {
    text: "⊂(  ᴖ ̫ᴖ)⊃ ⊂(ᴖ ̫ᴖ  )⊃",
    category: "happy"
  },
  {
    text: "ෆ.̮ෆ",
    category: "face"
  },
  {
    text: "• ᴗ •̥",
    category: "sad"
  },
  {
    text: "ㅠ ‧̫ ㅠ",
    category: "sad"
  },
  {
    text: ";ㅅ;",
    category: "sad"
  },
  {
    text: "• - •̥",
    category: "sad"
  },
  {
    text: "߹ ~ ߹",
    category: "sad"
  },
  {
    text: "ᵕ̩̩ㅅᵕ̩̩",
    category: "sad"
  },
  {
    text: "Ĭ ^ Ĭ",
    category: "sad"
  },
  {
    text: "ˊ̥̥̥̥̥ Ⱉ ˋ̥̥̥̥̥",
    category: "sad"
  },
  {
    text: "¯꒳¯̥̥",
    category: "sad"
  },
  {
    text: "ᵕ̩̩࿀ᵕ",
    category: "sad"
  },
  {
    text: "ᴛ ω ᴛ",
    category: "sad"
  },
  {
    text: "＞ᨓ＜",
    category: "happy"
  },
  {
    text: "¯𖥦¯̥̥",
    category: "sad"
  },
  {
    text: "꒰՞⸝⸝⊃ ·̫ <՞꒱",
    category: "happy"
  },
  {
    text: "ᐢɞ̴̶̷ ·̫ ɞ̴̶̷ᐢ⊃━💕",
    category: "love"
  },
  {
    text: "➰‪‪👉🏻👈🏻",
    category: "love"
  },
  {
    text: "Ｔ ˙̫ Ｔ",
    category: "sad"
  },
  {
    text: "(՞っ ̫ ⊂՞)",
    category: "sad"
  },
  {
    text: "ᐢ⩌  ̫ ⩌ᐢ",
    category: "face"
  },
  {
    text: "꒰ᐢ っ· ᴗ⸝⸝ᐢ꒱",
    category: "happy"
  },
  {
    text: "(・ω・)💘⭐️",
    category: "love"
  },
  {
    text: "🚰·̫🚰🤍",
    category: "face"
  },
  {
    text: "꒰∪ɞ̴̶̷ ·̫ ɞ̴̶̷ ꒱💘⭐",
    category: "love"
  },
  {
    text: "⊂(  i ꒳ i )⊃♡⊂( т .-  )⊃",
    category: "love"
  },
  {
    text: "꒰ ᐡᴗ͈ ̫ ᴗ͈` ꒱♡",
    category: "love"
  },
  {
    text: "( i꒳​i  )⭐️",
    category: "happy"
  },
  {
    text: "(ᐡ ᴖ ·̫ ᴖ)ﾉ(> ·̫ ｑᐡ)",
    category: "happy"
  },
  {
    text: "૮o̴̶̷᷄  ̫ o̴̶̷᷄ა♡",
    category: "sad"
  },
  {
    text: "ჱ̒^> ̫ <",
    category: "happy"
  },
  {
    text: "(՞꜆Q A Q꜀՞)",
    category: "sad"
  },
  {
    text: "( ›⩊‹ )🎵⭐",
    category: "happy"
  },
  {
    text: "ˆ I  ̫ < ˆ",
    category: "face"
  },
  {
    text: "( ú ·̫ ù )💘",
    category: "love"
  },
  {
    text: ">ω<✩",
    category: "happy"
  },
  {
    text: "⊂( ᴖ ̫ᴖ )⊃",
    category: "cute"
  },
  {
    text: "（ ᴖ.ᴖ ）",
    category: "neutral"
  },
  {
    text: "ᵕ᷄≀ ̠˘᷅",
    category: "sad"
  },
  {
    text: "ᐡ ߹ ·̫ ߹ ᐡ✌🏻⭐",
    category: "sad"
  },
  {
    text: "(т · т ᐡ )💧",
    category: "cry"
  },
  {
    text: "꜀(˘꒳˘ ꜀)💤",
    category: "sleep"
  },
  {
    text: "(っᐡ^-^)っ=͟͟͞͞💕💕💕",
    category: "love"
  },
  {
    text: "т . q",
    category: "sad"
  }
];
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const currentFilter = ref("all");
    const categories = ["all", "happy", "sad", "face"];
    const filteredKaomoji = computed(
      () => currentFilter.value === "all" ? kaomojiData : kaomojiData.filter((k) => k.category === currentFilter.value)
    );
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-gradient-to-b from-pink-50 to-pink-100 p-6" }, _attrs))} data-v-ba36f9f5><header data-v-ba36f9f5><h1 class="text-3xl font-bold text-center mb-6" data-v-ba36f9f5>かわいい顔文字コレクションᴖ ᴈ ᴖ</h1><p data-v-ba36f9f5>SNSへの投稿に使えるかわいい顔文字です´ᴗ ·̫ ᴗ\`<br data-v-ba36f9f5> クリックでコピーできます⊂( ᴖ ̫ᴖ)⊃ ⊂(ᴖ ̫ᴖ )⊃</p></header><main data-v-ba36f9f5><div class="flex gap-2 justify-center mb-4 controls" data-v-ba36f9f5><!--[-->`);
      ssrRenderList(categories, (cat) => {
        _push(`<button class="${ssrRenderClass([currentFilter.value === cat ? "bg-pink-200" : "", "px-4 py-1 rounded-full border border-pink-400"])}" data-v-ba36f9f5>${ssrInterpolate(cat)}</button>`);
      });
      _push(`<!--]--></div><div class="flex flex-wrap gap-3 justify-center container" data-v-ba36f9f5><!--[-->`);
      ssrRenderList(filteredKaomoji.value, (k) => {
        _push(`<button class="bg-white rounded-2xl shadow px-4 py-2 hover:bg-pink-50 cursor-pointer kaomoji" data-v-ba36f9f5>${ssrInterpolate(k.text)}</button>`);
      });
      _push(`<!--]--></div></main></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-ba36f9f5"]]);

export { index as default };
//# sourceMappingURL=index-BK8Ruqn2.mjs.map

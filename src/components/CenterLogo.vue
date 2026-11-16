<script lang="ts" setup>
import GLOBAL_CONFIG from "@/config";
import { randomNum } from "@/utils";
import { onMounted, ref } from "vue";
import LocalLogo from "@/assets/logo.svg";
import { useHead } from "@unhead/vue";
import ConstellationField from "@/components/ConstellationField.vue";

defineOptions({
  name: "CenterLogo",
});

defineProps<{
  drawerVisible: boolean;
  touchable: boolean;
}>();

const emit = defineEmits<{
  backgroundLoaded: [];
}>();

const bgLoaded = ref<boolean>(false);
const slogan = ref<string>("");

if (GLOBAL_CONFIG.LOGO_URL) {
  useHead({
    link: [
      {
        rel: "preload",
        href: GLOBAL_CONFIG.LOGO_URL,
        as: "image",
      },
    ],
  });
}

/**
 * 星空背景由 canvas 即时绘制，无需等待图片加载
 */
function loadBackground() {
  bgLoaded.value = true;
  emit("backgroundLoaded");
}

/**
 * 前往我的博客
 */
function goToBlog() {
  window.location.href = GLOBAL_CONFIG.BLOG_URL;
}

/** 主标语（SLOGANS[0]）出现的概率，其余标语平分剩下的概率 */
const PRIMARY_SLOGAN_WEIGHT = 0.25;

function randomSlogan() {
  const slogans = GLOBAL_CONFIG.SLOGANS;
  if (slogans.length <= 1 || Math.random() < PRIMARY_SLOGAN_WEIGHT) {
    slogan.value = slogans[0] || "";
    return;
  }
  slogan.value = slogans[randomNum(1, slogans.length - 1)];
}

onMounted(() => {
  randomSlogan();
  loadBackground();
});
</script>

<template>
  <div :class="['logo-area', { 'is-blur': drawerVisible }]">
    <div class="stars-wrap">
      <ConstellationField />
    </div>
    <div :class="['img-shadow', { 'img-shadow-show': bgLoaded }]"></div>
    <div class="inner" style="cursor: pointer" @click="goToBlog">
      <img
        :class="['main-logo', { 'main-logo-top': touchable }]"
        :src="GLOBAL_CONFIG.LOGO_URL || LocalLogo"
      />
      <div :class="['hello', { hello_bottom: touchable }]">
        <div class="slogan">{{ slogan }}</div>
        <div class="hello_bottom_text">
          <a href="https://blog.trageek.com" target="_blank" rel="noopener" @click.stop>Leo's Blog</a>
        </div>
        <div class="hello_bottom_text">
          <a href="https://monitor.trageek.com" target="_blank" rel="noopener" @click.stop>Status Page</a>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.logo-area {
  position: relative;
  background: #010100;
  overflow: hidden;
  align-items: center;
  justify-content: center;
  display: flex;
  border-radius: 100%;
  animation: logoEnter 1.2s;
  animation-fill-mode: forwards;
  transition: all 0.8s;
  &.is-blur {
    filter: blur(5px);
  }
  .stars-wrap {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 100vw;
    height: calc(var(--vh, 1vh) * 100);
    transform: translate(-50%, -50%);
    pointer-events: none;
  }
  .img-shadow {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: #fda085;
    overflow: hidden;
    transition: background-color 0.5s;
    border-radius: 100%;
    animation: shadowEnter 1.2s;
    animation-fill-mode: forwards;
  }
  .img-shadow-show {
    background-color: rgba(1, 1, 0, 0.12);
  }
  .inner {
    position: relative;
    .main-logo {
      height: 5.2rem;
      filter: drop-shadow(0 0 18px rgba(225, 176, 98, 0.18));
      position: absolute;
      transform: translate(-50%, -50%);
      transition: all 1s;
      top: 0;
    }
    .main-logo-top {
      top: -3.4rem;
    }
    .hello {
      color: #ffffff;
      width: max-content;
      min-width: 18.75rem;
      text-align: center;
      position: absolute;
      transform: translate(-50%, -50%);
      font-size: 1.5rem;
      opacity: 0;
      top: 100px;
      transition: all 1s;
      .slogan {
        white-space: nowrap;
        font-size: clamp(1rem, 5vw, 1.5rem);
      }
    }
    .hello_bottom {
      opacity: 1;
      top: 3.5rem;
      .hello_bottom_text {
        font-size: var(--regular-font-size);
        margin-top: 0.5rem;
        padding-top: 0.5rem;
        border-top: 1px solid #fff;
      }
    }
  }
}
</style>

<script lang="ts" setup>
import { ref, toRefs, watch } from "vue";

defineOptions({
  name: "Drawer",
  inheritAttrs: false,
});

const props = defineProps<{
  modelValue: boolean;
}>();

const { modelValue } = toRefs(props);

const emit = defineEmits<{
  "update:modelValue": [value: boolean];
}>();

const drawerIndex = ref(modelValue.value ? 99 : -1);
const timer = ref<NodeJS.Timeout>();

watch(modelValue, (newVal) => {
  if (newVal === false) {
    timer.value = setTimeout(() => {
      drawerIndex.value = -1;
    }, 500);
  } else {
    if (timer.value) {
      clearTimeout(timer.value);
    }
    drawerIndex.value = 99;
  }
});

function onDrawerClick(e: Event) {
  if (e.target === e.currentTarget) {
    emit("update:modelValue", false);
  }
}
</script>

<template>
  <teleport to="#app">
    <div
      class="drawer"
      :style="{
        zIndex: drawerIndex,
      }"
      v-bind="$attrs"
      @click="onDrawerClick"
    >
      <div :class="['drawer__inner', { 'is-opened': modelValue }]">
        <div class="drawer__content">
          <slot></slot>
        </div>
      </div>
    </div>
  </teleport>
</template>

<style lang="scss" scoped>
.drawer {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  overflow: hidden;

  // 暗色磨砂玻璃（与星空背景同色系）
  --regular-text-color: #ece8f4;
  --secondary-text-color: rgba(236, 232, 244, 0.55);
  --warm-card: rgba(255, 255, 255, 0.045);
  --warm-line: rgba(255, 255, 255, 0.09);
  --warm-accent: #b8aae8;
  color: var(--regular-text-color);

  &__inner {
    padding: 1rem;
    position: absolute;
    bottom: 0.5rem;
    left: 50%;
    transition: transform ease 0.5s;
    transform: translate(-50%, calc(100% + 0.5rem));
    z-index: 100;
    background-color: rgba(14, 12, 20, 0.55);
    background-image: linear-gradient(
      160deg,
      rgba(255, 255, 255, 0.07),
      rgba(255, 255, 255, 0.01) 45%
    );
    -webkit-backdrop-filter: blur(22px) saturate(150%);
    backdrop-filter: blur(22px) saturate(150%);
    border: 1px solid var(--warm-line);
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.55),
      inset 0 1px 0 rgba(255, 255, 255, 0.08);
    width: calc(100vw - 1rem);
    box-sizing: border-box;
    border-radius: var(--regular-border-radius);
    display: flex;
    flex-direction: column;
    overflow: hidden;

    @media screen and (min-width: 768px) {
      max-width: 1200px;
      width: 90vw;
      bottom: 3rem;
      transform: translate(-50%, calc(100% + 3rem));
    }

    &.is-opened {
      transform: translate(-50%, 0);
    }
  }

  &__close-btn {
    position: absolute;
    right: 1rem;
    top: 1.1rem;
    font-size: 1.2rem;
    color: rgba(236, 232, 244, 0.6);
    cursor: pointer;
    transition: color 0.2s;
    &:hover {
      color: #fff;
    }
  }

  &__content {
    margin-bottom: var(--super-mini-gap);
  }

  &__footer {
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    font-size: var(--small-font-size);
    color: var(--warm-accent);
    .footer-icon {
      margin-right: 0.3rem;
      font-size: var(--regular-font-size);
    }
  }
}
</style>

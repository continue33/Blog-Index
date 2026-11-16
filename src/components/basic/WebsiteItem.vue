<script lang="ts" setup>
import { computed, ref } from "vue";
import { getPreviewSrc } from "@/utils/preview";

defineOptions({
  name: "WebsiteItem",
});

const props = defineProps<{
  item: Omit<WebsiteItem, "sortId">;
}>();

const previewSrc = computed(() => getPreviewSrc(props.item));
const previewFailed = ref(false);
const iconFailed = ref(false);
</script>

<template>
  <a :href="item.url" target="_blank" rel="noopener" class="website-item">
    <div class="website-item__preview">
      <img
        v-if="!previewFailed"
        :src="previewSrc"
        :alt="`${item.title} 预览`"
        loading="lazy"
        decoding="async"
        @error="previewFailed = true"
      />
      <span v-else class="preview-fallback">{{ item.title }}</span>
    </div>
    <div class="website-item__body">
      <div class="website-item__info">
        <div class="title">{{ item.title }}</div>
        <div class="description">
          {{ item.description || `网站链接: ${item.url}` }}
        </div>
      </div>
      <div
        class="website-item__logo"
        :style="{
          backgroundColor:
            item.color ||
            (item.icon && !iconFailed ? undefined : 'rgba(184, 170, 232, 0.28)'),
        }"
      >
        <img
          v-if="item.icon && !iconFailed"
          class="site-logo"
          :src="item.icon"
          :alt="item.title"
          @error="iconFailed = true"
        />
        <span v-else class="site-default-logo">{{ item.title.slice(0, 1) }}</span>
      </div>
    </div>
  </a>
</template>

<style lang="scss" scoped>
$text-line-height: 1.4rem;

.website-item {
  background-color: var(--warm-card, rgba(255, 255, 255, 0.045));
  border-radius: var(--regular-border-radius);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  transition: all 0.2s ease;
  border: 1px solid var(--warm-line, rgba(255, 255, 255, 0.09));

  @media (any-hover: hover) {
    &:hover {
      border: 1px solid rgba(184, 170, 232, 0.45);
      background-color: rgba(255, 255, 255, 0.08);
      box-shadow: 0 0 18px rgba(184, 170, 232, 0.12);
      .website-item__preview img {
        transform: scale(1.04);
      }
    }
  }

  &:active {
    border: 1px solid rgba(184, 170, 232, 0.45);
    transform: scale(0.99);
  }

  &__preview {
    position: relative;
    aspect-ratio: 16 / 10;
    overflow: hidden;
    background: linear-gradient(
      135deg,
      rgba(184, 170, 232, 0.16),
      rgba(255, 255, 255, 0.03)
    );
    border-bottom: 1px solid var(--warm-line, rgba(255, 255, 255, 0.09));
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: top center;
      display: block;
      transition: transform 0.4s ease;
    }
    .preview-fallback {
      position: absolute;
      inset: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--secondary-text-color);
      font-size: var(--small-font-size);
      letter-spacing: 0.05em;
    }
  }

  &__body {
    display: flex;
    align-items: center;
    padding: 0.5rem;
  }

  &__info {
    flex: 1;
    overflow: hidden;
    margin-right: 0.4rem;
    .title {
      margin-bottom: var(--super-mini-gap);
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      line-height: $text-line-height;
    }
    .description {
      font-size: var(--small-font-size);
      color: var(--secondary-text-color);
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      line-height: $text-line-height;
      height: $text-line-height * 2;
    }
  }

  &__logo {
    width: 2.6rem;
    height: 2.6rem;
    flex-shrink: 0;
    border-radius: 100%;
    position: relative;
    .site-logo {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 100%;
    }
    .site-default-logo {
      font-size: 1.4rem;
      color: #ffffff;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
}
</style>

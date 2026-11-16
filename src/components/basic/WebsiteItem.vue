<script lang="ts" setup>
defineOptions({
  name: "WebsiteItem",
});

defineProps<{
  item: Omit<WebsiteItem, "sortId">;
}>();
</script>

<template>
  <a :href="item.url" target="_blank" class="website-item">
    <div class="website-item__info">
      <div class="title">{{ item.title }}</div>
      <div class="description">
        {{ item.description || `网站链接: ${item.url}` }}
      </div>
    </div>
    <div
      class="website-item__logo"
      :style="{
        backgroundColor: item.color || (item.icon ? undefined : '#d89b61'),
      }"
    >
      <img
        v-if="item.icon"
        class="site-logo"
        :src="item.icon"
        :alt="item.title"
      />
      <span v-else class="site-default-logo">{{ item.title.slice(0, 1) }}</span>
    </div>
  </a>
</template>

<style lang="scss" scoped>
$text-line-height: 1.4rem;

.website-item {
  background-color: var(--warm-card, #fcf8f1);
  padding: 0.5rem;
  border-radius: var(--regular-border-radius);
  overflow: hidden;
  display: flex;
  align-items: center;
  min-height: calc(
    $text-line-height + var(--super-mini-gap) + $text-line-height * 2
  );
  cursor: pointer;
  transition: all 0.2s ease;
  border: 1px solid var(--warm-line, #e2d6c6);

  @media (any-hover: hover) {
    &:hover {
      border: 1px solid var(--warm-accent, #a8693a);
      box-shadow: 0 6px 18px rgba(109, 79, 40, 0.12);
    }
  }

  &:active {
    border: 1px solid var(--warm-accent, #a8693a);
    box-shadow: inset 0px 0px 0.3rem 0px rgba(109, 79, 40, 0.3);
    transform: scale(0.99);
  }

  &__info {
    flex: 1;
    overflow: hidden;
    margin-right: 0.4rem;
    .title {
      margin-bottom: var(--super-mini-gap);
      // 文本最多一行
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      line-height: $text-line-height;
    }
    .description {
      font-size: var(--small-font-size);
      color: var(--secondary-text-color);
      // 文本最多两行
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
    width: 3.5rem;
    height: 3.5rem;
    border-radius: 100%;
    position: relative;
    .site-logo {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 100%;
    }
    .site-default-logo {
      font-size: 2rem;
      color: #ffffff;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
}
</style>

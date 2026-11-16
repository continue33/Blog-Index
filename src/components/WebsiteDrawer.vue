<script lang="ts" setup>
import { computed, onMounted, onUnmounted, ref, toRefs, watch } from "vue";
import Drawer from "@/components/basic/Drawer.vue";
import { UpOutlined, SearchOutlined, CloseCircleFilled } from "@ant-design/icons-vue";
import Tabs from "@/components/basic/Tabs/index.vue";
import TabPanel from "@/components/basic/Tabs/TabPanel.vue";
import GLOBAL_CONFIG from "@/config";
import { TabPanelProps } from "./basic/Tabs/types";
import WebsiteItem from "./basic/WebsiteItem.vue";
import useMouseWheel from "@/hooks/useMouseWheel";
import useTouch from "@/hooks/useTouch";
import { isWebsiteSortsOld } from "@/utils/typeDefender";

type WebsiteConfig = WebsiteSortNew;

defineOptions({
  name: "WebsiteDrawer",
});

const props = defineProps<{
  modelValue: boolean;
}>();

const emit = defineEmits<{
  "update:modelValue": [value: boolean];
}>();

const { modelValue } = toRefs(props);
const activeTabs = ref<TabPanelProps["name"]>(0);
const websiteSorts = ref<WebsiteSort[]>([]);
const websiteItems = ref<WebsiteItem[]>([]);
const disableUserActionInput = ref(false);
const keyword = ref("");
const searchInputRef = ref<HTMLInputElement>();

const websiteConfig = computed<WebsiteConfig[]>(() => {
  if (isWebsiteSortsOld(websiteSorts.value, websiteItems.value)) {
    return websiteSorts.value.map((sort) => {
      return {
        ...sort,
        sites:
          websiteItems.value.filter((item) => item.sortId === sort.id) || [],
      };
    });
  } else {
    return websiteSorts.value;
  }
});

const searchResults = computed(() => {
  const q = keyword.value.trim().toLowerCase();
  if (!q) return [];
  const terms = q.split(/\s+/);
  const list: (Omit<WebsiteItem, "sortId"> & { sortTitle: string })[] = [];
  websiteConfig.value.forEach((sort) => {
    sort.sites?.forEach((site) => {
      const hay = [site.title, site.description, site.url, sort.title]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();
      if (terms.every((t) => hay.includes(t))) {
        list.push({ ...site, sortTitle: sort.title });
      }
    });
  });
  return list;
});

function clearKeyword() {
  keyword.value = "";
  searchInputRef.value?.focus();
}

function onGlobalKeydown(e: KeyboardEvent) {
  if (!modelValue.value) return;
  const typing = document.activeElement === searchInputRef.value;
  if (e.key === "/" && !typing) {
    e.preventDefault();
    searchInputRef.value?.focus();
  } else if (e.key === "Escape" && typing) {
    if (keyword.value) keyword.value = "";
    else searchInputRef.value?.blur();
  }
}

useMouseWheel({
  disable: disableUserActionInput,
  onWheelUp() {
    emit("update:modelValue", true);
  },
});

useTouch({
  disable: disableUserActionInput,
  onSlideUp() {
    emit("update:modelValue", true);
  },
});

function onDrawerHandlerClick() {
  emit("update:modelValue", true);
}

function getWebsiteDrawerData() {
  websiteSorts.value = GLOBAL_CONFIG.WEBSITE_SORTS;
  websiteItems.value = GLOBAL_CONFIG.WEBSITE_ITEMS;
}

watch(
  modelValue,
  (newVal) => {
    disableUserActionInput.value = newVal;
  },
  { immediate: true }
);

onMounted(() => {
  getWebsiteDrawerData();
  window.addEventListener("keydown", onGlobalKeydown);
});

onUnmounted(() => {
  window.removeEventListener("keydown", onGlobalKeydown);
});
</script>

<template>
  <section class="website-drawer">
    <!-- Drawer 打开开关 -->
    <div class="drawer-handler" @click="onDrawerHandlerClick">
      <span class="drawer-handler__icon">
        <up-outlined />
      </span>
      <span class="drawer-handler__text slide-up">Slide Up</span>
      <span class="drawer-handler__text wheel-up">Wheel Up</span>
    </div>
    <!-- Drawer -->
    <Drawer
      :model-value="modelValue"
      class="website-drawer__drawer"
      @update:model-value="$emit('update:modelValue', $event)"
    >
      <div class="website-search">
        <search-outlined class="website-search__icon" />
        <input
          ref="searchInputRef"
          v-model="keyword"
          class="website-search__input"
          type="search"
          placeholder="搜索网站名称、描述或地址（按 / 聚焦）"
          autocomplete="off"
          spellcheck="false"
        />
        <close-circle-filled
          v-if="keyword"
          class="website-search__clear"
          @click="clearKeyword"
        />
      </div>
      <div v-if="keyword.trim()" class="website-search-results">
        <div class="website-search-results__meta">
          找到 {{ searchResults.length }} 个网站
        </div>
        <div v-if="searchResults.length" class="website-grid">
          <WebsiteItem
            v-for="website in searchResults"
            :key="website.url"
            :item="website"
          />
        </div>
        <div v-else class="website-search-results__empty">
          没有匹配「{{ keyword.trim() }}」的网站
        </div>
      </div>
      <Tabs v-show="!keyword.trim()" v-model="activeTabs">
        <TabPanel
          v-for="(config, index) in websiteConfig"
          :key="index"
          :name="index"
          :label="config.title"
          :class="{
            'empty-panel': !config.sites?.length,
          }"
        >
          <template v-if="config.sites?.length">
            <WebsiteItem
              v-for="(website, subIndex) in config.sites"
              :key="subIndex"
              :item="website"
            />
          </template>
          <div v-else>😥 这里什么都没有</div>
        </TabPanel>
      </Tabs>
    </Drawer>
  </section>
</template>

<style lang="scss" scoped>
.website-drawer {
  .drawer-handler {
    position: absolute;
    color: #fff;
    bottom: 5vh;
    transition: all 1s;
    display: flex;
    flex-direction: column;
    transform: translateX(-50%);
    text-align: center;
    cursor: pointer;
    &__icon {
      transform: scale(1.2, 0.8);
    }
    &__text {
      font-size: var(--regular-font-size);
      margin-top: var(--mini-gap);
      animation: float 4s infinite ease-in-out;

      &.slide-up {
        @media (any-hover: hover) {
          display: none;
        }
      }

      &.wheel-up {
        @media (hover: none) {
          display: none;
        }
      }
    }
  }
}
</style>

<style lang="scss">
.website-drawer__drawer {
  .website-grid,
  .drawer__content .tabs__content .tab-panel {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: var(--mini-gap);
    align-items: flex-start;
    @media screen and (min-width: 768px) {
      grid-template-columns: repeat(3, 1fr);
    }
    @media screen and (min-width: 1100px) {
      grid-template-columns: repeat(4, 1fr);
    }
  }
  .website-search {
    position: relative;
    display: flex;
    align-items: center;
    margin-bottom: var(--mini-gap);
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid var(--warm-line);
    border-radius: 999px;
    padding: 0 0.9rem;
    transition: border-color 0.2s, background 0.2s;
    &:focus-within {
      border-color: rgba(184, 170, 232, 0.55);
      background: rgba(255, 255, 255, 0.08);
    }
    &__icon {
      color: var(--secondary-text-color);
      margin-right: 0.5rem;
    }
    &__input {
      flex: 1;
      min-width: 0;
      height: 2.2rem;
      background: transparent;
      border: none;
      outline: none;
      color: var(--regular-text-color);
      font-size: var(--regular-font-size);
      &::placeholder {
        color: var(--secondary-text-color);
      }
      &::-webkit-search-cancel-button {
        display: none;
      }
    }
    &__clear {
      color: var(--secondary-text-color);
      cursor: pointer;
      &:hover {
        color: var(--regular-text-color);
      }
    }
  }
  .website-search-results {
    height: 60vh;
    overflow-y: auto;
    &__meta {
      font-size: var(--small-font-size);
      color: var(--secondary-text-color);
      margin-bottom: var(--mini-gap);
    }
    &__empty {
      height: 70%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--secondary-text-color);
    }
  }
  .drawer__content {
    .tabs__header {
      width: 100%;
    }
    .tabs__content {
      height: 60vh;

      .tab-panel {
        &.empty-panel {
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--secondary-text-color);
        }
      }
    }
  }
}
</style>

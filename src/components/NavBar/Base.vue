<template>
  <div class="flex justify-between">
    <div class="inline-flex items-center lg:hidden" @click="openOffCanvas">
      <ph-list :size="24" />
    </div>

    <div class="hidden items-center lg:inline-flex">
      <ph-list :size="24" />
    </div>

    <div :class="classNav">
      <div class="absolute right-0 p-2 lg:hidden" @click="closeOffCanvas">
        <div :class="['bg-accent-500 text-white', icon.padding]">
          <ph-x :size="24" />
        </div>
      </div>
      <cs-nav :list="menu" class="lg:w-auto w-full" />
    </div>

    <div class="inline-flex items-center lg:hidden">
      <cs-logo height="h-6" />
    </div>
    <div>
      <cs-search :posts="search" :limit="searchLimit" />
    </div>
  </div>
</template>

<script>
import { defineComponent, ref, computed, reactive } from "vue";

import CsNav from "@/components/Nav/Base.vue";
import CsLogo from "@/components/Logo/Base.vue";
import CsSearch from "@/components/Search/Base.vue";
import { icon } from "@/utils/Patterns";
import { PhX, PhList } from "phosphor-vue";

export default defineComponent({
  name: "CsNavBar ",
  components: {
    CsNav,
    CsLogo,
    CsSearch,
    PhX,
    PhList,
  },
  props: {
    menu: {
      type: Object,
      default: null,
    },
    search: {
      type: Object,
      default: null,
    },
    searchLimit: {
      type: Number,
      default: 3,
    },
  },
  setup(props) {
    props = reactive(props);
    const displayOffCanvas = ref(false);
    const openOffCanvas = () => {
      displayOffCanvas.value = true;
    };
    const closeOffCanvas = () => {
      displayOffCanvas.value = false;
    };

    return {
      icon,
      displayOffCanvas,
      openOffCanvas,
      closeOffCanvas,
      classNav: computed(() => ({
        "bg-primary-50 bg-opacity-95 lg:bg-transparent": true,
        "w-full h-full lg:h-auto": true,
        "-translate-x-full": !displayOffCanvas.value,
        "translate-x-0": displayOffCanvas.value,
        "transform transition duration-500 ease-in-out lg:translate-x-0": true,
        "fixed top-0 left-0 lg:contents": true,
      })),
    };
  },
});
</script>

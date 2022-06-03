<template>
  <ul :class="navClass">
    <cs-nav-item
      v-for="item in list"
      :title="item.title"
      :link="item.link"
      :active="item.active"
      :key="item.id"
    />
  </ul>
</template>

<script>
import { defineComponent, computed } from "vue";
import { nav } from "@/utils/Patterns";
import CsNavItem from "@/components/Nav/Item.vue";

export default defineComponent({
  name: "CsNav",
  components: {
    CsNavItem,
  },
  props: {
    list: {
      type: Array,
      default: null,
    },
  },
  setup() {
    return {
      navClass: computed(() => ({
        "inline-flex flex-col lg:flex-row": true,
        "divide-y divide-black divide-opacity-5 lg:divide-y-0 lg:divide-x":
          nav.divider,
      })),
    };
  },
});
</script>

<template>
  <div class="inline-flex flex-col w-full">
    <div :class="['inline-flex space-x-2', tabPatterns.alignHeader]">
      <slot />
    </div>
    <div :class="{ 'bg-accent-500 h-0.5 z-10': tabPatterns.divider }"></div>
  </div>
</template>

<script>
import { defineComponent, provide, computed, ref } from "vue";
import { tabs as tabPatterns } from "@/utils/Patterns";

export default defineComponent({
  name: "CsTabHeader",
  props: {
    modelValue: {
      type: [String, Number],
    },
  },
  emits: ["update:modelValue"],
  setup(props, { slots, emit }) {
    const active = computed(() => props.modelValue);
    const tabs = ref([]);

    function selectTab(tab) {
      emit("update:modelValue", tab);
    }

    provide("tabsState", {
      active,
      tabs,
      selectTab,
    });
    return { tabPatterns };
  },
});
</script>

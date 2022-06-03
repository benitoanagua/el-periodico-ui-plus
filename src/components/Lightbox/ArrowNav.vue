<template>
  <div class="w-full top-1/2 absolute z-40">
    <div class="flex justify-between">
      <div :class="lightboxArrowClass" @click="decrementModal">
        <ph-arrow-left :size="24" class="text-white" />
      </div>
      <div :class="lightboxArrowClass" @click="incrementModal">
        <ph-arrow-right :size="24" class="text-white" />
      </div>
    </div>
  </div>
</template>
<script>
import { defineComponent, computed, inject } from "vue";
import { PhArrowLeft, PhArrowRight } from "phosphor-vue";
import { icon } from "@/utils/Patterns";

export default defineComponent({
  name: "CsLightboxArrowNav",
  components: {
    PhArrowLeft,
    PhArrowRight,
  },
  setup() {
    const { decrementModal, incrementModal } = inject("lightboxGroup");

    return {
      decrementModal,
      incrementModal,
      lightboxArrowClass: computed(() => ({
        "border border-white cursor-pointer mx-2": true,
        [icon.padding]: true,
      })),
    };
  },
});
</script>

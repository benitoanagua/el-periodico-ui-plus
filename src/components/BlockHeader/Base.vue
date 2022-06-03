<template>
  <div class="flex flex-col space-y-1">
    <div :class="lineClass">
      <div :class="lineFractionClass"></div>
    </div>
    <div class="inline-flex items-center">
      <span :class="titleClass">
        {{ title }}
      </span>
      <ph-caret-right :size="24" :class="classBodyIcon" />
    </div>
  </div>
</template>
<script>
import { defineComponent, reactive, computed } from "vue";
import { PhCaretRight } from "phosphor-vue";
import { blockHeader } from "@/utils/Patterns";

export default defineComponent({
  name: "CsBlockHeader",
  components: {
    PhCaretRight,
  },
  props: {
    title: {
      type: String,
      default: "Title",
    },
    lineFraction: {
      type: String,
      default: blockHeader.lineFraction,
      validator: function (value) {
        return (
          [
            "is-full",
            "is-half",
            "is-two-fifths",
            "is-one-third",
            "is-one-quarter",
            "is-one-fifth",
          ].indexOf(value) !== -1
        );
      },
    },
    theme: {
      type: String,
      default: blockHeader.theme,
      validator: function (value) {
        return (
          ["neutral", "primary", "secondary", "accent"].indexOf(value) !== -1
        );
      },
    },
  },
  setup(props) {
    props = reactive(props);

    return {
      lineClass: computed(() => ({
        "flex h-1": true,
        "bg-neutral-300": props.theme === "neutral",
        "bg-primary-300": props.theme === "primary",
        "bg-secondary-300": props.theme === "secondary",
        "bg-accent-300": props.theme === "accent",
      })),
      lineFractionClass: computed(() => ({
        "w-full h-1": true,
        "md:w-full": props.lineFraction === "is-full",
        "md:w-1/2": props.lineFraction === "is-half",
        "md:w-2/5": props.lineFraction === "is-two-fifths",
        "md:w-1/3": props.lineFraction === "is-one-third",
        "md:w-1/4": props.lineFraction === "is-one-quarter",
        "md:w-1/5": props.lineFraction === "is-one-fifth",
        "bg-neutral-800": props.theme === "neutral",
        "bg-primary-800": props.theme === "primary",
        "bg-secondary-800": props.theme === "secondary",
        "bg-accent-800": props.theme === "accent",
      })),

      titleClass: computed(() => ({
        "font-sans font-semibold md:text-2xl text-xl": true,
        "text-neutral-900": props.theme === "neutral",
        "text-primary-900": props.theme === "primary",
        "text-secondary-900": props.theme === "secondary",
        "text-accent-900": props.theme === "accent",
      })),
      classBodyIcon: computed(() => ({
        "fill-current": true,
        "text-neutral-700": props.theme === "neutral",
        "text-primary-700": props.theme === "primary",
        "text-secondary-700": props.theme === "secondary",
        "text-accent-700": props.theme === "accent",
      })),
    };
  },
});
</script>

<template>
  <div :class="bgClass">
    <div :class="cardClass">
      <div :class="mediaClass">
        <div class="w-full">
          <a :href="post.url">
            <div
              :class="imgMediaClass"
              :style="'background-image: url(' + post.image + ')'"
            ></div>
          </a>
        </div>
      </div>
      <div :class="bodyClass">
        <div v-if="showMeta" :class="metaPatterns.category">
          {{ post.category }}
        </div>
        <div class="flex text-neutral-900">
          <a :href="post.url">
            <h1 v-if="heading === 1">{{ post.title }}</h1>
            <h2 v-else-if="heading === 2">{{ post.title }}</h2>
            <h3 v-else-if="heading === 3">{{ post.title }}</h3>
            <h4 v-else-if="heading === 4">{{ post.title }}</h4>
            <h5 v-else-if="heading === 5">{{ post.title }}</h5>
            <h6 v-else>{{ post.title }}</h6>
          </a>
        </div>
        <div v-if="showMeta" class="flex space-x-2 items-center">
          <div :class="metaPatterns.author">
            {{ post.author }}
          </div>
          <span class="h-3 border-l border-neutral-300"></span>
          <div :class="metaPatterns.date">
            {{ post.date }}
          </div>
        </div>
        <p v-if="showExcerpt" :class="metaPatterns.paragraph">
          {{ post.excerpt }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, reactive, computed } from "vue";
import { card as cardPatterns, meta as metaPatterns } from "@/utils/Patterns";

export default defineComponent({
  name: "CsCard",
  props: {
    fractionMedia: {
      type: String,
      default: cardPatterns.fractionMedia,
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
    positionMedia: {
      type: String,
      default: cardPatterns.positionMedia,
      validator: function (value) {
        return ["top", "bottom", "left", "right"].indexOf(value) !== -1;
      },
    },
    aspectRatio: {
      type: String,
      default: cardPatterns.aspectRatio,
    },
    keepInline: {
      type: Boolean,
      default: false,
    },
    elevation: {
      type: Boolean,
      default: false,
    },
    heading: {
      type: Number,
      default: 1,
    },
    post: {
      type: Object,
      default: null,
    },
    showMeta: {
      type: Boolean,
      default: true,
    },
    showExcerpt: {
      type: Boolean,
      default: true,
    },
  },
  setup(props) {
    props = reactive(props);

    const isVertical = computed(
      () => props.positionMedia === "top" || props.positionMedia === "bottom"
    );
    const isHorizontal = computed(
      () => props.positionMedia === "left" || props.positionMedia === "right"
    );
    const keepHorizontal = computed(
      () => isHorizontal.value && props.keepInline
    );

    return {
      cardPatterns,
      metaPatterns,

      bgClass: computed(() => ({
        "md:bg-primary-200": props.elevation,
        "md:mt-8": props.positionMedia !== "bottom" && props.elevation,
        "md:ml-8":
          (props.positionMedia === "left" ||
            props.positionMedia === "bottom") &&
          props.elevation,
        "md:mr-8":
          (props.positionMedia === "right" || props.positionMedia === "top") &&
          props.elevation,

        "md:mb-8": props.positionMedia === "bottom" && props.elevation,
      })),
      cardClass: computed(() => ({
        flex: true,
        [!props.keepInline || isVertical.value
          ? "space-y-2 flex-col"
          : "space-x-4 flex-row"]: true,

        "md:space-x-4 md:space-y-0": isHorizontal.value,
        "md:flex-row": props.positionMedia === "left",
        "md:flex-row-reverse md:space-x-reverse":
          props.positionMedia === "right",
        "md:pr-4": props.positionMedia === "left" && props.elevation,
        "md:pl-4": props.positionMedia === "right" && props.elevation,
        "md:flex-col-reverse md:space-y-reverse":
          props.positionMedia === "bottom",
      })),
      mediaClass: computed(() => ({
        flex: true,
        "w-full": !props.keepInline && !isHorizontal.value,
        "md:w-full": props.fractionMedia === "is-full",
        "md:w-1/2": props.fractionMedia === "is-half",
        "md:w-2/5": props.fractionMedia === "is-two-fifths",
        "md:w-1/3": props.fractionMedia === "is-one-third",
        "md:w-1/4": props.fractionMedia === "is-one-quarter",
        "md:w-1/5": props.fractionMedia === "is-one-fifth",

        "w-1/2": props.fractionMedia === "is-half" && keepHorizontal.value,
        "w-2/5":
          props.fractionMedia === "is-two-fifths" && keepHorizontal.value,
        "w-1/3": props.fractionMedia === "is-one-third" && keepHorizontal.value,
        "w-1/4":
          props.fractionMedia === "is-one-quarter" && keepHorizontal.value,
        "w-1/5": props.fractionMedia === "is-one-fifth" && keepHorizontal.value,

        "md:-mt-8 md:mb-8": isHorizontal.value && props.elevation,
        "md:-ml-8 ": props.positionMedia === "left" && props.elevation,
        "md:-mr-8 ": props.positionMedia === "right" && props.elevation,
        "md:ml-8 md:-mt-8": props.positionMedia === "top" && props.elevation,
        "md:-ml-8 md:-mb-8":
          props.positionMedia === "bottom" && props.elevation,
      })),
      imgMediaClass: computed(() => ({
        "bg-cover bg-center": true,
        [props.aspectRatio]: true,
        "-mx-4 md:mx-0": props.elevation,
      })),

      bodyClass: computed(() => ({
        "flex flex-col space-y-1": true,
        "w-full": !props.keepInline && !isHorizontal.value,
        "md:w-full": props.fractionMedia === "is-full",
        "md:w-1/2": props.fractionMedia === "is-half",
        "md:w-3/5": props.fractionMedia === "is-two-fifths",
        "md:w-2/3": props.fractionMedia === "is-one-third",
        "md:w-3/4": props.fractionMedia === "is-one-quarter",
        "md:w-4/5": props.fractionMedia === "is-one-fifth",

        "w-1/2": props.fractionMedia === "is-half" && keepHorizontal.value,
        "w-2/5":
          props.fractionMedia === "is-two-fifths" && keepHorizontal.value,
        "w-2/3": props.fractionMedia === "is-one-third" && keepHorizontal.value,
        "w-3/4":
          props.fractionMedia === "is-one-quarter" && keepHorizontal.value,
        "w-4/5": props.fractionMedia === "is-one-fifth" && keepHorizontal.value,

        "md:py-8": isHorizontal.value && props.elevation,
        "md:px-8": isVertical.value && props.elevation,
        "md:pb-8": props.positionMedia === "top" && props.elevation,
        "md:pt-8": props.positionMedia === "bottom" && props.elevation,
      })),
    };
  },
});
</script>

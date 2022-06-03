<template>
  <div :class="itemClass">
    <div v-if="type !== 'none'" class="flex items-center justify-center pr-2">
      <div v-if="type === 'default'" class="w-3 h-3 bg-accent-500"></div>
      <div
        v-else="type === 'decimal'"
        class="w-6 text-4xl font-extralight text-primary-300 text-right"
      >
        {{ index }}
      </div>
    </div>
    <div :class="infoClass">
      <div :class="thumbnailClass" v-if="thumbnail !== 'none'">
        <a :href="post.url">
          <div
            class="w-full bg-cover bg-center aspect-w-1 aspect-h-1"
            :style="'background-image: url(' + post.image + ')'"
          ></div>
        </a>
      </div>
      <div :class="infoDetailsClass">
        <div :class="meta.category">{{ post.category }}</div>
        <a :href="post.url">
          <h6>{{ post.title }}</h6>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import {
  defineComponent,
  reactive,
  computed,
  inject,
  getCurrentInstance,
  watch,
  watchEffect,
  nextTick,
} from "vue";
import { meta } from "@/utils/Patterns";

export default defineComponent({
  name: "CsListItem",
  props: {
    post: {
      type: Object,
      default: null,
    },
    index: {
      type: Number,
      default: null,
    },
    thumbnail: {
      type: String,
      default: "left",
      validator: function (value) {
        return ["left", "right", "none"].indexOf(value) !== -1;
      },
    },
    type: {
      type: String,
      default: "default",
      validator: function (value) {
        return ["default", "decimal", "none"].indexOf(value) !== -1;
      },
    },
  },
  setup(props) {
    props = reactive(props);
    const instance = getCurrentInstance();
    const { items, divider, striped, columns, counter, multiple } = inject(
      "listState",
      {
        items: [],
      }
    );
    const index = computed(() =>
      items.value.findIndex((target) => target.uid === instance.uid)
    );

    const isActive = computed(
      () =>
        counter.value < columns.value && multiple.value % columns.value === 0
    );

    watch(
      () => index.value,
      async (currentIndex, previousIndex) => {
        if (isActive.value) {
          counter.value++;
          await nextTick();
          instance.vnode.el.classList.toggle("bg-primary-100", striped.value);
          if (divider.value)
            instance.vnode.el.classList.add("border-y", "border-primary-200");
        } else {
          multiple.value++;
          counter.value = 0;
        }
      }
    );

    watchEffect(() => {
      if (index.value === -1) {
        items.value.push(instance);
      }
    });

    return {
      meta,
      itemClass: computed(() => ({
        "flex items-center py-2 md:px-3": true,
      })),
      infoClass: computed(() => ({
        "flex items-center space-x-2 w-full": true,
        "flex-row-reverse space-x-reverse ":
          props.thumbnail === "right" && props.thumbnail !== "none",
      })),
      thumbnailClass: computed(() => ({
        "w-1/3": true,
        "md:w-1/7": columns.value === 1,
        "md:w-1/4": columns.value === 2,
        "md:w-1/3": columns.value >= 3,
      })),
      infoDetailsClass: computed(() => ({
        "flex flex-col": true,
        [props.thumbnail === "none" ? "w-full" : "w-4/5 md:w-6/7"]: true,
      })),
    };
  },
});
</script>

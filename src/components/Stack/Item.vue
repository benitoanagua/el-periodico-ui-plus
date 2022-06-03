<template>
  <div class="relative">
    <div :class="classStackItem" ref="container">
      <div class="-mb-3 z-10">
        <cs-button
          :theme="getTheme"
          size="small"
          class="w-40"
          @click="sendFront"
          :disabled="index === 0"
        >
          {{ caption }}
        </cs-button>
      </div>
      <div :class="itemBgClass">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
import {
  defineComponent,
  ref,
  reactive,
  computed,
  inject,
  watchEffect,
  getCurrentInstance,
  onUpdated,
} from "vue";
import CsButton from "@/components/Button/Base.vue";

export default defineComponent({
  name: "CsStackItem",
  components: {
    CsButton,
  },
  props: {
    caption: {
      type: String,
      default: "Titulo",
    },
  },
  setup(props) {
    props = reactive(props);

    const container = ref(null);

    const instance = getCurrentInstance();
    const { items, itemsHeight } = inject("itemsState", {
      items: [],
      itemsHeight: [],
    });
    const index = computed(() =>
      items.value.findIndex((target) => target.uid === instance.uid)
    );

    const sendFront = () => {
      items.value.splice(index.value, 1);
      items.value.unshift(instance);
    };

    onUpdated(() => {
      itemsHeight.value[index.value] =
        container.value.offsetHeight +
        32 * (items.value.length - (index.value + 1));
    });

    watchEffect(() => {
      if (index.value === -1) {
        items.value.push(instance);
      }
    });

    const topZindexClass = computed(() => {
      switch ((items.value.length - index.value - 1) * 10) {
        case 50:
          return "translate-y-40 z-50 md:right-20";
        case 40:
          return "translate-y-32 z-40 md:right-16";
        case 30:
          return "translate-y-24 z-30 md:right-12";
        case 20:
          return "translate-y-16 z-20 md:right-8";
        case 10:
          return "translate-y-8 z-10 md:right-4";
        default:
          return "translate-y-0 z-0 md:right-0";
      }
    });
    const mdLeftClass = computed(() => {
      switch (index.value * 4) {
        case 20:
          return "md:left-20";
        case 16:
          return "md:left-16";
        case 12:
          return "md:left-12";
        case 8:
          return "md:left-8";
        case 4:
          return "md:left-4";
        default:
          return "md:left-0";
      }
    });
    const bgClass = computed(() => {
      switch (index.value) {
        case 5:
          return "bg-primary-600";
        case 4:
          return "bg-primary-500";
        case 3:
          return "bg-primary-400";
        case 2:
          return "bg-primary-300";
        case 1:
          return "bg-primary-200";
        default:
          return "bg-primary-100";
      }
    });

    return {
      sendFront,
      index,
      container,

      classStackItem: computed(() => ({
        "absolute transition duration-300 ease-out": true,
        "flex items-center flex-col": true,
        [topZindexClass.value]: true,
        [mdLeftClass.value]: true,
      })),
      itemBgClass: computed(() => ({
        "pt-5 px-1": true,
        [bgClass.value]: true,
      })),
      getTheme: computed(() => (index.value === 0 ? "secondary" : "primary")),
    };
  },
});
</script>

<template>
  <div :style="{ height: blockHeight + 'px' }">
    <cs-stack-item
      v-for="({ list, caption }, index) in cards"
      :key="index"
      :caption="caption"
    >
      <cs-list
        class="divide-y divide-primary-900/10"
        :posts="list.value"
        showMedia="none"
        :typeList="type"
        :columns="1"
      />
    </cs-stack-item>
  </div>
</template>

<script>
import { defineComponent, ref, provide, watchEffect } from "vue";
import CsStackItem from "@/components/Stack/Item.vue";
import CsList from "@/components/List/Base.vue";

export default defineComponent({
  name: "CsStack",
  components: {
    CsStackItem,
    CsList,
  },
  props: {
    cards: {
      type: Object,
      default: null,
    },
    type: {
      type: String,
      default: "default",
      validator: function (value) {
        return ["default", "decimal", "none"].indexOf(value) !== -1;
      },
    },
  },
  setup() {
    const items = ref([]);
    const itemsHeight = ref([]);
    const blockHeight = ref(0);

    watchEffect(() => {
      blockHeight.value = Math.max(...itemsHeight.value);
    });

    provide("itemsState", {
      items,
      itemsHeight,
    });

    return {
      blockHeight,
    };
  },
});
</script>

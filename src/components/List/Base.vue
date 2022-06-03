<template>
  <div :class="listClass">
    <cs-list-item
      v-for="(item, n) in posts"
      :index="n + 1"
      :post="item"
      :thumbnail="showMedia"
      :type="typeList"
    />
  </div>
</template>

<script>
import { defineComponent, reactive, ref, computed, provide } from "vue";
import CsListItem from "@/components/List/Item.vue";
import { list as listPattern } from "@/utils/Patterns";

export default defineComponent({
  name: "CsList",
  components: {
    CsListItem,
  },
  props: {
    posts: {
      type: Object,
      default: null,
    },
    typeList: {
      type: String,
      default: "decimal",
    },
    showMedia: {
      type: String,
      default: "left",
    },
    divider: {
      type: Boolean,
      default: false,
    },
    striped: {
      type: Boolean,
      default: false,
    },
    columns: {
      type: Number,
      default: 1,
    },
  },
  setup(props) {
    props = reactive(props);

    const items = ref([]);
    const divider = ref(props.divider);
    const striped = ref(props.striped);
    const columns = ref(props.columns);
    const counter = ref(0);
    const multiple = ref(0);
    provide("listState", {
      items,
      divider,
      striped,
      columns,
      counter,
      multiple,
    });

    // const postsLength = computed({
    //     get: () => props.posts?.length,
    //     set: (newLength) => newLength,
    // });
    // onUpdated(() => {
    //     postsLength.value = props.posts.length;
    // });

    return {
      listPattern,
      listClass: computed(() => ({
        "grid grid-cols-1": true,
        "md:grid-cols-1": props.columns === 1,
        "md:grid-cols-2": props.columns === 2,
        "md:grid-cols-3": props.columns >= 3,
        "border-b border-primary-200": props.divider,
      })),
    };
  },
});
</script>

<template>
  <div class="h-12 inline-flex items-center">
    <ph-magnifying-glass
      class="cursor-pointer"
      :size="24"
      @click="openSearch"
    />
  </div>
  <div :class="classBoxSearch">
    <cs-search-form v-model:search="searchQuery" @click="closeSearch" />
    <div class="flex flex-col py-1 space-y-2 divide-y divide-neutral-100">
      <cs-search-result
        v-for="post in searchedPosts"
        :key="post.id"
        :title="post.title"
        :image="post.image"
        :date="post.date"
      />
    </div>
  </div>
</template>

<script>
import { defineComponent, ref, reactive, computed } from "vue";
import CsSearchForm from "@/components/Search/Form.vue";
import CsSearchResult from "@/components/Search/Result.vue";
import { PhMagnifyingGlass } from "phosphor-vue";

export default defineComponent({
  name: "CsSearch",
  components: {
    CsSearchForm,
    CsSearchResult,
    PhMagnifyingGlass,
  },
  props: {
    posts: {
      type: Object,
      default: null,
    },
    limit: {
      type: Number,
      default: 4,
    },
  },
  setup(props) {
    props = reactive(props);

    const searchQuery = ref("");
    const displaySearch = ref(false);

    const openSearch = () => {
      displaySearch.value = true;
    };
    const closeSearch = () => {
      displaySearch.value = false;
      searchQuery.value = "";
    };

    const searchedPosts = computed(() => {
      return props.posts
        .filter(
          (post) =>
            post.title.toLowerCase().indexOf(searchQuery.value.toLowerCase()) !=
              -1 && searchQuery.value !== ""
        )
        .slice(0, props.limit);
    });

    return {
      searchedPosts,
      searchQuery,
      openSearch,
      closeSearch,
      classBoxSearch: computed(() => ({
        "bg-primary-50 border border-primary-100": true,
        "-mb-32 pt-16 pb-2 px-4": true,
        "w-full shadow-2xl": true,
        "transform left-2/4 -translate-x-2/4": true,
        hidden: !displaySearch.value,
        absolute: displaySearch.value,
      })),
    };
  },
});
</script>

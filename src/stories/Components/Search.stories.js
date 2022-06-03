import { ref } from "vue";
import { container } from "@/utils/Patterns";
import PostsService from "@/utils/Services/Posts";
import CsSearch from "@/components/Search/Base.vue";

export default {
  title: "Design System/Components/Search",
};

const Template = (args) => ({
  components: {
    CsSearch,
  },
  setup() {
    const news = ref([]);
    const postsService = ref(new PostsService());
    postsService.value.getAll().then((data) => (news.value = data));
    return { ...args, container, news };
  },
  template: `
      <div class="bg-neutral-50">
        <div :class="['container', container.maxWidth]">
          <cs-search :posts="news" :limit="limit" />
        </div>
      </div>
    `,
});

export const Default = Template.bind({});
Default.args = {
  limit: 4,
};

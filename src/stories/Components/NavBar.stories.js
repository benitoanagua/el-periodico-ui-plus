import { ref } from "vue";
import { container } from "@/utils/Patterns";
import PostsService from "@/utils/Services/Posts";
import CategoriesService from "@/utils/Services/Categories";
import CsNavBar from "@/components/NavBar/Base.vue";

export default {
  title: "Design System/Components/NavBar",
};

const Template = (args) => ({
  components: { CsNavBar },
  setup() {
    const items = ref([]);
    const news = ref([]);
    const categoriesService = ref(new CategoriesService());
    const postsService = ref(new PostsService());
    categoriesService.value.getAll().then((data) => (items.value = data));
    postsService.value.getAll().then((data) => (news.value = data));

    return { ...args, container, items, news };
  },
  template: `
    <div :class="backgroundColor">
      <div :class="['container', container.maxWidth]">
        <cs-nav-bar :menu="items" :search="news" :searchLimit="5" />
      </div>
    </div>
  `,
});

export const Default = Template.bind({});
Default.args = {
  backgroundColor: "bg-secondary-400",
};

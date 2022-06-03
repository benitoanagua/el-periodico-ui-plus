import { ref } from "vue";
import { container } from "@/utils/Patterns";
import CategoriesService from "@/utils/Services/Categories";
import CsNav from "@/components/Nav/Base.vue";

export default {
  title: "Design System/Components/Nav",
};

const Template = (args) => ({
  components: {
    CsNav,
  },
  setup() {
    const items = ref([]);
    const categoriesService = ref(new CategoriesService());
    categoriesService.value.getAll().then((data) => (items.value = data));
    return { ...args, container, items };
  },
  template: `
    <div :class="backgroundColor">
      <div :class="['container flex justify-center', container.maxWidth]">
        <cs-nav :list="items" />
      </div>
    </div>
  `,
});

export const Default = Template.bind({});
Default.args = {
  backgroundColor: "bg-neutral-50",
};

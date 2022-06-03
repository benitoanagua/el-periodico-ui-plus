import { ref } from "vue";
import PostsService from "@/utils/Services/Posts";
import { container } from "@/utils/Patterns";
import CsList from "@/components/List/Base.vue";

export default {
  title: "Design System/Components/List",
  argTypes: {
    showMedia: {
      options: ["left", "right", "none"],
      control: { type: "inline-radio" },
    },
    columns: {
      control: {
        type: "range",
        min: 1,
        max: 3,
      },
    },
  },
};

const Template = (args) => ({
  components: {
    CsList,
  },
  setup() {
    const items = ref(null);
    const postsService = ref(new PostsService());
    postsService.value.getPosts(9, 14).then((data) => (items.value = data));
    return { ...args, items, container };
  },
  template: `
    <div>
        <div :class="['container py-4', container.maxWidth]">
            <div > 
                <cs-list :posts="items"
                    :showMedia="showMedia"
                    :typeList="type"
                    :divider="divider"
                    :striped="striped"
                    :columns="columns"
                />
            </div>
        </div>
    </div>
    `,
});

export const Default = Template.bind({});
Default.args = {
  showMedia: "left",
  type: "default",
  divider: true,
  striped: false,
  columns: 1,
};
export const Decimal = Template.bind({});
Decimal.args = {
  showMedia: "left",
  type: "decimal",
  divider: true,
  striped: false,
  columns: 1,
};
export const None = Template.bind({});
None.args = {
  showMedia: "left",
  type: "none",
  divider: true,
  striped: false,
  columns: 1,
};

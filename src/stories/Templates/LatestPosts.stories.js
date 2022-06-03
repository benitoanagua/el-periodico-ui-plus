import { ref } from "vue";
import PostsService from "@/utils/Services/Posts";
import CsBlockHeader from "@/components/BlockHeader/Base.vue";
import { container } from "@/utils/Patterns";
import CsList from "@/components/List/Base.vue";

export default {
  title: "Design System/Templates/Latest",
  argTypes: {
    thumbnail: {
      options: ["left", "right", "none"],
      control: { type: "inline-radio" },
    },
  },
};

const Template = (args) => ({
  components: {
    CsBlockHeader,
    CsList,
  },
  setup() {
    const items = ref(null);
    const postsService = ref(new PostsService());
    postsService.value.getPosts(2, 7).then((data) => (items.value = data));
    return { ...args, items, container };
  },
  template: `
    <div class="bg-primary-100">
        <div :class="['container py-4 flex flex-col space-y-6', container.maxWidth]">
            <cs-block-header title="Lo último" lineFraction="is-one-third"/>
            <cs-list :posts="items"
                :showMedia="thumbnail"
                typeList="none"
                :divider="divider"
                :columns="3"
            />
        </div>
    </div>
    `,
});

export const Default = Template.bind({});
Default.args = {
  thumbnail: "right",
  divider: true,
};

import { ref } from "vue";
import { container } from "@/utils/Patterns";
import PostsService from "@/utils/Services/Posts";
import CsCarousel from "@/components/Carousel/Base.vue";

export default {
  title: "Design System/Components/Carousel",
};

const Template = (args) => ({
  components: {
    CsCarousel,
  },
  setup() {
    const items = ref(null);
    const postsService = ref(new PostsService());
    postsService.value.getPosts(5, 10).then((data) => (items.value = data));
    return { ...args, items, container };
  },
  template: `
    <div>
        <div :class="['container py-4', container.maxWidth]">
            <cs-carousel :posts="items" :showDesktop="showDesktop" :showMobile="showMobile" />
        </div>
    </div>
        `,
});

export const Default = Template.bind({});
Default.args = {
  showDesktop: 3,
  showMobile: 1,
};

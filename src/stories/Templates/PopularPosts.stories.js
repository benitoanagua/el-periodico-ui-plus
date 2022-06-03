import { ref } from "vue";
import PostsService from "@/utils/Services/Posts";
import CsBlockHeader from "@/components/BlockHeader/Base.vue";
import { container } from "@/utils/Patterns";
import CsStack from "@/components/Stack/Base.vue";
import CsCarousel from "@/components/Carousel/Base.vue";

export default {
  title: "Design System/Templates/Popular",
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
    CsStack,
    CsCarousel,
  },
  setup() {
    const posts1 = ref(null);
    const posts2 = ref(null);
    const posts3 = ref(null);
    const postsService = ref(new PostsService());
    postsService.value.getPosts(1, 5).then((data) => (posts1.value = data));
    postsService.value.getPosts(6, 10).then((data) => (posts2.value = data));
    postsService.value.getPosts(11, 15).then((data) => (posts3.value = data));
    const cards = [
      { list: posts1, caption: "Hoy" },
      { list: posts2, caption: "Semana" },
    ];
    return { ...args, cards, posts3, container };
  },
  template: `
    <div>
        <div :class="['container py-4 flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0', container.maxWidth]">
            <div class="md:w-1/3 flex flex-col space-y-6">
                <cs-block-header title="Lo más leído" lineFraction="is-full"/>
                <cs-stack :cards="cards" type="decimal"/>
            </div>
            <div class="md:w-2/3 flex flex-col space-y-6">
                <cs-block-header title="Curiosidades" lineFraction="is-half"/>
                <cs-carousel :posts="posts3" :showDesktop="2" :showMobile="1"/>
                <div class="bg-neutral-200 h-32 flex items-center justify-center text-neutral-400">
                    <span class="text-center">BANNER<br>837 x 128</span>
                </div>
            </div>
        </div>
    </div>
    `,
});

export const Default = Template.bind({});
Default.args = {
  thumbnail: "right",
  divider: true,
};

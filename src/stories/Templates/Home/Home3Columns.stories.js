import { ref } from "vue";
import PostsService from "@/utils/Services/Posts";
import { container } from "@/utils/Patterns";
import CsCard from "@/components/Card/Base.vue";

export default {
  title: "Design System/Templates/Home/HomeThreeColumns",
};

const Template = (args) => ({
  components: {
    CsCard,
  },
  setup() {
    const level1 = ref(null);
    const level2 = ref(null);
    const level3 = ref(null);
    const level4 = ref(null);
    const postsService = ref(new PostsService());
    postsService.value.get(7).then((data) => (level1.value = data));
    postsService.value.getPosts(8, 9).then((data) => (level2.value = data));
    postsService.value.getPosts(10, 13).then((data) => (level3.value = data));
    postsService.value.getPosts(14, 16).then((data) => (level4.value = data));
    return { ...args, level1, level2, level3, level4, container };
  },
  template: `
    <div class="bg-neutral-50">
        <div :class="['container py-4 flex flex-col space-y-6', container.maxWidth]">
            <div class="flex flex-col lg:flex-row lg:space-x-6 space-y-6 lg:space-y-0">
                <div class="flex flex-col md:flex-row lg:w-2/3 md:space-x-6 space-y-6 md:space-y-0">
                    <div class="md:w-3/5">
                        <cs-card v-for="post in level1" :key="post.id"
                            :heading="2"
                            positionMedia="bottom"
                            fractionMedia="is-full"
                            aspectRatio="aspect-w-3 aspect-h-2"
                            :post="post"
                            :elevation="elevation"
                        />
                    </div>
                    <div class="md:w-2/5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-6">
                        <cs-card v-for="post in level2" :key="post.id"
                            :heading="5"
                            positionMedia="top"
                            fractionMedia="is-full"
                            aspectRatio="aspect-w-3 aspect-h-2"
                            :post="post"
                            :showExcerpt="false"
                        />
                    </div>
                </div>
                <div class="lg:w-1/3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6 place-content-start">
                    <cs-card v-for="post in level3" :key="post.id"
                      :heading="6"
                      positionMedia="left"
                      fractionMedia="is-one-third"
                      aspectRatio="aspect-w-1 aspect-h-1"
                      :post="post"
                      :keepInline="true"
                      :showExcerpt="false"
                    />
                </div>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <cs-card v-for="post in level4" :key="post.id"
                    :heading="6"
                    positionMedia="left"
                    fractionMedia="is-one-third"
                    aspectRatio="aspect-w-1 aspect-h-1"
                    :post="post"
                    :keepInline="true"
                    :showExcerpt="false"
                />
            </div>
        </div>
    </div>
    `,
});

export const Default = Template.bind({});
Default.args = {
  elevation: true,
};

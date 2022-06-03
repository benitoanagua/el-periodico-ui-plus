import { ref } from "vue";
import PostsService from "@/utils/Services/Posts";
import { container } from "@/utils/Patterns";
import CsCard from "@/components/Card/Base.vue";

export default {
  title: "Design System/Components/Card",
};

const Template = (args) => ({
  components: {
    CsCard,
  },
  setup() {
    const posts = ref(null);
    const postsService = ref(new PostsService());
    postsService.value.get(13).then((data) => (posts.value = data));
    return { ...args, posts, container };
  },
  template: `
    <div class="bg-neutral-50">
        <div :class="['container py-4', container.maxWidth]">
            <cs-card v-for="post in posts" :key="post.id"
                :fractionMedia="fractionMedia"
                :positionMedia="positionMedia"
                aspectRatio="aspect-w-3 aspect-h-2"
                :keepInline="false"
                :elevation="true"
                :heading="2"                
                :post="post"
                :showMeta="true"
            />
        </div>
    </div>
    `,
});

export const MediaHalf = Template.bind({});
MediaHalf.args = {
  fractionMedia: "is-half",
  positionMedia: "left",
};
export const MediaTwoFifths = Template.bind({});
MediaTwoFifths.args = {
  fractionMedia: "is-two-fifths",
  positionMedia: "left",
};
export const MediaOneThird = Template.bind({});
MediaOneThird.args = {
  fractionMedia: "is-one-third",
  positionMedia: "left",
};
export const MediaOneQuarter = Template.bind({});
MediaOneQuarter.args = {
  fractionMedia: "is-one-quarter",
  positionMedia: "left",
};
export const MediaOneFifth = Template.bind({});
MediaOneFifth.args = {
  fractionMedia: "is-one-fifth",
  positionMedia: "left",
};

export const MediaLeft = Template.bind({});
MediaLeft.args = {
  fractionMedia: "is-half",
  positionMedia: "left",
};
export const MediaRight = Template.bind({});
MediaRight.args = {
  fractionMedia: "is-half",
  positionMedia: "right",
};
export const MediaTop = Template.bind({});
MediaTop.args = {
  fractionMedia: "is-full",
  positionMedia: "top",
};
export const MediaBottom = Template.bind({});
MediaBottom.args = {
  fractionMedia: "is-full",
  positionMedia: "bottom",
};

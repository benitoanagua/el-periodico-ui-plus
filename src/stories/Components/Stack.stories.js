import { ref } from "vue";
import { container } from "@/utils/Patterns";
import PostsService from "@/utils/Services/Posts";
import CsStack from "@/components/Stack/Base.vue";

export default {
  title: "Design System/Components/Stack",
  argTypes: {
    typeList: {
      options: ["default", "decimal", "none"],
      control: { type: "inline-radio" },
    },
  },
};

const Template = (args) => ({
  components: {
    CsStack,
  },
  setup() {
    const posts1 = ref(null);
    const posts2 = ref(null);
    const posts3 = ref(null);
    const posts4 = ref(null);
    const postsService = ref(new PostsService());

    postsService.value.getPosts(1, 5).then((data) => (posts1.value = data));
    postsService.value.getPosts(6, 10).then((data) => (posts2.value = data));
    postsService.value.getPosts(11, 15).then((data) => (posts3.value = data));
    postsService.value.getPosts(16, 20).then((data) => (posts4.value = data));

    const cards = [
      { list: posts1, caption: "Hoy" },
      { list: posts2, caption: "Semana" },
      { list: posts3, caption: "Mes" },
      { list: posts4, caption: "Archivo" },
    ];

    return { ...args, container, cards };
  },
  template: `
    <div class="bg-neutral-50">
        <div :class="['container py-4', container.maxWidth]">
            <div class="md:max-w-md">
                <cs-stack :cards="cards" :type="typeList"/>
            </div>
        </div>
    </div>
  `,
});

export const Default = Template.bind({});
Default.args = {
  typeList: "default",
};

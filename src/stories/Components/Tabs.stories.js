import { ref } from "vue";
import PostsService from "@/utils/Services/Posts";
import CsTabs from "@/components/Tabs/Base.vue";

export default {
  title: "Design System/Components/Tabs",
  argTypes: {
    typeList: {
      options: ["default", "decimal", "none"],
      control: { type: "inline-radio" },
    },
  },
};

const Template = (args) => ({
  components: { CsTabs },
  setup() {
    const list1 = ref(null);
    const list2 = ref(null);
    const list3 = ref(null);
    const list4 = ref(null);
    const postsService = ref(new PostsService());

    postsService.value.getPosts(1, 5).then((data) => (list1.value = data));
    postsService.value.getPosts(6, 10).then((data) => (list2.value = data));
    postsService.value.getPosts(11, 15).then((data) => (list3.value = data));
    postsService.value.getPosts(16, 20).then((data) => (list4.value = data));

    const lists = [
      { tab: list1 },
      { tab: list2 },
      { tab: list3 },
      { tab: list4 },
    ];
    const titles = [
      { caption: "Hoy" },
      { caption: "Semana" },
      { caption: "Mes" },
      { caption: "Archivo" },
    ];

    return { ...args, lists, titles };
  },
  template: `
        <cs-tabs :titles="titles" :lists="lists" :type="typeList"/>
    `,
});

export const Default = Template.bind({});
Default.args = {
  typeList: "default",
};

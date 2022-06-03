import { ref } from "vue";
import { container } from "@/utils/Patterns";
import CoversService from "@/utils/Services/Covers";
import CsCarousel from "@/components/Carousel/Base.vue";

export default {
  title: "Design System/Templates/Covers",
};

const Template = (args) => ({
  components: {
    CsCarousel,
  },
  setup() {
    const items = ref(null);
    const coversService = ref(new CoversService());
    coversService.value.getAll().then((data) => (items.value = data));
    return { ...args, items, container };
  },
  template: `
    <div>
        <div :class="['container py-4', container.maxWidth]">
            <cs-carousel :posts="items" :showDesktop="showDesktop" :showMobile="showMobile" type="media"/>
        </div>
    </div>
        `,
});

export const Default = Template.bind({});
Default.args = {
  showDesktop: 5,
  showMobile: 2,
};

import { container } from "@/utils/Patterns";
import CsLogo from "@/components/Logo/Base.vue";

export default {
  title: "Design System/Components/Logo",
};

const Template = (args) => ({
  components: {
    CsLogo,
  },
  setup() {
    return { ...args, container };
  },
  template: `
    <div class="bg-primary-50">
        <div :class="['container py-4 text-center', backgroundColor, container.maxWidth]">
            <cs-logo
                :fill="fill"
                :width="width"
                :height="height"
                class="inline-block"
            />
        </div>
    </div>
  `,
});

export const Original = Template.bind({});
Original.args = {
  backgroundColor: "bg-primary-200",
  height: "h-8",
  width: null,
  fill: null,
};

export const Monochrome = Template.bind({});
Monochrome.args = {
  backgroundColor: "bg-primary-200",
  height: "h-8",
  width: null,
  fill: "text-primary-700",
};

export const Negative = Template.bind({});
Negative.args = {
  backgroundColor: "bg-primary-700",
  height: "h-8",
  width: null,
  fill: "text-white",
};

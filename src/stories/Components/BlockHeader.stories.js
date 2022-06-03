import CsBlockHeader from "@/components/BlockHeader/Base.vue";
import { container } from "@/utils/Patterns";

export default {
  title: "Design System/Components/BlockHeader",
  argTypes: {
    lineFraction: {
      options: [
        "is-full",
        "is-half",
        "is-two-fifths",
        "is-one-third",
        "is-one-quarter",
        "is-one-fifth",
      ],
      control: { type: "inline-radio" },
    },
  },
};

const Template = (args) => ({
  components: {
    CsBlockHeader,
  },
  setup() {
    return { ...args, container };
  },
  template: `
    <div class="bg-neutral-50">
        <div :class="['container py-4', container.maxWidth]">
          <cs-block-header :title="theme.toUpperCase()" :theme="theme" :lineFraction="lineFraction"/>
        </div>
    </div>
    `,
});

export const Neutral = Template.bind({});
Neutral.args = {
  theme: "neutral",
  lineFraction: "is-half",
};
export const Primary = Template.bind({});
Primary.args = {
  theme: "primary",
  lineFraction: "is-half",
};
export const Secondary = Template.bind({});
Secondary.args = {
  theme: "secondary",
  lineFraction: "is-half",
};
export const Accent = Template.bind({});
Accent.args = {
  theme: "accent",
  lineFraction: "is-half",
};

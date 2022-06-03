import CsButton from "@/components/Button/Base.vue";

export default {
  title: "Design System/Components/Button",
};

const Template = (args) => ({
  components: { CsButton },
  setup() {
    return { ...args };
  },
  template: `
    <div class="inline-flex flex-col space-y-2">
      <cs-button :theme="theme" size="small">
        Small
      </cs-button>
      <cs-button :theme="theme" size="medium">
        Medium
      </cs-button>
      <cs-button :theme="theme" size="large">
        Large
      </cs-button>
    </div>
  `,
});

export const Default = Template.bind({});
Default.args = {
  theme: "default",
};

export const Primary = Template.bind({});
Primary.args = {
  theme: "primary",
};

export const Secondary = Template.bind({});
Secondary.args = {
  theme: "secondary",
};

export const Danger = Template.bind({});
Danger.args = {
  theme: "danger",
};

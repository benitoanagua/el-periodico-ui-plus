import { colors } from "../helpers/Data";

export default {
    title: "Design System/Layout/Columns",
};

const Template = (args) => ({
    setup() {
        return { ...args, colors };
    },
    template: `
      <div v-for="parent in colors.length"
        :class="['flex py-1', space]"
      >
        <div v-for="child in parent"
          :class="['flex-1 text-center', colors[child - 1].bg, colors[child - 1].text]"
        >
          {{ child }}
        </div>
      </div>
    `,
});

export const CollapseGap = Template.bind({});
CollapseGap.args = {
    space: "space-x-0",
};

export const SmallGap = Template.bind({});
SmallGap.args = {
    space: "space-x-2",
};

export const MediumGap = Template.bind({});
MediumGap.args = {
    space: "space-x-4",
};

export const LargeGap = Template.bind({});
LargeGap.args = {
    space: "space-x-6",
};

export const XLargeGap = Template.bind({});
XLargeGap.args = {
    space: "space-x-8",
};

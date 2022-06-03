import { icon } from "@/utils/Patterns";
import {
  PhX,
  PhArrowsOutSimple,
  PhPlay,
  PhMonitorPlay,
  PhImage,
} from "phosphor-vue";

export default {
  title: "Design System/Components/Icon",
};

const Template = (args) => ({
  components: {
    PhX,
    PhArrowsOutSimple,
    PhPlay,
    PhMonitorPlay,
    PhImage,
  },
  setup() {
    return { ...args, icon };
  },
  template: `
    <div class="flex space-x-4">
        <div :class="[borderRadius, icon.padding, 'bg-accent-500 text-white']">
            <ph-x :size="24"/>
        </div>
        <div :class="[borderRadius, icon.padding, 'bg-accent-500 text-white']">
            <ph-arrows-out-simple :size="24"/>
        </div>
        <div :class="[borderRadius, icon.padding, 'bg-accent-500 text-white']">
            <ph-play :size="24"/>
        </div>
        <div :class="[borderRadius, icon.padding, 'bg-accent-500 text-white']">
            <ph-monitor-play :size="24"/>
        </div>
        <div :class="[borderRadius, icon.padding, 'bg-accent-500 text-white']">
            <ph-image :size="24"/>
        </div>
    </div>
  `,
});

export const Default = Template.bind({});
Default.args = {
  borderRadius: "rounded-none",
};

export const Rounded = Template.bind({});
Rounded.args = {
  borderRadius: "rounded-md",
};

export const Circle = Template.bind({});
Circle.args = {
  borderRadius: "rounded-full",
};

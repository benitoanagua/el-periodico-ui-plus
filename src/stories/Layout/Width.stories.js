import { colors } from "../helpers/Data";
import resolveConfig from "tailwindcss/resolveConfig";
import * as tailwindConfig from "tailwind.config.js";

const fullConfig = resolveConfig(tailwindConfig);

export default {
    title: "Design System/Layout/Width",
};

const Template = (args) => ({
    setup() {
        return { ...args, fullConfig, colors };
    },
    template: `
      <div v-for="parent in (length - 1)"
        class="flex space-x-0 py-1"
      >
        <div v-for="child in (length - parent + 1)"
          :class="[colors[child - 1].bg, 'ktext-center']"
          :style="{ width: fullConfig.theme.width[(length - parent + 1 === child ? parent : '1')+'/'+ length] }"
        >
          <span :class="colors[child - 1].text">
            w-{{ length - parent + 1 === child ? parent : '1'}}/{{ length }}
          </span>
        </div>
      </div>
      <div class="space-x-0 py-1">
        <div :class="colors[0].bg + ' w-full text-center'" >
        <span :class="colors[0].text">
          w-full
        </span>
        </div>
      </div>
    `,
});

export const Half = Template.bind({});
Half.args = {
    length: 2,
};

export const Thirds = Template.bind({});
Thirds.args = {
    length: 3,
};

export const Quarter = Template.bind({});
Quarter.args = {
    length: 4,
};

export const Fifth = Template.bind({});
Fifth.args = {
    length: 5,
};

export const Sixth = Template.bind({});
Sixth.args = {
    length: 6,
};

export const Seventh = Template.bind({});
Seventh.args = {
    length: 7,
};

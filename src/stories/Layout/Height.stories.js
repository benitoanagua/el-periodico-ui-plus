import { scale } from "../helpers/Data";
import resolveConfig from "tailwindcss/resolveConfig";
import * as tailwindConfig from "tailwind.config.js";

const fullConfig = resolveConfig(tailwindConfig);

export default {
    title: "Design System/Layout/Height",
};

const Template = (args) => ({
    setup() {
        return { ...args, fullConfig };
    },
    template: `
      <div class="flex items-end space-x-1" >
        <div v-for="col in items"
          class="w-10 bg-accent-500 relative"
          :style="{ height: fullConfig.theme.height[col] }"
        >
          <div class="absolute w-10 bottom-6">
            <div class="-rotate-90 font-bold text-sm text-white">h-{{ col }}</div>
          </div>
        </div>
      </div>
    `,
});

export const Default = Template.bind({});
Default.args = {
    items: scale,
};

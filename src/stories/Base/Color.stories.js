import resolveConfig from "tailwindcss/resolveConfig";
import * as tailwindConfig from "tailwind.config.js";

const fullConfig = resolveConfig(tailwindConfig);

export default {
    title: "Design System/Base/Colors",
};

const Template = (args) => ({
    setup() {
        return { ...args };
    },
    template: `
    <div class="flex flex-col">
        <div v-for="(color, index) in values"
          :class="[
            'flex flex-row justify-between font-mono text-sm py-2 px-3 max-w-xs',
            index > 400 ? ' text-white' : ' text-black'
          ]"
          :style="{ backgroundColor: color }"
        >
          <div>{{ index }}</div>
          <div>{{ color }}</div>
        </div>
    </div>
    `,
});

export const Primary = Template.bind({});
Primary.args = {
    values: fullConfig.theme.colors.primary,
};
export const Secondary = Template.bind({});
Secondary.args = {
    values: fullConfig.theme.colors.secondary,
};
export const Accent = Template.bind({});
Accent.args = {
    values: fullConfig.theme.colors.accent,
};
export const Neutral = Template.bind({});
Neutral.args = {
    values: fullConfig.theme.colors.neutral,
};

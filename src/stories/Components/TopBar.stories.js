import { container } from "@/utils/Patterns";
import CsIconNav from "@/components/IconNav/Base.vue";

export default {
  title: "Design System/Components/TopBar",
};

const Template = (args) => ({
  components: {
    CsIconNav,
  },
  setup() {
    const social = {
      linkedin: "https://www.linkedin.com/",
      telegram: "https://www.telegram.com/",
      tiktok: "https://www.tiktok.com/",
      pinterest: "https://www.pinterest.com/",
      mail: "mailto:",
    };
    return { ...args, social, container };
  },
  template: `
        <div class="hidden sm:block bg-neutral-50">
            <div :class="['container py-2', container.maxWidth]">
                <div class="flex justify-between py-1">
                    <div class="flex items-center">
                        {{ date }}
                    </div>
                    <div class="flex items-center">
                        <cs-icon-nav :icons="social"/>
                    </div>
                </div>
            </div>
        </div>
    `,
});

export const Default = Template.bind({});
Default.args = {
  date: "Tarija, jueves 16 de septiembre del 2021",
};

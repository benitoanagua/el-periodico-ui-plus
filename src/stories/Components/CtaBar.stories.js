import { container } from "@/utils/Patterns";
import CsLogo from "@/components/Logo/Base.vue";
import CsButton from "@/components/Button/Base.vue";

export default {
  title: "Design System/Components/CtaBar",
};

const Template = (args) => ({
  components: {
    CsLogo,
    CsButton,
  },
  setup() {
    return { ...args, container };
  },
  template: `
    <div class="hidden md:block bg-neutral-50">
        <div :class="['container py-4', container.maxWidth]">
            <div class="flex justify-between py-6">
                <div class="flex items-center">
                    <cs-button theme="default" size="medium" class="uppercase" >
                        Acceder
                    </cs-button>
                </div>
                <div class="flex items-center">
                    <cs-logo :height="heightLogo" />
                </div>
                <div class="flex items-center">
                    <cs-button theme="secondary" size="medium" class="uppercase" >
                        Suscríbase
                    </cs-button>
                </div>
            </div>
        </div>
    </div>
  `,
});

export const Default = Template.bind({});
Default.args = {
  heightLogo: "h-12",
};

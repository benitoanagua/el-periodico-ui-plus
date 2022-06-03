import { iconNav } from "@/utils/Patterns";
import CsQuickTime from "@/components/CustomIcons/QuickTime.vue";
import CsRealPlayer from "@/components/CustomIcons/RealPlayer.vue";
import CsWinamp from "@/components/CustomIcons/Winamp.vue";
import CsWindowsMediaPlayer from "@/components/CustomIcons/WindowsMediaPlayer.vue";

export default {
  title: "Design System/Components/CustomIcon",
  argTypes: {
    color: {
      options: [
        "text-primary-500",
        "text-secondary-500",
        "text-accent-500",
        "text-black",
      ],
      control: { type: "inline-radio" },
    },
  },
};

const Template = (args) => ({
  components: {
    CsQuickTime,
    CsRealPlayer,
    CsWinamp,
    CsWindowsMediaPlayer,
  },
  setup() {
    return { ...args, iconNav };
  },
  template: `
      <div :class="['flex bg-neutral-200 p-2', iconNav.spaceX]">
        <a href="#">
          <cs-winamp :class="[color,'fill-current h-6 w-6']" />
        </a>
        <a href="#">
          <cs-windows-media-player :class="[color,'fill-current h-6 w-6']" />
        </a>
        <a href="#">
          <cs-real-player :class="[color,'fill-current h-6 w-6']" />
        </a>
        <a href="#">
          <cs-quick-time :class="[color,'fill-current h-6 w-6']" />
        </a>
      </div>
    `,
});

export const Default = Template.bind({});
Default.args = {
  color: "text-accent-500",
};

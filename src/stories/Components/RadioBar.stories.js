import { container } from "@/utils/Patterns";
import CsRadioBar from "@/components/RadioBar/Base.vue";

export default {
  title: "Design System/Components/RadioBar",
};

const Template = (args) => ({
  components: {
    CsRadioBar,
  },
  setup() {
    const players = {
      quicktime: "https://www.quicktime.com/",
      realplayer: "https://www.realplayer.com/",
      winamp: "https://www.winamp.com/",
      windowsmediaplayer: "https://www.windowsmediaplayer.com/",
    };
    return { ...args, players, container };
  },
  template: `
        <div class="bg-neutral-50">
            <div :class="['container py-2', container.maxWidth]">
                <cs-radio-bar
                    :audio="url"
                    :title="title"
                    :tagline="tagline"
                    :caption="caption"
                    :icons="players"
                />
            </div>
        </div>
    `,
});

export const Default = Template.bind({});
Default.args = {
  url: "https://whsh4u-panel.com/proxy/gddupgij?mp=/stream",
  title: "90.1 FM",
  tagline: "CORREO DEL SUR - RADIO",
  caption: "Escúchanos en:",
};

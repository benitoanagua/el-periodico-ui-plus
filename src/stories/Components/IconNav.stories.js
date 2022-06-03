import CsIconNav from "@/components/IconNav/Base.vue";

export default {
  title: "Design System/Components/IconNav",
  argTypes: {
    iconWeight: {
      control: { type: "inline-radio" },
      options: ["thin", "light", "regular", "bold", "fill", "duotone"],
    },
  },
};

const Template = (args) => ({
  components: {
    CsIconNav,
  },
  setup() {
    const social = {
      facebook: "https://www.facebook.com/",
      twitter: "https://www.twitter.com/",
      youtube: "https://www.youtube.com/",
      instagram: "https://www.instagram.com/",
      whatsapp: "https://www.whatsapp.com/",
      linkedin: "https://www.linkedin.com/",
      telegram: "https://www.telegram.com/",
      tiktok: "https://www.tiktok.com/",
      pinterest: "https://www.pinterest.com/",
      mail: "mailto:",
    };
    return { ...args, social };
  },
  template: `
        <cs-icon-nav 
            class="p-2 bg-primary-50 shadow-sm rounded-sm"
            :direction="direction"
            :iconWeight="iconWeight"
            :icons="social"
        />
    `,
});

export const Horizontal = Template.bind({});
Horizontal.args = {
  direction: "row",
  iconWeight: "regular",
};
export const Vertical = Template.bind({});
Vertical.args = {
  direction: "col",
  iconWeight: "regular",
};

<template>
  <div :class="iconNavClass">
    <a v-if="isNotUndefined(icons.facebook)" :href="icons.facebook">
      <ph-facebook-logo :size="24" :weight="iconWeight" />
    </a>
    <a v-if="isNotUndefined(icons.twitter)" :href="icons.twitter">
      <ph-twitter-logo :size="24" :weight="iconWeight" />
    </a>
    <a v-if="isNotUndefined(icons.youtube)" :href="icons.youtube">
      <ph-youtube-logo :size="24" :weight="iconWeight" />
    </a>
    <a v-if="isNotUndefined(icons.instagram)" :href="icons.instagram">
      <ph-instagram-logo :size="24" :weight="iconWeight" />
    </a>
    <a v-if="isNotUndefined(icons.whatsapp)" :href="icons.whatsapp">
      <ph-whatsapp-logo :size="24" :weight="iconWeight" />
    </a>
    <a v-if="isNotUndefined(icons.linkedin)" :href="icons.linkedin">
      <ph-linkedin-logo :size="24" :weight="iconWeight" />
    </a>
    <a v-if="isNotUndefined(icons.telegram)" :href="icons.telegram">
      <ph-telegram-logo :size="24" :weight="iconWeight" />
    </a>
    <a v-if="isNotUndefined(icons.tiktok)" :href="icons.tiktok">
      <ph-tiktok-logo :size="24" :weight="iconWeight" />
    </a>
    <a v-if="isNotUndefined(icons.pinterest)" :href="icons.pinterest">
      <ph-pinterest-logo :size="24" :weight="iconWeight" />
    </a>
    <a v-if="isNotUndefined(icons.mail)" :href="icons.mail">
      <ph-envelope :size="24" :weight="iconWeight" />
    </a>
  </div>
</template>

<script>
import { defineComponent, reactive, computed } from "vue";
import { iconNav } from "@/utils/Patterns";
import {
  PhFacebookLogo,
  PhTwitterLogo,
  PhYoutubeLogo,
  PhInstagramLogo,
  PhWhatsappLogo,
  PhLinkedinLogo,
  PhTelegramLogo,
  PhTiktokLogo,
  PhPinterestLogo,
  PhEnvelope,
} from "phosphor-vue";

export default defineComponent({
  name: "CsIconNav",
  components: {
    PhFacebookLogo,
    PhTwitterLogo,
    PhYoutubeLogo,
    PhInstagramLogo,
    PhWhatsappLogo,
    PhLinkedinLogo,
    PhTelegramLogo,
    PhTiktokLogo,
    PhPinterestLogo,
    PhEnvelope,
  },
  props: {
    icons: {
      type: Object,
      default: () => null,
    },
    iconWeight: {
      type: String,
      default: "regular",
      validator: function (value) {
        return (
          ["thin", "light", "regular", "bold", "fill", "duotone"].indexOf(
            value
          ) !== -1
        );
      },
    },
    direction: {
      type: String,
      default: "row",
      validator: function (value) {
        return ["row", "col"].indexOf(value) !== -1;
      },
    },
  },
  setup(props) {
    props = reactive(props);

    return {
      isNotUndefined: (value) => typeof value !== "undefined",
      iconNavClass: computed(() => ({
        "inline-flex": true,
        [`flex-row ${iconNav.spaceX}`]: props.direction === "row",
        [`flex-col ${iconNav.spaceY}`]: props.direction === "col",
      })),
    };
  },
});
</script>

<template>
  <div class="flex md:justify-between justify-center">
    <div class="flex items-center">
      <div class="flex flex-col mr-4">
        <span
          :class="[
            'text-3xl md:text-4xl',
            '-mt-1 -mb-1 font-bold text-transparent',
            'bg-clip-text bg-gradient-to-tl to-secondary-500 from-accent-500',
          ]"
        >
          {{ title }}
        </span>
        <span
          :class="[
            'hidden md:block',
            '-mt-1 text-xs text-neutral-700 font-semibold',
          ]"
        >
          {{ tagline }}
        </span>
      </div>
      <cs-audio-player :url="audio" :timeLine="false" />
    </div>
    <div class="md:flex hidden items-center">
      <span class="mr-2 text-neutral-700"> {{ caption }} </span>
      <div :class="['inline-flex', iconNav.spaceX]">
        <a v-if="isNotUndefined(icons.winamp)" :href="icons.winamp">
          <cs-winamp class="fill-current text-neutral-700 h-6 w-6" />
        </a>
        <a
          v-if="isNotUndefined(icons.windowsmediaplayer)"
          :href="icons.windowsmediaplayer"
        >
          <cs-windows-media-player
            class="fill-current text-neutral-700 h-6 w-6"
          />
        </a>
        <a v-if="isNotUndefined(icons.realplayer)" :href="icons.realplayer">
          <cs-real-player class="fill-current text-neutral-700 h-6 w-6" />
        </a>
        <a v-if="isNotUndefined(icons.quicktime)" :href="icons.quicktime">
          <cs-quick-time class="fill-current text-neutral-700 h-6 w-6" />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, reactive, computed } from "vue";
import { iconNav } from "@/utils/Patterns";
import CsAudioPlayer from "@/components/AudioPlayer/Base.vue";
import CsQuickTime from "@/components/CustomIcons/QuickTime.vue";
import CsRealPlayer from "@/components/CustomIcons/RealPlayer.vue";
import CsWinamp from "@/components/CustomIcons/Winamp.vue";
import CsWindowsMediaPlayer from "@/components/CustomIcons/WindowsMediaPlayer.vue";

export default defineComponent({
  name: "CsRadioBar",
  components: {
    CsAudioPlayer,
    CsQuickTime,
    CsRealPlayer,
    CsWinamp,
    CsWindowsMediaPlayer,
  },
  props: {
    icons: {
      type: Object,
      default: () => null,
    },
    audio: {
      type: String,
      default: "https://filesamples.com/samples/audio/mp3/sample1.mp3",
    },
    title: {
      type: String,
      default: "99.9 FM",
    },
    tagline: {
      type: String,
      default: "EL PERIÓDICO - RADIO",
    },
    caption: {
      type: String,
      default: "Escúchanos en:",
    },
  },
  setup() {
    return {
      iconNav,
      isNotUndefined: (value) => typeof value !== "undefined",
    };
  },
});
</script>

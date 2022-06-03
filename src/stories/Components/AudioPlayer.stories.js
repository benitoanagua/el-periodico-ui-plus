import CsAudioPlayer from "@/components/AudioPlayer/Base.vue";

export default {
  title: "Design System/Components/AudioPlayer",
};

const Template = (args) => ({
  components: {
    CsAudioPlayer,
  },
  setup() {
    return { ...args };
  },
  template: `
        <cs-audio-player :url="audio" :timeLine="timeLine"/>
    `,
});

export const Default = Template.bind({});
Default.args = {
  audio: "https://filesamples.com/samples/audio/mp3/sample4.mp3",
  timeLine: false,
};

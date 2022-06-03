import CsLightbox from "@/components/Lightbox/Base.vue";

export default {
  title: "Design System/Components/Lightbox",
};

const Template = (args) => ({
  components: { CsLightbox },
  setup() {
    return { args };
  },
  template: `
    <cs-lightbox v-bind="args"/>
    `,
});

export const Image = Template.bind({});
Image.args = {
  type: "image",
  gallery: [
    {
      source: "https://api.lorem.space/image/movie?w=450&h=660",
      caption: "movie",
    },
    {
      source: "https://api.lorem.space/image/game?w=450&h=660",
      caption: "game",
    },
    {
      source: "https://api.lorem.space/image/book?w=450&h=660",
      caption: "book",
    },
  ],
};
export const Video = Template.bind({});
Video.args = {
  type: "video",
  gallery: [
    {
      source:
        "https://irrinews.com/wp-content/uploads/2016/11/Lorem-Ipsum-video.mp4",
      caption: "Lorem Ipsum video",
    },
    {
      source: "https://html.framework-y.com/images/video-1.mp4",
      caption: "Video background title",
    },
    {
      source: "http://techslides.com/demos/sample-videos/small.mp4",
      caption: "Tech Slides",
    },
  ],
};
export const Iframe = Template.bind({});
Iframe.args = {
  type: "iframe",
  gallery: [
    {
      source: "https://player.vimeo.com/video/253989945",
      caption: "Vimeo",
    },
    {
      source: "https://www.youtube.com/embed/hnp1pt8biD4",
      caption: "Youtue",
    },
    {
      source:
        "https://developers.google.com/maps/documentation/javascript/examples/map-simple_f04d13e60e13a5f483e6aa8915eab5d42fcdf2f5b7ef63e454d67e7ce2728020.frame?hl=es",
      caption: "Google Maps",
    },
  ],
};

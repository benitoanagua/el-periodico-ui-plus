<template>
  <div>
    <div class="flex flex-col md:flex-row bg-primary-100 mt-10">
      <div
        :class="[
          'flex flex-row justify-between -mt-10',
          'md:flex-col md:justify-start',
        ]"
      >
        <div class="inline-flex my-2 cursor-pointer md:m-2">
          <cs-carousel-arrow-nav />
        </div>
        <div
          :class="['flex my-2 cursor-pointer md:m-2', 'md:grid md:grid-cols-2']"
        >
          <cs-carousel-dot-nav v-for="(slide, n) in posts" :item="n" />
        </div>
      </div>

      <div class="w-full mt-0 pb-4 mr-0 md:-mt-10 md:mr-4">
        <cs-carousel-slides :showDesktop="showDesktop" :showMobile="showMobile">
          <cs-carousel-slide-item v-for="(post, index) in posts" :key="index">
            <cs-card
              :heading="6"
              positionMedia="top"
              fractionMedia="is-full"
              aspectRatio="aspect-w-16 aspect-h-9 md:aspect-w-4 md:aspect-h-3"
              :post="post"
              :keepInline="false"
              :showExcerpt="false"
              :showMeta="false"
            />
          </cs-carousel-slide-item>
        </cs-carousel-slides>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref, provide } from "vue";
import CsCarouselArrowNav from "@/components/Carousel/ArrowNav.vue";
import CsCarouselDotNav from "@/components/Carousel/DotNav.vue";
import CsCarouselSlides from "@/components/Carousel/Slides.vue";
import CsCarouselSlideItem from "@/components/Carousel/SlideItem.vue";
import CsCard from "@/components/Card/Base.vue";
import { carousel as carouselPatterns } from "@/utils/Patterns";

export default defineComponent({
  name: "CsCarousel",
  components: {
    CsCarouselArrowNav,
    CsCarouselDotNav,
    CsCarouselSlides,
    CsCarouselSlideItem,
    CsCard,
  },
  props: {
    posts: {
      type: Object,
      default: null,
    },
    showDesktop: {
      type: Number,
      default: carouselPatterns.showDesktop,
    },
    showMobile: {
      type: Number,
      default: carouselPatterns.showMobile,
    },
  },
  setup() {
    const slides = ref([]);
    const initialState = ref([]);
    const direction = ref(1);
    provide("carouselState", {
      slides,
      initialState,
      direction,
    });
  },
});
</script>

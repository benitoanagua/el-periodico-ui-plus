<template>
  <div class="flex space-x-4">
    <cs-lightbox-item
      v-for="(item, index) in gallery"
      :key="index"
      :type="type"
      :source="item.source"
      :caption="item.caption"
    />
  </div>
  <div :class="lightboxModalClass">
    <div :class="lightboxClass" ref="modalContainer">
      <div class="text-center">
        <cs-lightbox-modal
          v-for="(item, index) in gallery"
          :key="index"
          :type="type"
          :source="item.source"
          :caption="item.caption"
        />
      </div>
    </div>
    <cs-lightbox-arrow-nav />
    <div :class="lightboxCloseClass" @click="closeLightbox">
      <ph-x :size="24" />
    </div>
  </div>
</template>

<script>
import {
  defineComponent,
  reactive,
  ref,
  computed,
  provide,
  onMounted,
} from "vue";
import CsLightboxItem from "@/components/Lightbox/Item.vue";
import CsLightboxModal from "@/components/Lightbox/Modal.vue";
import CsLightboxArrowNav from "@/components/Lightbox/ArrowNav.vue";
import useLightbox from "@/composables/Lightbox";
import Hammer from "hammerjs";
import { PhX } from "phosphor-vue";
import { icon } from "@/utils/Patterns";

export default defineComponent({
  name: "CsLightbox",
  components: {
    CsLightboxItem,
    CsLightboxModal,
    CsLightboxArrowNav,
    PhX,
  },
  props: {
    gallery: {
      type: Object,
      default: null,
    },
    type: {
      type: String,
      default: "image",
      validator: function (value) {
        return ["image", "video", "iframe"].indexOf(value) !== -1;
      },
    },
  },
  setup(props) {
    props = reactive(props);

    const modalContainer = ref(null);
    const itemsList = ref([]);
    const {
      items: itemsModal,
      active: activeModal,
      decrement: decrementModal,
      increment: incrementModal,
    } = useLightbox();
    const displayLightbox = ref(false);

    provide("lightboxGroup", {
      itemsList,
      itemsModal,
      activeModal,
      displayLightbox,
      decrementModal,
      incrementModal,
    });

    const closeLightbox = () => {
      displayLightbox.value = false;
    };

    onMounted(() => {
      const hammerSwipe = new Hammer(modalContainer.value);
      hammerSwipe.on("swipeleft swiperight", (e) => {
        if (e.type === "swipeleft") {
          incrementModal();
        } else {
          decrementModal();
        }
      });
    });

    return {
      modalContainer,
      displayLightbox,
      closeLightbox,
      lightboxClass: computed(() => ({
        "absolute z-30": true,
        "w-full h-full bg-primary-900/95": true,
        "flex flex-col justify-center content-center": true,
      })),
      lightboxModalClass: computed(() => ({
        // hidden: !displayLightbox.value,
        // block: displayLightbox.value,
        "absolute w-full h-full top-0 left-0": true,
        "transition duration-150 ease-out": true,
        "scale-0": !displayLightbox.value,
        "scale-100": displayLightbox.value,
      })),
      lightboxCloseClass: computed(() => ({
        "absolute z-50 right-0 top-0 m-2": true,
        "bg-accent-500 text-white cursor-pointer": true,
        [icon.padding]: true,
      })),
    };
  },
});
</script>

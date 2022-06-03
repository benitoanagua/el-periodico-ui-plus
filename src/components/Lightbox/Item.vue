<template>
  <div class="cursor-pointer">
    <a v-if="type === 'image'" @click="openLightbox">
      <img :src="source" :alt="caption"
    /></a>
    <cs-button v-else theme="default" size="small" @click="openLightbox">
      {{ caption }}
    </cs-button>
  </div>
</template>

<script>
import {
  defineComponent,
  reactive,
  computed,
  inject,
  getCurrentInstance,
  watchEffect,
} from "vue";
import CsButton from "@/components/Button/Base.vue";

export default defineComponent({
  name: "CsLightboxItem",
  components: {
    CsButton,
  },
  props: {
    source: {
      type: String,
      default: "#",
    },
    caption: {
      type: String,
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
    const instance = getCurrentInstance();
    const { itemsList, displayLightbox, activeModal } = inject(
      "lightboxGroup",
      {
        itemsList: [],
      }
    );
    const index = computed(() =>
      itemsList.value.findIndex((target) => target.uid === instance.uid)
    );

    const openLightbox = () => {
      displayLightbox.value = true;
      activeModal.value = index.value;
    };

    watchEffect(() => {
      if (index.value === -1) {
        itemsList.value.push(instance);
      }
    });

    return {
      openLightbox,
    };
  },
});
</script>

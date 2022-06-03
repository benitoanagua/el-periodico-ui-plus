<template>
    <div @click="goPrev">
        <ph-caret-circle-left :size="24" class="text-neutral-700" />
    </div>
    <div @click="goNext">
        <ph-caret-circle-right :size="24" class="text-neutral-700" />
    </div>
</template>
<script>
import { defineComponent, inject } from "vue";
import { PhCaretCircleLeft, PhCaretCircleRight } from "phosphor-vue";

export default defineComponent({
    name: "CsCarouselArrowNav",
    components: {
        PhCaretCircleLeft,
        PhCaretCircleRight,
    },
    setup() {
        const { slides, direction } = inject("carouselState");

        return {
            goNext: () => {
                slides.value.push(slides.value.shift());
                direction.value = 1;
            },
            goPrev: () => {
                slides.value.unshift(slides.value.pop());
                direction.value = -1;
            },
        };
    },
});
</script>

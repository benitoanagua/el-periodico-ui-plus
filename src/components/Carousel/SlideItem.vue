<template>
    <div :class="carouselItemClass">
        <slot />
    </div>
</template>

<script>
import {
    defineComponent,
    computed,
    inject,
    watchEffect,
    getCurrentInstance,
    onUpdated,
} from "vue";

export default defineComponent({
    name: "CsCarouselSlideItem",
    setup() {
        const instance = getCurrentInstance();
        const { slides, initialState } = inject("carouselState", {
            slides: [],
            initialState: [],
        });
        const { boundingSlides } = inject("slidesState");

        const index = computed(() =>
            slides.value.findIndex((target) => target.uid === instance.uid)
        );

        onUpdated(() => {
            boundingSlides.value[index.value] =
                instance.vnode.el.getBoundingClientRect();
        });

        const orderIndex = computed(() => {
            switch (index.value + 1) {
                case 12:
                    return "order-12";
                case 11:
                    return "order-11";
                case 10:
                    return "order-10";
                case 9:
                    return "order-9";
                case 8:
                    return "order-8";
                case 7:
                    return "order-7";
                case 6:
                    return "order-6";
                case 5:
                    return "order-5";
                case 4:
                    return "order-4";
                case 3:
                    return "order-3";
                case 2:
                    return "order-2";
                default:
                    return "order-1";
            }
        });

        watchEffect(() => {
            if (index.value === -1) {
                slides.value.push(instance);
            }
            if (slides.value.length > initialState.value.length) {
                initialState.value.push(instance);
            }
        });

        return {
            carouselItemClass: computed(() => ({
                "transition duration-300 ease-in": true,
                [orderIndex.value]: true,
            })),
        };
    },
});
</script>

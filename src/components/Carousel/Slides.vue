<template>
    <div class="overflow-hidden" :style="{ height: blockHeight + 'px' }">
        <div :class="wrapperClass">
            <slot />
        </div>
    </div>
</template>

<script>
import {
    defineComponent,
    ref,
    reactive,
    computed,
    provide,
    watchEffect,
} from "vue";
import resolveConfig from "tailwindcss/resolveConfig";
import * as tailwindConfig from "tailwind.config.js";
const fullConfig = resolveConfig(tailwindConfig);

export default defineComponent({
    name: "CsCarouselSlides",
    props: {
        showDesktop: {
            type: Number,
            default: 1,
        },
        showMobile: {
            type: Number,
            default: 1,
        },
    },
    setup(props) {
        props = reactive(props);

        const boundingSlides = ref([]);

        const desktopDisplay = ref(props.showDesktop);
        const mobileDisplay = ref(props.showMobile);
        const blockHeight = ref(0);

        provide("slidesState", {
            desktopDisplay,
            mobileDisplay,
            boundingSlides,
        });

        const activeSlides = computed(() => {
            let mdWidth = Number(fullConfig.theme.screens.md.replace("px", ""));
            if (document.body.clientWidth >= mdWidth) {
                return boundingSlides.value
                    .slice(0, props.showDesktop)
                    .map((e) => e["height"]);
            } else {
                return boundingSlides.value
                    .slice(0, props.showMobile)
                    .map((e) => e["height"]);
            }
        });

        watchEffect(() => {
            blockHeight.value = Math.ceil(Math.max(...activeSlides.value));
        });

        const mobileGridClass = computed(() => {
            switch (props.showMobile) {
                case 6:
                    return "grid-cols-6";
                case 5:
                    return "grid-cols-5";
                case 4:
                    return "grid-cols-4";
                case 3:
                    return "grid-cols-3";
                case 2:
                    return "grid-cols-2";
                default:
                    return "grid-cols-1";
            }
        });
        const desktopGridClass = computed(() => {
            switch (props.showDesktop) {
                case 6:
                    return "md:grid-cols-6";
                case 5:
                    return "md:grid-cols-5";
                case 4:
                    return "md:grid-cols-4";
                case 3:
                    return "md:grid-cols-3";
                case 2:
                    return "md:grid-cols-2";
                default:
                    return "md:grid-cols-1";
            }
        });
        return {
            blockHeight,
            wrapperClass: computed(() => ({
                "grid gap-6": true,
                [mobileGridClass.value]: true,
                [desktopGridClass.value]: true,
            })),
        };
    },
});
</script>

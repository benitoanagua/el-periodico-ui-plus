<template>
    <div @click="dotClick">
        <ph-square
            :class="item === active ? 'text-accent-500' : 'text-primary-400'"
            :size="24"
            weight="fill"
        />
    </div>
</template>
<script>
import { defineComponent, reactive, computed, inject } from "vue";
import { PhSquare } from "phosphor-vue";

export default defineComponent({
    name: "CsCarouselDotNav",
    components: {
        PhSquare,
    },
    props: {
        item: {
            type: Number,
        },
    },
    setup(props) {
        props = reactive(props);
        const { slides, initialState } = inject("carouselState");

        const active = computed(() =>
            initialState.value.findIndex(
                (target) => target.uid === slides.value[0].uid
            )
        );
        return {
            active,
            dotClick: () => {
                while (props.item !== active.value) {
                    if (props.item > active.value) {
                        slides.value.push(slides.value.shift());
                    } else {
                        slides.value.unshift(slides.value.pop());
                    }
                }
            },
        };
    },
});
</script>

<template>
    <div class="w-full inline-block bg-primary-200 z-10">
        <slot />
    </div>
</template>

<script>
import { defineComponent, ref, provide, computed } from "vue";

export default defineComponent({
    name: "CsTabBody",
    props: {
        modelValue: [String, Number],
    },
    setup(props) {
        provide("tabsPanelState", {
            active: computed(() => props.modelValue),
            panels: ref([]),
        });
    },
});
</script>

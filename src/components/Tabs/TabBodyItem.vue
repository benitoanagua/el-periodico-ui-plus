<template>
    <div v-if="isActive">
        <slot></slot>
    </div>
</template>

<script>
import {
    defineComponent,
    inject,
    getCurrentInstance,
    watchEffect,
    computed,
    ref,
} from "vue";

export default defineComponent({
    name: "CsTabBodyItem",
    setup(props) {
        const instance = getCurrentInstance();
        const { panels, active } = inject("tabsPanelState", {
            panels: ref([]),
            active: ref(null),
        });
        const index = computed(() =>
            panels.value.findIndex((target) => target.uid === instance.uid)
        );
        const isActive = computed(() => active.value === index.value);

        watchEffect(() => {
            if (index.value === -1) {
                panels.value.push(instance);
            }
        });

        return {
            isActive,
        };
    },
});
</script>

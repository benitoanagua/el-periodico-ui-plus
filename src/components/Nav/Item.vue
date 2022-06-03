<template>
    <li :class="navItemClass">
        <a v-if="!active" :href="link">{{ title }}</a>
        <span v-else>{{ title }}</span>
    </li>
</template>

<script>
import { defineComponent, reactive, computed } from "vue";

export default defineComponent({
    name: "CsNavItem",
    props: {
        title: {
            type: String,
            default: null,
        },
        link: {
            type: String,
            default: null,
        },
        active: {
            type: Boolean,
            default: false,
        },
    },
    setup(props) {
        props = reactive(props);
        return {
            navItemClass: computed(() => ({
                "bg-black bg-opacity-0 p-3 text-neutral-900 font-semibold": true,
                "cursor-default bg-opacity-5": props.active,
                "hover:bg-opacity-5": !props.active,
            })),
        };
    },
});
</script>

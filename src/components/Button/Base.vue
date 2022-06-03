<template>
    <button :type="type" :class="buttonClass">
        <slot />
    </button>
</template>

<script>
import { defineComponent, reactive, computed } from "vue";

export default defineComponent({
    name: "CsButton",
    props: {
        type: {
            type: String,
            default: "submit",
        },
        theme: {
            type: String,
            default: "default",
            validator: function (value) {
                return (
                    ["default", "primary", "secondary", "danger"].indexOf(
                        value
                    ) !== -1
                );
            },
        },
        size: {
            type: String,
            default: "medium",
            validator: function (value) {
                return ["small", "medium", "large"].indexOf(value) !== -1;
            },
        },
    },
    setup(props) {
        props = reactive(props);
        return {
            buttonClass: computed(() => ({
                "text-center": true,
                "text-white": props.theme !== "default",

                "bg-white/0 ring-inset ring-1 ring-neutral-900 hover:ring-neutral-500 hover:text-neutral-700":
                    props.theme === "default",
                "bg-accent-500 hover:bg-accent-600": props.theme === "primary",
                "bg-neutral-800 hover:bg-neutral-900":
                    props.theme === "secondary",
                "bg-red-500 hover:bg-red-600": props.theme === "danger",

                "py-0.5 px-6 text-sm font-semibold": props.size === "small",
                "py-1 px-6 text-500": props.size === "medium",
                "py-2 px-6 text-lg font-light": props.size === "large",
            })),
        };
    },
});
</script>

<template>
    <form class="flex h-12 content-center -mt-12">
        <input
            :class="[
                'h-12 p-3 w-full text-xl font-light',
                'ring-1 ring-neutral-100',
                'focus:outline-none focus:ring-2 focus:ring-accent-500 focus:ring-opacity-50',
            ]"
            placeholder="Buscar"
            :value="search"
            @input="$emit('update:search', $event.target.value)"
        />
        <div
            @click="onClick"
            class="text-neutral-300 h-8 cursor-pointer p-1 -ml-10 mt-2"
        >
            <ph-x :size="24" />
        </div>
    </form>
</template>

<script>
import { defineComponent, reactive } from "vue";
import { PhX } from "phosphor-vue";

export default defineComponent({
    name: "CsSearchForm",
    components: { PhX },
    props: {
        search: {
            type: String,
            default: null,
        },
    },
    emits: ["click", "update:search"],
    setup(props, { emit }) {
        props = reactive(props);

        return {
            onClick() {
                emit("click");
            },
        };
    },
});
</script>

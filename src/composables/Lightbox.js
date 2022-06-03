import { ref, computed } from "vue";
const useLightbox = () => {
    const items = ref([]);
    const active = ref(0);
    const length = computed(() => items.value.length);

    return {
        items,
        active,
        decrement: () =>
            (active.value =
                active.value > 0 ? active.value - 1 : length.value - 1),
        increment: () =>
            (active.value =
                active.value < length.value - 1 ? active.value + 1 : 0),
    };
};

export default useLightbox;

<template>
    <img
        v-if="type === 'image'"
        class="h-screen inline-block"
        :src="source"
        :alt="caption"
        :class="lightboxItemClass"
    />
    <video
        v-else-if="type === 'video'"
        :src="source"
        controls=""
        playsinline=""
        width="1920"
        height="1080"
        :style="{
            height: blockHeight + 'px',
            width: blockWidth + 'px',
        }"
        :class="lightboxItemClass"
    ></video>
    <iframe
        v-else
        :src="source"
        width="1920"
        height="1080"
        frameborder="0"
        allow=""
        allowfullscreen=""
        :style="{
            height: blockHeight + 'px',
            width: blockWidth + 'px',
        }"
        :class="lightboxItemClass"
    ></iframe>
</template>

<script>
import {
    defineComponent,
    reactive,
    ref,
    computed,
    onUpdated,
    nextTick,
    inject,
    getCurrentInstance,
    watchEffect,
} from "vue";

export default defineComponent({
    name: "CsLightboxModal",
    props: {
        source: {
            type: String,
            default: "#",
        },
        caption: {
            type: String,
        },
        type: {
            type: String,
            default: "image",
            validator: function (value) {
                return ["image", "video", "iframe"].indexOf(value) !== -1;
            },
        },
    },
    setup(props) {
        props = reactive(props);
        const instance = getCurrentInstance();
        const { itemsModal, activeModal } = inject("lightboxGroup", {
            itemsModal: [],
        });
        const index = computed(() =>
            itemsModal.value.findIndex((target) => target.uid === instance.uid)
        );
        const isActive = computed(() => index.value === activeModal.value);

        const blockWidth = ref(0);
        const blockHeight = ref(0);

        const setWidthHeight = async () => {
            await nextTick;
            let selfWidth = window.innerWidth;
            let selfHeight = window.innerHeight;
            let ratioHeight = Math.ceil((selfWidth * 9) / 16);
            let ratioWidth = Math.ceil((selfHeight * 16) / 9);

            if (ratioHeight < selfHeight) {
                blockWidth.value = isActive.value ? selfWidth : 0;
                blockHeight.value = ratioHeight;
            } else {
                blockWidth.value = isActive.value ? ratioWidth : 0;
                blockHeight.value = selfHeight;
            }
        };

        onUpdated(() => {
            setWidthHeight();
        });

        watchEffect(() => {
            if (index.value === -1) {
                itemsModal.value.push(instance);
            }
        });

        return {
            blockWidth,
            blockHeight,
            lightboxItemClass: computed(() => ({
                "inline-block transition duration-1000 ease-out": true,
                "w-0 opacity-0": !isActive.value,
                "opacity-100": isActive.value,
            })),
        };
    },
});
</script>

<template>
    <div class="flex pt-2">
        <div class="flex-none">
            <img :src="image" alt="" class="w-24 h-16 mr-2" />
        </div>
        <div>
            <h6>{{ title }}</h6>
            <span class="meta-date">{{ date }}</span>
        </div>
    </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
    name: "CsSearchResultItem",
    props: {
        title: {
            type: String,
            default: null,
        },
        image: {
            type: String,
            default: null,
        },
        date: {
            type: String,
            default: false,
        },
    },
});
</script>

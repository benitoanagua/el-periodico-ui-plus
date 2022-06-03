<template>
  <div class="md:max-w-md">
    <cs-tab-header v-model="active">
      <cs-tab-header-item v-for="(title, index) in titles" :key="index">
        {{ title.caption }}
      </cs-tab-header-item>
    </cs-tab-header>
    <cs-tab-body v-model="active">
      <cs-tab-body-item v-for="({ tab }, index) in lists" :key="index">
        <cs-list
          :class="[
            'px-1 shadow-md bg-primary-100',
            'divide-y divide-primary-300',
          ]"
          :posts="tab.value"
          showMedia="none"
          :typeList="type"
          :columns="1"
        />
      </cs-tab-body-item>
    </cs-tab-body>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import CsTabHeader from "@/components/Tabs/TabHeader.vue";
import CsTabHeaderItem from "@/components/Tabs/TabHeaderItem.vue";
import CsTabBody from "@/components/Tabs/TabBody.vue";
import CsTabBodyItem from "@/components/Tabs/TabBodyItem.vue";
import CsList from "@/components/List/Base.vue";

export default defineComponent({
  name: "CsTabs",
  components: {
    CsTabHeader,
    CsTabHeaderItem,
    CsTabBody,
    CsTabBodyItem,
    CsList,
  },
  props: {
    theme: {
      type: String,
      default: "primary",
    },
    titles: {
      type: Object,
      default: null,
    },
    lists: {
      type: Object,
      default: null,
    },
    type: {
      type: String,
      default: "default",
      validator: function (value) {
        return ["default", "decimal", "none"].indexOf(value) !== -1;
      },
    },
  },
  setup() {
    const active = ref(0);
    return { active };
  },
});
</script>

<template>
  <transition name="fade" mode="out-in">
    <component :is="icon" v-once :name="icon" v-bind="$attrs" />
  </transition>
</template>
      
<script lang="ts">
import { defineComponent } from 'vue';
import { PieChartOutlined } from '@ant-design/icons-vue'

export default defineComponent({
  props: {
    icon: {
      type: String,
      required: true,
    },
  },
  components: {
    PieChartOutlined
  }
});
</script>
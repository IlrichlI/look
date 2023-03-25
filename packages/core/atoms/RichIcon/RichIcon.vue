<template>
  <component :is="icon" v-once :name="icon" v-bind="$attrs" />
</template>
      
<script lang="ts">
import { defineComponent } from 'vue';
import { WarningOutlined, DashboardOutlined, UsergroupAddOutlined } from '@ant-design/icons-vue'

export default defineComponent({
  props: {
    icon: {
      type: String,
      required: true,
    },
  },
  components: {
    WarningOutlined,
    DashboardOutlined,
    UsergroupAddOutlined,
  }
});
</script>
<template>
  <Table
    :data-source="dataSource.length ? dataSource : ((data as any)?.data as any[]) || []"
    :columns="columns"
  />
</template>

<script setup lang="ts">
import { Table } from 'ant-design-vue'
import { ColumnsType } from 'ant-design-vue/lib/table';
import { PropType, onMounted } from 'vue';
import { useService } from '../../http'

const props = defineProps({
  dataSource: {
    type: Array as PropType<any[]>,
    default: () => []
  },
  columns: {
    type: Array as PropType<ColumnsType>,
    default: () => []
  },
  service: {
    type: Object as PropType<{ serviceName: string, actionName: string }>,
    default: () => null
  },
})

const { mutate, data } = useService({ ...props.service })


onMounted(() => {
  mutate()
})


</script>
<template>
  <div>
    <div class="flex justify-between items-center py-4">
      <div>
        <div v-if="title" class="flex items-center">
          <RichTypography type="TypographyTitle" :level="5" :text-i18n="i18nPrefix + '.' + title" />
          <RichDivider />
          <RichTypography type="TypographyText" :text="total + ''" />
        </div>
        <div v-if="filter">filter</div>
      </div>
      <div>
        <slot name="table-header" />
      </div>
    </div>
    <Table
      :data-source="dataSource?.length ? dataSource : ((data as any)?.data as any[]) || []"
      :columns="tableColumns"
      :pagination="{
        onChange: onPagination,
        pageSize: size,
        total: total,
        position: ['bottomCenter'],
        showSizeChanger: false
      }"
      :loading="(loading as any as boolean)"
    >
      <template #bodyCell="{ column, text, record }">
        <slot name="bodyCell" :column="column" :text="text" :record="record" />
      </template>
    </Table>
  </div>
</template>

<script setup lang="ts">
import { Table } from 'ant-design-vue'
import { ColumnsType } from 'ant-design-vue/lib/table'
import { PropType, onMounted, ref, watch } from 'vue'
import { useService } from '../../http'
import { useTranslate } from '../../utils'
import { RichTypography, RichDivider } from '../../core'

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
    type: Object as PropType<{ serviceName: string; actionName: string }>,
    default: () => null
  },
  i18nPrefix: {
    type: String,
    default: () => ''
  },
  title: {
    type: String,
    default: () => ''
  },
  filter: {
    type: Boolean,
    default: () => false
  },
  refresh: {
    type: Boolean,
    default: () => false
  }
})

const page = ref(1)
const size = ref(8)
const total = ref(1)

const { translate } = useTranslate()

const tableColumns: ColumnsType = props.columns?.map(({ title = '', ...rest }) => ({
  title: translate(props.i18nPrefix && title ? props.i18nPrefix + '.' + title : (title as string)),
  ...rest
}))

const onPagination = (pageNumber: number) => {
  page.value = pageNumber
  loadTable()
}

const { mutate, data, loading } = useService({ ...props.service })

const loadTable = async () => {
  const params = new URLSearchParams()
  params.append('page', `${page.value}`)
  params.append('size', `${size.value}`)
  await mutate({ params })
  total.value = (data.value as any)?.meta.total
}

onMounted(loadTable)

watch(() => props.refresh, loadTable)
</script>

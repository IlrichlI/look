<template>
  <RichTable :columns="columns" :service="service" />
</template>

<script setup lang="ts">
import { RichTable } from '@rich/table'

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'created_at',
    dataIndex: 'created_at',
    key: 'created_at',
  }
]

const service = { serviceName: 'rolesService', actionName: 'roles' }

</script>
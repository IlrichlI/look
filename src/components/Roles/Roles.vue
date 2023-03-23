<template>
  <GeneralTable :columns="columns" :service="service" />
</template>

<script setup lang="ts">
import { GeneralTable } from '@rich/table'

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
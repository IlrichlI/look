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
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
  },
]

const service = { serviceName: 'usersService', actionName: 'users' }

</script>
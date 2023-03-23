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
  },
  {
    title: 'status',
    dataIndex: 'status',
    key: 'status',
  },
  {
    title: 'url',
    dataIndex: 'url',
    key: 'url',
  },
  {
    title: 'user',
    dataIndex: 'user',
    key: 'user',
  },
  {
    title: 'userAgent',
    dataIndex: 'userAgent',
    key: 'userAgent',
  },
  {
    title: 'ip',
    dataIndex: 'ip',
    key: 'ip',
  },
  {
    title: 'method',
    dataIndex: 'method',
    key: 'method',
  },
]
      
const service = { serviceName: 'requestLogService', actionName: 'search' }
      
</script>
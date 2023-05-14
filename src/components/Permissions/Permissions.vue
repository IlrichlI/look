<template>
  <RichTable :columns="columns" :service="service" i18n-prefix="permission" title="permission">
    <template #table-header>
      <RichButton
        text-i18n="permission.create-permission"
        ghost
        @on-click="showCreatePermissionModal"
      />
    </template>
    <template #bodyCell="{ column, record }">
      <template v-if="column?.dataIndex === 'created_at'"
        >{{ new Date(record?.created_at).toLocaleTimeString('fa-IR') }} -
        {{ new Date(record?.created_at).toLocaleDateString('fa-IR') }}</template
      >
    </template>
  </RichTable>

  <CreatePermissionModal />
</template>

<script setup lang="ts">
import { RichButton, useModal } from '@rich/core'
import { RichTable } from '@rich/table'
import CreatePermissionModal from './modals/CreatePermissionModal.vue'

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name'
  },
  {
    title: 'pattern',
    dataIndex: 'pattern',
    key: 'pattern'
  },
  {
    title: 'created_at',
    dataIndex: 'created_at',
    key: 'created_at'
  }
]

const service = { serviceName: 'permissionsService', actionName: 'search' }

const { openModal } = useModal()

const showCreatePermissionModal = () => {
  openModal('create-permission')
}
</script>

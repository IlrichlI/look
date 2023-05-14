<template>
  <RichTable
    :columns="columns"
    :service="service"
    i18n-prefix="users"
    title="user"
    :refresh="refresh"
  >
    <template #table-header>
      <RichButton text-i18n="users.add" ghost @on-click="showAddUserModal" />
    </template>
    <template #bodyCell="{ column, record }">
      <template v-if="column?.dataIndex === 'action'">
        <RichButton type="text" text-i18n="users.edit" @on-click="showEditUserModal(record)" />
      </template>
    </template>
  </RichTable>

  <AddUsersModal @refresh="refreshTable" />
  <EditUsersModal @refresh="refreshTable" />
</template>

<script setup lang="ts">
import { RichButton, useModal } from '@rich/core'
import { RichTable } from '@rich/table'
import AddUsersModal from './modals/AddUsersModal.vue'
import EditUsersModal from './modals/EditUsersModal.vue'
import { ref } from 'vue'

const refresh = ref<boolean>(false)
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name'
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email'
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status'
  },
  {
    title: '',
    dataIndex: 'action',
    key: 'action'
  }
]

const service = { serviceName: 'usersService', actionName: 'users' }

const { openModal } = useModal()

const showAddUserModal = () => {
  openModal('add-user')
}

const showEditUserModal = (payload: object) => {
  openModal('edit-user', payload)
}

const refreshTable = () => {
  refresh.value = !refresh.value
}
</script>

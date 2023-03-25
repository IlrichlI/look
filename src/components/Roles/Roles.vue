<template>
  <RichTable :columns="columns" :service="service" i18n-prefix="roles" :refresh="refresh">
    <template #table-header>
      <RichButton text-i18n="roles.permission" ghost class="mx-4" @on-click="goToPermissions" />
      <RichButton text-i18n="roles.create-role" ghost @on-click="showCreatRoleModal"/>
    </template>
    <template #bodyCell="{ column, record }">
      <template v-if="column.dataIndex === 'created_at'">{{ new Date(record.created_at).toLocaleTimeString('fa-IR') }} - {{ new Date(record.created_at).toLocaleDateString('fa-IR') }}</template>
      <template v-if="column.dataIndex === 'action'">
        
      <RichButton 
        text-i18n="roles.edit" 
        type="text" 
        class="mx-4"
        @on-click="showEditRoleModal(record.id, record.name)"
      />
      <RichButton 
        text-i18n="roles.delete" 
        type="text" 
        @on-click="showDeleteRoleModal(record.id, record.name)"
      />
      </template>
    </template>
  </RichTable>

  <CreateRoleModal @refersh="toggleRefresh"/>
  <EditRoleModal @refersh="toggleRefresh"/>
  <DeleteRoleModal @refersh="toggleRefresh"/>
</template>

<script setup lang="ts">
import { RichButton, useModal } from '@rich/core';
import { RichTable } from '@rich/table'
import { useRouter } from 'vue-router';
import CreateRoleModal from './modals/CreateRoleModal.vue';
import EditRoleModal from './modals/EditRoleModal.vue';
import DeleteRoleModal from './modals/DeleteRoleModal.vue';
import { ref } from 'vue';

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
    title: '',
    dataIndex: 'action',
    key: 'action',
  }
]
const refresh = ref(false)

const service = { serviceName: 'rolesService', actionName: 'roles' }

const router = useRouter()
const { openModal } = useModal()

const goToPermissions = () => {
  router.push({ name: 'permissions' })
}

const showCreatRoleModal = () => {
  openModal('create-role')
}

const showEditRoleModal = (id: string, name: string) => {
  openModal('edit-role', { id, name })
}

const showDeleteRoleModal = (id: string, name: string) => {
  openModal('delete-role', { id, name })
}

const toggleRefresh = () => {
  refresh.value = !refresh.value
}

</script>
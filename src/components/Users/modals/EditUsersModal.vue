<template>
  <RichModal
    modal-id="edit-user"
    title="users.edit"
  >
    <FormProvider @submit="updateUser" :form-model="formModel">
      <InputField :defaut-value="formModel.name" label-i18n="users.Name" name="name" :rules="[{ required: true }]" />
      <InputField :defaut-value="formModel.email" label-i18n="users.Email" name="email" :rules="[{ required: true }]" />
      <InputField :defaut-value="formModel.password" label-i18n="users.password" name="password" :rules="[{ required: true }]" />
      <CheckboxField v-for="r in ((roles as any)?.data || [])" :key="r" :name="r.id" :label-i18n="r.name" />
      <div class="flex justify-end items-center">
        <RichButton text-i18n="users.cancel" type="text" @on-click="closeModal('edit-user')" />
        <RichButton text-i18n="users.save" ghost html-type="submit" :loading="(loading as any as boolean)" />
      </div>
    </FormProvider>
  </RichModal>
</template>

<script setup lang="ts">
import { RichButton, RichModal, useModal } from '@rich/core';
import { CheckboxField, FormProvider, InputField } from '@rich/form';
import { useService } from '@rich/http';
import { computed, onMounted } from 'vue';

const emit = defineEmits(['refresh'])
const { closeModal, modals } = useModal()
const { mutate, loading } = useService({ serviceName: "usersService", actionName: "update" })
const { mutate: loadRoles, data: roles } = useService({ serviceName: "usersService", actionName: "roles" })


const formModel = computed(() => {
  const { email, name, password = "" } = modals.value['edit-user'].payload as any
  return {
    email, 
    name, 
    password
  }
})

const updateUser = async (data: Record<string, string | boolean>) => {
  const { email, password, name, ...roleIds } = data
  const roles = Object.keys(roleIds).map(id => ({ id: +id }))
  const payload = { email, password, name, roles }
  await mutate({ id: (modals.value['edit-user'].payload as any).id, payload })
  emit('refresh')
  closeModal('edit-user')
}

onMounted(async () => {
  await loadRoles({ params: { all: true } })
})

</script>
<template>
  <RichModal
    modal-id="edit-user"
    title="users.edit"
  >
    <FormProvider @submit="updateUser" :form-model="formModel">
      <InputField :defaut-value="formModel.name" label-i18n="users.Name" name="name" :rules="[{ required: true }]" />
      <InputField :defaut-value="formModel.email" label-i18n="users.Email" name="email" :rules="[{ required: true }]" />
      <InputField :defaut-value="formModel.password" label-i18n="users.password" name="password" :rules="[{ required: true }]" />
      <div class="flex justify-end items-center">
        <RichButton text-i18n="users.cancel" type="text" @on-click="closeModal('edit-user')" />
        <RichButton text-i18n="users.save" ghost html-type="submit" :loading="(loading as any as boolean)" />
      </div>
    </FormProvider>
  </RichModal>
</template>

<script setup lang="ts">
import { RichButton, RichModal, useModal } from '@rich/core';
import { FormProvider, InputField } from '@rich/form';
import { useService } from '@rich/http';
import { computed } from 'vue';

const emit = defineEmits(['refresh'])
const { closeModal, modals } = useModal()
const { mutate, loading } = useService({ serviceName: "usersService", actionName: "update" })

const formModel = computed(() => {
  const { email, name, password = "" } = modals.value['edit-user'].payload as any
  return {
    email, 
    name, 
    password
  }
})

const updateUser = async (payload: { email: string, password: string, name: string }) => {
  await mutate({ id: (modals.value['edit-user'].payload as any).id, payload })
  emit('refresh')
  closeModal('edit-user')
}

</script>
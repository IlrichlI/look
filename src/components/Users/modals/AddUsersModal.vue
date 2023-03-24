<template>
  <RichModal
    modal-id="add-user"
    title="users.add"
  >
    <FormProvider @submit="createUser">
      <InputField label-i18n="users.Name" name="name" :rules="[{ required: true }]" />
      <InputField label-i18n="users.Email" name="email" :rules="[{ required: true }]" />
      <InputField label-i18n="users.password" name="password" :rules="[{ required: true }]" />
      <div class="flex justify-end items-center">
        <RichButton text-i18n="users.cancel" type="text" @on-click="closeModal('add-user')" />
        <RichButton text-i18n="users.save" ghost html-type="submit" :loading="(loading as any as boolean)" />
      </div>
    </FormProvider>
  </RichModal>
</template>

<script setup lang="ts">
import { RichButton, RichModal, useModal } from '@rich/core';
import { FormProvider, InputField } from '@rich/form';
import { useService } from '@rich/http';

const emit = defineEmits(['refresh'])
const { closeModal } = useModal()
const { mutate, loading } = useService({ serviceName: "usersService", actionName: "register" })

const createUser = async (data: { email: string, password: string, name: string }) => {
  await mutate(data)
  emit('refresh')
  closeModal('add-user')
}

</script>
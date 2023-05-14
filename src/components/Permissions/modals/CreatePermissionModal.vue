<template>
  <RichModal modal-id="create-permission" title="permission.create-permission">
    <FormProvider @submit="createPermission">
      <template v-for="route in ((data as any)?.routes as any[]) || []" :key="route.pattern">
        <CheckboxField
          :label-i18n="`permission.${route.pattern.replace(/[.]/g, '-')}`"
          :name="route.pattern"
        />
      </template>
      <div class="flex justify-end items-center">
        <RichButton
          text-i18n="permission.cancel"
          type="text"
          @on-click="closeModal('create-permission')"
        />
        <RichButton text-i18n="permission.save" ghost html-type="submit" />
      </div>
    </FormProvider>
  </RichModal>
</template>

<script setup lang="ts">
import { RichButton, RichModal, useModal } from '@rich/core'
import { CheckboxField, FormProvider } from '@rich/form'
import { useService } from '@rich/http'
import { onMounted } from 'vue'

const { mutate, data } = useService({ serviceName: 'rolesService', actionName: 'allRoutes' })
const { closeModal } = useModal()

onMounted(mutate)

// eslint-disable-next-line @typescript-eslint/no-empty-function,@typescript-eslint/no-unused-vars
const createPermission = (_data: any) => {}
</script>

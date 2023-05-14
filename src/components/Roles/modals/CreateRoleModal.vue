<template>
  <RichModal modal-id="create-role" title="roles.create-role">
    <FormProvider @submit="createPermission">
      <InputField label-i18n="roles.Name" name="roleName" />
      <template
        v-for="route in ((dataAllRoutes as any)?.routes as any[]) || []"
        :key="route.pattern"
      >
        <CheckboxField
          :label-i18n="`permission.${route.pattern.replace(/[.]/g, '-')}`"
          :name="route.pattern"
        />
      </template>
      <div class="flex justify-end items-center">
        <RichButton text-i18n="roles.cancel" type="text" @on-click="closeModal('create-role')" />
        <RichButton text-i18n="roles.save" ghost html-type="submit" :loading="loadingSaveButton" />
      </div>
    </FormProvider>
  </RichModal>
</template>

<script setup lang="ts">
import { RichButton, RichModal, useModal } from '@rich/core'
import { CheckboxField, FormProvider, InputField } from '@rich/form'
import { useService } from '@rich/http'
import { computed, onMounted } from 'vue'

const emit = defineEmits(['refresh'])

const { mutate: mutateAllRoutes, data: dataAllRoutes } = useService({
  serviceName: 'rolesService',
  actionName: 'allRoutes'
})
const {
  mutate: mutateCreateRole,
  data: dataCreateRole,
  loading: loadingCreateRole
} = useService({ serviceName: 'rolesService', actionName: 'create' })
const { mutate: mutateGeneratePermission, loading: loadingGenerateRoles } = useService({
  serviceName: 'rolesService',
  actionName: 'generate'
})
const { closeModal } = useModal()

const loadingSaveButton = computed(() => loadingCreateRole.value || loadingGenerateRoles.value)

onMounted(mutateAllRoutes)

const createPermission = async ({ roleName: name, ...rest }: any) => {
  const permissions = Object.keys(rest).map(
    (p) => (dataAllRoutes.value as { routes: any[] }).routes.find((r) => r.pattern === p).path
  )

  await mutateCreateRole({ name })

  await mutateGeneratePermission({
    role_id: (dataCreateRole.value as any).id,
    permissions
  })

  emit('refresh')

  closeModal('create-role')
}
</script>

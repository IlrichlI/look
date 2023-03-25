<template>
  <RichModal modal-id="edit-role" title="permission.create-permission">
    <FormProvider @submit="createPermission">
      <InputField label-i18n="permission.roleName" name="roleName" :defaut-value="((modals as any)['edit-role']?.payload as any).name" />
      <template v-for="route in ((dataAllRoutes as any)?.routes as any[]) || []" :key="route.pattern">
        <CheckboxField :label-i18n="`permission.${route.pattern.replace(/[.]/g, '-')}`" :name="route.pattern"/>
      </template>
      <div class="flex justify-end items-center">
          <RichButton text-i18n="permission.cancel" type="text" @on-click="closeModal('edit-role')" />
          <RichButton text-i18n="permission.save" ghost  html-type="submit" :loading="loadingSaveButton"/>
        </div>
    </FormProvider>
  </RichModal>
</template>

<script setup lang="ts">
import { RichButton, RichModal, useModal } from '@rich/core';
import { CheckboxField, FormProvider, InputField } from '@rich/form';
import { useService } from '@rich/http';
import { computed, onMounted } from 'vue';

const emit = defineEmits(['refersh'])

const { mutate: mutateAllRoutes, data: dataAllRoutes } = useService({ serviceName: 'rolesService', actionName: 'allRoutes' })
const { mutate: mutateEditRole, loading: loadineEditRole } = useService({ serviceName: 'rolesService', actionName: 'update' })
const { mutate: mutateGeneratePermission, loading: loadingGeneratePermission } = useService({ serviceName: 'rolesService', actionName: 'generate' })
const { closeModal, modals } = useModal()

const loadingSaveButton = computed(() => loadineEditRole.value || loadingGeneratePermission.value)

onMounted(mutateAllRoutes)

const createPermission = async ({ roleName: name, ...rest }: any) => {
  
  const permissions = Object.keys(rest).map(p => (dataAllRoutes.value as { routes: any[] }).routes.find(r => r.pattern === p).path)

  await mutateEditRole({ id: (modals.value['edit-role'].payload as any).id, payload: { name }})

  await mutateGeneratePermission({
    role_id: (modals.value['edit-role'].payload as any).id,
    permissions
  })

  emit('refersh')

  closeModal('edit-role')

}

</script>
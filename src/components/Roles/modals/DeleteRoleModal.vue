<template>
  <RichModal modal-id="delete-role" title="roles.delete">
    <RichTypography text-i18n="roles.delete-message" />
    <div class="flex justify-end items-center">
      <RichButton text-i18n="roles.cancel" type="text" @on-click="closeModal('delete-role')" />
      <RichButton
        text-i18n="roles.save"
        ghost
        :loading="(loading as any as boolean)"
        @on-click="deleteRole"
      />
    </div>
  </RichModal>
</template>

<script setup lang="ts">
import { RichButton, RichModal, RichTypography, useModal } from '@rich/core'
import { useService } from '@rich/http'

const emit = defineEmits(['refresh'])

const { mutate, loading } = useService({ serviceName: 'rolesService', actionName: 'delete' })

const { closeModal, modals } = useModal()

const deleteRole = async () => {
  await mutate((modals.value['delete-role'].payload as any).id)

  emit('refresh')

  closeModal('delete-role')
}
</script>

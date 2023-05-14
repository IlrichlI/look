<template>
  <Modal
    :title="translate(title as string)"
    :footer="false"
    v-model:visible="visible"
    @cancel="closeModal(modalId)"
  >
    <slot v-if="visible" />
    <template #footer>
      <slot name="footer" />
    </template>
  </Modal>
</template>

<script setup lang="ts">
import { Modal } from 'ant-design-vue'
import { computed, onMounted } from 'vue'
import { useModal } from './index'
import { useTranslate } from '@rich/utils'

const props = defineProps({
  modalId: {
    type: String,
    required: true
  },
  title: {
    type: String,
    default: () => ''
  }
})

const visible = computed(() => modals.value[props.modalId]?.open || false)
const { modals, registerModal, closeModal } = useModal()

const { translate } = useTranslate()

onMounted(() => {
  registerModal(props.modalId as string)
})
</script>

<template>
  <slot />
</template>

<script setup lang="ts">
import { provide, ref } from 'vue';

const modals = ref<Record<string, { open: boolean, payload: object }>>({})

const openModal = (modalId: string, payload?: object) => {
  modals.value[modalId] = { open: true, payload: payload || {}  }
}

const closeModal = (modalId: string) => {
  modals.value[modalId] = { open: false, payload: {} }
}

const registerModal = (modalId: string) => {
  modals.value[modalId] = { open: false, payload: {} }
}

provide('rich-modal', { openModal, closeModal, registerModal, modals })

</script>
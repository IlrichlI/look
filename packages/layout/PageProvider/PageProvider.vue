<template>
  <HttpServiceProvider :services="services" :services-name="servicesName">
    <slot />
  </HttpServiceProvider>
</template>

<script setup lang="ts">
import { HttpServiceProvider } from '../../http'
import { useTranslation } from 'i18next-vue'
import { provide } from 'vue'
import { addTranslationSchema } from '@rich/utils'
import type { TServices } from '../../http'
import type { PropType } from 'vue'

const props = defineProps({
  services: {
    type: Array as PropType<TServices | Array<TServices>>,
    default: () => null
  },
  servicesName: {
    type: String,
    default: () => 'service'
  },
  messages: {
    type: Object as PropType<{ fa?: object; en?: object }>,
    default: () => ({ fa: {}, en: {} })
  }
})

if (props.messages.fa) {
  addTranslationSchema('fa', props.messages.fa)
}
if (props.messages.en) {
  addTranslationSchema('en', props.messages.en)
}

const { t } = useTranslation()
provide('translate', t)
</script>

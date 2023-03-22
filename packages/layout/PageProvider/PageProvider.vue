<template>
  <HttpServiceProvider :services="services" :services-name="servicesName">
    <slot />
  </HttpServiceProvider>
</template>

<script setup lang="ts">
import { HttpServiceProvider } from '../../http'
import { useI18n } from 'vue-i18n';
import { provide } from 'vue';
import type { TServices } from '../../http'
import type { LocaleMessageType, VueMessageType } from 'vue-i18n';
import type { PropType } from 'vue';

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
    type: Object as PropType<LocaleMessageType<VueMessageType>>,
    default: () => ({ fa: {}, en: {} })
  }
})

const { t } = useI18n({ messages: props.messages as {} })
      
provide('translate', t)
      
</script>

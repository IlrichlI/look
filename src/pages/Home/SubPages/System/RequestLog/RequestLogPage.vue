<template>
  <PageProvider :services="[requestLogService]" services-name="requestLogService" :messages="{ fa: jsonFa }">
    <RequestLog />
  </PageProvider>
</template>

<script setup lang="ts">
import { PageProvider } from '@rich/layout'
import { requestLogService } from './requestLogService'
import jsonFa from './i18n/fa.json'
import RequestLog from '@/components/RequestLog/RequestLog.vue';
</script>


<template>
  <PageProvider
    :services="[dashboardService]"
    services-name="dashboardService"
    :messages="{ fa: jsonFa }"
  >
    <Dashboard />
  </PageProvider>
</template>

<script setup lang="ts">
import { PageProvider } from '@rich/layout'
import { dashboardService } from './dashboardService'
import jsonFa from './i18n/fa.json'
import Dashboard from '@/components/dashboard/Dashboard.vue'
</script>

<template>
  <PageProvider :services="[rolesService]" services-name="rolesService" :messages="{ fa: jsonFa }">
    <Roles />
  </PageProvider>
</template>

<script setup lang="ts">
import { PageProvider } from '@rich/layout'
import { rolesService } from './rolesService'
import jsonFa from './i18n/fa.json'
import Roles from '@/components/Roles/Roles.vue';
</script>


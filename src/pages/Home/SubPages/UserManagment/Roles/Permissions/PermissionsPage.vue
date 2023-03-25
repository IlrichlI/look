<template>
  <PageProvider :services="[permissionsService]" services-name="permissionsService" :messages="{ fa: jsonFa }">
    <Permissions />
  </PageProvider>
</template>

<script setup lang="ts">
import { PageProvider } from '@rich/layout'
import { permissionsService } from './permissionService'
import jsonFa from './i18n/fa.json'
import Permissions from '@/components/Permissions/Permissions.vue';
</script>


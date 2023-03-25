<template>
  <PageProvider :services="[rolesService, permissionsService]" services-name="rolesService" :messages="{ fa: jsonFa }">
    <RouterView v-if="route.fullPath.includes('/permissions')" />
    <Roles v-else />
  </PageProvider>
</template>

<script setup lang="ts">
import { PageProvider } from '@rich/layout'
import { rolesService } from './rolesService'
import jsonFa from './i18n/fa.json'
import Roles from '@/components/Roles/Roles.vue';
import { useRoute } from 'vue-router';
import { permissionsService } from './Permissions/permissionService';

const route = useRoute()

</script>


<template>
  <PageProvider
    :services="[usersService, loginService]"
    services-name="usersService"
    :messages="{ fa: jsonFa }"
  >
    <Users />
  </PageProvider>
</template>

<script setup lang="ts">
import { PageProvider } from '@rich/layout'
import { usersService } from './usersService'
import jsonFa from './i18n/fa.json'
import Users from '@/components/Users/Users.vue'
import { loginService } from '@/pages/Login/loginService'
</script>

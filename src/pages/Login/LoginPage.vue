<template>
  <PageProvider :services="[loginService]" services-name="loginService" :messages="{ fa: jsonFa }">
    <loginForm />
  </PageProvider>
</template>

<script setup lang="ts">
import { PageProvider } from '@rich/layout'
import { loginService } from './loginService'
import loginForm from '@/components/login/loginForm.vue';
import jsonFa from './i18n/fa.json'
</script>


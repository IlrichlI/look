<template>
  <PageProvider :services="[homeService]" services-name="homeService" :messages="{ fa: jsonFa }">
    <Layout :routes="routes"/>
  </PageProvider>
</template>

<script setup lang="ts">
import { PageProvider, Layout } from '@rich/layout'
import { homeService } from './homeService'
import jsonFa from './i18n/fa.json'
import { routes } from '@/router';
</script>

